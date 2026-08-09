# 🤖 InterviewAI

> **An AI-powered interview preparation platform that helps you practice, improve, and analyze your interview performance.**

<p align="center">
  <img src="https://img.shields.io/badge/React-2026-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/Express.js-API-black?style=for-the-badge&logo=express" />
  <img src="https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/AI-Powered-purple?style=for-the-badge" />
</p>

<p align="center">
  <b>Practice smarter. Interview better. Get hired.</b>
</p>

---

## 📌 Overview

**InterviewAI** is a full-stack AI-powered interview preparation platform designed to simulate real interview experiences.

The platform allows users to:

- 👤 Create and manage their account
- 📄 Upload their resume
- 🤖 Generate personalized interview questions
- 🎤 Practice answering interview questions
- 🧠 Use AI-powered interview evaluation
- 📊 Review interview performance
- 📚 Access previous interview sessions
- 💳 Manage pricing/subscription-related features

The goal is to provide a realistic interview environment where candidates can practice repeatedly and identify areas for improvement.

---

# ✨ Features

### 🔐 Authentication

- User registration and login
- JWT-based authentication
- Secure HTTP-only cookies
- Protected routes
- Logout functionality

### 📄 Resume-Based Interview

Upload your resume and generate interview questions based on your background and experience.

### 🤖 AI Interview Agent

The AI interviewer can generate questions based on:

- Resume information
- Technical skills
- Projects
- Experience
- Interview context

### 🎤 Interview Practice

Practice answering questions in an interview-style environment.

The application is designed to provide a more realistic experience than simply solving static question lists.

### 📊 Interview Reports

After completing an interview, users can review their performance and analyze their results.

### 🕒 Interview History

Previous interview sessions can be stored and reviewed later.

### 💻 Modern Web Interface

Built using React with a responsive and interactive user interface.

---

# 🏗️ Tech Stack

## Frontend

- React.js
- Redux Toolkit
- React Router
- Axios
- Tailwind CSS
- Vite

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Cookie Parser

## AI / Interview Processing

- AI-powered question generation
- Resume-based question generation
- Automated answer evaluation

## Development Tools

- Git
- GitHub
- VS Code
- Postman
- MongoDB Atlas

---

# 🏛️ Project Architecture

```text
                    ┌─────────────────────┐
                    │      User           │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │                     │
                    │  • Authentication   │
                    │  • Interview UI     │
                    │  • Dashboard        │
                    │  • Reports          │
                    └──────────┬──────────┘
                               │
                         REST API
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Express Server    │
                    │                     │
                    │  • Auth Routes      │
                    │  • User Routes      │
                    │  • Interview API    │
                    │  • JWT Middleware   │
                    └──────────┬──────────┘
                               │
                ┌──────────────┴──────────────┐
                │                             │
                ▼                             ▼
      ┌─────────────────┐          ┌─────────────────┐
      │    MongoDB      │          │    AI Service   │
      │                 │          │                 │
      │ Users           │          │ Questions       │
      │ Interviews      │          │ Evaluation      │
      │ Reports         │          │ AI Responses    │
      └─────────────────┘          └─────────────────┘