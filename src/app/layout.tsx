import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "MediCore — Hospital Management System",
  description: "A modern, full-featured hospital management platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen" style={{ background: "var(--bg)" }}>
        <Sidebar />
        <main className="flex-1 ml-64 p-8 overflow-y-auto min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
