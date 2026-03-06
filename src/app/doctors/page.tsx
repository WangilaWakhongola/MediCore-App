import { doctors } from "@/lib/data";
import { Plus, Star } from "lucide-react";

export default function DoctorsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "#fff" }}>
            Doctors & Staff
          </h1>
          <p className="text-sm" style={{ color: "var(--muted)" }}>{doctors.length} staff members</p>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium"
          style={{ background: "var(--teal)", color: "#020817" }}
        >
          <Plus size={15} /> Add Doctor
        </button>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {doctors.map((d) => (
          <div key={d.id} className="card p-5 cursor-pointer hover:border-teal-500/40 transition-all">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ background: "rgba(20,184,166,0.12)", color: "var(--teal)", border: "1px solid rgba(20,184,166,0.2)" }}
                >
                  {d.name.split(" ").map(w => w[0]).slice(1, 3).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "#fff" }}>{d.name}</div>
                  <div className="text-xs" style={{ color: "var(--teal)" }}>{d.specialty}</div>
                </div>
              </div>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: d.status === "On Duty" ? "rgba(20,184,166,0.12)" : "rgba(100,116,139,0.12)",
                  color: d.status === "On Duty" ? "var(--teal)" : "var(--muted)",
                  border: `1px solid ${d.status === "On Duty" ? "rgba(20,184,166,0.2)" : "rgba(100,116,139,0.2)"}`,
                }}
              >
                {d.status}
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { label: "Patients", value: d.patients },
                { label: "Experience", value: d.experience },
                { label: "Rating", value: d.rating },
              ].map(s => (
                <div key={s.label} className="text-center rounded-lg py-2" style={{ background: "var(--surface2)" }}>
                  <div className="text-sm font-bold" style={{ color: "#fff" }}>
                    {s.label === "Rating" ? (
                      <span className="flex items-center justify-center gap-1">
                        <Star size={11} style={{ color: "#f59e0b" }} fill="#f59e0b" />
                        {s.value}
                      </span>
                    ) : s.value}
                  </div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="text-xs" style={{ color: "var(--muted)" }}>{d.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
