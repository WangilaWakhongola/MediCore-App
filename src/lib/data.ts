// src/lib/data.ts
// Mock data — replace with real DB (Prisma, Supabase, etc.) later

export const patients = [
  { id: "P001", name: "Eleanor Marsh",   age: 45, gender: "Female", blood: "A+",  phone: "+1 555-0101", condition: "Hypertension",   status: "Active",    doctor: "Dr. Osei",    admitted: "2024-11-12" },
  { id: "P002", name: "Marcus Dillon",   age: 32, gender: "Male",   blood: "O-",  phone: "+1 555-0102", condition: "Fracture",        status: "Admitted",  doctor: "Dr. Reyes",   admitted: "2024-12-01" },
  { id: "P003", name: "Amara Nwosu",     age: 28, gender: "Female", blood: "B+",  phone: "+1 555-0103", condition: "Diabetes Type 2", status: "Active",    doctor: "Dr. Kim",     admitted: "2024-10-05" },
  { id: "P004", name: "Theodore Vance",  age: 61, gender: "Male",   blood: "AB+", phone: "+1 555-0104", condition: "Cardiac Arrest",  status: "Critical",  doctor: "Dr. Osei",    admitted: "2025-01-03" },
  { id: "P005", name: "Isabelle Fontaine",age:38, gender: "Female", blood: "A-",  phone: "+1 555-0105", condition: "Migraine",        status: "Discharged",doctor: "Dr. Reyes",   admitted: "2024-09-20" },
  { id: "P006", name: "Kwame Asante",    age: 55, gender: "Male",   blood: "O+",  phone: "+1 555-0106", condition: "Asthma",         status: "Active",    doctor: "Dr. Kim",     admitted: "2024-08-14" },
];

export const doctors = [
  { id: "D001", name: "Dr. Kofi Osei",       specialty: "Cardiology",    phone: "+1 555-0201", email: "k.osei@medicore.com",    patients: 24, status: "On Duty",  experience: "12 yrs", rating: 4.9 },
  { id: "D002", name: "Dr. Sofia Reyes",     specialty: "Orthopedics",   phone: "+1 555-0202", email: "s.reyes@medicore.com",   patients: 18, status: "On Duty",  experience: "8 yrs",  rating: 4.7 },
  { id: "D003", name: "Dr. Ji-Young Kim",    specialty: "Endocrinology", phone: "+1 555-0203", email: "j.kim@medicore.com",     patients: 20, status: "Off Duty", experience: "10 yrs", rating: 4.8 },
  { id: "D004", name: "Dr. Lena Strauss",    specialty: "Neurology",     phone: "+1 555-0204", email: "l.strauss@medicore.com", patients: 15, status: "On Duty",  experience: "15 yrs", rating: 4.9 },
  { id: "D005", name: "Dr. Emeka Eze",       specialty: "General",       phone: "+1 555-0205", email: "e.eze@medicore.com",     patients: 30, status: "On Duty",  experience: "6 yrs",  rating: 4.6 },
];

export const appointments = [
  { id: "A001", patient: "Eleanor Marsh",    doctor: "Dr. Osei",   date: "2025-01-20", time: "09:00", type: "Follow-up",    status: "Confirmed" },
  { id: "A002", patient: "Marcus Dillon",    doctor: "Dr. Reyes",  date: "2025-01-20", time: "10:30", type: "Check-up",     status: "Confirmed" },
  { id: "A003", patient: "Amara Nwosu",      doctor: "Dr. Kim",    date: "2025-01-21", time: "11:00", type: "Consultation", status: "Pending"   },
  { id: "A004", patient: "Theodore Vance",   doctor: "Dr. Osei",   date: "2025-01-21", time: "14:00", type: "Emergency",    status: "Confirmed" },
  { id: "A005", patient: "Kwame Asante",     doctor: "Dr. Strauss",date: "2025-01-22", time: "09:30", type: "Follow-up",    status: "Cancelled" },
  { id: "A006", patient: "Isabelle Fontaine",doctor: "Dr. Reyes",  date: "2025-01-22", time: "13:00", type: "Check-up",     status: "Pending"   },
];

export const bills = [
  { id: "B001", patient: "Eleanor Marsh",    amount: 1200, paid: 1200, date: "2024-11-30", status: "Paid",    type: "Consultation" },
  { id: "B002", patient: "Marcus Dillon",    amount: 4500, paid: 2000, date: "2024-12-10", status: "Partial", type: "Surgery"      },
  { id: "B003", patient: "Amara Nwosu",      amount:  800, paid:  800, date: "2024-12-05", status: "Paid",    type: "Lab Tests"    },
  { id: "B004", patient: "Theodore Vance",   amount: 9200, paid:    0, date: "2025-01-04", status: "Unpaid",  type: "Emergency"    },
  { id: "B005", patient: "Isabelle Fontaine",amount:  600, paid:  600, date: "2024-09-25", status: "Paid",    type: "Consultation" },
  { id: "B006", patient: "Kwame Asante",     amount: 1100, paid: 1100, date: "2024-08-20", status: "Paid",    type: "Check-up"     },
];

export const monthlyStats = [
  { month: "Aug", patients: 210, revenue: 48000 },
  { month: "Sep", patients: 240, revenue: 52000 },
  { month: "Oct", patients: 195, revenue: 44000 },
  { month: "Nov", patients: 280, revenue: 61000 },
  { month: "Dec", patients: 260, revenue: 57000 },
  { month: "Jan", patients: 310, revenue: 68000 },
];
