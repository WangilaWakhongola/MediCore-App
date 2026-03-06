"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Users, Stethoscope,
  CalendarDays, CreditCard, Activity,
} from "lucide-react";

const nav = [
  { href: "/",             label: "Dashboard",    icon: LayoutDashboard },
  { href: "/patients",     label: "Patients",     icon: Users            },
  { href: "/doctors",      label: "Doctors",      icon: Stethoscope      },
  { href: "/appointments", label: "Appointments", icon: CalendarDays     },
  { href: "/billing",      label: "Billing",      icon: CreditCard       },
];

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside
      className="fixed top-0 left-0 h-full w-64 flex flex-col"
      style={{ background: "var(--surface)", borderRight: "1px solid var(--border)" }}
    >
      {/* Logo */}
      <div className="px-6 py-7 border-b" style={{ borderColor: "var(--border)" }}>
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "rgba(20,184,166,0.15)", border: "1px solid rgba(20,184,166,0.3)" }}
          >
            <Activity size={18} style={{ color: "var(--teal)" }} />
          </div>
          <div>
            <div
              className="text-base font-bold tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: "#fff" }}
            >
              MediCore
            </div>
            <div className="text-xs" style={{ color: "var(--muted)" }}>HMS v1.0</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-5 flex flex-col gap-1">
        {nav.map(({ href, label, icon: Icon }) => {
          const active = path === href;
          return (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150"
              style={{
                background: active ? "rgba(20,184,166,0.12)" : "transparent",
                color: active ? "var(--teal)" : "var(--muted)",
                border: active ? "1px solid rgba(20,184,166,0.2)" : "1px solid transparent",
              }}
            >
              <Icon size={16} />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-5 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ background: "rgba(20,184,166,0.15)", color: "var(--teal)" }}
          >
            AD
          </div>
          <div>
            <div className="text-xs font-medium" style={{ color: "#fff" }}>Admin</div>
            <div className="text-xs" style={{ color: "var(--muted)" }}>admin@medicore.com</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
