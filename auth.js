/*
 * RST Promo Finder — Authentication & User Management
 * ------------------------------------------------------------------
 * ทำงานร่วมกับ index.html เดิม:
 *   - window.RST_AUTH_CONFIG = { enabled, apiUrl, sessionKey }  (ตั้งไว้ก่อน <script src="auth.js">)
 *   - <div id="rstAuthRoot"> ถูกสร้าง/ลบโดยไฟล์นี้เมื่อยังไม่ได้ login
 *   - <button id="rstUserStatusBar"> แสดงสถานะผู้ใช้บน topbar (มีอยู่แล้วใน index.html)
 *   - <div id="identityModalBg"> + <div id="rstIdentityDetailBox"> + <button id="rstOpenAddMemberBtn">
 *     ใช้แสดงรายละเอียดบัญชี/ปุ่มเพิ่มสมาชิก/ปุ่ม logout (เปิดผ่าน openIdentityModal() ที่มีอยู่แล้วในหน้า)
 *   - เมื่อ login สำเร็จ (หรือมี session ค้างอยู่ตอนโหลดหน้า) จะยิง CustomEvent 'rst:authenticated'
 *     (detail = session) ให้สคริปต์หลักของแอป sync เข้ากับตัวแปร userName/userRole เดิม
 *
 * บทบาทผู้ใช้ (3 ระดับ ตามสเปก CRM):
 *   admin   — สิทธิ์สูงสุด: เพิ่ม/จัดการ/เปลี่ยน role/ลบสมาชิกได้ทุกคน, ตั้งค่า GAS, Export CRM
 *   manager — เพิ่มสมาชิกได้เฉพาะระดับ 'sales', ดู Dashboard/Export CRM ได้
 *   sales   — ใช้งานระบบคำนวณโปร/บันทึกเคส, เห็นประวัติเฉพาะเคสของตัวเอง, ไม่มีสิทธิ์เพิ่มสมาชิก/Export CRM
 *
 * โหมด Offline / Mock Fallback:
 *   ถ้าเรียก RST_AUTH_CONFIG.apiUrl ไม่ได้ (เน็ตหลุด/ยังไม่ตั้งค่า/เซิร์ฟเวอร์ตอบผิดปกติ) ระบบจะ fallback
 *   ไปใช้บัญชีทดสอบที่เก็บใน localStorage แทนโดยอัตโนมัติ เพื่อให้เปิดทดสอบ UI ได้ทันทีแม้ backend ยังไม่พร้อม
 *   บัญชีทดสอบเริ่มต้น (เห็น hint ในกล่องข้อความตอน login ถ้ายังไม่ได้ตั้งค่า apiUrl):
 *     admin   / admin1234
 *     manager / manager1234
 *     sales   / sales1234
 *   หมายเหตุ: การ hash รหัสผ่านฝั่ง mock นี้เป็นแค่ obfuscation ธรรมดา ไม่ใช่การเข้ารหัสที่ปลอดภัย
 *   ใช้สำหรับทดสอบ UI แบบออฟไลน์เท่านั้น ระบบจริงต้องพึ่ง backend (RST_AUTH_CONFIG.apiUrl) เสมอ
 */
