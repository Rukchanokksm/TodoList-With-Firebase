---
description: Dev workflow สำหรับโปรเจค TodoList-With-Firebase — ตรวจ config, รัน build check, สรุป issues
---

รัน dev checklist สำหรับโปรเจคนี้:

1. **ตรวจ Firebase config** — อ่าน `src/utils/Firebase.js` ดูว่า config ครบไหม (apiKey, databaseURL ฯลฯ) และไม่มี secret หลุดใน repo
2. **ตรวจ .gitignore** — ดูว่า `.env` หรือไฟล์ config ถูก ignore ไว้แล้วหรือยัง
3. **Build check** — Run `npm run build` ใน project directory แล้วตรวจว่า compile ผ่านไม่มี error (หลัง build เสร็จให้ kill node process ด้วย)
4. **สรุปผล** — บอกว่าผ่าน/ไม่ผ่าน พร้อมระบุ error ถ้ามี และแนะนำวิธีแก้

Project path: `E:/my_code/todoList-project/TodoList-With-Firebase`

ตอบเป็นภาษาไทย
