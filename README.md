# 💬 Chat App

A full-stack **real-time chat application** that allows users to communicate instantly through a clean and responsive interface.

The application uses **Socket.IO** for real-time, bidirectional communication and a modern full-stack architecture with **React, Node.js, Express, and MongoDB**.

## ✨ Features

* 💬 Real-time messaging
* ⚡ Instant communication using Socket.IO
* 👤 User authentication
* 🗨️ One-to-one conversations
* 🟢 Online user status
* 📱 Responsive user interface
* 🗄️ Persistent message and user data
* 🔐 Secure backend APIs

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* Socket.IO
* MongoDB
* Mongoose

## 📁 Project Structure

```text
Chat-App/
├── frontend/        # React frontend
├── backend/         # Node.js / Express backend
├── README.md
└── .gitignore
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:Arpit-voice/Chat-app.git
cd Chat-app
```

### 2. Install dependencies

Install the required dependencies for both the frontend and backend.

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the appropriate backend directory and add the required environment variables.

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=your_port
```

Never commit your `.env` file or API credentials to GitHub.

### 4. Run the Application

Start the backend:

```bash
cd backend
npm run dev
```

Start the frontend in another terminal:

```bash
cd frontend
npm run dev
```

## 🔌 Real-Time Communication

The application uses **Socket.IO** to establish real-time communication between connected users.

Messages are transmitted instantly between the client and server without requiring page refreshes, providing a smooth chat experience.

## 🚀 Future Improvements

* Group chats
* Message read receipts
* Typing indicators
* Image and file sharing
* Message notifications
* User profile customization
* Improved mobile experience

## 👨‍💻 Author

**Arpit Soni**

GitHub: `@Arpit-voice`

## 📄 License

This project is intended for educational and portfolio purposes.
