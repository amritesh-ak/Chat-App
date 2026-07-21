# 💬 Chat App

A modern MERN-based one-to-one messaging application with secure JWT authentication, image sharing, and a clean, responsive interface.

ConvoX is being developed as a portfolio project to explore full-stack application development, authentication, database design, and real-time communication.

---

## ✨ Features

- 🔐 JWT-based user authentication
- 👤 User registration and login
- 💬 One-to-one messaging
- 🖼️ Image upload support
- 🍪 Cookie-based authentication
- 📱 Responsive React interface
- 🗄️ MongoDB database integration
- ⚡ RESTful backend APIs

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer

---

## 📁 Project Structure

```
Chat-App/
│
├── chatapp/             # React Frontend
│
├── controllers/         # Business logic
├── middlewares/         # Authentication middleware
├── models/              # MongoDB models
├── routes/              # API routes
├── uploads/             # Uploaded images
│
├── config.js
├── index.js             # Express server
└── package.json
```

---

## 🚀 Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/amritesh-ak/ConvoX.git
cd Chat-App
```

---

### 2. Install Backend Dependencies

```bash
npm install
```

---

### 3. Install Frontend Dependencies

```bash
cd chatapp
npm install
```

---

### 4. Configure Environment Variables

Create a `.env` file inside the backend folder.

Example:

```env
PORT=8005

MONGO_URI=mongodb://127.0.0.1:27017/chatapp

JWT_SECRET=your_secret_key
```

---

### 5. Start Backend

```bash
npm start
```

---

### 6. Start Frontend

Open another terminal.

```bash
cd chatapp
npm start
```

Frontend:

```
http://localhost:3000
```

Backend:

```
http://localhost:8005
```

---

## 📌 Current Features

- User Authentication
- Secure JWT Login
- User Registration
- One-to-One Chat
- Image Upload
- MongoDB Integration
- REST API Architecture

---

## 🚧 Planned Features

- ⚡ Real-time messaging using Socket.IO
- 🟢 Online/Offline Status
- ⌨️ Typing Indicator
- ❤️ Message Reactions
- 📎 File Sharing
- 📖 Read Receipts
- 🌙 Dark Mode
- 👥 Group Chats
- 🔔 Notifications
- 🚀 Deployment

---

## 📚 Learning Goals

This project focuses on understanding:

- MERN Stack Architecture
- REST API Design
- Authentication & Authorization
- MongoDB Data Modeling
- Secure File Uploads
- Real-Time Communication
- Production Deployment

---

## 👨‍💻 Developer

**Amritesh Kumar**

B.Tech, IIT (BHU) Varanasi

---

## 📄 License

This project is developed for learning, experimentation, and portfolio purposes.
