---
description: Workflow สำหรับเพิ่ม feature ใหม่ใน TodoList — วิเคราะห์ code, implement, test
---

รับ argument เป็นชื่อ feature ที่ต้องการเพิ่ม แล้วทำตาม workflow นี้:

1. **วิเคราะห์ก่อน** — อ่านไฟล์ที่เกี่ยวข้อง:
   - `src/Components/Todos.jsx` (form input)
   - `src/Components/TodoList.jsx` (list render)
   - `src/Components/Todo.jsx` (item logic)
   - `src/utils/Firebase.js` (db operations)
   - Firebase schema ปัจจุบัน: `todos/{id}/list`, `todos/{id}/complete`

2. **วางแผน** — บอก user ว่าจะแก้ไฟล์ไหน เพิ่ม Firebase field อะไร และ UI จะเปลี่ยนอย่างไร รอ confirm ก่อน

3. **Implement** — แก้ code ตามแผน เน้น minimal change ไม่ต้องทำซับซ้อน

4. **Test** — Run `npm run build` ใน `E:/my_code/todoList-project/TodoList-With-Firebase` แล้วตรวจว่า compile ผ่าน หลัง build เสร็จให้ kill node process (`taskkill /F /IM node.exe`)

5. **สรุป** — บอก user ว่าเพิ่ม field อะไรใน Firebase และใช้งานยังไง

ตอบเป็นภาษาไทย
