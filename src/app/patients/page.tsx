import { patients } from "@/lib/data";
import { Users, Search, Plus } from "lucide-react";

const statusColor: Record<string, string> = {
  Active:     "#14b8a6",
  Admitted:   "#3b82f6",
  Critical:   "#f43f5e",
  Discharged: "#64748b",
};

export default function PatientsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "#fff" }}>
            Patient Management
          </h1>
          <p className="text-sm" style={{ color: "var(--muted)" }}>{patients.length} registered patients</p>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all"
          style={{ background: "var(--teal)", color: "#020817" }}
        >
          <Plus size={15} /> Add Patient
        </button>
      </div>

      {/* Search bar */}
      <div
        className="flex items-center gap-3 px-4 py-3 rounded-lg mb-6"
        style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
      >
        <Search size={15} style={{ color: "var(--muted)" }} />
        <span className="text-sm" style={{ color: "var(--muted)" }}>Search patients by name, ID or condition...</span>
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              {["Patient ID", "Name", "Age", "Blood Type", "Condition", "Doctor", "Status", "Admitted"].map(h => (
                <th key={h} className="text-left px-5 py-3 text-xs font-medium" style={{ color: "var(--muted)" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {patients.map((p, i) => (
              <tr
                key={p.id}
                className="transition-colors hover:bg-white/5 cursor-pointer"
                style={{ borderBottom: i < patients.length - 1 ? "1px solid var(--border)" : "none" }}
              >
                <td className="px-5 py-4 font-mono text-xs" style={{ color: "var(--teal)" }}>{p.id}</td>
                <td className="px-5 py-4 font-medium" style={{ color: "#fff" }}>{p.name}</td>
                <td className="px-5 py-4" style={{ color: "var(--muted)" }}>{p.age}</td>
                <td className="px-5 py-4">
                  <span
                    className="px-2 py-0.5 rounded text-xs font-mono"
                    style={{ background: "rgba(20,184,166,0.1)", color: "var(--teal)" }}
                  >
                    {p.blood}
                  </span>
                </td>
                <td className="px-5 py-4" style={{ color: "var(--text)" }}>{p.condition}</td>
                <td className="px-5 py-4" style={{ color: "var(--muted)" }}>{p.doctor}</td>
                <td className="px-5 py-4">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: `${statusColor[p.status]}18`,
                      color: statusColor[p.status],
                      border: `1px solid ${statusColor[p.status]}30`,
                    }}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-xs" style={{ color: "var(--muted)" }}>{p.admitted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
