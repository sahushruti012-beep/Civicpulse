# CivicPulse - Submission Build

This package contains the complete CivicPulse frontend and backend.

## 1. Database
Create a MySQL database named:
`civicpulse_database`

The backend uses the MySQL connection configured in:
`backend/src/main/resources/application.properties`

If your MySQL username/password is different, update that file.

## 2. Start Backend (Windows)
Open PowerShell in `backend`:

```powershell
mvn spring-boot:run
```

If Maven is unavailable, use:

```powershell
.\mvnw.cmd spring-boot:run
```

Backend runs on:
`http://localhost:8080`

## 3. Start Frontend (Windows)
Open a second PowerShell in `frontend`:

```powershell
npm run dev
```

Open the Vite URL shown in the terminal, normally:
`http://localhost:5173`

## 4. Important
- Start MySQL before starting Spring Boot.
- Start Spring Boot before testing API-based features.
- Register a citizen account from the Register page.
- For an administrator account, set the user's database `role` to `ADMIN`.
- The project automatically creates/updates its JPA tables with `ddl-auto=update`.

## Main working features
Citizen:
- Register / Login / Logout
- Citizen dashboard
- Report complaint with optional image
- My Complaints
- Complaint tracking
- Rating and feedback for resolved complaints
- Edit profile
- Change password
- Forgot password

Admin:
- Dashboard
- Complaint management
- View / Edit status / Delete complaints
- User management
- View / Edit / Save / Delete users
- Reports & analytics
- Profile settings
- Change password
- Notification preferences
- Logout
