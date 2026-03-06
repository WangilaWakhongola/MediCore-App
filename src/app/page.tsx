import { patients, doctors, appointments, bills, monthlyStats } from "@/lib/data";
import { Users, Stethoscope, CalendarDays, DollarSign, TrendingUp, AlertCircle } from "lucide-react";
import RevenueChart from "@/components/shared/RevenueChart";

const totalRevenue = bills.reduce((s, b) => s + b.paid, 0);
const pendingBills = bills.filter(b => b.status !== "Paid").length;
const criticalPatients = patients.filter(p => p.status === "Critical").length;
const todayAppts = appointments.filter(a => a.status === "Confirmed").length;

const stats = [
  { label: "Total Patients",   value: patients.length,    icon: Users,        color: "teal",  glow: "stat-glow-teal",  sub: `${criticalPatients} critical` },
  { label: "Doctors on Staff", value: doctors.length,     icon: Stethoscope,  color: "blue",  glow: "stat-glow-blue",  sub: `${doctors.filter(d=>d.status==="On Duty").length} on duty` },
  { label: "Appointments",     value: appointments.length,icon: CalendarDays, color: "amber", glow: "stat-glow-amber", sub: `${todayAppts} confirmed` },
  { label: "Revenue Collected",value: `$${(totalRevenue/1000).toFixed(1)}k`, icon: DollarSign, color: "coral", glow: "stat-glow-coral", sub: `${pendingBills} pending` },
];

const colorMap: Record<string,string> = {
  teal: "#14b8a6", blue: "#3b82f6", amber: "#f59e0b", coral: "#f43f5e"
};

export default function Dashboard() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8 fade-in fade-in-1">
        <h1 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "#fff" }}>
          Good morning, Admin
        </h1>
        <p className="text-sm" style={{ color: "var(--muted)" }}>Here's what's happening at MediCore today.</p>
      </div>

      {/* Critical alert */}
      {criticalPatients > 0 && (
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-lg mb-6 text-sm fade-in fade-in-1"
          style={{ background: "rgba(244,63,94,0.08)", border: "1px solid rgba(244,63,94,0.2)", color: "#f43f5e" }}
        >
          <AlertCircle size={16} />
          <span>{criticalPatients} patient(s) in critical condition require immediate attention.</span>
        </div>
      )}

      {/* Stat cards */}
      <div className="grid grid-cols-4 gap-5 mb-8">
        {stats.map((s, i) => {
          const Icon = s.icon;
          const c = colorMap[s.color];
          return (
            <div
              key={s.label}
              className={`card p-5 ${s.glow} fade-in`}
              style={{ animationDelay: `${0.05 * (i + 1)}s`, opacity: 0 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: `${c}18`, border: `1px solid ${c}30` }}
                >
                  <Icon size={18} style={{ color: c }} />
                </div>
                <TrendingUp size={14} style={{ color: "var(--muted)" }} />
              </div>
              <div className="text-2xl font-bold mb-1" style={{ color: "#fff", fontFamily: "'Playfair Display', serif" }}>
                {s.value}
              </div>
              <div className="text-xs mb-1" style={{ color: "var(--muted)" }}>{s.label}</div>
              <div className="text-xs" style={{ color: c }}>{s.sub}</div>
            </div>
          );
        })}
      </div>

      {/* Charts + recent */}
      <div className="grid grid-cols-3 gap-5">
        {/* Revenue chart */}
        <div className="card p-6 col-span-2 fade-in fade-in-3">
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="text-sm font-semibold" style={{ color: "#fff" }}>Revenue & Patients</div>
              <div className="text-xs" style={{ color: "var(--muted)" }}>Last 6 months</div>
            </div>
          </div>
          <RevenueChart data={monthlyStats} />
        </div>

        {/* Recent appointments */}
        <div className="card p-5 fade-in fade-in-4">
          <div className="text-sm font-semibold mb-4" style={{ color: "#fff" }}>Upcoming Appointments</div>
          <div className="flex flex-col gap-3">
            {appointments.slice(0, 5).map(a => (
              <div key={a.id} className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: "rgba(20,184,166,0.12)", color: "var(--teal)" }}
                >
                  {a.patient.split(" ").map(w=>w[0]).join("").slice(0,2)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium truncate" style={{ color: "#fff" }}>{a.patient}</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>{a.time} · {a.type}</div>
                </div>
                <span
                  className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
                  style={{
                    background: a.status === "Confirmed" ? "rgba(20,184,166,0.12)" : a.status === "Pending" ? "rgba(245,158,11,0.12)" : "rgba(244,63,94,0.12)",
                    color: a.status === "Confirmed" ? "var(--teal)" : a.status === "Pending" ? "var(--amber)" : "var(--coral)",
                  }}
                >
                  {a.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
