# TodoList with Firebase — React.js

แอปพลิเคชัน TodoList ส่วนตัว สร้างด้วย React.js และใช้ Firebase Realtime Database เก็บข้อมูล รองรับการเพิ่ม ดู แก้ไขสถานะ และลบ task แบบ real-time

---

## Tech Stack

- **Frontend:** React 18 (Create React App)
- **Database:** Firebase Realtime Database
- **Styling:** CSS Modules

## Features / ฟีเจอร์

| ฟีเจอร์ | รายละเอียด |
|---|---|
| **เพิ่ม Todo** | กรอก task แล้วกด Add — ข้อมูลถูก push ขึ้น Firebase ทันที |
| **แสดงรายการ** | ดึงข้อมูลจาก Firebase แบบ real-time ผ่าน `onValue` listener |
| **Toggle Complete** | คลิก checkbox เพื่อ mark ว่าทำเสร็จ/ยังไม่เสร็จ |
| **ลบ Todo** | กดปุ่ม Delete เพื่อลบ task ออกจาก Firebase |

## Firebase Data Schema

```
todos/
  {id}/
    list: string       # ข้อความของ task
    complete: boolean  # สถานะ (เสร็จ/ไม่เสร็จ)
```

---

## Installation / วิธีติดตั้ง

### 1. Clone repository

```bash
git clone https://github.com/Rukchanokksm/TodoList-With-Firebase.git
cd TodoList-With-Firebase
```

### 2. Install dependencies

```bash
npm install
```

### 3. ตั้งค่า Firebase

1. ไปที่ [Firebase Console](https://console.firebase.google.com/) แล้วสร้างโปรเจคใหม่
2. เปิด Realtime Database และ copy Firebase config object

### 4. สร้างไฟล์ `.env`

Copy ไฟล์ `.env.example` แล้วใส่ค่าจาก Firebase Console:

```bash
cp .env.example .env
```

แก้ไข `.env`:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_DATABASE_URL=https://your_project-default-rtdb.firebasedatabase.app
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

### 5. รัน development server

```bash
npm start
```

เปิดเบราว์เซอร์ไปที่ `http://localhost:3000`

---

## Project Structure

```
src/
├── App.js                  # Root component
├── Components/
│   ├── Todos.jsx           # Form เพิ่ม todo ใหม่
│   ├── TodoList.jsx        # แสดงรายการ todo ทั้งหมด
│   └── Todo.jsx            # Todo item (toggle + delete)
└── utils/
    └── Firebase.js         # Firebase init และ export db
```

## License

MIT License
