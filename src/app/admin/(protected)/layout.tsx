import Link from "next/link";
import { requireAdmin } from "@/lib/admin";

const navItems = [
  { href: "/admin/products", label: "Products" },
  { href: "/admin/license-keys", label: "License Keys" },
  { href: "/admin/orders", label: "Orders" },
  { href: "/admin/settings", label: "Settings" },
];

export default function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  requireAdmin();

  return (
    <div className="mx-auto min-h-screen max-w-6xl px-6 py-12">
      <header className="flex flex-col gap-4 rounded-3xl bg-white/80 p-6 shadow-card backdrop-blur md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel">
            Admin Console
          </p>
          <h1 className="mt-2 font-display text-2xl font-semibold text-ink">
            Manpra Infotech Operations
          </h1>
        </div>
        <form method="post" action="/admin/logout">
          <button className="rounded-full border border-steel/30 px-4 py-2 text-xs font-semibold text-ink">
            Log out
          </button>
        </form>
      </header>

      <nav className="mt-8 flex flex-wrap gap-3">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full border border-steel/20 bg-white/70 px-4 py-2 text-sm font-semibold text-ink"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-8">{children}</div>
    </div>
  );
}
