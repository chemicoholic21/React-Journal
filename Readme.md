# 📓 React Journal

**React Journal** is a full-stack journaling application where users can securely create, manage, and delete personal journal entries.

Built with **React** and **Express**, the app uses **JWT-based local authentication** and **MongoDB** for data persistence.

---

## 🔧 Tech Stack

### Frontend
- React 19 + Vite  
- Tailwind CSS  
- React Router DOM  
- Axios  
- React Icons  

### Backend
- Express.js  
- MongoDB + Mongoose  
- JSON Web Tokens (JWT)  
- bcryptjs  
- dotenv  

---

## 📁 Project Structure

React-Journal/
├── backend/ # Express server & API routes
│ └── src/
│ └── index.js
├── frontend/ # React app powered by Vite
│ └── src/
│ ├── main.tsx
│ ├── App.tsx
│ └── components/
└── README.md



---

## 🔐 Authentication

- Local authentication using **JWTs**  
- Passwords securely hashed using **bcryptjs**  
- No third-party login (e.g., Google, GitHub)  

---

## 🗃️ Journal Data Storage

- Entries are **user-specific**
- Stored in **MongoDB** via **Mongoose**
- Accessed via secure, RESTful **API routes**

---

## 🚀 Getting Started

### 1. Clone the Repository


git clone https://github.com/chemicoholic21/React-Journal.git
cd React-Journal

### 2. Setup Backend

cd backend
npm install
Create a .env file in the backend folder:


PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


## Start the server:


npm run dev
Backend runs at: http://localhost:5000

### 3. Setup Frontend

cd frontend
npm install
npm run dev
Frontend runs at: http://localhost:5173

✅ Features
🔐 Local user registration & login (JWT-based)

🔒 Password encryption with bcrypt

📝 Create, edit, and delete journal entries

🧾 Persistent storage in MongoDB

📱 Responsive UI with Tailwind CSS

🧼 Clean separation of frontend/backend

🧪 Scripts
Frontend

npm run dev       # Start Vite dev server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Lint codebase

Backend

npm run dev       # Run with nodemon (development)
npm start         # Run production server
