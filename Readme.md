# Cloud-Native Task Management System

A full-stack task management platform built with React, Node.js, and MongoDB, upgraded with cloud-native deployment support, JWT-based security, role-based access control, and clean REST API boundaries.

---

<p align="center">
  <b>Visitor count</b>
  <br>
  <a href="https://github.com/akashdeep023">
    <img src="https://profile-counter.glitch.me/task-management/count.svg" />
  </a>
</p>

## About

Cloud-Native Task Management System helps teams organize tasks across **Backlog**, **To-Do**, **In-Progress**, and **Done** workflows with assignment, analytics, and secure collaboration.

This version keeps the existing UI/UX output intact while improving backend architecture for production-readiness and container-first deployment.

## Project Overview

Users can register, log in, create tasks, update progress, assign tasks to teammates, and view analytics. Shared/public task views remain available.

<p align="center">Register Page</p>
<a href="https://task-management-org.vercel.app/login">

![Macbook-Air-localhost (1)](https://github.com/user-attachments/assets/d05bd3e9-e349-469b-a4d2-d828e3e76414)

</a>

<p align="center">Dashboard Page</p>
<a href="https://task-management-org.vercel.app/">

![Macbook-Air-localhost](https://github.com/user-attachments/assets/5643d5a6-b8ad-4516-a3dd-d12b0d9793e3)

</a>

<p align="center">Public View</p>
<a href="https://task-management-org.vercel.app/task/67421bb3a90e252d2d4cb42e">

![Macbook-Air-localhost (2)](https://github.com/user-attachments/assets/cde4fcb3-80c4-410d-9763-50281c9b2233)

</a>

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Docker Deployment](#docker-deployment)
- [Scripts](#scripts)
- [Live Demo](#live-demo)
- [License](#license)

---

## Features

- JWT authentication with protected API routes.
- Role-based access control (RBAC) with `admin` and `member` roles.
- Task access policy: owner, assignee, or admin can modify protected task resources.
- REST APIs for auth, users, tasks, and analytics.
- Task workflow management: Backlog, To-Do, In-Progress, Done.
- Assignment, due dates, checklist tracking, and status indicators.
- Redux Toolkit state management on frontend.
- Cloud-native container setup with Docker and Docker Compose.

## Architecture

Backend follows layered separation:

- **Routes**: API endpoint definitions.
- **Controllers**: request/response orchestration.
- **Models**: MongoDB schemas via Mongoose.
- **Middlewares**: authentication, RBAC, task access policy, async error wrapping.

Security flow:

1. User authenticates and receives JWT.
2. `authorization` middleware validates token and attaches user context.
3. RBAC/task-policy middleware enforces role or ownership-based access.

## Tech Stack

### Frontend

- React + Vite
- React Router DOM
- Redux Toolkit
- React Toastify

### Backend

- Node.js + Express.js
- MongoDB + Mongoose
- JWT (`jsonwebtoken`)
- bcryptjs
- CORS, dotenv

### Cloud-Native

- Docker
- Docker Compose

## Setup Instructions

### Prerequisites

- Node.js 18+
- npm
- MongoDB

### Backend Setup

1. `cd backend`
2. `npm install`
3. Copy env file:
   - `cp .env.example .env` (Linux/macOS)
   - `copy .env.example .env` (Windows)
4. Update `.env` values.
5. `npm run dev`

### Frontend Setup

1. `cd frontend`
2. `npm install`
3. Copy env file:
   - `cp .env.example .env` (Linux/macOS)
   - `copy .env.example .env` (Windows)
4. `npm run dev`
5. Open `http://localhost:5173`

## Docker Deployment

From project root:

```bash
docker compose up --build
```

Services:

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:9000`
- Backend health check: `http://localhost:9000/healthz`
- MongoDB: `mongodb://localhost:27017`

## Scripts

### Frontend

- `npm run dev` - start Vite dev server
- `npm run build` - build production frontend
- `npm run lint` - lint frontend code
- `npm run preview` - preview frontend build

### Backend

- `npm run start` - start backend server
- `npm run dev` - start backend with nodemon

## Live Demo

- https://task-management-org.vercel.app

## License

This project is licensed under the [MIT License](LICENSE).
