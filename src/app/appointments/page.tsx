import { appointments } from "@/lib/data";
import { Plus, CalendarDays } from "lucide-react";

const statusColor: Record<string, string> = {
  Confirmed: "#14b8a6",
  Pending:   "#f59e0b",
  Cancelled: "#f43f5e",
};

const typeColor: Record<string, string> = {
  "Follow-up":    "#3b82f6",
  "Check-up":     "#14b8a6",
  "Consultation": "#a855f7",
  "Emergency":    "#f43f5e",
};

export default function AppointmentsPage() {
  const confirmed = appointments.filter(a => a.status === "Confirmed").length;
  const pending   = appointments.filter(a => a.status === "Pending").length;
  const cancelled = appointments.filter(a => a.status === "Cancelled").length;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "#fff" }}>
            Appointments
          </h1>
          <p className="text-sm" style={{ color: "var(--muted)" }}>{appointments.length} total appointments</p>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium"
          style={{ background: "var(--teal)", color: "#020817" }}
        >
          <Plus size={15} /> Schedule Appointment
        </button>
      </div>

      {/* Summary pills */}
      <div className="flex gap-4 mb-6">
        {[
          { label: "Confirmed", count: confirmed, color: "#14b8a6" },
          { label: "Pending",   count: pending,   color: "#f59e0b" },
          { label: "Cancelled", count: cancelled, color: "#f43f5e" },
        ].map(s => (
          <div
            key={s.label}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm"
            style={{ background: `${s.color}12`, border: `1px solid ${s.color}25`, color: s.color }}
          >
            <span className="font-bold">{s.count}</span>
            <span style={{ color: "var(--muted)" }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              {["ID", "Patient", "Doctor", "Date", "Time", "Type", "Status"].map(h => (
                <th key={h} className="text-left px-5 py-3 text-xs font-medium" style={{ color: "var(--muted)" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, i) => (
              <tr
                key={a.id}
                className="hover:bg-white/5 transition-colors cursor-pointer"
                style={{ borderBottom: i < appointments.length - 1 ? "1px solid var(--border)" : "none" }}
              >
                <td className="px-5 py-4 font-mono text-xs" style={{ color: "var(--teal)" }}>{a.id}</td>
                <td className="px-5 py-4 font-medium" style={{ color: "#fff" }}>{a.patient}</td>
                <td className="px-5 py-4" style={{ color: "var(--muted)" }}>{a.doctor}</td>
                <td className="px-5 py-4 text-xs" style={{ color: "var(--text)" }}>{a.date}</td>
                <td className="px-5 py-4 text-xs font-mono" style={{ color: "var(--teal)" }}>{a.time}</td>
                <td className="px-5 py-4">
                  <span
                    className="px-2 py-0.5 rounded text-xs"
                    style={{ background: `${typeColor[a.type] || "#64748b"}18`, color: typeColor[a.type] || "#64748b" }}
                  >
                    {a.type}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: `${statusColor[a.status]}15`,
                      color: statusColor[a.status],
                      border: `1px solid ${statusColor[a.status]}30`,
                    }}
                  >
                    {a.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
