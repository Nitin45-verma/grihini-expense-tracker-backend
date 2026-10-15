# ⚙️ Home Expense & Saving Tracker — Backend API

RESTful API backend for the **Home Expense & Saving Tracker** application. Built using Node.js, Express.js, and MongoDB Atlas, with Google OAuth verification and deployment on AWS EC2 managed by PM2.

---

## ✨ Features

- **Google OAuth Verification:** Verifies frontend Google Identity Service credentials securely using `google-auth-library`.
- **User Authentication & Session Management:** Handles user onboarding, auth tokens, and session persistence.
- **Expense & Saving Endpoints:** Full CRUD operations for tracking household expenses, custom categories, and monthly savings goals.
- **Database Integration:** Cloud-hosted MongoDB Atlas with Mongoose ODM for reliable data schema and operations.
- **Production-Ready Operations:** Configured with environment-based security headers, CORS settings, and process supervision via PM2.

---

## 🛠️ Tech Stack

- **Runtime Environment:** Node.js (v18+)
- **Framework:** Express.js
- **Database:** MongoDB Atlas (Mongoose ODM)
- **Authentication:** Google Auth Library (`google-auth-library`) & JWT
- **Process Supervision:** PM2
- **Hosting / Infrastructure:** AWS EC2 (Ubuntu 22.04 / LTS)

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Active MongoDB Atlas Cluster connection string

### 2. Installation
Clone the repository and install dependencies:

```bash
cd backend
npm install
