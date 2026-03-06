"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function RevenueChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
        <defs>
          <linearGradient id="tealGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%"  stopColor="#14b8a6" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="coralGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%"  stopColor="#f43f5e" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#1a3058" />
        <XAxis dataKey="month" tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={{ background: "#0a1628", border: "1px solid #1a3058", borderRadius: 8, color: "#e2e8f0", fontSize: 12 }}
          cursor={{ stroke: "#1a3058" }}
        />
        <Area type="monotone" dataKey="revenue"  stroke="#14b8a6" strokeWidth={2} fill="url(#tealGrad)"  name="Revenue ($)" />
        <Area type="monotone" dataKey="patients" stroke="#f43f5e" strokeWidth={2} fill="url(#coralGrad)" name="Patients" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
