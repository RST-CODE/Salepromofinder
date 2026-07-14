// ============================================================
// RST Promo Finder — ข้อมูลราคา/โปรโมชั่นทั้งหมด (แยกออกมาจากไฟล์หลัก)
// แก้ไขไฟล์นี้ไฟล์เดียวเวลาราคา/เงื่อนไข/YCT เปลี่ยน ไม่ต้องเปิดไฟล์ HTML หลักเลย
// โครงสร้าง: DATA.yanmar / DATA.solis แต่ละยี่ห้อมี models (รายชื่อรุ่น) และ programs (รายการโปรแต่ละโปร)
// แต่ละ program มี entries เป็นราคา/ยอดดาวน์/YCT/YSP ต่อรุ่น ตามเงื่อนไขของโปรนั้นๆ
// อัปเดตล่าสุด: 13/7/2569 — ตัดโปร "ทั่วไป 30%" (y_general30) ออก (เลิกใช้แล้ว) + แก้เงื่อนไข Bob 30% ที่ตกหล่นให้ครบ
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
            "fire": 25000,
            "customer_out": 0,
            "rst": 34500,
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
            "ysp": 25000,
            "fire": 25000,
            "customer_out": 0,
            "rst": 34500,
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
            "ysp": 30000,
            "fire": 30000,
            "customer_out": 0,
            "rst": 43500,
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
            "ysp": 35000,
            "fire": 50000,
            "customer_out": 0,
            "rst": 38000,
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
            "ysp": 45000,
            "customer_out": 0,
            "rst": 87000,
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
            "ysp": 45000,
            "fire": 35000,
            "customer_out": 0,
            "rst": 70000,
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
            "fire": 25000,
            "customer_out": 0,
            "rst": -10000,
            "total": 467000,
            "interest": 0.0875,
            "years": 10,
            "total_payback": 875625.0,
            "annual": 87562.5
          },
          "EF393T-45th": {
            "price": 584000,
            "down": 117000,
            "yct": 67000,
            "ysp": 35000,
            "fire": 25000,
            "customer_out": 0,
            "rst": -10000,
            "total": 467000,
            "interest": 0.0875,
            "years": 10,
            "total_payback": 875625.0,
            "annual": 87562.5
          },
          "YM351R": {
            "price": 733000,
            "down": 147000,
            "yct": 82000,
            "ysp": 40000,
            "fire": 30000,
            "customer_out": 0,
            "rst": -5000,
            "total": 586000,
            "interest": 0.0875,
            "years": 10,
            "total_payback": 1098750.0,
            "annual": 109875.0
          },
          "YM358R": {
            "price": 831000,
            "down": 167000,
            "yct": 98000,
            "ysp": 50000,
            "fire": 50000,
            "customer_out": 0,
            "rst": -31000,
            "total": 664000,
            "interest": 0.0875,
            "years": 10,
            "total_payback": 1245000.0,
            "annual": 124500.0
          },
          "YM358R-L1": {
            "price": 892000,
            "down": 179000,
            "yct": 92000,
            "ysp": 70000,
            "customer_out": 0,
            "rst": 17000,
            "total": 713000,
            "interest": 0.0875,
            "years": 10,
            "total_payback": 1336875.0,
            "annual": 133687.5
          },
          "EF725T": {
            "price": 1072000,
            "down": 215000,
            "yct": 108000,
            "ysp": 50000,
            "fire": 35000,
            "customer_out": 0,
            "rst": 22000,
            "total": 857000,
            "interest": 0.0875,
            "years": 10,
            "total_payback": 1606875.0,
            "annual": 160687.5
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
            "fire": 25000,
            "customer_out": 0,
            "rst": 8000,
            "total": 467000,
            "interest": 0.0875,
            "years": 10,
            "total_payback": 875625.0,
            "annual": 87562.5
          },
          "EF393T-45th": {
            "price": 584000,
            "down": 117000,
            "yct": 54000,
            "ysp": 30000,
            "fire": 25000,
            "customer_out": 0,
            "rst": 8000,
            "total": 467000,
            "interest": 0.0875,
            "years": 10,
            "total_payback": 875625.0,
            "annual": 87562.5
          },
          "YM351R": {
            "price": 733000,
            "down": 147000,
            "yct": 64500,
            "ysp": 35000,
            "fire": 30000,
            "customer_out": 0,
            "rst": 17500,
            "total": 586000,
            "interest": 0.0875,
            "years": 10,
            "total_payback": 1098750.0,
            "annual": 109875.0
          },
          "YM358R": {
            "price": 831000,
            "down": 167000,
            "yct": 75500,
            "ysp": 40000,
            "fire": 50000,
            "customer_out": 0,
            "rst": 1500,
            "total": 664000,
            "interest": 0.0875,
            "years": 10,
            "total_payback": 1245000.0,
            "annual": 124500.0
          },
          "YM358R-L1": {
            "price": 892000,
            "down": 179000,
            "yct": 80000,
            "ysp": 60000,
            "customer_out": 0,
            "rst": 39000,
            "total": 713000,
            "interest": 0.0875,
            "years": 10,
            "total_payback": 1336875.0,
            "annual": 133687.5
          },
          "EF725T": {
            "price": 1072000,
            "down": 215000,
            "yct": 108000,
            "ysp": 50000,
            "fire": 35000,
            "customer_out": 0,
            "rst": 22000,
            "total": 857000,
            "interest": 0.0875,
            "years": 10,
            "total_payback": 1606875.0,
            "annual": 160687.5
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
        "name": "Bob 25%",
        "groups": [
          "General"
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
        "name": "Bob 30%",
        "groups": [
          "General",
          "YF,SW",
          "RT"
        ],
        "conditions": [
          "1. ลูกค้าผู้นำชุมชน กำนัน รอง ผู้ช่วย ฯลฯ",
          "2. โรงงานน้ำตาล ฯลฯ",
          "3. ลูกค้า ธกส 3A, 3A+",
          "4. ลูกค้ากลุ่ม RT,YF,SW",
          "5. ลูกค้ามีพื้นที่ทำกินอย่างน้อย 40 ไร่ ที่ของตนเองรวมที่เช่า (ไม่สามารถนำพื้นที่ของผู้อื่นมารวมได้)"
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
          "EF393T 45th | RT": {
            "price": 584000,
            "down": 176000,
            "yct": 67000,
            "ysp": 65000,
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
          "YM351R | RT": {
            "price": 733000,
            "down": 220000,
            "yct": 82000,
            "ysp": 83000,
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
          "YM358R | RT": {
            "price": 831000,
            "down": 250000,
            "yct": 98000,
            "ysp": 86500,
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
        "name": "ไม่เข้าเงื่อนไข (ทั่วไป)",
        "groups": [
          "ทั่วไป"
        ],
        "conditions": [
          "ดอกเบี้ย 8.95%, ผ่อน 7 ปี (โดยทั่วไป)"
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
          "YM-Solis22": {
            "price": 312000,
            "down": 47000,
            "yct": 0,
            "fire": 10000,
            "customer_out": 10000,
            "rst": 27000,
            "total": 265000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 431022.48,
            "annual": 61574.64
          },
          "YM-Solis26": {
            "price": 380000,
            "down": 57000,
            "yct": 0,
            "fire": 10000,
            "customer_out": 15000,
            "rst": 32000,
            "total": 323000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 525359.52,
            "annual": 75051.36
          },
          "YM-Solis30": {
            "price": 427000,
            "down": 107000,
            "yct": 27000,
            "ysp": 25000,
            "fire": 15000,
            "customer_out": 0,
            "rst": 40000,
            "total": 320000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 520480.03,
            "annual": 74354.29
          },
          "YM-Solis30-45th": {
            "price": 438000,
            "down": 110000,
            "yct": 28000,
            "ysp": 25000,
            "fire": 15000,
            "customer_out": 0,
            "rst": 42000,
            "total": 328000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 533491.98,
            "annual": 76213.14
          },
          "YM-Solis50": {
            "price": 742000,
            "down": 186000,
            "yct": 44000,
            "ysp": 40000,
            "fire": 25000,
            "customer_out": 0,
            "rst": 77000,
            "total": 556000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 904333.99,
            "annual": 129190.57
          },
          "YM-Solis50-45th": {
            "price": 762000,
            "down": 191000,
            "yct": 45000,
            "ysp": 40000,
            "fire": 25000,
            "customer_out": 0,
            "rst": 81000,
            "total": 571000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 928731.51,
            "annual": 132675.93
          },
          "YM-Solis75": {
            "price": 1008000,
            "down": 202000,
            "yct": 58000,
            "ysp": 45000,
            "fire": 40000,
            "customer_out": 0,
            "rst": 59000,
            "total": 806000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 1310959.02,
            "annual": 187279.86
          },
          "YM-Solis105": {
            "price": 1517000,
            "down": 304000,
            "yct": 86000,
            "ysp": 55000,
            "fire": 60000,
            "customer_out": 0,
            "rst": 103000,
            "total": 1213000,
            "interest": 0.0895,
            "years": 7,
            "total_payback": 1972944.47,
            "annual": 281849.21
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
            "price": 339000,
            "down": 85000,
            "yct": 19000,
            "customer_out": 20000,
            "rst": 46000,
            "total": 254000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 409574.97,
            "annual": 58510.71
          },
          "Solis26": {
            "price": 339000,
            "down": 85000,
            "yct": 19000,
            "customer_out": 30000,
            "rst": 36000,
            "total": 254000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 409574.97,
            "annual": 58510.71
          },
          "YM-Solis22": {
            "price": 312000,
            "down": 63000,
            "yct": 27500,
            "fire": 10000,
            "customer_out": 0,
            "rst": 25500,
            "total": 249000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 401512.51,
            "annual": 57358.93
          },
          "YM-Solis26": {
            "price": 380000,
            "down": 76000,
            "yct": 31000,
            "fire": 10000,
            "customer_out": 0,
            "rst": 35000,
            "total": 304000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 490199.99,
            "annual": 70028.57
          },
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
          "YM-Solis75": {
            "price": 1008000,
            "down": 202000,
            "yct": 72500,
            "ysp": 55000,
            "fire": 40000,
            "customer_out": 0,
            "rst": 34500,
            "total": 806000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 1299675.02,
            "annual": 185667.86
          },
          "YM-Solis 65": {
            "price": 899000,
            "down": 180000,
            "yct": 67000,
            "ysp": 53000,
            "fire": 35000,
            "customer_out": 0,
            "rst": 25000,
            "total": 719000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 1159387.53,
            "annual": 165626.79
          },
          "YM-Solis90": {
            "price": 1327000,
            "down": 266000,
            "yct": 93000,
            "fire": 40000,
            "customer_out": 0,
            "rst": 133000,
            "total": 1061000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 1710862.51,
            "annual": 244408.93
          },
          "YM-Solis105": {
            "price": 1517000,
            "down": 304000,
            "yct": 107000,
            "ysp": 65000,
            "fire": 60000,
            "customer_out": 0,
            "rst": 72000,
            "total": 1213000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 1955962.47,
            "annual": 279423.21
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
          "Solis 26": {
            "price": 339000,
            "down": 85000,
            "yct": 19000,
            "customer_out": 20000,
            "rst": 46000,
            "total": 254000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 409574.97,
            "annual": 58510.71
          },
          "Solis26": {
            "price": 339000,
            "down": 85000,
            "yct": 19000,
            "customer_out": 30000,
            "rst": 36000,
            "total": 254000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 409574.97,
            "annual": 58510.71
          },
          "YM-Solis22": {
            "price": 312000,
            "down": 63000,
            "yct": 30500,
            "fire": 10000,
            "customer_out": 0,
            "rst": 22500,
            "total": 249000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 401512.51,
            "annual": 57358.93
          },
          "YM-Solis26": {
            "price": 380000,
            "down": 76000,
            "yct": 35000,
            "customer_out": 0,
            "rst": 41000,
            "total": 304000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 490199.99,
            "annual": 70028.57
          },
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
          "YM-Solis75": {
            "price": 1008000,
            "down": 202000,
            "yct": 82000,
            "ysp": 55000,
            "fire": 40000,
            "customer_out": 0,
            "rst": 25000,
            "total": 806000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 1299675.02,
            "annual": 185667.86
          },
          "YM-Solis 65": {
            "price": 899000,
            "down": 180000,
            "yct": 75500,
            "ysp": 53000,
            "fire": 35000,
            "customer_out": 0,
            "rst": 16500,
            "total": 719000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 1159387.53,
            "annual": 165626.79
          },
          "YM-Solis90": {
            "price": 1327000,
            "down": 266000,
            "yct": 106500,
            "fire": 40000,
            "customer_out": 0,
            "rst": 119500,
            "total": 1061000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 1710862.51,
            "annual": 244408.93
          },
          "YM-Solis105": {
            "price": 1517000,
            "down": 304000,
            "yct": 122000,
            "ysp": 65000,
            "fire": 60000,
            "customer_out": 0,
            "rst": 57000,
            "total": 1213000,
            "interest": 0.0875,
            "years": 7,
            "total_payback": 1955962.47,
            "annual": 279423.21
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
        "name": "Bob 25% (เฉพาะรุ่นที่กำหนด)",
        "groups": [
          "General"
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
        "name": "Bob 30% (VHM/SMVH/BAAC, ผู้นำชุมชน/โรงงานน้ำตาล/ธกส 3A)",
        "groups": [
          "General",
          "YF,SW",
          "RT"
        ],
        "conditions": [
          "1. ลูกค้าผู้นำชุมชน กำนัน รอง ผู้ช่วย ฯลฯ",
          "2. โรงงานน้ำตาล ฯลฯ",
          "3. ลูกค้า ธกส 3A, 3A+",
          "4. ลูกค้ากลุ่ม RT,YF,SW",
          "5. ลูกค้ามีพื้นที่ทำกินอย่างน้อย 40 ไร่ ที่ของตนเองรวมที่เช่า (ไม่สามารถนำพื้นที่ของผู้อื่นมารวมได้)"
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
