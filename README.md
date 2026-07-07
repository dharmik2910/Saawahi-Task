# Saawahi Task

A simple full-stack Task Management application with user authentication and CRUD operations for tasks.

---

## Tech Stack

### Frontend
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcryptjs
- Zod

---

## Project Structure

```text
Saawahi-Task/
├── frontend/
└── backend/
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/dharmik2910/Saawahi-Task.git
cd Saawahi-Task
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=3000
JWT_SECRET=your_secret_key
```

Run the backend:

```bash
npm run dev
```

Backend runs on:

```
http://localhost:3000
```

---

### Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
```

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

Run the frontend:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:3001
```

---

## Features

- User Registration & Login
- JWT Authentication
- Logout
- Create Tasks
- View Tasks
- Update Tasks
- Delete Tasks
- Responsive UI
- TypeScript Support

---

## API Endpoints

### Authentication

| Method | Endpoint |
|--------|----------|
| POST | `/api/v1/auth/register` |
| POST | `/api/v1/auth/login` |
| POST | `/api/v1/auth/logout` |

### Tasks

| Method | Endpoint |
|--------|----------|
| GET | `/api/v1/tasks` |
| POST | `/api/v1/tasks` |
| PUT | `/api/v1/tasks/:id` |
| DELETE | `/api/v1/tasks/:id` |

---
