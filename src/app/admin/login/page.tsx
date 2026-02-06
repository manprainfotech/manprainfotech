import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin";

export default function AdminLoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  if (isAdmin()) {
    redirect("/admin/products");
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-6 py-16">
      <div className="rounded-3xl bg-white/80 p-10 shadow-soft backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel">
          Admin Access
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-ink">
          Manpra Infotech Console
        </h1>
        <p className="mt-2 text-sm text-steel">
          Sign in with the admin password to manage products and orders.
        </p>
        {searchParams?.error ? (
          <p className="mt-4 text-sm font-semibold text-red-600">
            Invalid password. Please try again.
          </p>
        ) : null}
        <form method="post" action="/admin/login" className="mt-6 space-y-4">
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-steel">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="mt-2 w-full rounded-2xl border border-steel/20 bg-white px-4 py-3 text-sm"
              placeholder="Enter admin password"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}
