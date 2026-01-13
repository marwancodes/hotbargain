# 🛍️ Product Sharing Platform (Full-Stack)

A modern full-stack web application where users can **create, browse, comment on, and manage products**.  
Built with **TypeScript from end to end**, secure authentication, and a clean, responsive UI.

---

## ✨ Features

- 🔐 Authentication with **Clerk**
- 📦 Create, edit, delete products
- 👤 View your own products (Profile page)
- 💬 Comment system with ownership control
- 🖼️ Product images & creator profiles
- ⚡ Fast data fetching with **React Query**
- 🎨 Responsive UI with **Tailwind CSS + DaisyUI**
- 🧠 Fully typed API (TypeScript everywhere)

---

## 🧱 Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- React Router v7
- TanStack React Query
- Axios
- Tailwind CSS v4
- DaisyUI
- Lucide Icons
- Clerk Authentication

### Backend
- Node.js
- Express v5
- TypeScript
- PostgreSQL
- Drizzle ORM
- Clerk Auth Middleware
- dotenv
- CORS

---

## 📁 Project Structure

```
.
├── backend/
│   ├── src/
│   ├── drizzle/
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── types/
│   ├── package.json
│   └── vite.config.ts
│
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

## 🔧 Backend Setup

```bash
cd backend
npm install
```

### Environment variables (`backend/.env`)

```env
DATABASE_URL=postgresql://user:password@localhost:5432/db_name
CLERK_SECRET_KEY=your_clerk_secret_key
```

### Run database migrations

```bash
npm run db:push
```

### Start backend

```bash
npm run dev
```

Backend runs on `http://localhost:3000`

---

## 🎨 Frontend Setup

```bash
cd frontend
npm install
```

### Environment variables (`frontend/.env`)

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:3000
```

### Start frontend

```bash
npm run dev
```

Frontend runs on `http://localhost:5173`

---

## 🔐 Authentication

Authentication is powered by **Clerk**:
- Secure sign in & sign up
- User identity sync with backend
- Authorization for product & comment ownership

---

## 📡 API Overview

### Products
- GET `/products`
- GET `/products/:id`
- GET `/products/my`
- POST `/products`
- PUT `/products/:id`
- DELETE `/products/:id`

### Comments
- POST `/comments/:productId`
- DELETE `/comments/:commentId`

---

## 🧪 Type Safety

- Shared API & UI types
- Strongly typed React Query hooks
- Prevents runtime bugs like `.map is not a function`

---

## 🛠️ Future Improvements

- Search & filtering
- Likes / favorites
- Pagination & infinite scroll
- Admin dashboard

---

## 👨‍💻 Author

**Marouane OUARRADI**  
Full-Stack Developer (TypeScript / MERN)  
🌐 Portfolio: https://marwancodes.vercel.app/

---

## 📄 License

ISC License
