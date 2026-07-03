# Authentication & Task Management API

A backend REST API built using **Node.js** and **Express.js** for user authentication and task management. The project follows a modular structure with separate controllers, routes, middlewares, validators, and utility files.

---

# Tech Stack

* Node.js
* Express.js
* JSON Web Token (JWT)
* bcryptjs
* Zod
* dotenv

---

# Project Structure

```text
src/
│
├── controllers/
│   ├── authController.js
│   └── taskController.js
│
├── middlewares/
│   ├── auth.js
│   ├── errorHandler.js
│   ├── errorMiddleware.js
│   └── validate.js
│
├── models/
│   └── store.js
│
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
│
├── utils/
│   └── HttpError.js
│
├── validators/
│   └── schemas.js
│
├── app.js
└── server.js
```

---

# Installation

Clone the repository:

```bash
git clone https://github.com/dharmik2910/Saawahi-Task.git
```

Move into the project directory:

```bash
cd Saawahi-Task
```

Install dependencies:

```bash
npm install
```

---


# Running the Project

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

Server URL:

```text
http://localhost:3000
```

---

# Health Check

**GET**

```http
/health
```

Response:

```json
{
  "success": true,
  "message": "Server is healthy"
}
```

---

# API Routes

## Authentication

### Register

```http
POST /api/v1/auth/register
```

Registers a new user.

---

### Login

```http
POST /api/v1/auth/login
```

Authenticates a user and returns a JWT token.

---

### Logout

```http
GET /api/v1/auth/logout
```

Logs out the authenticated user.

---

## Tasks

### Create Task

```http
POST /api/v1/tasks
```

Creates a new task.

---

### Get All Tasks

```http
GET /api/v1/tasks
```

Returns the list of tasks.

---

### Update Task

```http
PUT /api/v1/tasks/:id
```

Updates an existing task.

---

### Delete Task

```http
DELETE /api/v1/tasks/:id
```

Deletes a task by ID.

---

