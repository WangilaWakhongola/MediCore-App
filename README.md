# 🏥 MediCore — Hospital Management System

> A modern, full-stack Hospital Management System built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.  
> Manage patients, doctors, appointments, and billing from a clean, dark-themed dashboard.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-yellow?style=flat-square)

---

## ✨ Features

- 📊 **Dashboard** — Overview with live stats, revenue chart, and upcoming appointments
- 🧑‍⚕️ **Patient Management** — Full patient registry with status, blood type, and assigned doctor
- 👨‍⚕️ **Doctors & Staff** — Doctor profiles with specialty, patient count, and duty status
- 📅 **Appointments** — Scheduling table with type-based color coding and status tracking
- 💳 **Billing & Payments** — Invoice management with billed, paid, and outstanding amounts
- 🌙 **Dark UI** — Refined navy dark theme with teal/coral accent system

---

## 🗂️ Project Structure

```
medicore/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with sidebar
│   │   ├── page.tsx                # Dashboard
│   │   ├── patients/page.tsx       # Patient management
│   │   ├── doctors/page.tsx        # Doctors & staff
│   │   ├── appointments/page.tsx   # Appointments
│   │   ├── billing/page.tsx        # Billing & payments
│   │   └── globals.css             # Global styles
│   ├── components/
│   │   ├── layout/
│   │   │   └── Sidebar.tsx         # Navigation sidebar
│   │   └── shared/
│   │       └── RevenueChart.tsx    # Recharts area chart
│   └── lib/
│       └── data.ts                 # Mock data (replace with DB)
├── .env.example
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🛠️ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/medicore.git
cd medicore
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
cp .env.example .env.local
```

### 4. Run the dev server
```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## 🔌 Pages & Routes

| Route            | Page                  |
|------------------|-----------------------|
| `/`              | Dashboard             |
| `/patients`      | Patient Management    |
| `/doctors`       | Doctors & Staff       |
| `/appointments`  | Appointments          |
| `/billing`       | Billing & Payments    |

---

## 🚀 Ideas to Extend

- [ ] Connect a real database with **Prisma** + **PostgreSQL** or **Supabase**
- [ ] Add **NextAuth.js** for role-based authentication (Admin, Doctor, Receptionist)
- [ ] Build a patient detail page with medical history
- [ ] Add appointment booking form with date picker
- [ ] Export reports as PDF
- [ ] Deploy to **Vercel** (one-click deploy)

---

## 📄 License

MIT — free to use and build on top of.