(function () {
  'use strict';

  const config = window.RST_AUTH_CONFIG || { enabled: false, apiUrl: '', sessionKey: 'rst_auth_session' };
  const SESSION_KEY = config.sessionKey || 'rst_auth_session';
  const MOCK_DB_KEY = 'rst_auth_mock_users_v1';

  // ชื่อ action ที่ยิงไปยัง RST_AUTH_CONFIG.apiUrl แบบ POST เดียว { action, ...payload }
  // (ตรงกับรูปแบบเดิมของ auth.js ที่ตั้งค่า apiUrl ไว้แล้ว) — ถ้า backend จริงใช้คนละชื่อ action
  // หรือแยก path ต่อ endpoint ให้แก้ตรงนี้ที่เดียวพอ
  const ACTIONS = {
    login: 'login',
    register: 'register',
    listUsers: 'listUsers',
    updateUser: 'updateUser',
    deleteUser: 'deleteUser'
  };

  const ROLES = ['admin', 'manager', 'sales'];
  const ROLE_LABEL = { admin: 'แอดมิน', manager: 'ผู้จัดการ', sales: 'พนักงานขาย' };
  const ROLE_ICON = { admin: '🛡️', manager: '👔', sales: '🧑‍🌾' };

  let session = readSession();

  /* ===================== session storage ===================== */
  function readSession() {
    try {
      const raw = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
      if (!raw) return null;
      if (raw.expiresAt && Date.now() > raw.expiresAt) return null;
      // กันข้อมูลเก่า/ผิดรูปแบบใน localStorage (เช่น session ค้างจากเวอร์ชันก่อนหน้า หรือค่าที่เพี้ยนไปโดยไม่ตั้งใจ)
      // ทำให้เข้าใช้งานได้โดยไม่ต้อง login จริง — ต้องมี role และ (id หรือ username) ครบก่อนถึงจะถือว่าเป็น session ที่ใช้ได้
      if (!raw.role) return null;
      if (!raw.id && !raw.username) return null;
      return raw;
    } catch (e) { return null; }
  }
  function writeSession(value) {
    session = value;
    try { localStorage.setItem(SESSION_KEY, JSON.stringify(value)); } catch (e) {}
  }
  function clearSession() {
    session = null;
    try { localStorage.removeItem(SESSION_KEY); } catch (e) {}
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (ch) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]);
    });
  }

  // แปลงค่า role ที่หลากหลาย (ชื่อ role รุ่นเก่า/ภาษาไทย/ชื่อสามัญที่ backend อื่นๆ นิยมใช้) ให้เป็น 'admin'|'manager'|'sales'
  // คืนค่า null ถ้าไม่รู้จักเลย เพื่อให้ผู้เรียกตัดสินใจเองว่าจะ fallback เป็นอะไร (ดู extractRole())
  function normalizeRole(role) {
    const r = String(role == null ? '' : role).trim().toLowerCase();
    if (!r) return null;
    if (['admin', 'administrator', 'superadmin', 'super_admin', 'super-admin', 'owner', 'root', 'แอดมิน', 'ผู้ดูแลระบบ'].indexOf(r) >= 0) return 'admin';
    if (['manager', 'supervisor', 'finance', 'branch_manager', 'ผู้จัดการ', 'หัวหน้า'].indexOf(r) >= 0) return 'manager';
    if (['sales', 'staff', 'employee', 'เซลล์', 'พนักงานขาย', 'พนักงาน'].indexOf(r) >= 0) return 'sales';
    return ROLES.indexOf(r) >= 0 ? r : null;
  }
  // ดึงค่า role ดิบจาก response ของ backend โดยลองหลายชื่อ field ที่พบได้บ่อย (backend แต่ละเจ้าตั้งชื่อไม่เหมือนกัน)
  function extractRawRole(raw) {
    if (!raw) return '';
    if (Array.isArray(raw.roles) && raw.roles.length) return raw.roles[0];
    return raw.role || raw.Role || raw.userRole || raw.role_name || raw.roleName ||
      raw.permission || raw.userType || raw.user_type || raw.type || '';
  }

  /* ===================== tiny non-cryptographic hash =====================
     ใช้เฉพาะกับ mock/local fallback (ไม่มี backend จริง) — ไม่ใช่การเข้ารหัสที่ปลอดภัย */
  function simpleHash(str) {
    str = String(str || '');
    let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (let i = 0; i < str.length; i++) {
      const ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
  }

  /* ===================== backend API ===================== */
  function apiRequest(action, payload) {
    if (!config.apiUrl) {
      const err = new Error('ยังไม่ได้ตั้งค่า Auth API URL');
      err.networkError = true;
      return Promise.reject(err);
    }
    const headers = { 'Content-Type': 'application/json' };
    if (session && session.token) headers['Authorization'] = 'Bearer ' + session.token;
    const body = Object.assign(
      { action: action, sessionToken: session ? session.token : undefined },
      payload
    );
    return fetch(config.apiUrl, { method: 'POST', headers: headers, body: JSON.stringify(body) })
      .then(
        function (response) {
          return response.json().catch(function () { return {}; }).then(function (data) {
            if (data && data.status === 'error') {
              // เซิร์ฟเวอร์ตอบกลับมาแล้วจริง แค่ปฏิเสธคำขอ (เช่น รหัสผ่านผิด/ไม่มีสิทธิ์) — ไม่ควร fallback ไป mock
              const err = new Error(data.message || 'เชื่อมต่อ Auth API ไม่สำเร็จ');
              err.networkError = false;
              throw err;
            }
            if (!response.ok) {
              const err = new Error('Auth API ตอบกลับผิดปกติ (HTTP ' + response.status + ')');
              err.networkError = true; // ปัญหาระดับ infra เช่น URL ผิด/deploy ไม่ถูกต้อง → ให้ fallback ได้
              throw err;
            }
            return data;
          });
        },
        function (networkErr) {
          const err = new Error('ติดต่อ Auth API ไม่ได้ (' + (networkErr && networkErr.message ? networkErr.message : 'network error') + ')');
          err.networkError = true;
          throw err;
        }
      );
  }

  /* ===================== mock / local fallback store ===================== */
  function seedMockUsers() {
    const seed = [
      { id: 'u_admin', name: 'ผู้ดูแลระบบ (ทดสอบ)', username: 'admin', passwordHash: simpleHash('admin1234'), role: 'admin', branch: 'สำนักงานใหญ่', status: 'active' },
      { id: 'u_manager', name: 'ผู้จัดการ (ทดสอบ)', username: 'manager', passwordHash: simpleHash('manager1234'), role: 'manager', branch: 'สำนักงานใหญ่', status: 'active' },
      { id: 'u_sales', name: 'พนักงานขาย (ทดสอบ)', username: 'sales', passwordHash: simpleHash('sales1234'), role: 'sales', branch: 'สาขา 1', status: 'active' }
    ];
    saveMockUsers(seed);
    return seed;
  }
  function getMockUsers() {
    try {
      const list = JSON.parse(localStorage.getItem(MOCK_DB_KEY) || 'null');
      return Array.isArray(list) ? list : seedMockUsers();
    } catch (e) { return seedMockUsers(); }
  }
  function saveMockUsers(list) {
    try { localStorage.setItem(MOCK_DB_KEY, JSON.stringify(list)); } catch (e) {}
    return list;
  }
  function findMockUser(username) {
    const u = String(username || '').trim().toLowerCase();
    return getMockUsers().find(function (x) { return String(x.username || '').trim().toLowerCase() === u; });
  }

  function mockLogin(username, password) {
    return new Promise(function (resolve, reject) {
      const user = findMockUser(username);
      if (!user || user.passwordHash !== simpleHash(password)) {
        reject(new Error('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง (โหมดทดสอบ/ออฟไลน์)'));
        return;
      }
      if (user.status === 'suspended') {
        reject(new Error('บัญชีนี้ถูกระงับการใช้งาน กรุณาติดต่อแอดมิน'));
        return;
      }
      resolve({
        token: 'mock.' + user.id + '.' + Date.now(),
        id: user.id, username: user.username, name: user.name, role: user.role, branch: user.branch, mock: true
      });
    });
  }

  function mockRegister(payload, acting) {
    return new Promise(function (resolve, reject) {
      if (!acting || (acting.role !== 'admin' && acting.role !== 'manager')) {
        reject(new Error('ไม่มีสิทธิ์เพิ่มสมาชิก')); return;
      }
      const role = ROLES.indexOf(payload.role) >= 0 ? payload.role : 'sales';
      if (acting.role === 'manager' && role !== 'sales') {
        reject(new Error('บทบาทผู้จัดการเพิ่มสมาชิกได้เฉพาะตำแหน่ง "พนักงานขาย" เท่านั้น')); return;
      }
      const username = String(payload.username || '').trim();
      const name = String(payload.name || '').trim();
      const password = String(payload.password || '');
      if (!username || !name || password.length < 6) {
        reject(new Error('กรอกชื่อ/ชื่อผู้ใช้ให้ครบ และรหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร')); return;
      }
      const list = getMockUsers();
      if (findMockUser(username)) { reject(new Error('มีชื่อผู้ใช้นี้ในระบบแล้ว')); return; }
      const user = {
        id: 'u_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        name: name, username: username, passwordHash: simpleHash(password),
        role: role, branch: String(payload.branch || '').trim(), status: 'active'
      };
      list.push(user);
      saveMockUsers(list);
      resolve({ status: 'ok', user: { id: user.id, name: user.name, username: user.username, role: user.role, branch: user.branch } });
    });
  }

  function mockListUsers() {
    return Promise.resolve({
      status: 'ok',
      users: getMockUsers().map(function (u) {
        return { id: u.id, name: u.name, username: u.username, role: u.role, branch: u.branch, status: u.status || 'active' };
      })
    });
  }
  function mockUpdateUser(payload) {
    return new Promise(function (resolve, reject) {
      const list = getMockUsers();
      const u = list.find(function (x) { return x.id === payload.userId; });
      if (!u) { reject(new Error('ไม่พบสมาชิกนี้')); return; }
      if (payload.role && ROLES.indexOf(payload.role) >= 0) u.role = payload.role;
      if (payload.status) u.status = payload.status;
      if (payload.branch != null) u.branch = payload.branch;
      saveMockUsers(list);
      resolve({ status: 'ok' });
    });
  }
  function mockDeleteUser(payload) {
    return new Promise(function (resolve) {
      saveMockUsers(getMockUsers().filter(function (x) { return x.id !== payload.userId; }));
      resolve({ status: 'ok' });
    });
  }

  /* ===================== public auth operations =====================
     พยายามเรียก backend จริงก่อนเสมอ — fallback ไป mock เฉพาะตอนที่ err.networkError === true
     (เรียก backend ไม่ได้เลย/URL ยังไม่ตั้งค่า/เซิร์ฟเวอร์ตอบผิดปกติ) ไม่ fallback ตอนที่ backend
     ตอบกลับมาแล้วว่าปฏิเสธคำขอจริงๆ (เช่น รหัสผ่านผิด) เพื่อไม่ให้ error message สับสน */
  // เก็บ response ดิบล่าสุดจาก backend ไว้ debug ได้ง่ายๆ ผ่านคอนโซล: window.RSTAuth.debugLastLoginResponse()
  let _lastLoginRawResponse = null;
  function normalizeSessionResponse(data) {
    _lastLoginRawResponse = data;
    const raw = data.session || data.user || data.account || data.result || data;
    const rawRoleValue = extractRawRole(raw) || extractRawRole(data);
    const normalized = normalizeRole(rawRoleValue);
    if (rawRoleValue && !normalized) {
      console.warn('[RSTAuth] ไม่รู้จักค่า role "' + rawRoleValue + '" ที่ backend ส่งมา — ใช้สิทธิ์ "sales" (ต่ำสุด) ไปก่อนชั่วคราว ' +
        'ถ้า role นี้ควรถือเป็น admin/manager ให้เพิ่มคำนี้ใน normalizeRole() ของ auth.js', raw);
    } else if (!rawRoleValue) {
      console.warn('[RSTAuth] backend ไม่ได้ส่งค่า role กลับมาตอน login/register เลย — ใช้สิทธิ์ "sales" (ต่ำสุด) ไปก่อนชั่วคราว ' +
        'เช็ค response จาก apiUrl ว่ามี field role/roles อยู่หรือไม่ (ดูค่าดิบได้ที่ window.RSTAuth.debugLastLoginResponse())', data);
    }
    const sess = {
      token: raw.token || data.token || '',
      id: raw.id || raw.userId || data.id || '',
      username: raw.username || raw.email || data.username || '',
      name: raw.name || raw.fullName || raw.displayName || raw.username || data.name || '',
      role: normalized || 'sales',
      branch: raw.branch || raw.office || data.branch || ''
    };
    writeSession(sess);
    return sess;
  }

  function login(username, password) {
    return apiRequest(ACTIONS.login, { username: username, password: password })
      .then(normalizeSessionResponse)
      .catch(function (err) {
        if (err.networkError) return mockLogin(username, password).then(normalizeSessionResponse);
        throw err;
      });
  }

  function registerMember(payload) {
    if (!session) return Promise.reject(new Error('กรุณาเข้าสู่ระบบก่อน'));
    if (session.role !== 'admin' && session.role !== 'manager') return Promise.reject(new Error('ไม่มีสิทธิ์เพิ่มสมาชิก'));
    if (session.role === 'manager' && payload.role !== 'sales') return Promise.reject(new Error('บทบาทผู้จัดการเพิ่มสมาชิกได้เฉพาะตำแหน่ง "พนักงานขาย" เท่านั้น'));
    return apiRequest(ACTIONS.register, payload)
      .catch(function (err) {
        if (err.networkError) return mockRegister(payload, session);
        throw err;
      });
  }

  function listMembers() {
    if (!session || session.role !== 'admin') return Promise.reject(new Error('เฉพาะแอดมินเท่านั้น'));
    return apiRequest(ACTIONS.listUsers, {})
      .catch(function (err) { if (err.networkError) return mockListUsers(); throw err; });
  }
  function updateMember(userId, changes) {
    if (!session || session.role !== 'admin') return Promise.reject(new Error('เฉพาะแอดมินเท่านั้น'));
    return apiRequest(ACTIONS.updateUser, Object.assign({ userId: userId }, changes))
      .catch(function (err) { if (err.networkError) return mockUpdateUser(Object.assign({ userId: userId }, changes)); throw err; });
  }
  function deleteMember(userId) {
    if (!session || session.role !== 'admin') return Promise.reject(new Error('เฉพาะแอดมินเท่านั้น'));
    return apiRequest(ACTIONS.deleteUser, { userId: userId })
      .catch(function (err) { if (err.networkError) return mockDeleteUser({ userId: userId }); throw err; });
  }

  function logout() {
    clearSession();
    location.reload();
  }

  /* ===================== styles (สำหรับ element ที่ไฟล์นี้สร้างเอง) ===================== */
  let _stylesInjected = false;
  function injectStyles() {
    if (_stylesInjected) return;
    _stylesInjected = true;
    const style = document.createElement('style');
    style.id = 'rstAuthDynamicStyles';
    style.textContent = [
      '.rst-modal-bg{position:fixed;inset:0;background:#fff;z-index:2100;display:flex;flex-direction:column}',
      '.rst-modal-header{display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-bottom:1.5px solid var(--line,#E4DCCF);background:var(--card,#fff);flex-shrink:0}',
      '.rst-modal-header span{font-family:\'Kanit\',sans-serif;font-weight:700;font-size:14px}',
      '.rst-modal-header button{font-family:\'Kanit\',sans-serif;font-size:13px;font-weight:600;padding:6px 14px;border-radius:8px;border:1.5px solid #ccc;background:#fff;cursor:pointer}',
      '.rst-modal-scroll{flex:1;overflow:auto;padding:16px;background:#f0ede8;-webkit-overflow-scrolling:touch}',
      '.rst-modal-inner{background:#fff;max-width:480px;margin:0 auto;border-radius:12px;padding:16px;box-shadow:0 2px 10px rgba(0,0,0,.1)}',
      '.rst-tab-row{display:flex;gap:8px;margin-bottom:14px}',
      '.rst-tab{flex:1;font-family:\'Kanit\',sans-serif;font-size:12.5px;font-weight:600;padding:9px;border-radius:9px;border:1.5px solid var(--line,#E4DCCF);background:#fff;color:var(--ink,#262420);cursor:pointer}',
      '.rst-tab.active{background:var(--accent,#C8372D);border-color:var(--accent,#C8372D);color:#fff}',
      '#rstAddMemberForm label{display:block;margin-top:10px;color:var(--ink-soft,#6B6259);font-size:11px;font-weight:600}',
      '#rstAddMemberForm input,#rstAddMemberForm select{display:block;margin-top:4px;padding:9px 10px;width:100%;box-sizing:border-box;background:#fff;border:1.5px solid var(--line,#E4DCCF);border-radius:9px;color:var(--ink,#262420);font:500 14px \'Kanit\',sans-serif}',
      '#rstAddMemberForm .rst-auth-primary{margin-top:16px;width:100%;padding:10px;border:0;border-radius:9px;cursor:pointer;color:#fff;font:700 14px \'Kanit\',sans-serif;background:var(--yanmar,#C8372D)}',
      '.rst-member-list{display:flex;flex-direction:column;gap:8px;margin-top:6px}',
      '.rst-member-row{display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;border:1.5px solid var(--line,#E4DCCF);border-radius:10px;padding:8px 10px}',
      '.rst-member-row.suspended{opacity:.6;border-style:dashed}',
      '.rst-member-info{display:flex;flex-direction:column;font-size:12px;color:var(--ink-soft,#6B6259);gap:2px}',
      '.rst-member-info b{color:var(--ink,#262420);font-size:13px}',
      '.rst-member-suspended-badge{color:#c0392b;font-weight:700;font-size:10.5px}',
      '.rst-member-actions{display:flex;align-items:center;gap:6px}',
      '.rst-member-actions select{font-family:\'Kanit\',sans-serif;font-size:11.5px;padding:5px 6px;border-radius:7px;border:1.5px solid var(--line,#E4DCCF)}',
      '.rst-member-actions button{font-family:\'Kanit\',sans-serif;font-size:11px;font-weight:600;padding:5px 8px;border-radius:7px;border:1.5px solid var(--line,#E4DCCF);background:#fff;cursor:pointer}',
      '.rst-member-delete{color:#c0392b;border-color:#f2c9c3!important}',
      '.rst-identity-row{display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #f0ede8;font-size:13px}',
      '.rst-identity-row span{color:var(--ink-soft,#6B6259)}',
      /* วิดเจ็ตสถานะผู้ใช้ + เมนู logout/เพิ่มสมาชิก — สร้างเองทั้งหมด ไม่ต้องพึ่ง element ใน index.html
         (กันปัญหากรณีอัปเดตแค่ auth.js โดยไม่ได้แก้ index.html ตาม ก็ยังใช้งานได้ครบ) */
      '.rst-account-widget{position:fixed;bottom:16px;left:16px;z-index:150;font-family:\'Sarabun\',sans-serif}',
      '.rst-account-chip{display:flex;align-items:center;gap:6px;padding:8px 14px;border-radius:999px;border:1.5px solid var(--line,#E4DCCF);background:#fff;box-shadow:0 3px 12px -3px rgba(0,0,0,.25);cursor:pointer;font-family:\'Kanit\',sans-serif;font-size:12.5px;font-weight:700;color:var(--ink,#262420);max-width:min(60vw,240px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
      '.rst-account-chip:hover{border-color:var(--accent,#C8372D)}',
      '.rst-account-panel{position:absolute;bottom:calc(100% + 8px);left:0;width:250px;max-width:80vw;background:#fff;border:1.5px solid var(--line,#E4DCCF);border-radius:12px;padding:12px;box-shadow:0 8px 28px -6px rgba(0,0,0,.28)}',
      '.rst-account-panel-title{font-family:\'Kanit\',sans-serif;font-weight:700;font-size:12px;color:var(--ink-soft,#6B6259);margin-bottom:4px}',
      '.rst-account-addmember{width:100%;margin-top:10px;padding:9px;border:1.5px dashed #cbb98f;border-radius:9px;background:#fdf8f0;color:#8a6500;cursor:pointer;font:700 12.5px \'Kanit\',sans-serif}',
      '.rst-account-logout{width:100%;margin-top:8px;padding:9px;border:0;border-radius:9px;background:#c0392b;color:#fff;cursor:pointer;font:700 13px \'Kanit\',sans-serif}'
    ].join('\n');
    document.head.appendChild(style);
  }

  /* ===================== login screen ===================== */
  function setMessage(text, isError) {
    const el = document.getElementById('rstAuthMessage');
    if (!el) return;
    el.textContent = text || '';
    el.className = 'rst-auth-message' + (isError ? ' error' : '');
  }
  function lockScroll(lock) {
    try { document.body.style.overflow = lock ? 'hidden' : ''; } catch (e) {}
  }

  function renderLogin() {
    if (document.getElementById('rstAuthRoot')) return;
    const root = document.createElement('div');
    root.id = 'rstAuthRoot';
    root.innerHTML =
      '<div class="rst-auth-panel">' +
        '<div class="rst-auth-brand">RST Promo Finder</div>' +
        '<h2>เข้าสู่ระบบ</h2>' +
        '<p class="rst-auth-subtitle">กรุณาเข้าสู่ระบบก่อนใช้งานแอป</p>' +
        '<form id="rstLoginForm" autocomplete="on">' +
          '<label>ชื่อผู้ใช้ / อีเมล<input id="rstAuthUsername" name="username" autocomplete="username" required></label>' +
          '<label>รหัสผ่าน<input id="rstAuthPassword" name="password" type="password" autocomplete="current-password" required></label>' +
          '<button class="rst-auth-primary" type="submit">เข้าสู่ระบบ</button>' +
        '</form>' +
        '<div id="rstAuthMessage" class="rst-auth-message"></div>' +
        '<div class="rst-auth-config-note" id="rstAuthConfigNote" hidden>ยังไม่ได้ตั้งค่า Auth API — ใช้โหมดทดสอบออฟไลน์ได้ทันที (admin/admin1234, manager/manager1234, sales/sales1234)</div>' +
      '</div>';
    document.body.appendChild(root);
    lockScroll(true);

    document.getElementById('rstLoginForm').addEventListener('submit', function (event) {
      event.preventDefault();
      const username = document.getElementById('rstAuthUsername').value.trim();
      const password = document.getElementById('rstAuthPassword').value;
      if (!username || !password) { setMessage('กรอกชื่อผู้ใช้และรหัสผ่านให้ครบ', true); return; }
      setMessage('กำลังตรวจสอบ...', false);
      login(username, password).then(function (sess) {
        root.remove();
        lockScroll(false);
        window.dispatchEvent(new CustomEvent('rst:authenticated', { detail: sess }));
        afterAuthUIRefresh();
      }).catch(function (error) { setMessage(error.message, true); });
    });

    if (!config.apiUrl) {
      const note = document.getElementById('rstAuthConfigNote');
      if (note) note.hidden = false;
    }
  }

  /* ===================== status bar + identity panel ===================== */
  function renderStatusBar() {
    const bar = document.getElementById('rstUserStatusBar');
    if (!bar) return;
    if (!session) { bar.style.display = 'none'; bar.innerHTML = ''; return; }
    bar.style.display = '';
    bar.innerHTML = '🟢 ' + escapeHtml(session.name || session.username || '-') +
      ' <span class="rst-user-status-role">(บทบาท: ' + escapeHtml(ROLE_LABEL[session.role] || session.role) +
      (session.branch ? ' | สาขา: ' + escapeHtml(session.branch) : '') + ')</span>';
  }

  function renderIdentity() {
    const box = document.getElementById('rstIdentityDetailBox');
    if (box) {
      if (!session) {
        box.innerHTML = '<div style="color:var(--ink-soft,#6B6259);font-size:13px">ยังไม่ได้เข้าสู่ระบบ</div>';
      } else {
        box.innerHTML =
          '<div class="rst-identity-row"><span>ชื่อ</span><b>' + escapeHtml(session.name || '-') + '</b></div>' +
          '<div class="rst-identity-row"><span>ชื่อผู้ใช้</span><b>' + escapeHtml(session.username || '-') + '</b></div>' +
          '<div class="rst-identity-row"><span>บทบาท</span><b>' + (ROLE_ICON[session.role] || '') + ' ' + escapeHtml(ROLE_LABEL[session.role] || session.role) + '</b></div>' +
          '<div class="rst-identity-row"><span>สาขา</span><b>' + escapeHtml(session.branch || '-') + '</b></div>';
      }
    }
    const addBtn = document.getElementById('rstOpenAddMemberBtn');
    if (addBtn) addBtn.style.display = (session && (session.role === 'admin' || session.role === 'manager')) ? '' : 'none';
  }

  /* วิดเจ็ตสถานะผู้ใช้แบบลอย (มุมล่างซ้าย) — สร้าง/แสดงเองทั้งหมดโดยไม่ต้องพึ่ง element ใดๆ ใน index.html
     ใช้เป็นทางเข้าถึงหลักของ logout / เพิ่มสมาชิก แม้หน้าเว็บจะยังไม่ได้อัปเดต HTML ตามก็ยังใช้งานได้ */
  let _accountWidgetBuilt = false;
  function ensureAccountWidget() {
    if (_accountWidgetBuilt) return;
    _accountWidgetBuilt = true;
    injectStyles();
    const wrap = document.createElement('div');
    wrap.id = 'rstAccountWidget';
    wrap.className = 'rst-account-widget';
    wrap.style.display = 'none';
    wrap.innerHTML =
      '<button type="button" id="rstAccountChip" class="rst-account-chip"></button>' +
      '<div id="rstAccountPanel" class="rst-account-panel" style="display:none">' +
        '<div class="rst-account-panel-title">บัญชีของฉัน</div>' +
        '<div id="rstAccountPanelDetail"></div>' +
        '<button type="button" id="rstAccountAddMemberBtn" class="rst-account-addmember" style="display:none">➕ เพิ่มสมาชิกใหม่</button>' +
        '<button type="button" id="rstAccountLogoutBtn" class="rst-account-logout">🚪 ออกจากระบบ</button>' +
      '</div>';
    document.body.appendChild(wrap);

    document.getElementById('rstAccountChip').addEventListener('click', function (e) {
      e.stopPropagation();
      const panel = document.getElementById('rstAccountPanel');
      panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    });
    document.getElementById('rstAccountLogoutBtn').addEventListener('click', logout);
    document.getElementById('rstAccountAddMemberBtn').addEventListener('click', function () {
      document.getElementById('rstAccountPanel').style.display = 'none';
      openAddMemberModal();
    });
    document.addEventListener('click', function (e) {
      const w = document.getElementById('rstAccountWidget');
      const panel = document.getElementById('rstAccountPanel');
      if (w && panel && !w.contains(e.target)) panel.style.display = 'none';
    });
  }

  function renderAccountWidget() {
    ensureAccountWidget();
    const wrap = document.getElementById('rstAccountWidget');
    if (!session) { wrap.style.display = 'none'; return; }
    wrap.style.display = '';
    const chip = document.getElementById('rstAccountChip');
    chip.textContent = '🟢 ' + (session.name || session.username || '-');
    const detail = document.getElementById('rstAccountPanelDetail');
    detail.innerHTML =
      '<div class="rst-identity-row"><span>ชื่อ</span><b>' + escapeHtml(session.name || '-') + '</b></div>' +
      '<div class="rst-identity-row"><span>ชื่อผู้ใช้</span><b>' + escapeHtml(session.username || '-') + '</b></div>' +
      '<div class="rst-identity-row"><span>บทบาท</span><b>' + (ROLE_ICON[session.role] || '') + ' ' + escapeHtml(ROLE_LABEL[session.role] || session.role) + '</b></div>' +
      '<div class="rst-identity-row"><span>สาขา</span><b>' + escapeHtml(session.branch || '-') + '</b></div>';
    const addBtn = document.getElementById('rstAccountAddMemberBtn');
    addBtn.style.display = (session.role === 'admin' || session.role === 'manager') ? '' : 'none';
  }

  function afterAuthUIRefresh() {
    renderStatusBar();
    renderIdentity();
    renderAccountWidget();
  }

  /* ===================== add / manage member modal ===================== */
  let _memberModalBuilt = false;
  function ensureMemberModal() {
    if (_memberModalBuilt) return;
    _memberModalBuilt = true;
    injectStyles();
    const wrap = document.createElement('div');
    wrap.id = 'rstMemberModalBg';
    wrap.className = 'rst-modal-bg';
    wrap.style.display = 'none';
    wrap.innerHTML =
      '<div class="rst-modal-header"><span>➕ เพิ่ม/จัดการสมาชิก</span><button type="button" id="rstMemberModalClose">✕ ปิด</button></div>' +
      '<div class="rst-modal-scroll"><div class="rst-modal-inner">' +
        '<div class="rst-tab-row" id="rstMemberTabs">' +
          '<button type="button" class="rst-tab active" data-tab="add">เพิ่มสมาชิก</button>' +
          '<button type="button" class="rst-tab" data-tab="manage">จัดการสมาชิก</button>' +
        '</div>' +
        '<div id="rstMemberTabAdd">' +
          '<form id="rstAddMemberForm">' +
            '<label>ชื่อ-นามสกุล<input id="amName" required></label>' +
            '<label>ชื่อผู้ใช้งาน / อีเมล<input id="amUsername" required></label>' +
            '<label>รหัสผ่าน<input id="amPassword" type="password" minlength="6" required></label>' +
            '<label>สาขา<input id="amBranch" placeholder="เช่น สำนักงานใหญ่"></label>' +
            '<label>บทบาท<select id="amRole"></select></label>' +
            '<button class="rst-auth-primary" type="submit">✓ เพิ่มสมาชิก</button>' +
          '</form>' +
          '<div id="rstAddMemberMessage" class="rst-auth-message"></div>' +
        '</div>' +
        '<div id="rstMemberTabManage" style="display:none">' +
          '<div id="rstMemberListMessage" class="rst-auth-message"></div>' +
          '<div id="rstMemberListBox" class="rst-member-list"></div>' +
        '</div>' +
      '</div></div>';
    document.body.appendChild(wrap);

    document.getElementById('rstMemberModalClose').addEventListener('click', closeAddMemberModal);
    document.getElementById('rstAddMemberForm').addEventListener('submit', onAddMemberSubmit);
    Array.prototype.forEach.call(wrap.querySelectorAll('.rst-tab'), function (btn) {
      btn.addEventListener('click', function () { switchMemberTab(btn.getAttribute('data-tab')); });
    });
  }

  function populateRoleOptions() {
    const sel = document.getElementById('amRole');
    if (!sel || !session) return;
    const options = session.role === 'admin' ? ROLES : ['sales'];
    sel.innerHTML = options.map(function (r) { return '<option value="' + r + '">' + ROLE_ICON[r] + ' ' + ROLE_LABEL[r] + '</option>'; }).join('');
    sel.disabled = options.length <= 1;
  }

  function switchMemberTab(tab) {
    Array.prototype.forEach.call(document.querySelectorAll('#rstMemberTabs .rst-tab'), function (b) {
      b.classList.toggle('active', b.getAttribute('data-tab') === tab);
    });
    document.getElementById('rstMemberTabAdd').style.display = tab === 'add' ? '' : 'none';
    document.getElementById('rstMemberTabManage').style.display = tab === 'manage' ? '' : 'none';
    if (tab === 'manage') loadMemberList();
  }

  function openAddMemberModal() {
    if (!session || (session.role !== 'admin' && session.role !== 'manager')) {
      alert('เฉพาะแอดมินและผู้จัดการเท่านั้นที่เพิ่มสมาชิกได้');
      return;
    }
    ensureMemberModal();
    const manageTabBtn = document.querySelector('#rstMemberTabs .rst-tab[data-tab="manage"]');
    if (manageTabBtn) manageTabBtn.style.display = session.role === 'admin' ? '' : 'none';
    switchMemberTab('add');
    document.getElementById('rstAddMemberForm').reset();
    populateRoleOptions();
    document.getElementById('rstAddMemberMessage').textContent = '';
    document.getElementById('rstMemberModalBg').style.display = 'flex';
  }
  function closeAddMemberModal() {
    const el = document.getElementById('rstMemberModalBg');
    if (el) el.style.display = 'none';
  }

  function onAddMemberSubmit(event) {
    event.preventDefault();
    const msgEl = document.getElementById('rstAddMemberMessage');
    const payload = {
      name: document.getElementById('amName').value.trim(),
      username: document.getElementById('amUsername').value.trim(),
      password: document.getElementById('amPassword').value,
      branch: document.getElementById('amBranch').value.trim(),
      role: document.getElementById('amRole').value
    };
    msgEl.className = 'rst-auth-message';
    msgEl.textContent = 'กำลังบันทึก...';
    registerMember(payload).then(function () {
      msgEl.className = 'rst-auth-message';
      msgEl.textContent = '✓ เพิ่มสมาชิกสำเร็จ';
      document.getElementById('rstAddMemberForm').reset();
      populateRoleOptions();
    }).catch(function (err) {
      msgEl.className = 'rst-auth-message error';
      msgEl.textContent = err.message;
    });
  }

  function loadMemberList() {
    const box = document.getElementById('rstMemberListBox');
    const msgEl = document.getElementById('rstMemberListMessage');
    if (!box) return;
    box.innerHTML = '';
    msgEl.className = 'rst-auth-message';
    msgEl.textContent = 'กำลังโหลด...';
    listMembers().then(function (data) {
      msgEl.textContent = '';
      const users = data.users || [];
      if (!users.length) {
        box.innerHTML = '<div style="font-size:12px;color:var(--ink-soft,#6B6259)">ยังไม่มีสมาชิก</div>';
        return;
      }
      box.innerHTML = users.map(memberRowHtml).join('');
      Array.prototype.forEach.call(box.querySelectorAll('[data-role-select]'), function (sel) {
        sel.addEventListener('change', function () { onChangeMemberRole(sel.getAttribute('data-role-select'), sel.value); });
      });
      Array.prototype.forEach.call(box.querySelectorAll('[data-toggle-status]'), function (btn) {
        btn.addEventListener('click', function () { onToggleMemberStatus(btn.getAttribute('data-toggle-status'), btn.getAttribute('data-next-status')); });
      });
      Array.prototype.forEach.call(box.querySelectorAll('[data-delete-user]'), function (btn) {
        btn.addEventListener('click', function () { onDeleteMember(btn.getAttribute('data-delete-user')); });
      });
    }).catch(function (err) {
      msgEl.className = 'rst-auth-message error';
      msgEl.textContent = err.message;
    });
  }

  function memberRowHtml(u) {
    const suspended = u.status === 'suspended';
    const roleOptions = ROLES.map(function (r) {
      return '<option value="' + r + '"' + (r === u.role ? ' selected' : '') + '>' + ROLE_ICON[r] + ' ' + ROLE_LABEL[r] + '</option>';
    }).join('');
    return (
      '<div class="rst-member-row' + (suspended ? ' suspended' : '') + '">' +
        '<div class="rst-member-info">' +
          '<b>' + escapeHtml(u.name || u.username) + '</b>' +
          '<span>' + escapeHtml(u.username || '') + (u.branch ? ' · ' + escapeHtml(u.branch) : '') + '</span>' +
          (suspended ? '<span class="rst-member-suspended-badge">ระงับการใช้งาน</span>' : '') +
        '</div>' +
        '<div class="rst-member-actions">' +
          '<select data-role-select="' + escapeHtml(u.id) + '">' + roleOptions + '</select>' +
          '<button type="button" data-toggle-status="' + escapeHtml(u.id) + '" data-next-status="' + (suspended ? 'active' : 'suspended') + '">' + (suspended ? '✅ อนุมัติ' : '🚫 ระงับ') + '</button>' +
          '<button type="button" class="rst-member-delete" data-delete-user="' + escapeHtml(u.id) + '">🗑</button>' +
        '</div>' +
      '</div>'
    );
  }

  function onChangeMemberRole(userId, role) {
    updateMember(userId, { role: role }).then(function () { loadMemberList(); })
      .catch(function (err) { alert(err.message); loadMemberList(); });
  }
  function onToggleMemberStatus(userId, nextStatus) {
    updateMember(userId, { status: nextStatus }).then(function () { loadMemberList(); })
      .catch(function (err) { alert(err.message); });
  }
  function onDeleteMember(userId) {
    if (!confirm('ลบสมาชิกคนนี้? การลบไม่สามารถย้อนกลับได้')) return;
    deleteMember(userId).then(function () { loadMemberList(); })
      .catch(function (err) { alert(err.message); });
  }

  /* ===================== boot ===================== */
  function boot() {
    injectStyles();
    if (!config.enabled) { afterAuthUIRefresh(); return; }
    if (!session) {
      renderLogin();
    } else {
      lockScroll(false);
      window.dispatchEvent(new CustomEvent('rst:authenticated', { detail: session }));
      afterAuthUIRefresh();
    }
  }

  window.RSTAuth = {
    getSession: function () { return session; },
    isLoggedIn: function () { return !!session; },
    hasRole: function (roles) { return !!session && roles.indexOf(session.role) >= 0; },
    isAdmin: function () { return !!session && session.role === 'admin'; },
    isManager: function () { return !!session && (session.role === 'admin' || session.role === 'manager'); },
    isSales: function () { return !!session && session.role === 'sales'; },
    roleLabel: function (r) { return ROLE_LABEL[r] || r; },
    logout: logout,
    openAddMemberModal: openAddMemberModal,
    closeAddMemberModal: closeAddMemberModal,
    renderIdentity: renderIdentity,
    request: apiRequest,
    // เปิด DevTools Console แล้วเรียก window.RSTAuth.debugLastLoginResponse() เพื่อดู response ดิบล่าสุดจาก backend
    // มีประโยชน์เวลา role ที่ backend ส่งมาไม่ตรงกับ 'admin'/'manager'/'sales' ที่ auth.js รู้จัก (เช็ค console จะมี warning สีเหลืองบอกด้วย)
    debugLastLoginResponse: function () { return _lastLoginRawResponse; }
  };

  window.addEventListener('DOMContentLoaded', boot);
})();