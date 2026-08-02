// ============================================================
// RST Promo Finder — ข้อมูลราคา/โปรโมชั่นทั้งหมด (แยกออกมาจากไฟล์หลัก)
// แก้ไขไฟล์นี้ไฟล์เดียวเวลาราคา/เงื่อนไข/YCT เปลี่ยน ไม่ต้องเปิดไฟล์ HTML หลักเลย
// โครงสร้าง: DATA.yanmar / DATA.solis แต่ละยี่ห้อมี models (รายชื่อรุ่น) และ programs (รายการโปรแต่ละโปร)
// แต่ละ program มี entries เป็นราคา/ยอดดาวน์/YCT/YSP ต่อรุ่น ตามเงื่อนไขของโปรนั้นๆ
// อัปเดตล่าสุด: 13/7/2569 — ตัดโปร "ทั่วไป 30%" (y_general30) ออก (เลิกใช้แล้ว) + แก้เงื่อนไข Bob 30% ที่ตกหล่นให้ครบ
// อัปเดต 29/7/2569 — เปลี่ยนชื่อโปร/เงื่อนไขให้ตรงกับไฟล์ "Promotion Sale (ทำโปร)" ทั้ง Yanmar/Solis:
//   y_general → "ทั่วไป 20%", s_general → "ทั่วไป 20%/25%" (เงื่อนไขเหลือ "ไม่กำหนดจำนวนไร่")
//   y_bob25/s_bob25 "โปร 25%": เพิ่มเงื่อนไข Dry Crop 20 ไร่ + หมายเหตุกรรมสิทธิ์/ญาติสายตรง
//     (Yanmar ทั่วไปเปลี่ยนเป็น 40 ไร่, Solis ทั่วไปคงที่ 30 ไร่ ตามไฟล์)
//   y_bob30/s_bob30 "โปร 30%": เงื่อนไขละเอียดขึ้นแยกตามกลุ่ม (ผู้นำชุมชน/Sugar Mill/ธกส เกรด AAA/Mega Farm/RT,YF/SW)
//   y_bob30: อัปเดตตัวเลข ysp/ลูกค้าออก/rst ของ EF393T 45th และ YM351R ให้ตรงกับชีต "โปรลูกค้าทั่วไป30%" (total/ดอกเบี้ย/ปี เท่าเดิม)
// ============================================================
// อัปเดต 31/7/2569 — รีเซ็ตฐานข้อมูลโปร Yanmar/Solis ทั้งหมดตามไฟล์ "Promotion Sale Yanmar/Solis 130769 (ทำโปร)" ที่อัปโหลดใหม่ (ยึดไฟล์นี้เป็นหลัก 100%):
//   - ตัดโปรที่ไม่มีอยู่ในไฟล์ใหม่และไม่ถูกใช้งานบนหน้าเว็บออก: y_target_general, y_target_yfsw, y_target_rt, y_tradein (Yanmar), s_target_general (Solis)
//   - y_bob30: แก้ ysp/ลูกค้าออก/rst ของ EF393T 45th และ YM351R (กลุ่ม General, YF,SW) ให้ตรงกับชีต "30% ผู้นำชุมชนฯ"/"30% กลุ่ม RT,YF,SW" ที่ถูกต้อง (ของเดิมพลาดไปดึงเลขจากชีต "ลูกค้าทั่วไป30%" ซึ่งเป็นคนละโปร)
//   - y_bob30: ตัดกลุ่ม RT ของ EF393T 45th/YM351R/YM358R ออก (ไฟล์ใหม่ไม่มีเลข RT แยกให้ 3 รุ่นนี้ มีให้เฉพาะ YM358R-L1)
//   - ไม่เพิ่มโปร "ลูกค้าทั่วไป 30%" ของ Yanmar (ชีตที่เคยถอดออกจากเว็บ) กลับเข้ามา ตามที่ยืนยันจากผู้ใช้งาน
//   - s_target_yfsw/s_target_rt (Solis): ตัดรุ่นที่ไม่มีในชีต "Target 25%" ใหม่ออก เหลือเฉพาะ YM-Solis30/30-45th/50/50-45th/105 Cabin
//   - s_bob25/s_bob30: แก้ models_subset ให้ตรงกับรุ่นที่มี entries จริง (ของเดิมขาดบางรุ่นทำให้การ์ดไม่ขึ้น เช่น YM-Solis50, YM-Solis 65, YM-Solis75-45th)
//   - y_general, y_bob25, y_358, s_general ตรวจสอบแล้วตรงกับไฟล์ใหม่อยู่แล้ว ไม่มีการเปลี่ยนตัวเลข
// อัปเดต 2/8/2569 — รีเซ็ตโปรรถเกี่ยว (combine) ทั้ง 4 โปรตามไฟล์ "Promotion Sale รถเกี่ยว" ที่อัปโหลดใหม่ (ยึดไฟล์นี้เป็นหลัก 100%): c_general/c_owner_combine/c_owner_tractor/c_rt — อัปเดตเฉพาะตัวเลข down/YCT+YSP(รวมไว้ในช่อง yct, ysp=0)/RST/จ่ายดาวน์/annual ต่อรุ่น ชื่อโปร/เงื่อนไข/id เดิมตรงกับไฟล์ใหม่อยู่แล้วไม่ต้องแก้
const DATA = {
  "yanmar": {
    "models": [
      "EF393A / EF393T-45th",
      "YM351R",
      "YM358R",
      "YM358R-L1",
      "EF725T"
    ],
    "programs": [
      {
        "id": "y_general",
        "name": "ทั่วไป 20%",
        "groups": [
          "ทั่วไป"
        ],
        "conditions": [
          "ไม่กำหนดจำนวนไร่"
        ],
        "entries": {
          "EF393A": {
            "price": 584000,
            "down": 117000,
            "yct": 32500,
            "fire": 25000,
            "customer_out": 0,
            "rst": 59500,
            "total": 467000,
            "interest": 0.0895,
            "years": 10,
            "total_payback": 884965.0,
            "annual": 88496.5
          },
          "EF393T-45th": {
            "price": 584000,
            "down": 117000,
            "yct": 32500,
            "fire": 25000,
            "customer_out": 0,
            "rst": 59500,
            "total": 467000,
            "interest": 0.0895,
            "years": 10,
            "total_payback": 884965.0,
            "annual": 88496.5
          },
          "YM351R": {
            "price": 733000,
            "down": 147000,
            "yct": 43500,
            "fire": 30000,
            "customer_out": 0,
            "rst": 73500,
            "total": 586000,
            "interest": 0.0895,
            "years": 10,
            "total_payback": 1110470.0,
            "annual": 111047.0
          },
          "YM358R": {
            "price": 831000,
            "down": 167000,
            "yct": 44000,
            "fire": 50000,
            "customer_out": 0,
            "rst": 73000,
            "total": 664000,
            "interest": 0.0895,
            "years": 10,
            "total_payback": 1258280.0,
            "annual": 125828.0
          },
          "YM358R-L1": {
            "price": 892000,
            "down": 179000,
            "yct": 47000,
            "customer_out": 15000,
            "rst": 117000,
            "total": 713000,
            "interest": 0.0895,
            "years": 10,
            "total_payback": 1351135.0,
            "annual": 135113.5
          },
          "EF725T": {
            "price": 1072000,
            "down": 215000,
            "yct": 65000,
            "fire": 35000,
            "customer_out": 0,
            "rst": 115000,
            "total": 857000,
            "interest": 0.0895,
            "years": 10,
            "total_payback": 1624015.0,
            "annual": 162401.5
          }
        },
        "gifts": [
          "ทองครึ่งสลึง 1 เส้น",
          "เบียร์ 1 ลัง",
          "น้ำอัดลม 1 แพค",
          "กล่องเครื่องมือ 1 ชุด",
          "กระบอกอัดจาระบี 1 อัน",
          "แม่แรงกระปุก 2 ตัน 1 ชุด",
          "ชุดประแจ 1 ชุด",
          "ด้ามบ็อก + ลูกบ็อก 1 ชุด",
          "สายอ่อนไนล่อนอัดจารบี 12 นิ้ว 1 ชิ้น",
          "เสื้อยืดแขนยาว 1 ตัว",
          "เสื้อคอโปโล 1 ตัว",
          "น้ำมันเครื่อง 1L 1 แกลลอน",
          "กระจังหน้า/ปลายท่อ (อย่างใดอย่างนึง) เคสต่อรอง **"
        ]
      },
      {
        "id": "y_bob25",
        "name": "โปร 25%",
        "groups": [
          "General"
        ],
        "conditions": [
          "1. ลูกค้าทั่วไป ที่ทำกินไม่ต่ำกว่า 40 ไร่",
          "2. ลูกค้า กอช. ที่ทำกินไม่ต่ำกว่า 20 ไร่",
          "3. ลูกค้าที่มีใบสมาชิกชาวไร่อ้อย (Dry Crop) ที่ทำกินไม่ต่ำกว่า 20 ไร่",
          "*พื้นที่เพาะปลูก ถือกรรมสิทธิ์ของตนเอง หรือญาติสายตรง หรือที่เช่า (ญาติสายตรงคือ พ่อ แม่ ลูก คู่สมรส พี่น้อง)",
          "*แสดงในสมุดทะเบียนเกษตรได้"
        ],
        "models_subset": [
          "EF393T 45th",
          "YM351R",
          "YM358R",
          "YM358R-L1"
        ],
        "entries": {
          "EF393T 45th | General": {
            "price": 584000,
            "down": 146000,
            "yct": 32500,
            "ysp": 25000,
            "fire": 38500,
            "customer_out": 0,
            "rst": 50000,
            "total": 438000,
            "interest": 0.0895,
            "years": 10,
            "total_payback": 830010.0,
            "annual": 83001.0
          },
          "YM351R | General": {
            "price": 733000,
            "down": 184000,
            "yct": 43500,
            "ysp": 30000,
            "fire": 47500,
            "customer_out": 0,
            "rst": 63000,
            "total": 549000,
            "interest": 0.0895,
            "years": 10,
            "total_payback": 1040355.0,
            "annual": 104035.5
          },
          "YM358R | General": {
            "price": 831000,
            "down": 208000,
            "yct": 44000,
            "ysp": 35000,
            "fire": 58000,
            "customer_out": 0,
            "rst": 71000,
            "total": 623000,
            "interest": 0.0895,
            "years": 10,
            "total_payback": 1180585.0,
            "annual": 118058.5
          },
          "YM358R-L1 | General": {
            "price": 892000,
            "down": 223000,
            "yct": 47000,
            "ysp": 45000,
            "fire": 55000,
            "customer_out": 0,
            "rst": 76000,
            "total": 669000,
            "interest": 0.0895,
            "years": 10,
            "total_payback": 1267755.0,
            "annual": 126775.5
          }
        },
        "gifts": [
          "ทองครึ่งสลึง 1 เส้น",
          "เบียร์ 1 ลัง",
          "น้ำอัดลม 1 แพค",
          "กล่องเครื่องมือ 1 ชุด",
          "กระบอกอัดจาระบี 1 อัน",
          "แม่แรงกระปุก 2 ตัน 1 ชุด",
          "ชุดประแจ 1 ชุด",
          "ด้ามบ็อก + ลูกบ็อก 1 ชุด",
          "สายอ่อนไนล่อนอัดจารบี 12 นิ้ว 1 ชิ้น",
          "เสื้อยืดแขนยาว 1 ตัว",
          "เสื้อคอโปโล 1 ตัว",
          "น้ำมันเครื่อง 1L 1 แกลลอน",
          "กระจังหน้า/ปลายท่อ (อย่างใดอย่างนึง) เคสต่อรอง **"
        ]
      },
      {
        "id": "y_bob30",
        "name": "โปร 30%",
        "groups": [
          "General",
          "YF,SW",
          "RT"
        ],
        "conditions": [
          "1. ลูกค้าผู้นำชุมชน ได้แก่ กำนัน, ผู้ช่วยผู้ใหญ่บ้าน, ผู้ใหญ่บ้าน, อบต., นายก อบต., รองนายก อบต., นายกเทศมนตรี, รองนายกเทศมนตรี, ที่ปรึกษานายกเทศมนตรี, เลขานุการนายกเทศมนตรี, ประธานสภาเทศบาล, รองประธานสภาเทศบาล, สมาชิกสภาเทศบาล เท่านั้น",
          "2. Sugar Mill: มีบัตรสมาชิกสมาคมชาวไร่อ้อย หรือบัตรประจำตัวชาวไร่อ้อย หรือบัตรชาวไร่อ้อยของคณะกรรมการ หรือมีพื้นที่เพาะปลูกอ้อยไม่น้อยกว่า 20 ไร่ (รวมพื้นที่ตนเองและญาติสายตรงได้)",
          "3. ลูกค้า ธกส ที่มีใบเกรด AAA, AAA+ แสดงเอกสาร",
          "4. ลูกค้า Mega Farm: เป็นสมาชิกกองทุนหมู่บ้าน (กทบ.) หรือกลุ่มแปลงใหญ่ และมีพื้นที่ทำกินอย่างน้อย 40 ไร่ (รวมพื้นที่ตนเองและญาติสายตรงได้)",
          "5. กลุ่มลูกค้า RT, YF ต้องมีรายชื่อยืนยันจาก YCT",
          "6. กลุ่มลูกค้า SW ต้องมีเล่ม หรือมีใบซื้อขาย หรือมีรถใช้งานจริง"
        ],
        "models_subset": [
          "EF393T 45th",
          "YM351R",
          "YM358R",
          "YM358R-L1"
        ],
        "entries": {
          "EF393T 45th | General": {
            "price": 584000,
            "down": 176000,
            "yct": 32500,
            "ysp": 93500,
            "customer_out": 0,
            "rst": 50000,
            "total": 408000,
            "interest": 0.0895,
            "years": 10,
            "total_payback": 773160.0,
            "annual": 77316.0
          },
          "EF393T 45th | YF,SW": {
            "price": 584000,
            "down": 176000,
            "yct": 54000,
            "ysp": 78000,
            "customer_out": 0,
            "rst": 44000,
            "total": 408000,
            "interest": 0.0875,
            "years": 10,
            "total_payback": 765000.0,
            "annual": 76500.0
          },
          "YM351R | General": {
            "price": 733000,
            "down": 220000,
            "yct": 43500,
            "ysp": 113500,
            "customer_out": 0,
            "rst": 63000,
            "total": 513000,
            "interest": 0.0895,
            "years": 10,
            "total_payback": 972135.0,
            "annual": 97213.5
          },
          "YM351R | YF,SW": {
            "price": 733000,
            "down": 220000,
            "yct": 64500,
            "ysp": 100500,
            "customer_out": 0,
            "rst": 55000,
            "total": 513000,
            "interest": 0.0875,
            "years": 10,
            "total_payback": 961875.0,
            "annual": 96187.5
          },
          "YM358R | General": {
            "price": 831000,
            "down": 250000,
            "yct": 44000,
            "ysp": 135000,
            "customer_out": 0,
            "rst": 71000,
            "total": 581000,
            "interest": 0.0895,
            "years": 10,
            "total_payback": 1100995.0,
            "annual": 110099.5
          },
          "YM358R | YF,SW": {
            "price": 831000,
            "down": 250000,
            "yct": 75500,
            "ysp": 109000,
            "customer_out": 0,
            "rst": 65500,
            "total": 581000,
            "interest": 0.0875,
            "years": 10,
            "total_payback": 1089375.0,
            "annual": 108937.5
          },
          "YM358R-L1 | General": {
            "price": 892000,
            "down": 268000,
            "yct": 47000,
            "ysp": 145000,
            "customer_out": 0,
            "rst": 76000,
            "total": 624000,
            "interest": 0.0895,
            "years": 10,
            "total_payback": 1182480.0,
            "annual": 118248.0
          },
          "YM358R-L1 | YF,SW": {
            "price": 892000,
            "down": 268000,
            "yct": 80000,
            "ysp": 121000,
            "customer_out": 0,
            "rst": 67000,
            "total": 624000,
            "interest": 0.0875,
            "years": 10,
            "total_payback": 1170000.0,
            "annual": 117000.0
          },
          "YM358R-L1 | RT": {
            "price": 892000,
            "down": 268000,
            "yct": 92000,
            "ysp": 109000,
            "customer_out": 0,
            "rst": 67000,
            "total": 624000,
            "interest": 0.0875,
            "years": 10,
            "total_payback": 1170000.0,
            "annual": 117000.0
          }
        },
        "gifts": [
          "ทองครึ่งสลึง 1 เส้น",
          "เบียร์ 1 ลัง",
          "น้ำอัดลม 1 แพค",
          "กล่องเครื่องมือ 1 ชุด",
          "กระบอกอัดจาระบี 1 อัน",
          "แม่แรงกระปุก 2 ตัน 1 ชุด",
          "ชุดประแจ 1 ชุด",
          "ด้ามบ็อก + ลูกบ็อก 1 ชุด",
          "สายอ่อนไนล่อนอัดจารบี 12 นิ้ว 1 ชิ้น",
          "เสื้อยืดแขนยาว 1 ตัว",
          "เสื้อคอโปโล 1 ตัว",
          "น้ำมันเครื่อง 1L 1 แกลลอน",
          "กระจังหน้า/ปลายท่อ (อย่างใดอย่างนึง) เคสต่อรอง **"
        ]
      },
      {
        "id": "y_358",
        "name": "358 Special (เฉพาะ YM358R)",
        "groups": [
          "ทั่วไป"
        ],
        "conditions": [
          "ต้องมีที่ทำกินมากกว่า 20 ไร่",
          "เปิดที่ 25% ฟรีดาวน์ แล้วรอดูเงื่อนไขจาก YCT",
          "กรณีลูกค้ามีเงิน ยอมจ่ายดาวน์มากขึ้น (35%/38%) จะได้ YSP Top up เพิ่ม"
        ],
        "models_subset": [
          "YM358R"
        ],
        "entries": {
          "38% (Down 316,000)": {
            "price": 831000,
            "down": 316000,
            "yct": 44000,
            "ysp": 35000,
            "ysp_topup": 116000,
            "customer_out": 30000,
            "rst": 91000,
            "total": 515000,
            "interest": 0.0895,
            "years": 10,
            "total_payback": 975925,
            "annual": 97592.5
          },
          "25% (Down 208,000)": {
            "price": 831000,
            "down": 208000,
            "yct": 44000,
            "ysp": 35000,
            "ysp_topup": 35000,
            "customer_out": 0,
            "rst": 94000,
            "total": 623000,
            "interest": 0.0895,
            "years": 10,
            "total_payback": 1180585,
            "annual": 118058.5
          },
          "30% (Down 250,000)": {
            "price": 831000,
            "down": 250000,
            "yct": 44000,
            "ysp": 35000,
            "ysp_topup": 65000,
            "customer_out": 15000,
            "rst": 91000,
            "total": 581000,
            "interest": 0.0895,
            "years": 10,
            "total_payback": 1100995,
            "annual": 110099.5
          },
          "35% (Down 291,000)": {
            "price": 831000,
            "down": 291000,
            "yct": 44000,
            "ysp": 35000,
            "ysp_topup": 95000,
            "customer_out": 20000,
            "rst": 97000,
            "total": 540000,
            "interest": 0.0895,
            "years": 10,
            "total_payback": 1023300,
            "annual": 102330
          }
        }
      }
    ]
  },
  "solis": {
    "models": [
      "Solis 26",
      "Solis26",
      "YM-Solis22",
      "YM-Solis26",
      "YM-Solis30",
      "YM-Solis30-45th",
      "YM-Solis50",
      "YM-Solis50-45th",
      "YM-Solis 65",
      "YM-Solis75",
      "YM-Solis75-45th",
      "YM-Solis90",
      "YM-Solis105",
      "YM-Solis 105 Cabin"
    ],
    "programs": [
      {
        "id": "s_general",
        "name": "ทั่วไป 20%/25%",
        "groups": [
          "ทั่วไป"
        ],
        "conditions": [
          "ไม่กำหนดจำนวนไร่"
        ],
        "entries": {
          "Solis 26": {
            "price": 339000,
            "down": 85000,
            "yct": 19000,
            "customer_out": 20000,
            "rst": 46000,
            "total": 254000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 413130.97,
            "annual": 59018.71
          },
          "Solis26": {
            "price": 339000,
            "down": 85000,
            "yct": 19000,
            "customer_out": 30000,
            "rst": 36000,
            "total": 254000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 413130.97,
            "annual": 59018.71
          },
          "YM-Solis22": {
            "price": 312000,
            "down": 78000,
            "yct": 21000,
            "fire": 15000,
            "customer_out": 0,
            "rst": 42000,
            "total": 234000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 380600.99,
            "annual": 54371.57
          },
          "YM-Solis26": {
            "price": 380000,
            "down": 95000,
            "yct": 24500,
            "fire": 15000,
            "customer_out": 0,
            "rst": 55500,
            "total": 285000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 463552.53,
            "annual": 66221.79
          },
          "YM-Solis30": {
            "price": 427000,
            "down": 86000,
            "yct": 27000,
            "fire": 15000,
            "customer_out": 0,
            "rst": 44000,
            "total": 341000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 554636.53,
            "annual": 79233.79
          },
          "YM-Solis30-45th": {
            "price": 438000,
            "down": 88000,
            "yct": 28000,
            "fire": 15000,
            "customer_out": 0,
            "rst": 45000,
            "total": 350000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 569275.0,
            "annual": 81325.0
          },
          "YM-Solis50": {
            "price": 742000,
            "down": 149000,
            "yct": 44000,
            "fire": 25000,
            "customer_out": 0,
            "rst": 80000,
            "total": 593000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 964514.53,
            "annual": 137787.79
          },
          "YM-Solis50-45th": {
            "price": 762000,
            "down": 153000,
            "yct": 45000,
            "fire": 25000,
            "customer_out": 0,
            "rst": 83000,
            "total": 609000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 990538.5,
            "annual": 141505.5
          },
          "YM-Solis 65": {
            "price": 899000,
            "down": 180000,
            "yct": 53000,
            "fire": 35000,
            "customer_out": 15000,
            "rst": 77000,
            "total": 719000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 1169453.53,
            "annual": 167064.79
          },
          "YM-Solis75": {
            "price": 1008000,
            "down": 202000,
            "yct": 58000,
            "fire": 40000,
            "customer_out": 0,
            "rst": 104000,
            "total": 806000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 1310959.02,
            "annual": 187279.86
          },
          "YM-Solis75-45th": {
            "price": 1029000,
            "down": 206000,
            "yct": 59500,
            "fire": 40000,
            "customer_out": 0,
            "rst": 106500,
            "total": 823000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 1338609.51,
            "annual": 191229.93
          },
          "YM-Solis90": {
            "price": 1327000,
            "down": 266000,
            "yct": 76000,
            "fire": 40000,
            "customer_out": 35000,
            "rst": 115000,
            "total": 1061000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 1725716.51,
            "annual": 246530.93
          },
          "YM-Solis105": {
            "price": 1517000,
            "down": 304000,
            "yct": 86000,
            "fire": 60000,
            "customer_out": 0,
            "rst": 158000,
            "total": 1213000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 1972944.47,
            "annual": 281849.21
          },
          "YM-Solis 105 Cabin": {
            "price": 1717000,
            "down": 344000,
            "yct": 97000,
            "fire": 60000,
            "customer_out": 0,
            "rst": 187000,
            "total": 1373000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 2233184.52,
            "annual": 319026.36
          }
        }
      },
      {
        "id": "s_target_yfsw",
        "name": "Target - YF, SW",
        "groups": [
          "YF,SW"
        ],
        "conditions": [
          "ไม่กำหนดจำนวนไร่"
        ],
        "entries": {
          "YM-Solis30": {
            "price": 427000,
            "down": 86000,
            "yct": 34000,
            "ysp": 35000,
            "fire": 15000,
            "customer_out": 0,
            "rst": 2000,
            "total": 341000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 549862.53,
            "annual": 78551.79
          },
          "YM-Solis30-45th": {
            "price": 438000,
            "down": 88000,
            "yct": 35000,
            "ysp": 35000,
            "fire": 15000,
            "customer_out": 0,
            "rst": 3000,
            "total": 350000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 564375.0,
            "annual": 80625.0
          },
          "YM-Solis50": {
            "price": 742000,
            "down": 149000,
            "yct": 55000,
            "ysp": 50000,
            "fire": 25000,
            "customer_out": 0,
            "rst": 19000,
            "total": 593000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 956212.53,
            "annual": 136601.79
          },
          "YM-Solis50-45th": {
            "price": 762000,
            "down": 153000,
            "yct": 56500,
            "ysp": 50000,
            "fire": 25000,
            "customer_out": 0,
            "rst": 21500,
            "total": 609000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 982012.5,
            "annual": 140287.5
          },
          "YM-Solis 105 Cabin": {
            "price": 1717000,
            "down": 344000,
            "yct": 120500,
            "ysp": 65000,
            "fire": 60000,
            "customer_out": 0,
            "rst": 98500,
            "total": 1373000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 2213962.52,
            "annual": 316280.36
          }
        }
      },
      {
        "id": "s_target_rt",
        "name": "Target - RT",
        "groups": [
          "RT"
        ],
        "conditions": [
          "ไม่กำหนดจำนวนไร่"
        ],
        "entries": {
          "YM-Solis30": {
            "price": 427000,
            "down": 86000,
            "yct": 38000,
            "ysp": 35000,
            "fire": 15000,
            "customer_out": 0,
            "rst": -2000,
            "total": 341000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 549862.53,
            "annual": 78551.79
          },
          "YM-Solis30-45th": {
            "price": 438000,
            "down": 88000,
            "yct": 39500,
            "ysp": 35000,
            "fire": 15000,
            "customer_out": 0,
            "rst": -1500,
            "total": 350000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 564375.0,
            "annual": 80625.0
          },
          "YM-Solis50": {
            "price": 742000,
            "down": 149000,
            "yct": 62500,
            "ysp": 50000,
            "fire": 25000,
            "customer_out": 0,
            "rst": 11500,
            "total": 593000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 956212.53,
            "annual": 136601.79
          },
          "YM-Solis50-45th": {
            "price": 762000,
            "down": 153000,
            "yct": 64000,
            "ysp": 50000,
            "fire": 25000,
            "customer_out": 0,
            "rst": 14000,
            "total": 609000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 982012.5,
            "annual": 140287.5
          },
          "YM-Solis 105 Cabin": {
            "price": 1717000,
            "down": 344000,
            "yct": 137000,
            "ysp": 65000,
            "fire": 60000,
            "customer_out": 0,
            "rst": 82000,
            "total": 1373000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 2213962.52,
            "annual": 316280.36
          }
        }
      },
      {
        "id": "s_bob25",
        "name": "โปร 25% (เฉพาะรุ่นที่กำหนด)",
        "groups": [
          "General"
        ],
        "conditions": [
          "1. ลูกค้าทั่วไป ที่ทำกินไม่น้อยกว่า 30 ไร่",
          "2. ลูกค้า กอช. ที่ทำกินไม่ต่ำกว่า 20 ไร่",
          "3. ลูกค้าที่มีใบสมาชิกชาวไร่อ้อย (Dry Crop) พื้นที่ทำกินไม่ต่ำกว่า 20 ไร่",
          "*พื้นที่เพาะปลูก ถือกรรมสิทธิ์ของตนเอง หรือญาติสายตรง หรือที่เช่า (ญาติสายตรงคือ พ่อ แม่ ลูก คู่สมรส พี่น้อง)",
          "*แสดงในสมุดทะเบียนเกษตรได้"
        ],
        "models_subset": [
          "YM-Solis 65",
          "YM-Solis105",
          "YM-Solis30",
          "YM-Solis30-45th",
          "YM-Solis50",
          "YM-Solis50-45th",
          "YM-Solis75",
          "YM-Solis75-45th"
        ],
        "entries": {
          "YM-Solis30 | General": {
            "price": 427000,
            "down": 107000,
            "yct": 27000,
            "ysp": 25000,
            "fire": 19000,
            "customer_out": 0,
            "rst": 36000,
            "total": 320000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 520480.03,
            "annual": 74354.29
          },
          "YM-Solis30-45th | General": {
            "price": 438000,
            "down": 110000,
            "yct": 28000,
            "ysp": 25000,
            "fire": 20000,
            "customer_out": 0,
            "rst": 37000,
            "total": 328000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 533491.98,
            "annual": 76213.14
          },
          "YM-Solis50 | General": {
            "price": 742000,
            "down": 186000,
            "yct": 44000,
            "ysp": 40000,
            "fire": 13000,
            "customer_out": 0,
            "rst": 89000,
            "total": 556000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 904333.99,
            "annual": 129190.57
          },
          "YM-Solis50-45th | General": {
            "price": 762000,
            "down": 191000,
            "yct": 45000,
            "ysp": 40000,
            "fire": 14000,
            "customer_out": 0,
            "rst": 92000,
            "total": 571000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 928731.51,
            "annual": 132675.93
          },
          "YM-Solis 65 | General": {
            "price": 899000,
            "down": 225000,
            "yct": 53000,
            "ysp": 43000,
            "fire": 44000,
            "customer_out": 0,
            "rst": 85000,
            "total": 674000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 1096260.97,
            "annual": 156608.71
          },
          "YM-Solis75 | General": {
            "price": 1008000,
            "down": 252000,
            "yct": 58000,
            "ysp": 45000,
            "fire": 8000,
            "customer_out": 20000,
            "rst": 121000,
            "total": 756000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 1229634.0,
            "annual": 175662.0
          },
          "YM-Solis75-45th | General": {
            "price": 1029000,
            "down": 258000,
            "yct": 59500,
            "ysp": 45000,
            "fire": 9500,
            "customer_out": 0,
            "rst": 144000,
            "total": 771000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 1254031.52,
            "annual": 179147.36
          },
          "YM-Solis105 | General": {
            "price": 1517000,
            "down": 380000,
            "yct": 86000,
            "ysp": 55000,
            "fire": 30000,
            "customer_out": 0,
            "rst": 209000,
            "total": 1137000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 1849330.49,
            "annual": 264190.07
          }
        }
      },
      {
        "id": "s_bob30",
        "name": "โปร 30% (VHM/SMVH/BAAC, ผู้นำชุมชน/โรงงานน้ำตาล/ธกส 3A)",
        "groups": [
          "General",
          "YF,SW",
          "RT"
        ],
        "conditions": [
          "1. ลูกค้าผู้นำชุมชน ได้แก่ กำนัน, ผู้ช่วยผู้ใหญ่บ้าน, ผู้ใหญ่บ้าน, อบต., นายก อบต., รองนายก อบต., นายกเทศมนตรี, รองนายกเทศมนตรี, ที่ปรึกษานายกเทศมนตรี, เลขานุการนายกเทศมนตรี, ประธานสภาเทศบาล, รองประธานสภาเทศบาล, สมาชิกสภาเทศบาล เท่านั้น",
          "2. Sugar Mill: มีบัตรสมาชิกสมาคมชาวไร่อ้อย หรือบัตรประจำตัวชาวไร่อ้อย หรือบัตรชาวไร่อ้อยของคณะกรรมการ หรือมีพื้นที่เพาะปลูกอ้อยไม่น้อยกว่า 20 ไร่ (รวมพื้นที่ตนเองและญาติสายตรงได้)",
          "3. ลูกค้า ธกส ที่มีใบเกรด AAA, AAA+ แสดงเอกสาร",
          "4. ลูกค้า Mega Farm: เป็นสมาชิกกองทุนหมู่บ้าน (กทบ.) หรือกลุ่มแปลงใหญ่ และมีพื้นที่ทำกินอย่างน้อย 40 ไร่ (รวมพื้นที่ตนเองและญาติสายตรงได้)",
          "5. กลุ่มลูกค้า RT, YF ต้องมีรายชื่อยืนยันจาก YCT",
          "6. กลุ่มลูกค้า SW ต้องมีเล่ม หรือมีใบซื้อขาย หรือมีรถใช้งานจริง"
        ],
        "models_subset": [
          "YM-Solis 65",
          "YM-Solis30",
          "YM-Solis30-45th",
          "YM-Solis50",
          "YM-Solis50-45th",
          "YM-Solis75",
          "YM-Solis75-45th"
        ],
        "entries": {
          "YM-Solis30 | General": {
            "price": 427000,
            "down": 129000,
            "yct": 27000,
            "ysp": 25000,
            "fire": 41000,
            "customer_out": 0,
            "rst": 36000,
            "total": 298000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 484697.01,
            "annual": 69242.43
          },
          "YM-Solis30 | YF,SW": {
            "price": 427000,
            "down": 129000,
            "yct": 34000,
            "ysp": 35000,
            "fire": 29000,
            "customer_out": 0,
            "rst": 31000,
            "total": 298000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 480525.01,
            "annual": 68646.43
          },
          "YM-Solis30 | RT": {
            "price": 427000,
            "down": 129000,
            "yct": 38000,
            "ysp": 35000,
            "fire": 25000,
            "customer_out": 0,
            "rst": 31000,
            "total": 298000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 484697.01,
            "annual": 69242.43
          },
          "YM-Solis30-45th | General": {
            "price": 438000,
            "down": 132000,
            "yct": 28000,
            "ysp": 25000,
            "fire": 42000,
            "customer_out": 0,
            "rst": 37000,
            "total": 306000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 497709.03,
            "annual": 71101.29
          },
          "YM-Solis30-45th | YF,SW": {
            "price": 438000,
            "down": 132000,
            "yct": 35000,
            "ysp": 35000,
            "fire": 30000,
            "customer_out": 0,
            "rst": 32000,
            "total": 306000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 493425.03,
            "annual": 70489.29
          },
          "YM-Solis30-45th | RT": {
            "price": 438000,
            "down": 132000,
            "yct": 39500,
            "ysp": 35000,
            "fire": 25500,
            "customer_out": 0,
            "rst": 32000,
            "total": 306000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 497709.03,
            "annual": 71101.29
          },
          "YM-Solis50 | General": {
            "price": 742000,
            "down": 223000,
            "yct": 44000,
            "ysp": 40000,
            "fire": 50000,
            "customer_out": 15000,
            "rst": 74000,
            "total": 519000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 844153.52,
            "annual": 120593.36
          },
          "YM-Solis50 | YF,SW": {
            "price": 742000,
            "down": 223000,
            "yct": 55000,
            "ysp": 50000,
            "fire": 58000,
            "customer_out": 0,
            "rst": 60000,
            "total": 519000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 836887.52,
            "annual": 119555.36
          },
          "YM-Solis50 | RT": {
            "price": 742000,
            "down": 223000,
            "yct": 62500,
            "ysp": 50000,
            "fire": 29500,
            "customer_out": 0,
            "rst": 81000,
            "total": 519000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 844153.52,
            "annual": 120593.36
          },
          "YM-Solis50-45th | General": {
            "price": 762000,
            "down": 229000,
            "yct": 45000,
            "ysp": 40000,
            "fire": 52000,
            "customer_out": 0,
            "rst": 92000,
            "total": 533000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 866924.52,
            "annual": 123846.36
          },
          "YM-Solis50-45th | YF,SW": {
            "price": 762000,
            "down": 229000,
            "yct": 56500,
            "ysp": 50000,
            "fire": 37500,
            "customer_out": 0,
            "rst": 85000,
            "total": 533000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 859462.52,
            "annual": 122780.36
          },
          "YM-Solis50-45th | RT": {
            "price": 762000,
            "down": 229000,
            "yct": 64000,
            "ysp": 50000,
            "fire": 34500,
            "customer_out": 0,
            "rst": 80500,
            "total": 533000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 866924.52,
            "annual": 123846.36
          },
          "YM-Solis75 | General": {
            "price": 1008000,
            "down": 303000,
            "yct": 58000,
            "ysp": 45000,
            "fire": 59000,
            "customer_out": 20000,
            "rst": 121000,
            "total": 705000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 1146682.53,
            "annual": 163811.79
          },
          "YM-Solis75 | YF,SW": {
            "price": 1008000,
            "down": 303000,
            "yct": 72500,
            "ysp": 55000,
            "fire": 50500,
            "customer_out": 0,
            "rst": 125000,
            "total": 705000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 1136812.53,
            "annual": 162401.79
          },
          "YM-Solis75 | RT": {
            "price": 1008000,
            "down": 303000,
            "yct": 82000,
            "ysp": 55000,
            "fire": 35000,
            "customer_out": 0,
            "rst": 131000,
            "total": 705000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 1146682.53,
            "annual": 163811.79
          },
          "YM-Solis75-45th | General": {
            "price": 1029000,
            "down": 309000,
            "yct": 59500,
            "ysp": 45000,
            "fire": 60500,
            "customer_out": 0,
            "rst": 144000,
            "total": 720000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 1171079.98,
            "annual": 167297.14
          },
          "YM-Solis75-45th | YF,SW": {
            "price": 1029000,
            "down": 309000,
            "yct": 73000,
            "ysp": 55000,
            "fire": 52500,
            "customer_out": 0,
            "rst": 128500,
            "total": 720000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 1160999.98,
            "annual": 165857.14
          },
          "YM-Solis75-45th | RT": {
            "price": 1029000,
            "down": 309000,
            "yct": 83500,
            "ysp": 55000,
            "fire": 37000,
            "customer_out": 0,
            "rst": 133500,
            "total": 720000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 1171079.98,
            "annual": 167297.14
          },
          "YM-Solis 65 | General": {
            "price": 899000,
            "down": 270000,
            "yct": 53000,
            "ysp": 43000,
            "fire": 65000,
            "customer_out": 15000,
            "rst": 94000,
            "total": 629000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 1023068.48,
            "annual": 146152.64
          },
          "YM-Solis 65 | YF,SW": {
            "price": 899000,
            "down": 270000,
            "yct": 67000,
            "ysp": 53000,
            "fire": 72000,
            "customer_out": 0,
            "rst": 78000,
            "total": 629000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 1014262.48,
            "annual": 144894.64
          },
          "YM-Solis 65 | RT": {
            "price": 899000,
            "down": 270000,
            "yct": 75500,
            "ysp": 53000,
            "fire": 63500,
            "customer_out": 0,
            "rst": 78000,
            "total": 629000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 1023068.48,
            "annual": 146152.64
          }
        }
      }
    ]
  },
  "combine": {
    "models": [
      "AW82V",
      "YH700",
      "YH700 Cabin",
      "YH850GUW 2.3",
      "YH850 Cabin",
      "YH1180G26WU-TH"
    ],
    "programs": [
      {
        "id": "c_general",
        "name": "โปรลูกค้าทั่วไป ดาวน์30%",
        "groups": [
          "ทั่วไป"
        ],
        "conditions": [],
        "entries": {
          "AW82V": {
            "price": 1237000,
            "down": 372000,
            "yct": 97000,
            "ysp": 0,
            "rst": 275000,
            "customer_out": 0,
            "total": 865000,
            "interest": 0.085,
            "years": 6,
            "total_payback": 1306150.0,
            "annual": 217691.67
          },
          "YH700": {
            "price": 1292000,
            "down": 388000,
            "yct": 129000,
            "ysp": 0,
            "rst": 159000,
            "customer_out": 100000,
            "total": 904000,
            "interest": 0.085,
            "years": 6,
            "total_payback": 1365040.0,
            "annual": 227506.67
          },
          "YH700 Cabin": {
            "price": 1409000,
            "down": 423000,
            "yct": 102500,
            "ysp": 0,
            "rst": 50500,
            "customer_out": 270000,
            "total": 986000,
            "interest": 0.085,
            "years": 6,
            "total_payback": 1488860.0,
            "annual": 248143.33
          },
          "YH850GUW 2.3": {
            "price": 1562000,
            "down": 469000,
            "yct": 147000,
            "ysp": 0,
            "rst": 62000,
            "customer_out": 260000,
            "total": 1093000,
            "interest": 0.085,
            "years": 6,
            "total_payback": 1650430.0,
            "annual": 275071.67
          },
          "YH850 Cabin": {
            "price": 1658000,
            "down": 498000,
            "yct": 130000,
            "ysp": 0,
            "rst": 62000,
            "customer_out": 306000,
            "total": 1160000,
            "interest": 0.085,
            "years": 6,
            "total_payback": 1751600.0,
            "annual": 291933.33
          },
          "YH1180G26WU-TH": {
            "price": 1779000,
            "down": 534000,
            "yct": 133500,
            "ysp": 0,
            "rst": 60500,
            "customer_out": 340000,
            "total": 1245000,
            "interest": 0.085,
            "years": 6,
            "total_payback": 1879950.0,
            "annual": 313325.0
          }
        }
      },
      {
        "id": "c_owner_combine",
        "name": "โปรลูกค้ามีรถเกี่ยวนวดข้าวยันม่าร์,คูโบต้า ดาวน์20%",
        "groups": [
          "YF,SW"
        ],
        "conditions": [
          "แสดงหลักฐานเล่มทะเบียนรถ หรือสัญญาเช่าซื้อกรณียังไม่หมดงวด",
          "กรณีลูกค้าครอบครองรถเกี่ยวที่ยังผ่อนชำระ ต้องเหลือไม่เกิน 2 งวด"
        ],
        "entries": {
          "AW82V": {
            "price": 1237000,
            "down": 248000,
            "yct": 122500,
            "ysp": 0,
            "rst": 125500,
            "customer_out": 0,
            "total": 989000,
            "interest": 0.085,
            "years": 6,
            "total_payback": 1493390.0,
            "annual": 248898.33
          },
          "YH700": {
            "price": 1292000,
            "down": 259000,
            "yct": 155000,
            "ysp": 0,
            "rst": 104000,
            "customer_out": 0,
            "total": 1033000,
            "interest": 0.085,
            "years": 6,
            "total_payback": 1559830.0,
            "annual": 259971.67
          },
          "YH700 Cabin": {
            "price": 1409000,
            "down": 282000,
            "yct": 140000,
            "ysp": 0,
            "rst": 52000,
            "customer_out": 90000,
            "total": 1127000,
            "interest": 0.085,
            "years": 6,
            "total_payback": 1701770.0,
            "annual": 283628.33
          },
          "YH850GUW 2.3": {
            "price": 1562000,
            "down": 313000,
            "yct": 186500,
            "ysp": 0,
            "rst": 66500,
            "customer_out": 60000,
            "total": 1249000,
            "interest": 0.085,
            "years": 6,
            "total_payback": 1885990.0,
            "annual": 314331.67
          },
          "YH850 Cabin": {
            "price": 1658000,
            "down": 332000,
            "yct": 170500,
            "ysp": 0,
            "rst": 66500,
            "customer_out": 95000,
            "total": 1326000,
            "interest": 0.085,
            "years": 6,
            "total_payback": 2002260.0,
            "annual": 333710.0
          },
          "YH1180G26WU-TH": {
            "price": 1779000,
            "down": 356000,
            "yct": 195500,
            "ysp": 0,
            "rst": 60500,
            "customer_out": 100000,
            "total": 1423000,
            "interest": 0.085,
            "years": 6,
            "total_payback": 2148730.0,
            "annual": 358121.67
          }
        }
      },
      {
        "id": "c_owner_tractor",
        "name": "โปรลูกค้ามีรถแทรกเตอร์ยันม่าร์,ลูกค้าย้ายค่ายรถแทรกเตอร์5ยี่ห้อ ดาวน์25%",
        "groups": [
          "Dry Crop"
        ],
        "conditions": [
          "แสดงหลักฐานเล่มทะเบียนรถ หรือสัญญาเช่าซื้อกรณียังไม่หมดงวด",
          "กรณีลูกค้าครอบครองรถแทรกเตอร์ยันม่าร์ที่ยังผ่อนชำระ ต้องเหลือไม่เกิน 3 งวด"
        ],
        "entries": {
          "AW82V": {
            "price": 1237000,
            "down": 310000,
            "yct": 122500,
            "ysp": 0,
            "rst": 187500,
            "customer_out": 0,
            "total": 927000,
            "interest": 0.085,
            "years": 6,
            "total_payback": 1399770.0,
            "annual": 233295.0
          },
          "YH700": {
            "price": 1292000,
            "down": 323000,
            "yct": 155000,
            "ysp": 0,
            "rst": 108000,
            "customer_out": 60000,
            "total": 969000,
            "interest": 0.085,
            "years": 6,
            "total_payback": 1463190.0,
            "annual": 243865.0
          },
          "YH700 Cabin": {
            "price": 1409000,
            "down": 353000,
            "yct": 140000,
            "ysp": 0,
            "rst": 52000,
            "customer_out": 161000,
            "total": 1056000,
            "interest": 0.085,
            "years": 6,
            "total_payback": 1594560.0,
            "annual": 265760.0
          },
          "YH850GUW 2.3": {
            "price": 1562000,
            "down": 391000,
            "yct": 186500,
            "ysp": 0,
            "rst": 66500,
            "customer_out": 138000,
            "total": 1171000,
            "interest": 0.085,
            "years": 6,
            "total_payback": 1768210.0,
            "annual": 294701.67
          },
          "YH850 Cabin": {
            "price": 1658000,
            "down": 415000,
            "yct": 170500,
            "ysp": 0,
            "rst": 66500,
            "customer_out": 178000,
            "total": 1243000,
            "interest": 0.085,
            "years": 6,
            "total_payback": 1876930.0,
            "annual": 312821.67
          },
          "YH1180G26WU-TH": {
            "price": 1779000,
            "down": 445000,
            "yct": 195500,
            "ysp": 0,
            "rst": 60500,
            "customer_out": 189000,
            "total": 1334000,
            "interest": 0.085,
            "years": 6,
            "total_payback": 2014340.0,
            "annual": 335723.33
          }
        }
      },
      {
        "id": "c_rt",
        "name": "โปรลูกค้าเก่าชั้นดีรถเกี่ยว ดาวน์ต่ำ10%",
        "groups": [
          "RT"
        ],
        "conditions": [],
        "entries": {
          "AW82V": {
            "price": 1237000,
            "down": 124000,
            "yct": 70000,
            "ysp": 0,
            "rst": 54000,
            "customer_out": 0,
            "total": 1113000,
            "interest": 0.085,
            "years": 6,
            "total_payback": 1680630.0,
            "annual": 280105.0
          },
          "YH700": {
            "price": 1292000,
            "down": 130000,
            "yct": 100000,
            "ysp": 0,
            "rst": 30000,
            "customer_out": 0,
            "total": 1162000,
            "interest": 0.085,
            "years": 6,
            "total_payback": 1754620.0,
            "annual": 292436.67
          },
          "YH700 Cabin": {
            "price": 1409000,
            "down": 141000,
            "yct": 80000,
            "ysp": 0,
            "rst": 61000,
            "customer_out": 0,
            "total": 1268000,
            "interest": 0.085,
            "years": 6,
            "total_payback": 1914680.0,
            "annual": 319113.33
          },
          "YH850GUW 2.3": {
            "price": 1562000,
            "down": 157000,
            "yct": 120000,
            "ysp": 0,
            "rst": 37000,
            "customer_out": 0,
            "total": 1405000,
            "interest": 0.085,
            "years": 6,
            "total_payback": 2121550.0,
            "annual": 353591.67
          },
          "YH850 Cabin": {
            "price": 1658000,
            "down": 166000,
            "yct": 100000,
            "ysp": 0,
            "rst": 66000,
            "customer_out": 0,
            "total": 1492000,
            "interest": 0.085,
            "years": 6,
            "total_payback": 2252920.0,
            "annual": 375486.67
          },
          "YH1180G26WU-TH": {
            "price": 1779000,
            "down": 178000,
            "yct": 120000,
            "ysp": 0,
            "rst": 58000,
            "customer_out": 0,
            "total": 1601000,
            "interest": 0.085,
            "years": 6,
            "total_payback": 2417510.0,
            "annual": 402918.33
          }
        }
      }
    ]
  },
  "yanmar_lookup_keys": {
    "EF393A / EF393T-45th": [
      "EF393A",
      "EF393T-45th",
      "EF393T45th / EF393A",
      "EF393T 45th"
    ],
    "YM351R": [
      "YM351R"
    ],
    "YM358R": [
      "YM358R"
    ],
    "YM358R-L1": [
      "YM358R-L1"
    ],
    "EF725T": [
      "EF725T"
    ]
  }
};
