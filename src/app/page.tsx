import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
      <div className="rounded-3xl bg-white/80 p-10 shadow-soft backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-steel">
          Manpra Infotech
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-ink md:text-6xl">
          Antivirus licenses delivered instantly.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-steel">
          Shop premium antivirus for every device. Instant delivery by email and
          WhatsApp with activation support.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/products"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white"
          >
            Browse Products
          </Link>
          <Link
            href="/health"
            className="rounded-full border border-steel/20 px-6 py-3 text-sm font-semibold text-ink"
          >
            Health Check
          </Link>
        </div>
      </div>
    </main>
  );
}
