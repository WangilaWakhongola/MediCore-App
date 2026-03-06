import { bills } from "@/lib/data";
import { DollarSign, Plus } from "lucide-react";

const statusColor: Record<string, string> = {
  Paid:    "#14b8a6",
  Partial: "#f59e0b",
  Unpaid:  "#f43f5e",
};

export default function BillingPage() {
  const totalBilled  = bills.reduce((s, b) => s + b.amount, 0);
  const totalPaid    = bills.reduce((s, b) => s + b.paid, 0);
  const totalPending = totalBilled - totalPaid;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "#fff" }}>
            Billing & Payments
          </h1>
          <p className="text-sm" style={{ color: "var(--muted)" }}>{bills.length} invoices</p>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium"
          style={{ background: "var(--teal)", color: "#020817" }}
        >
          <Plus size={15} /> New Invoice
        </button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-5 mb-8">
        {[
          { label: "Total Billed",    value: totalBilled,  color: "#3b82f6" },
          { label: "Total Collected", value: totalPaid,    color: "#14b8a6" },
          { label: "Outstanding",     value: totalPending, color: "#f43f5e" },
        ].map(s => (
          <div key={s.label} className="card p-5" style={{ border: `1px solid ${s.color}25` }}>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: `${s.color}18` }}
              >
                <DollarSign size={16} style={{ color: s.color }} />
              </div>
              <span className="text-xs" style={{ color: "var(--muted)" }}>{s.label}</span>
            </div>
            <div className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#fff" }}>
              ${s.value.toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              {["Invoice ID", "Patient", "Type", "Amount", "Paid", "Balance", "Date", "Status"].map(h => (
                <th key={h} className="text-left px-5 py-3 text-xs font-medium" style={{ color: "var(--muted)" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bills.map((b, i) => (
              <tr
                key={b.id}
                className="hover:bg-white/5 transition-colors cursor-pointer"
                style={{ borderBottom: i < bills.length - 1 ? "1px solid var(--border)" : "none" }}
              >
                <td className="px-5 py-4 font-mono text-xs" style={{ color: "var(--teal)" }}>{b.id}</td>
                <td className="px-5 py-4 font-medium" style={{ color: "#fff" }}>{b.patient}</td>
                <td className="px-5 py-4 text-xs" style={{ color: "var(--muted)" }}>{b.type}</td>
                <td className="px-5 py-4 font-mono text-xs" style={{ color: "var(--text)" }}>${b.amount.toLocaleString()}</td>
                <td className="px-5 py-4 font-mono text-xs" style={{ color: "#14b8a6" }}>${b.paid.toLocaleString()}</td>
                <td className="px-5 py-4 font-mono text-xs" style={{ color: b.amount - b.paid > 0 ? "#f43f5e" : "var(--muted)" }}>
                  ${(b.amount - b.paid).toLocaleString()}
                </td>
                <td className="px-5 py-4 text-xs" style={{ color: "var(--muted)" }}>{b.date}</td>
                <td className="px-5 py-4">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: `${statusColor[b.status]}15`,
                      color: statusColor[b.status],
                      border: `1px solid ${statusColor[b.status]}30`,
                    }}
                  >
                    {b.status}
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
