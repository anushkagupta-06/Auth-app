# Auth App - Authentication System with JWT

This is a full-stack authentication system built using **React.js** for frontend and **Node.js + Express.js + MongoDB** for backend. The app uses JWT (JSON Web Tokens) for authentication.

---

## Tech Stack 🛠

### Frontend:
- React.js
- React Router DOM
- React Toastify (for notifications)

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose ORM)
- JWT (jsonwebtoken)
- Bcrypt (for password hashing)
- CORS
- body-parser

---

## Features 🚀

- User Signup
- User Login
- Protected Routes (Private Routing)
- JWT-based authentication
- Password hashing with Bcrypt
- Local Storage to store tokens
- Toast notifications
- Error handling
- Logout functionality

---

## Project Structure

auth-login-system/
│
├── backend/
│ ├── models/ (Mongoose models)
│ ├── routes/ (API routes)
│ ├── middleware/ (authentication middleware)
│ └── server.js (main server file)
│
├── frontend/
│ ├── src/
│ │ ├── pages/ (Login, Signup, Home)
│ │ ├── utils/ (helper functions for toastify)
│ │ └── App.js
│ └── package.json
│
├── .gitignore
├── README.md
└── package.json

---

Author
Anushka Gupta
