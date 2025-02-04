# Movie Reservation System Backend

## 📌 Overview
The **Movie Reservation System** is a backend API that allows users to browse movies, reserve seats for specific showtimes, and manage their reservations. It supports user authentication, role-based access control (admin & user), and reporting functionalities.

## 🎯 Features
- **User Authentication & Authorization**
  - Sign up and login using JWT authentication.
  - Roles: Admin and Regular User.
  - Admins manage movies, showtimes, and reservations.
  - Users can reserve, view, and cancel upcoming reservations.

- **Movie Management (Admin only)**
  - CRUD operations for movies.
  - Movies categorized by genre.
  - Movies have showtimes.

- **Showtime & Seat Reservations**
  - Users can view available showtimes for a date.
  - Users can select and reserve specific seats.
  - System prevents overbooking.
  - Users can cancel only upcoming reservations.

- **Reporting (Admin only)**
  - View all reservations.
  - Capacity and revenue tracking.

## 🏗️ Tech Stack
- **Backend Framework:** Node.js with Express.js
- **Database:** PostgreSQL / MongoDB (Choose based on preference)
- **Authentication:** JSON Web Tokens (JWT)
- **ORM/ODM:** Sequelize (SQL) / Mongoose (NoSQL)
- **Caching (Optional):** Redis (For seat availability caching)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js installed
- PostgreSQL or MongoDB installed
- Redis (optional for caching)

### Steps to Run
1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/movie-reservation-backend.git
   cd movie-reservation-backend
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and configure the following variables:
   ```env
   PORT=5000
   DATABASE_URL=your_database_url
   JWT_SECRET=your_jwt_secret
   ```

4. **Run Database Migrations (If using SQL)**
   ```sh
   npx sequelize-cli db:migrate
   ```

5. **Start the Server**
   ```sh
   npm run dev
   ```

The backend will start on `http://localhost:5000`.

## 📌 API Endpoints

### **Auth Routes**
| Method | Endpoint        | Description              |
|--------|----------------|--------------------------|
| POST   | `/api/auth/signup`  | Register new user       |
| POST   | `/api/auth/login`   | Login user & get token  |

### **Movie Management (Admin)**
| Method | Endpoint                 | Description          |
|--------|---------------------------|----------------------|
| POST   | `/api/movies`              | Add new movie       |
| PUT    | `/api/movies/:id`          | Update movie        |
| DELETE | `/api/movies/:id`          | Delete movie        |
| GET    | `/api/movies`              | Get all movies      |

### **Showtime & Reservations**
| Method | Endpoint                          | Description                         |
|--------|----------------------------------|-------------------------------------|
| GET    | `/api/showtimes/:date`          | Get showtimes for a specific date |
| GET    | `/api/showtimes/:id/seats`      | Get available seats               |
| POST   | `/api/reservations`            | Reserve seats                     |
| GET    | `/api/reservations/user`       | Get user's reservations           |
| DELETE | `/api/reservations/:id`        | Cancel an upcoming reservation    |

### **Admin Reporting**
| Method | Endpoint                  | Description                         |
|--------|----------------------------|-------------------------------------|
| GET    | `/api/admin/reservations`  | Get all reservations               |
| GET    | `/api/admin/revenue`       | Get revenue statistics             |

## 🔒 Authentication & Authorization
- Uses **JWT Authentication** for security.
- Middleware ensures users can only manage their own reservations.
- **Role-based access control** (RBAC) implemented for admin actions.



