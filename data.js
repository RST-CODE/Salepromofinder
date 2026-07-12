// ============================================================
// RST Promo Finder — ข้อมูลราคา/โปรโมชั่นทั้งหมด (แยกออกมาจากไฟล์หลัก)
// แก้ไขไฟล์นี้ไฟล์เดียวเวลาราคา/เงื่อนไข/YCT เปลี่ยน ไม่ต้องเปิดไฟล์ HTML หลักเลย
// โครงสร้าง: DATA.yanmar / DATA.solis แต่ละยี่ห้อมี models (รายชื่อรุ่น) และ programs (รายการโปรแต่ละโปร)
// แต่ละ program มี entries เป็นราคา/ยอดดาวน์/YCT/YSP ต่อรุ่น ตามเงื่อนไขของโปรนั้นๆ
// ============================================================
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
        "name": "ทั่วไป (ไม่เข้าเงื่อนไขพิเศษ)",
        "groups": [
          "ทั่วไป"
        ],
        "conditions": [
          "ไม่มีของแถม / มีของแถมตามรายการเซตมาตรฐาน",
          "สำหรับลูกค้าทั่วไปที่ไม่เข้าเกณฑ์โปรพิเศษอื่น"
        ],
        "entries": {
          "EF393A": {
            "price": 584000,
            "down": 117000,
            "yct": 32500,
            "fire": 20000,
            "customer_out": 0,
            "rst": 64500,
            "total": 467000,
            "interest": 0.0895,
            "years": 10,
            "total_payback": 884965,
            "annual": 88496.5
          },
          "EF393T-45th": {
            "price": 584000,
            "down": 117000,
            "yct": 32500,
            "fire": 20000,
            "customer_out": 0,
            "rst": 64500,
            "total": 467000,
            "interest": 0.0895,
            "years": 10,
            "total_payback": 884965,
            "annual": 88496.5
          },
          "YM351R": {
            "price": 733000,
            "down": 147000,
            "yct": 43500,
            "fire": 10000,
            "customer_out": 15000,
            "rst": 78500,
            "total": 586000,
            "interest": 0.0895,
            "years": 10,
            "total_payback": 1110470,
            "annual": 111047
          },
          "YM358R": {
            "price": 831000,
            "down": 167000,
            "yct": 44000,
            "fire": 25000,
            "customer_out": 0,
            "rst": 98000,
            "total": 664000,
            "interest": 0.0895,
            "years": 10,
            "total_payback": 1258280,
            "annual": 125828
          },
          "YM358R-L1": {
            "price": 892000,
            "down": 179000,
            "yct": 47000,
            "fire": 0,
            "customer_out": 20000,
            "rst": 112000,
            "total": 713000,
            "interest": 0.0895,
            "years": 10,
            "total_payback": 1351135,
            "annual": 135113.5
          },
          "EF725T": {
            "price": 1072000,
            "down": 215000,
            "yct": 65000,
            "fire": 0,
            "customer_out": 40000,
            "rst": 110000,
            "total": 857000,
            "interest": 0.0895,
            "years": 10,
            "total_payback": 1624015,
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
        "id": "y_target_general",
        "name": "Target - ทั่วไป (มีพื้นที่ทำกิน)",
        "groups": [
          "ทั่วไป(มีที่ทำกิน)"
        ],
        "conditions": [
          "ผู้สมัครต้องมีพื้นที่เพาะปลูกพืชทางการเกษตร (ไม่จำกัดชนิดพืช) อย่างน้อย 50 ไร่ โดยถือครองกรรมสิทธิ์ของตนเองหรือเช่า",
          "สามารถนำพื้นที่ทำกินของญาติสายตรงมารวมได้"
        ],
        "entries": {
          "EF393A": {
            "price": 584000,
            "down": 117000,
            "yct": 32500,
            "ysp": 25000,
            "fire": 20000,
            "customer_out": 0,
            "rst": 39500,
            "interest": 0.0895
          },
          "EF393T-45th": {
            "price": 584000,
            "down": 117000,
            "yct": 32500,
            "ysp": 25000,
            "fire": 20000,
            "customer_out": 0,
            "rst": 39500,
            "interest": 0.0895
          },
          "YM351R": {
            "price": 733000,
            "down": 147000,
            "yct": 43500,
            "ysp": 30000,
            "fire": 10000,
            "customer_out": 0,
            "rst": 63500,
            "interest": 0.0895
          },
          "YM358R": {
            "price": 831000,
            "down": 167000,
            "yct": 44000,
            "ysp": 35000,
            "fire": 25000,
            "customer_out": 0,
            "rst": 63000,
            "interest": 0.0895
          },
          "YM358R-L1": {
            "price": 892000,
            "down": 179000,
            "yct": 47000,
            "ysp": 45000,
            "fire": 0,
            "customer_out": 0,
            "rst": 87000,
            "interest": 0.0895
          },
          "EF725T": {
            "price": 1072000,
            "down": 215000,
            "yct": 65000,
            "ysp": 45000,
            "fire": 0,
            "customer_out": 25000,
            "rst": 80000,
            "interest": 0.0895
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
        "id": "y_target_rt",
        "name": "Target - RT",
        "groups": [
          "RT"
        ],
        "conditions": [
          "ไม่กำหนดจำนวนไร่"
        ],
        "entries": {
          "EF393A": {
            "price": 584000,
            "down": 117000,
            "yct": 67000,
            "ysp": 35000,
            "fire": 20000,
            "customer_out": 0,
            "rst": -5000,
            "interest": 0.0875
          },
          "EF393T-45th": {
            "price": 584000,
            "down": 117000,
            "yct": 67000,
            "ysp": 35000,
            "fire": 20000,
            "customer_out": 0,
            "rst": -5000,
            "interest": 0.0875
          },
          "YM351R": {
            "price": 733000,
            "down": 147000,
            "yct": 82000,
            "ysp": 40000,
            "fire": 10000,
            "customer_out": 0,
            "rst": 15000,
            "interest": 0.0875
          },
          "YM358R": {
            "price": 831000,
            "down": 167000,
            "yct": 98000,
            "ysp": 50000,
            "fire": 0,
            "customer_out": 0,
            "rst": 19000,
            "interest": 0.0875
          },
          "YM358R-L1": {
            "price": 892000,
            "down": 179000,
            "yct": 92000,
            "ysp": 70000,
            "fire": 0,
            "customer_out": 0,
            "rst": 17000,
            "interest": 0.0875
          },
          "EF725T": {
            "price": 1072000,
            "down": 215000,
            "yct": 108000,
            "ysp": 50000,
            "fire": 0,
            "customer_out": 0,
            "rst": 57000,
            "interest": 0.0875
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
        "id": "y_target_yfsw",
        "name": "Target - YF, SW",
        "groups": [
          "YF,SW"
        ],
        "conditions": [
          "ไม่กำหนดจำนวนไร่"
        ],
        "entries": {
          "EF393A": {
            "price": 584000,
            "down": 117000,
            "yct": 54000,
            "ysp": 30000,
            "fire": 20000,
            "customer_out": 0,
            "rst": 13000,
            "interest": 0.0875
          },
          "EF393T-45th": {
            "price": 584000,
            "down": 117000,
            "yct": 54000,
            "ysp": 30000,
            "fire": 20000,
            "customer_out": 0,
            "rst": 13000,
            "interest": 0.0875
          },
          "YM351R": {
            "price": 733000,
            "down": 147000,
            "yct": 64500,
            "ysp": 35000,
            "fire": 10000,
            "customer_out": 0,
            "rst": 37500,
            "interest": 0.0875
          },
          "YM358R": {
            "price": 831000,
            "down": 167000,
            "yct": 75500,
            "ysp": 40000,
            "fire": 0,
            "customer_out": 0,
            "rst": 51500,
            "interest": 0.0875
          },
          "YM358R-L1": {
            "price": 892000,
            "down": 179000,
            "yct": 80000,
            "ysp": 60000,
            "fire": 0,
            "customer_out": 0,
            "rst": 39000,
            "interest": 0.0875
          },
          "EF725T": {
            "price": 1072000,
            "down": 215000,
            "yct": 108000,
            "ysp": 50000,
            "fire": 0,
            "customer_out": 0,
            "rst": 57000,
            "interest": 0.0875
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
        "id": "y_general30",
        "name": "ทั่วไป 30%",
        "groups": [
          "General",
          "SW,YF",
          "RT"
        ],
        "conditions": [
          "แบ่งกลุ่มตามความสัมพันธ์กับ Yanmar: General = ลูกค้าทั่วไป, SW,YF = มีรถแทรกเตอร์ Yanmar อยู่แล้ว, RT = ลูกค้าชั้นดี Yanmar"
        ],
        "models_subset": [
          "EF393T45th / EF393A",
          "YM351R"
        ],
        "entries": {
          "EF393T45th / EF393A | General": {
            "price": 584000,
            "down": 176000,
            "yct": 32500,
            "ysp": 66500,
            "customer_out": 20000,
            "rst": 57000,
            "interest": 0.0895,
            "total": 408000,
            "years": 10
          },
          "EF393T45th / EF393A | SW,YF": {
            "price": 0,
            "down": 176000,
            "yct": 54000,
            "ysp": 45000,
            "customer_out": 20000,
            "rst": 57000,
            "interest": 0.0875,
            "total": 408000,
            "years": 10
          },
          "EF393T45th / EF393A | RT": {
            "price": 0,
            "down": 176000,
            "yct": 67000,
            "ysp": 32000,
            "customer_out": 20000,
            "rst": 57000,
            "interest": 0.0875,
            "total": 408000,
            "years": 10
          },
          "YM351R | General": {
            "price": 733000,
            "down": 220000,
            "yct": 43500,
            "ysp": 74500,
            "customer_out": 30000,
            "rst": 72000,
            "interest": 0.0895,
            "total": 513000,
            "years": 10
          },
          "YM351R | SW,YF": {
            "price": 0,
            "down": 220000,
            "yct": 64500,
            "ysp": 53500,
            "customer_out": 30000,
            "rst": 72000,
            "interest": 0.0875,
            "total": 513000,
            "years": 10
          },
          "YM351R | RT": {
            "price": 0,
            "down": 220000,
            "yct": 82000,
            "ysp": 36000,
            "customer_out": 30000,
            "rst": 72000,
            "interest": 0.0875,
            "total": 513000,
            "years": 10
          }
        },
        "gifts": [
          "ทอง 0.3 กรัม",
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
          "น้ำมันเครื่อง 1L 1 แกลลอน"
        ]
      },
      {
        "id": "y_bob25",
        "name": "Bob 25%",
        "groups": [
          "General",
          "YF,SW",
          "RT"
        ],
        "conditions": [
          "RT, YF ไม่กำหนดพื้นที่ทำกิน",
          "SW, ทั่วไป ที่ทำกินไม่น้อยกว่า 30 ไร่",
          "ลูกค้า กอช. ที่ทำกินไม่ต่ำกว่า 20 ไร่"
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
            "ysp": 25000,
            "yct": 32500,
            "fire": 40500,
            "customer_out": 0,
            "rst": 48000,
            "interest": 0.0895,
            "total": 438000,
            "years": 10
          },
          "EF393T 45th | YF,SW": {
            "price": 584000,
            "down": 146000,
            "ysp": 30000,
            "yct": 54000,
            "fire": 24000,
            "customer_out": 0,
            "rst": 38000,
            "interest": 0.0875,
            "total": 438000,
            "years": 10
          },
          "EF393T 45th | RT": {
            "price": 584000,
            "down": 146000,
            "ysp": 35000,
            "yct": 67000,
            "fire": 6000,
            "customer_out": 0,
            "rst": 38000,
            "interest": 0.0875,
            "total": 438000,
            "years": 10
          },
          "YM351R | General": {
            "price": 733000,
            "down": 184000,
            "ysp": 30000,
            "yct": 43500,
            "fire": 47500,
            "customer_out": 0,
            "rst": 63000,
            "interest": 0.0895,
            "total": 549000,
            "years": 10
          },
          "YM351R | YF,SW": {
            "price": 733000,
            "down": 184000,
            "ysp": 35000,
            "yct": 64500,
            "fire": 36500,
            "customer_out": 0,
            "rst": 48000,
            "interest": 0.0875,
            "total": 549000,
            "years": 10
          },
          "YM351R | RT": {
            "price": 733000,
            "down": 184000,
            "ysp": 40000,
            "yct": 82000,
            "fire": 14000,
            "customer_out": 0,
            "rst": 48000,
            "interest": 0.0875,
            "total": 549000,
            "years": 10
          },
          "YM358R | General": {
            "price": 831000,
            "down": 208000,
            "ysp": 35000,
            "yct": 44000,
            "fire": 45000,
            "customer_out": 0,
            "rst": 84000,
            "interest": 0.0895,
            "total": 623000,
            "years": 10
          },
          "YM358R | YF,SW": {
            "price": 831000,
            "down": 208000,
            "ysp": 40000,
            "yct": 75500,
            "fire": 35000,
            "customer_out": 0,
            "rst": 57500,
            "interest": 0.0875,
            "total": 623000,
            "years": 10
          },
          "YM358R | RT": {
            "price": 831000,
            "down": 208000,
            "ysp": 50000,
            "yct": 98000,
            "fire": 6000,
            "customer_out": 0,
            "rst": 54000,
            "interest": 0.0875,
            "total": 623000,
            "years": 10
          },
          "YM358R-L1 | General": {
            "price": 892000,
            "down": 223000,
            "ysp": 45000,
            "yct": 47000,
            "fire": 46000,
            "customer_out": 0,
            "rst": 85000,
            "interest": 0.0895,
            "total": 669000,
            "years": 10
          },
          "YM358R-L1 | YF,SW": {
            "price": 892000,
            "down": 223000,
            "ysp": 60000,
            "yct": 80000,
            "fire": 25000,
            "customer_out": 0,
            "rst": 58000,
            "interest": 0.0875,
            "total": 669000,
            "years": 10
          },
          "YM358R-L1 | RT": {
            "price": 892000,
            "down": 223000,
            "ysp": 70000,
            "yct": 92000,
            "fire": 3000,
            "customer_out": 0,
            "rst": 58000,
            "interest": 0.0875,
            "total": 669000,
            "years": 10
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
        "name": "Bob 30%",
        "groups": [
          "General",
          "YF,SW",
          "RT"
        ],
        "conditions": [
          "เฉพาะลูกค้าชั้นดี ธกส 3A/3A+, ผู้นำชุมชน (กำนัน/ผู้ใหญ่บ้าน ฯลฯ), หรือโรงงานน้ำตาล"
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
            "ysp": 25000,
            "yct": 32500,
            "fire": 70500,
            "customer_out": 0,
            "rst": 48000,
            "interest": 0.0895,
            "total": 408000,
            "years": 10
          },
          "EF393T 45th | YF,SW": {
            "price": 584000,
            "down": 176000,
            "ysp": 30000,
            "yct": 54000,
            "fire": 54000,
            "customer_out": 0,
            "rst": 38000,
            "interest": 0.0875,
            "total": 408000,
            "years": 10
          },
          "EF393T 45th | RT": {
            "price": 584000,
            "down": 176000,
            "ysp": 35000,
            "yct": 67000,
            "fire": 36000,
            "customer_out": 0,
            "rst": 38000,
            "interest": 0.0875,
            "total": 408000,
            "years": 10
          },
          "YM351R | General": {
            "price": 733000,
            "down": 220000,
            "ysp": 30000,
            "yct": 43500,
            "fire": 83500,
            "customer_out": 0,
            "rst": 63000,
            "interest": 0.0895,
            "total": 513000,
            "years": 10
          },
          "YM351R | YF,SW": {
            "price": 733000,
            "down": 220000,
            "ysp": 35000,
            "yct": 64500,
            "fire": 72500,
            "customer_out": 0,
            "rst": 48000,
            "interest": 0.0875,
            "total": 513000,
            "years": 10
          },
          "YM351R | RT": {
            "price": 733000,
            "down": 220000,
            "ysp": 40000,
            "yct": 82000,
            "fire": 50000,
            "customer_out": 0,
            "rst": 48000,
            "interest": 0.0875,
            "total": 513000,
            "years": 10
          },
          "YM358R | General": {
            "price": 831000,
            "down": 250000,
            "ysp": 35000,
            "yct": 44000,
            "fire": 87000,
            "customer_out": 0,
            "rst": 84000,
            "interest": 0.0895,
            "total": 581000,
            "years": 10
          },
          "YM358R | YF,SW": {
            "price": 831000,
            "down": 250000,
            "ysp": 40000,
            "yct": 75500,
            "fire": 77000,
            "customer_out": 0,
            "rst": 57500,
            "interest": 0.0875,
            "total": 581000,
            "years": 10
          },
          "YM358R | RT": {
            "price": 831000,
            "down": 250000,
            "ysp": 50000,
            "yct": 98000,
            "fire": 44500,
            "customer_out": 0,
            "rst": 57500,
            "interest": 0.0875,
            "total": 581000,
            "years": 10
          },
          "YM358R-L1 | General": {
            "price": 892000,
            "down": 268000,
            "ysp": 45000,
            "yct": 47000,
            "fire": 91000,
            "customer_out": 0,
            "rst": 85000,
            "interest": 0.0895,
            "total": 624000,
            "years": 10
          },
          "YM358R-L1 | YF,SW": {
            "price": 892000,
            "down": 268000,
            "ysp": 60000,
            "yct": 80000,
            "fire": 70000,
            "customer_out": 0,
            "rst": 58000,
            "interest": 0.0875,
            "total": 624000,
            "years": 10
          },
          "YM358R-L1 | RT": {
            "price": 892000,
            "down": 268000,
            "ysp": 70000,
            "yct": 92000,
            "fire": 48000,
            "customer_out": 0,
            "rst": 58000,
            "interest": 0.0875,
            "total": 624000,
            "years": 10
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
      },
      {
        "id": "y_tradein",
        "name": "Trade-in 20% (เกรดรถเก่า)",
        "groups": [
          "Trade-in"
        ],
        "conditions": [
          "ต้องมีเอกสารแสดงกรรมสิทธิ์รถเดิม + เอกสารแสดงเกรดรถ",
          "เกรด AA, AAA: ดอกเบี้ย 8% ผ่อน 8/10 ปี",
          "เกรด B, A: ดอกเบี้ย 8.5% ผ่อน 9/10 ปี"
        ],
        "entries": {
          "EF393A": {
            "price": 584000,
            "down": 117000,
            "yct": 54000,
            "ysp": 27000,
            "rst": 36000
          },
          "EF393T-45th": {
            "price": 584000,
            "down": 117000,
            "yct": 54000,
            "ysp": 27000,
            "rst": 36000
          },
          "YM351R": {
            "price": 733000,
            "down": 147000,
            "yct": 64500,
            "ysp": 40500,
            "rst": 42000
          },
          "YM358R": {
            "price": 831000,
            "down": 167000,
            "yct": 75500,
            "ysp": 46500,
            "rst": 45000
          },
          "YM358R-L1": {
            "price": 892000,
            "down": 179000,
            "yct": 80000,
            "ysp": 58000,
            "rst": 41000
          },
          "EF725T": {
            "price": 1072000,
            "down": 215000,
            "yct": 108000,
            "ysp": 54000,
            "rst": 53000
          }
        }
      }
    ]
  },
  "solis": {
    "models": [
      "Solis 26",
      "YM-Solis22",
      "YM-Solis26",
      "YM-Solis30",
      "YM-Solis30-45th",
      "YM-Solis50-45th",
      "YM-Solis75",
      "YM-Solis75-45th",
      "YM-Solis 65",
      "YM-Solis90",
      "YM-Solis105",
      "YM-Solis105-45th",
      "YM-Solis110"
    ],
    "programs": [
      {
        "id": "s_general",
        "name": "ไม่เข้าเงื่อนไข (ทั่วไป)",
        "groups": [
          "ทั่วไป"
        ],
        "conditions": [
          "ดอกเบี้ย 8.95%, ผ่อน 7 ปี (โดยทั่วไป)"
        ],
        "entries": {
          "Solis 26": {
            "rate": 0.25,
            "price": 339000,
            "down": 85000,
            "ysp": 0,
            "yct": 19000,
            "fire": 0,
            "customer_out": 30000,
            "rst": 36000,
            "interest": 0.0895,
            "years": 7,
            "total": 254000,
            "annual": 59018.71,
            "total_payback": 413131.0
          },
          "YM-Solis22": {
            "rate": 0.2,
            "price": 312000,
            "down": 63000,
            "ysp": 0,
            "yct": 21000,
            "fire": 10000,
            "customer_out": 0,
            "rst": 32000,
            "interest": 0.0895,
            "years": 7,
            "total": 249000,
            "annual": 57856.93,
            "total_payback": 404998.5
          },
          "YM-Solis26": {
            "rate": 0.2,
            "price": 380000,
            "down": 76000,
            "ysp": 0,
            "yct": 24500,
            "fire": 10000,
            "customer_out": 15000,
            "rst": 26500,
            "interest": 0.0895,
            "years": 7,
            "total": 304000,
            "annual": 70636.57,
            "total_payback": 494456.0
          },
          "YM-Solis30": {
            "rate": 0.2,
            "price": 427000,
            "down": 86000,
            "ysp": 0,
            "yct": 27000,
            "fire": 0,
            "customer_out": 20000,
            "rst": 39000,
            "interest": 0.0895,
            "years": 7,
            "total": 341000,
            "annual": 79233.79,
            "total_payback": 554636.5
          },
          "YM-Solis30-45th": {
            "rate": 0.2,
            "price": 438000,
            "down": 88000,
            "ysp": 0,
            "yct": 28000,
            "fire": 0,
            "customer_out": 20000,
            "rst": 40000,
            "interest": 0.0895,
            "years": 7,
            "total": 350000,
            "annual": 81325.0,
            "total_payback": 569275.0
          },
          "YM-Solis75": {
            "rate": 0.2,
            "price": 1008000,
            "down": 202000,
            "ysp": 0,
            "yct": 58000,
            "fire": 0,
            "customer_out": 30000,
            "rst": 114000,
            "interest": 0.0895,
            "years": 7,
            "total": 806000,
            "annual": 187279.86,
            "total_payback": 1310959.0
          },
          "YM-Solis75-45th": {
            "rate": 0.2,
            "price": 1029000,
            "down": 206000,
            "ysp": 0,
            "yct": 59500,
            "fire": 0,
            "customer_out": 35000,
            "rst": 111500,
            "note": "มีสต๊อกรุ่น 45 ปี เหลือ 3 คัน ให้ขายรุ่นธรรมดา (YM-Solis75) ก่อน",
            "interest": 0.0895,
            "years": 7,
            "total": 823000,
            "annual": 191229.93,
            "total_payback": 1338609.5
          },
          "YM-Solis 65": {
            "rate": 0.2,
            "price": 899000,
            "down": 180000,
            "ysp": 0,
            "yct": 53000,
            "fire": 0,
            "customer_out": 30000,
            "rst": 97000,
            "interest": 0.0895,
            "years": 7,
            "total": 719000,
            "annual": 167064.79,
            "total_payback": 1169453.5
          },
          "YM-Solis90": {
            "rate": 0.2,
            "price": 1327000,
            "down": 266000,
            "ysp": 0,
            "yct": 76000,
            "fire": 0,
            "customer_out": 45000,
            "rst": 145000,
            "interest": 0.0895,
            "years": 7,
            "total": 1061000,
            "annual": 246530.93,
            "total_payback": 1725716.5
          },
          "YM-Solis105-45th": {
            "rate": 0.2,
            "price": 1545000,
            "down": 309000,
            "ysp": 0,
            "yct": 87000,
            "fire": 0,
            "customer_out": 60000,
            "rst": 162000,
            "interest": 0.0895,
            "years": 7,
            "total": 1236000,
            "annual": 287193.43,
            "total_payback": 2010354.0
          },
          "YM-Solis50-45th": {
            "rate": 0.2,
            "price": 762000,
            "down": 153000,
            "ysp": 0,
            "yct": 45000,
            "fire": 25000,
            "customer_out": 20000,
            "rst": 63000,
            "interest": 0.0895,
            "years": 7,
            "total": 609000,
            "annual": 141505.5,
            "total_payback": 990538.5
          },
          "YM-Solis105": {
            "rate": 0.2,
            "price": 1517000,
            "down": 303400,
            "ysp": 0,
            "yct": 71000,
            "fire": 0,
            "customer_out": 70400,
            "rst": 162000,
            "interest": 0.0895,
            "years": 7,
            "total": 1213600,
            "annual": 281988.63,
            "total_payback": 2010354.0
          },
          "YM-Solis110": {
            "rate": 0.2,
            "price": 1591000,
            "down": 318200,
            "ysp": 0,
            "yct": 73500,
            "fire": 0,
            "customer_out": 82700,
            "rst": 162000,
            "interest": 0.0895,
            "years": 7,
            "total": 1272800,
            "annual": 295744.17,
            "total_payback": 2010354.0
          }
        }
      },
      {
        "id": "s_target_general",
        "name": "Target - ทั่วไป (กลุ่มข้าว/พืชไร่/พืชรวม)",
        "groups": [
          "ทั่วไป(กลุ่มข้าว/พืชไร่/พืชรวม)"
        ],
        "conditions": [
          "กลุ่มข้าว: ผู้สมัครถือกรรมสิทธิ์ของตัวเองหรือที่เช่า อย่างน้อย 50 ไร่",
          "กลุ่มพืชไร่ (อ้อย มัน ข้าวโพด): ถือกรรมสิทธิ์เป็นของตนเองหรือที่เช่า อย่างน้อย 30 ไร่",
          "กลุ่มพืชรวม (พืชไร่+ข้าว): ถือพื้นที่พืชไร่อย่างน้อย 20 ไร่ และข้าวอย่างน้อย 10 ไร่ รวม 30 ไร่ (รวมพื้นที่ของญาติสายตรงได้)",
          "ฟรีดาวน์ 7 คันสุดท้าย (ตามสต็อกที่กำหนด)"
        ],
        "entries": {
          "Solis 26": {
            "rate": 0.25,
            "price": 339000,
            "down": 85000,
            "ysp": 0,
            "yct": 19000,
            "fire": 0,
            "customer_out": 30000,
            "rst": 36000,
            "total": 0,
            "interest": 0,
            "years": 0,
            "total_payback": 0,
            "annual": 0
          },
          "YM-Solis22": {
            "rate": 0.15,
            "price": 312000,
            "down": 47000,
            "ysp": 0,
            "yct": 0,
            "fire": 10000,
            "customer_out": 10000,
            "rst": 27000,
            "total": 265000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 431022.5,
            "annual": 61574.642857142855
          },
          "YM-Solis26": {
            "rate": 0.15,
            "price": 380000,
            "down": 57000,
            "ysp": 0,
            "yct": 0,
            "fire": 10000,
            "customer_out": 15000,
            "rst": 32000,
            "total": 323000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 525359.5,
            "annual": 75051.35714285714
          },
          "YM-Solis30": {
            "rate": 0.2,
            "price": 427000,
            "down": 86000,
            "ysp": 25000,
            "yct": 27000,
            "fire": 0,
            "customer_out": 0,
            "rst": 34000,
            "total": 341000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 554636.5,
            "annual": 79233.78571428571
          },
          "YM-Solis30-45th": {
            "rate": 0.2,
            "price": 438000,
            "down": 88000,
            "ysp": 25000,
            "yct": 28000,
            "fire": 0,
            "customer_out": 0,
            "rst": 35000,
            "total": 350000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 569275,
            "annual": 81325
          },
          "YM-Solis75": {
            "rate": 0.2,
            "price": 1008000,
            "down": 202000,
            "ysp": 45000,
            "yct": 58000,
            "fire": 0,
            "customer_out": 0,
            "rst": 99000,
            "total": 806000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 1310959,
            "annual": 187279.85714285713
          },
          "YM-Solis 65": {
            "rate": 0.2,
            "price": 899000,
            "down": 180000,
            "ysp": 43000,
            "yct": 53000,
            "fire": 0,
            "customer_out": 0,
            "rst": 84000,
            "total": 0,
            "interest": 0,
            "years": 0,
            "total_payback": 0,
            "annual": 0
          },
          "YM-Solis90": {
            "rate": 0.2,
            "price": 1327000,
            "down": 266000,
            "ysp": 0,
            "yct": 76000,
            "fire": 0,
            "customer_out": 45000,
            "rst": 145000,
            "total": 1061000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 1725716.5,
            "annual": 246530.92857142858
          },
          "YM-Solis105-45th": {
            "rate": 0.2,
            "price": 1545000,
            "down": 309000,
            "ysp": 55000,
            "yct": 87000,
            "fire": 0,
            "customer_out": 45000,
            "rst": 122000,
            "total": 1236000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 2010354,
            "annual": 287193.4285714286
          },
          "YM-Solis50-45th": {
            "rate": 0.2,
            "price": 762000,
            "down": 153000,
            "ysp": 40000,
            "yct": 45000,
            "fire": 25000,
            "customer_out": 0,
            "rst": 43000,
            "total": 609000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 990538.5,
            "annual": 141505.5
          },
          "YM-Solis105": {
            "rate": 0.2,
            "price": 1517000,
            "down": 303400,
            "ysp": 55000,
            "yct": 122000,
            "fire": 0,
            "customer_out": 0,
            "rst": 122000,
            "total": 1213600,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 2010354,
            "annual": 281988.63
          },
          "YM-Solis110": {
            "rate": 0.2,
            "price": 1591000,
            "down": 318200,
            "ysp": 55000,
            "yct": 126500,
            "fire": 0,
            "customer_out": 0,
            "rst": 122000,
            "total": 1272800,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 2010354,
            "annual": 295744.17
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
          "Solis 26": {
            "rate": 0.25,
            "price": 339000,
            "down": 85000,
            "ysp": 0,
            "yct": 19000,
            "fire": 0,
            "customer_out": 30000,
            "rst": 36000,
            "interest": 0.0875,
            "years": 7,
            "total": 254000,
            "annual": 58510.71,
            "total_payback": 409575.0
          },
          "YM-Solis22": {
            "rate": 0.2,
            "price": 312000,
            "down": 63000,
            "ysp": 0,
            "yct": 27500,
            "fire": 10000,
            "customer_out": 0,
            "rst": 25500,
            "interest": 0.0875,
            "years": 7,
            "total": 249000,
            "annual": 57358.93,
            "total_payback": 401512.5
          },
          "YM-Solis26": {
            "rate": 0.2,
            "price": 380000,
            "down": 76000,
            "ysp": 0,
            "yct": 31000,
            "fire": 10000,
            "customer_out": 0,
            "rst": 35000,
            "interest": 0.0875,
            "years": 7,
            "total": 304000,
            "annual": 70028.57,
            "total_payback": 490200.0
          },
          "YM-Solis30": {
            "rate": 0.2,
            "price": 427000,
            "down": 86000,
            "ysp": 35000,
            "yct": 34000,
            "fire": 0,
            "customer_out": 0,
            "rst": 17000,
            "interest": 0.0875,
            "years": 7,
            "total": 341000,
            "annual": 78551.79,
            "total_payback": 549862.5
          },
          "YM-Solis30-45th": {
            "rate": 0.2,
            "price": 438000,
            "down": 88000,
            "ysp": 35000,
            "yct": 35000,
            "fire": 0,
            "customer_out": 0,
            "rst": 18000,
            "interest": 0.0875,
            "years": 7,
            "total": 350000,
            "annual": 80625.0,
            "total_payback": 564375.0
          },
          "YM-Solis75": {
            "rate": 0.2,
            "price": 1008000,
            "down": 202000,
            "ysp": 55000,
            "yct": 72500,
            "fire": 0,
            "customer_out": 0,
            "rst": 74500,
            "interest": 0.0875,
            "years": 7,
            "total": 806000,
            "annual": 185667.86,
            "total_payback": 1299675.0
          },
          "YM-Solis 65": {
            "rate": 0.2,
            "price": 899000,
            "down": 180000,
            "ysp": 53000,
            "yct": 67000,
            "fire": 0,
            "customer_out": 0,
            "rst": 60000,
            "interest": 0.0875,
            "years": 7,
            "total": 719000,
            "annual": 165626.79,
            "total_payback": 1159387.5
          },
          "YM-Solis75-45th": {
            "rate": 0.2,
            "price": 1029000,
            "down": 206000,
            "ysp": 55000,
            "yct": 73000,
            "fire": 0,
            "customer_out": 0,
            "rst": 78000,
            "interest": 0.0875,
            "years": 7,
            "total": 823000,
            "annual": 189583.93,
            "total_payback": 1327087.5
          },
          "YM-Solis90": {
            "rate": 0.2,
            "price": 1327000,
            "down": 266000,
            "ysp": 0,
            "yct": 93000,
            "fire": 0,
            "customer_out": 45000,
            "rst": 128000,
            "interest": 0.0875,
            "years": 7,
            "total": 1061000,
            "annual": 244408.93,
            "total_payback": 1710862.5
          },
          "YM-Solis105-45th": {
            "rate": 0.2,
            "price": 1545000,
            "down": 309000,
            "ysp": 65000,
            "yct": 108000,
            "fire": 0,
            "customer_out": 0,
            "rst": 136000,
            "interest": 0.0875,
            "years": 7,
            "total": 1236000,
            "annual": 284721.43,
            "total_payback": 1993050.0
          },
          "YM-Solis50-45th": {
            "rate": 0.2,
            "price": 762000,
            "down": 153000,
            "ysp": 50000,
            "yct": 56500,
            "fire": 25000,
            "customer_out": 0,
            "rst": 21500,
            "interest": 0.0875,
            "years": 7,
            "total": 609000,
            "annual": 140287.5,
            "total_payback": 982012.5
          },
          "YM-Solis105": {
            "rate": 0.2,
            "price": 1517000,
            "down": 303400,
            "ysp": 65000,
            "yct": 122000,
            "fire": 0,
            "customer_out": 0,
            "rst": 136000,
            "interest": 0.0875,
            "years": 7,
            "total": 1213600,
            "annual": 279561.43,
            "total_payback": 1993050.0
          },
          "YM-Solis110": {
            "rate": 0.2,
            "price": 1591000,
            "down": 318200,
            "ysp": 65000,
            "yct": 126500,
            "fire": 0,
            "customer_out": 0,
            "rst": 136000,
            "interest": 0.0875,
            "years": 7,
            "total": 1272800,
            "annual": 293198.57,
            "total_payback": 1993050.0
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
          "Solis 26": {
            "rate": 0.25,
            "price": 339000,
            "down": 85000,
            "ysp": 0,
            "yct": 19000,
            "fire": 0,
            "customer_out": 30000,
            "rst": 36000,
            "interest": 0.0875,
            "years": 7,
            "total": 254000,
            "annual": 58510.71,
            "total_payback": 409575.0
          },
          "YM-Solis22": {
            "rate": 0.2,
            "price": 312000,
            "down": 63000,
            "ysp": 0,
            "yct": 30500,
            "fire": 10000,
            "customer_out": 0,
            "rst": 22500,
            "interest": 0.0875,
            "years": 7,
            "total": 249000,
            "annual": 57358.93,
            "total_payback": 401512.5
          },
          "YM-Solis26": {
            "rate": 0.2,
            "price": 380000,
            "down": 76000,
            "ysp": 0,
            "yct": 35000,
            "fire": 0,
            "customer_out": 0,
            "rst": 41000,
            "interest": 0.0875,
            "years": 7,
            "total": 304000,
            "annual": 70028.57,
            "total_payback": 490200.0
          },
          "YM-Solis30": {
            "rate": 0.2,
            "price": 427000,
            "down": 86000,
            "ysp": 35000,
            "yct": 38000,
            "fire": 0,
            "customer_out": 0,
            "rst": 13000,
            "interest": 0.0875,
            "years": 7,
            "total": 341000,
            "annual": 78551.79,
            "total_payback": 549862.5
          },
          "YM-Solis30-45th": {
            "rate": 0.2,
            "price": 438000,
            "down": 88000,
            "ysp": 35000,
            "yct": 39500,
            "fire": 0,
            "customer_out": 0,
            "rst": 13500,
            "interest": 0.0875,
            "years": 7,
            "total": 350000,
            "annual": 80625.0,
            "total_payback": 564375.0
          },
          "YM-Solis75": {
            "rate": 0.2,
            "price": 1008000,
            "down": 202000,
            "ysp": 55000,
            "yct": 82000,
            "fire": 0,
            "customer_out": 0,
            "rst": 65000,
            "interest": 0.0875,
            "years": 7,
            "total": 806000,
            "annual": 185667.86,
            "total_payback": 1299675.0
          },
          "YM-Solis 65": {
            "rate": 0.2,
            "price": 899000,
            "down": 180000,
            "ysp": 53000,
            "yct": 75500,
            "fire": 0,
            "customer_out": 0,
            "rst": 51500,
            "interest": 0.0875,
            "years": 7,
            "total": 719000,
            "annual": 165626.79,
            "total_payback": 1159387.5
          },
          "YM-Solis75-45th": {
            "rate": 0.2,
            "price": 1029000,
            "down": 206000,
            "ysp": 55000,
            "yct": 83500,
            "fire": 0,
            "customer_out": 0,
            "rst": 67500,
            "interest": 0.0875,
            "years": 7,
            "total": 823000,
            "annual": 189583.93,
            "total_payback": 1327087.5
          },
          "YM-Solis90": {
            "rate": 0.2,
            "price": 1327000,
            "down": 266000,
            "ysp": 0,
            "yct": 106500,
            "fire": 0,
            "customer_out": 0,
            "rst": 159500,
            "interest": 0.0875,
            "years": 7,
            "total": 1061000,
            "annual": 244408.93,
            "total_payback": 1710862.5
          },
          "YM-Solis105-45th": {
            "rate": 0.2,
            "price": 1545000,
            "down": 309000,
            "ysp": 65000,
            "yct": 123500,
            "fire": 0,
            "customer_out": 0,
            "rst": 120500,
            "interest": 0.0875,
            "years": 7,
            "total": 1236000,
            "annual": 284721.43,
            "total_payback": 1993050.0
          },
          "YM-Solis50-45th": {
            "rate": 0.2,
            "price": 762000,
            "down": 153000,
            "ysp": 50000,
            "yct": 64000,
            "fire": 25000,
            "customer_out": 0,
            "rst": 14000,
            "interest": 0.0875,
            "years": 7,
            "total": 609000,
            "annual": 140287.5,
            "total_payback": 982012.5
          },
          "YM-Solis105": {
            "rate": 0.2,
            "price": 1517000,
            "down": 303400,
            "ysp": 65000,
            "yct": 122000,
            "fire": 0,
            "customer_out": 0,
            "rst": 120500,
            "interest": 0.0875,
            "years": 7,
            "total": 1213600,
            "annual": 279561.43,
            "total_payback": 1993050.0
          },
          "YM-Solis110": {
            "rate": 0.2,
            "price": 1591000,
            "down": 318200,
            "ysp": 65000,
            "yct": 126500,
            "fire": 0,
            "customer_out": 0,
            "rst": 120500,
            "interest": 0.0875,
            "years": 7,
            "total": 1272800,
            "annual": 293198.57,
            "total_payback": 1993050.0
          }
        }
      },
      {
        "id": "s_bob25",
        "name": "Bob 25% (เฉพาะรุ่นที่กำหนด)",
        "groups": [
          "General",
          "YF,SW",
          "RT"
        ],
        "conditions": [
          "1. RT, YF ไม่กำหนดพื้นที่ทำกิน",
          "2. SW, ทั่วไป ที่ทำกินไม่น้อยกว่า 30 ไร่",
          "3. ลูกค้า กอช. ที่ทำกินไม่ต่ำกว่า 20 ไร่"
        ],
        "models_subset": [
          "YM-Solis30",
          "YM-Solis30-45th",
          "YM-Solis50-45th",
          "YM-Solis75",
          "YM-Solis105",
          "YM-Solis110",
          "YM-Solis105-45th"
        ],
        "entries": {
          "YM-Solis30 | General": {
            "price": 427000,
            "down": 107000,
            "ysp": 25000,
            "yct": 27000,
            "fire": 18000,
            "customer_out": 0,
            "rst": 37000,
            "total": 320000,
            "interest": 0.0895,
            "years": 7,
            "annual": 74354.29,
            "total_payback": 520480.0
          },
          "YM-Solis30 | YF,SW": {
            "price": 427000,
            "down": 107000,
            "ysp": 35000,
            "yct": 34000,
            "fire": 11000,
            "customer_out": 0,
            "rst": 27000,
            "total": 320000,
            "interest": 0.0875,
            "years": 7,
            "annual": 73714.29,
            "total_payback": 516000.0
          },
          "YM-Solis30 | RT": {
            "price": 427000,
            "down": 107000,
            "ysp": 35000,
            "yct": 38000,
            "fire": 7000,
            "customer_out": 0,
            "rst": 27000,
            "total": 320000,
            "interest": 0.0875,
            "years": 7,
            "annual": 73714.29,
            "total_payback": 516000.0
          },
          "YM-Solis30-45th | General": {
            "price": 438000,
            "down": 110000,
            "ysp": 25000,
            "yct": 28000,
            "fire": 19000,
            "customer_out": 0,
            "rst": 38000,
            "total": 328000,
            "interest": 0.0895,
            "years": 7,
            "annual": 76213.14,
            "total_payback": 533492.0
          },
          "YM-Solis30-45th | YF,SW": {
            "price": 438000,
            "down": 110000,
            "ysp": 35000,
            "yct": 35000,
            "fire": 12000,
            "customer_out": 0,
            "rst": 28000,
            "total": 328000,
            "interest": 0.0875,
            "years": 7,
            "annual": 75557.14,
            "total_payback": 528900.0
          },
          "YM-Solis30-45th | RT": {
            "price": 438000,
            "down": 110000,
            "ysp": 35000,
            "yct": 39500,
            "fire": 7500,
            "customer_out": 0,
            "rst": 28000,
            "total": 328000,
            "interest": 0.0875,
            "years": 7,
            "annual": 75557.14,
            "total_payback": 528900.0
          },
          "YM-Solis50-45th | General": {
            "price": 762000,
            "down": 191000,
            "ysp": 40000,
            "yct": 45000,
            "fire": 7500,
            "customer_out": 15000,
            "rst": 83500,
            "total": 571000,
            "interest": 0.0895,
            "years": 7,
            "annual": 132675.93,
            "total_payback": 928731.5
          },
          "YM-Solis50-45th | YF,SW": {
            "price": 762000,
            "down": 191000,
            "ysp": 50000,
            "yct": 56500,
            "fire": 7500,
            "customer_out": 0,
            "rst": 77000,
            "total": 571000,
            "interest": 0.0875,
            "years": 7,
            "annual": 131533.93,
            "total_payback": 920737.5
          },
          "YM-Solis50-45th | RT": {
            "price": 762000,
            "down": 191000,
            "ysp": 50000,
            "yct": 56500,
            "fire": null,
            "customer_out": 0,
            "rst": null,
            "pending": true,
            "total": 571000,
            "interest": 0.0875,
            "years": 7,
            "annual": 131533.93,
            "total_payback": 920737.51
          },
          "YM-Solis75 | General": {
            "price": 1008000,
            "down": 252000,
            "ysp": 45000,
            "yct": 58000,
            "fire": 25000,
            "customer_out": 20000,
            "rst": 104000,
            "total": 756000,
            "interest": 0.0895,
            "years": 7,
            "annual": 175662.0,
            "total_payback": 1229634.0
          },
          "YM-Solis75 | YF,SW": {
            "price": 1008000,
            "down": 252000,
            "ysp": 55000,
            "yct": 72500,
            "fire": 9500,
            "customer_out": 0,
            "rst": 115000,
            "total": 756000,
            "interest": 0.0875,
            "years": 7,
            "annual": 174150.0,
            "total_payback": 1219050.0
          },
          "YM-Solis75 | RT": {
            "price": 1008000,
            "down": 252000,
            "ysp": 55000,
            "yct": 82000,
            "fire": null,
            "customer_out": 0,
            "rst": null,
            "pending": true,
            "total": 756000,
            "interest": 0.0875,
            "years": 7,
            "annual": 174150.0,
            "total_payback": 1219050.0
          },
          "YM-Solis105-45th | General": {
            "price": 1545000,
            "down": 387000,
            "ysp": 55000,
            "yct": 87000,
            "fire": 29500,
            "customer_out": 50000,
            "rst": 165500,
            "total": 1158000,
            "interest": 0.0895,
            "years": 7,
            "annual": 269069.57,
            "total_payback": 1883487.0
          },
          "YM-Solis105-45th | YF,SW": {
            "price": 1545000,
            "down": 387000,
            "ysp": 65000,
            "yct": 108000,
            "fire": 26000,
            "customer_out": 35000,
            "rst": 153000,
            "total": 1158000,
            "interest": 0.0875,
            "years": 7,
            "annual": 266753.57,
            "total_payback": 1867275.0
          },
          "YM-Solis105-45th | RT": {
            "price": 1545000,
            "down": 387000,
            "ysp": 65000,
            "yct": 123500,
            "fire": 0,
            "customer_out": 50000,
            "rst": 148500,
            "total": 1158000,
            "interest": 0.0875,
            "years": 7,
            "annual": 266753.57,
            "total_payback": 1867275.0
          }
        }
      },
      {
        "id": "s_bob30",
        "name": "Bob 30% (VHM/SMVH/BAAC, ผู้นำชุมชน/โรงงานน้ำตาล/ธกส 3A)",
        "groups": [
          "General",
          "YF,SW,RT",
          "Dry Crop"
        ],
        "conditions": [
          "1. ลูกค้าผู้นำชุมชน กำนัน รอง ผู้ช่วย ฯลฯ",
          "2. โรงงานน้ำตาล ฯลฯ",
          "3. ลูกค้า ธกส 3A, 3A+"
        ],
        "models_subset": [
          "YM-Solis30",
          "YM-Solis30-45th",
          "YM-Solis50-45th",
          "YM-Solis75-45th"
        ],
        "entries": {
          "YM-Solis30 | General": {
            "price": 427000,
            "down": 129000,
            "ysp": 25000,
            "yct": 27000,
            "fire": 40000,
            "customer_out": 0,
            "rst": 37000,
            "total": 298000,
            "interest": 0.0895,
            "years": 7,
            "annual": 69242.43,
            "total_payback": 484697.0
          },
          "YM-Solis30 | YF,SW,RT": {
            "price": 427000,
            "down": 129000,
            "ysp": 35000,
            "yct": 34000,
            "fire": 33000,
            "customer_out": 0,
            "rst": 27000,
            "total": 298000,
            "interest": 0.0875,
            "years": 7,
            "annual": 68646.43,
            "total_payback": 480525.0
          },
          "YM-Solis30 | Dry Crop": {
            "price": 427000,
            "down": 129000,
            "ysp": 35000,
            "yct": 38000,
            "fire": 29000,
            "customer_out": 0,
            "rst": 27000,
            "total": 298000,
            "interest": 0.0895,
            "years": 7,
            "annual": 69242.43,
            "total_payback": 484697.0
          },
          "YM-Solis30-45th | General": {
            "price": 438000,
            "down": 132000,
            "ysp": 25000,
            "yct": 28000,
            "fire": 41000,
            "customer_out": 0,
            "rst": 38000,
            "total": 306000,
            "interest": 0.0895,
            "years": 7,
            "annual": 71101.29,
            "total_payback": 497709.0
          },
          "YM-Solis30-45th | YF,SW,RT": {
            "price": 438000,
            "down": 132000,
            "ysp": 35000,
            "yct": 35000,
            "fire": 34000,
            "customer_out": 0,
            "rst": 28000,
            "total": 306000,
            "interest": 0.0875,
            "years": 7,
            "annual": 70489.29,
            "total_payback": 493425.0
          },
          "YM-Solis30-45th | Dry Crop": {
            "price": 438000,
            "down": 132000,
            "ysp": 35000,
            "yct": 39500,
            "fire": 29500,
            "customer_out": 0,
            "rst": 28000,
            "total": 306000,
            "interest": 0.0895,
            "years": 7,
            "annual": 71101.29,
            "total_payback": 497709.0
          },
          "YM-Solis50-45th | General": {
            "price": 762000,
            "down": 229000,
            "ysp": 40000,
            "yct": 45000,
            "fire": 45500,
            "customer_out": 15000,
            "rst": 83500,
            "total": 533000,
            "interest": 0.0895,
            "years": 7,
            "annual": 123846.36,
            "total_payback": 866924.5
          },
          "YM-Solis50-45th | YF,SW,RT": {
            "price": 762000,
            "down": 229000,
            "ysp": 50000,
            "yct": 56500,
            "fire": 45500,
            "customer_out": 0,
            "rst": 77000,
            "total": 533000,
            "interest": 0.0875,
            "years": 7,
            "annual": 122780.36,
            "total_payback": 859462.5
          },
          "YM-Solis50-45th | Dry Crop": {
            "price": 762000,
            "down": 229000,
            "ysp": 50000,
            "yct": 56500,
            "fire": 22500,
            "customer_out": 0,
            "rst": 100000,
            "total": 533000,
            "interest": 0.0895,
            "years": 7,
            "annual": 123846.36,
            "total_payback": 866924.5
          },
          "YM-Solis75-45th | General": {
            "price": 1029000,
            "down": 309000,
            "ysp": 45000,
            "yct": 58000,
            "fire": 76000,
            "customer_out": 20000,
            "rst": 110000,
            "total": 720000,
            "interest": 0.0895,
            "years": 7,
            "annual": 167297.14,
            "total_payback": 1171080.0
          },
          "YM-Solis75-45th | YF,SW,RT": {
            "price": 1029000,
            "down": 309000,
            "ysp": 55000,
            "yct": 72500,
            "fire": 60500,
            "customer_out": 0,
            "rst": 121000,
            "total": 720000,
            "interest": 0.0875,
            "years": 7,
            "annual": 165857.14,
            "total_payback": 1161000.0
          },
          "YM-Solis75-45th | Dry Crop": {
            "price": 1029000,
            "down": 309000,
            "ysp": 55000,
            "yct": 82000,
            "fire": 38000,
            "customer_out": 0,
            "rst": 134000,
            "total": 720000,
            "interest": 0.0895,
            "years": 7,
            "annual": 167297.14,
            "total_payback": 1171080.0
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
