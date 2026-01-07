📝 End-to-End Todos Application

A production-ready Todos application built using React, Firebase, Context API, Tailwind CSS, and shadcn/ui, following clean architecture and industry best practices.

📌 Overview

This project demonstrates an end-to-end React application with:

Authentication & Authorization

Protected Routes

Clean service-based Firebase integration

Scalable folder structure

Modern UI with Tailwind CSS & shadcn/ui

Each authenticated user can manage their own todos securely.

🚀 Tech Stack

Frontend: React (Vite)

State Management: Context API

Authentication: Firebase Authentication

Database: Firebase Firestore

API Handling: Axios (service layer)

Styling: Tailwind CSS + shadcn/ui

Routing: React Router DOM

🎯 Features
🔐 Authentication & Authorization

Signup with Email & Password

Login & Logout

Persistent authentication using Context API

Protected routes (unauthenticated users redirected to /login)

📋 Todos Management (CRUD)

Create a new todo

View all todos

Update todo title (via modal)

Toggle todo status (Completed / Pending)

Delete todo

🧭 UI Layout

Navbar: App title, filters, auth actions

Sidebar: Todo list with active selection

Main Area: Selected todo details & actions

Modal: Update todo title

Footer: Common footer across the app

🧭 Routing Structure
/signup   → Signup Page
/login    → Login Page
/todos    → Protected Todos Dashboard

🗂️ Folder Structure
src/
├── components/
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── Footer.jsx
│   ├── ProtectedRoute.jsx
│   └── UpdateTodoModal.jsx
├── context/
│   └── AuthContext.jsx
├── services/
│   ├── auth.service.js
│   └── todo.service.js
├── pages/
│   ├── Login.jsx
│   ├── Signup.jsx
│   └── Todos.jsx
├── firebase.js
├── App.jsx
├── main.jsx
└── index.css

🔥 Firebase Integration (Clean Architecture)

All Firebase and Axios logic is handled inside service files

Components never directly interact with Firebase

Authentication logic is centralized in AuthContext

🔐 Environment Variables

Create a .env file in the root directory:

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id


❗ Do not commit .env to GitHub

▶️ Getting Started
1️⃣ Clone the Repository
git clone <your-github-repo-url>
cd Endtoend

2️⃣ Install Dependencies
npm install

3️⃣ Start Development Server
npm run dev


App will run on:

http://localhost:5173
