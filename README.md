# HostelMate — RKGIT Hostel Portal
**Stack:** React + Node.js/Express + MongoDB | **No Firebase**

---

## Project Structure
```
hostelmate/
├── backend/          ← Express API server
│   ├── models/       ← Mongoose models
│   ├── routes/       ← API routes
│   ├── middleware/   ← JWT auth middleware
│   ├── server.js     ← Entry point
│   └── .env          ← Environment variables
└── frontend/         ← React app
    └── src/
        ├── api.js    ← All API calls (replaces firebase)
        ├── pages/    ← Login, Signup
        └── components/
```

---

## Setup & Run

### 1. MongoDB Install (agar nahi hai)
```bash
# Ubuntu/WSL
sudo apt install mongodb
sudo service mongodb start

# Ya MongoDB Atlas (free cloud) use karo
# https://cloud.mongodb.com → New Project → Free Cluster → Get URI
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Edit `backend/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/hostelmate
JWT_SECRET=koi_bhi_lamba_secret_yahan_likho
ADMIN_CODE=admin12345
```
> **ADMIN_CODE** woh secret code hai jo signup par admin role deta hai.
> Production mein ye zaroor badlo!

```bash
npm run dev    # development (nodemon)
# ya
npm start      # production
```

Server: `http://localhost:5000`

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```

App: `http://localhost:3000`

---

## How Auth Works

| Action | Details |
|--------|---------|
| **Student Signup** | Email + Password → Account banta hai, seedha login |
| **Admin Signup** | Email + Password + Admin Code (`admin12345`) → Admin role milta hai |
| **Login** | JWT token milta hai → `localStorage` mein save hota hai |
| **Auto Redirect** | Admin → `/admin`, User → `/user/home` |
| **Protected Routes** | Bina login ke koi bhi page nahi khulta |

---

## API Endpoints

### Auth
```
POST /api/auth/signup   → { email, password, adminCode? }
POST /api/auth/login    → { email, password }
```

### Data (JWT required)
```
GET  /api/feedback          → All feedbacks (admin only)
POST /api/feedback          → Submit feedback
DEL  /api/feedback/:id      → Delete (admin only)

GET  /api/complaints        → All complaints (admin only)
POST /api/complaints        → Submit complaint
DEL  /api/complaints/:id    → Delete (admin only)

GET  /api/notices           → All notices (any user)
POST /api/notices           → Create notice (admin only)
DEL  /api/notices/:id       → Delete (admin only)

GET  /api/societies         → All societies (any user)
POST /api/societies         → Create (admin only)
PUT  /api/societies/:id     → Update (admin only)
DEL  /api/societies/:id     → Delete (admin only)
```

---

## Production Deploy

### Backend (Railway / Render / VPS)
1. `backend/.env` mein production values daalo
2. `MONGODB_URI` → MongoDB Atlas URI use karo
3. `npm start`

### Frontend (Vercel / Netlify)
1. `frontend/.env` mein `REACT_APP_API_URL=https://your-backend.com/api` daalo
2. `npm run build`
3. `build/` folder deploy karo

### CORS Fix (production)
`backend/server.js` mein:
```js
app.use(cors({ origin: 'https://your-frontend.com', credentials: true }));
```
