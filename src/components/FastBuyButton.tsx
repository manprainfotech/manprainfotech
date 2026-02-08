"use client";

import { useEffect, useState } from "react";
import { buttonStyles } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type FastBuyButtonProps = {
  productName: string;
  className?: string;
  buttonLabel?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

export default function FastBuyButton({
  productName,
  className,
  buttonLabel = "Buy Now",
  variant = "primary",
  size = "md",
}: FastBuyButtonProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [deviceCount, setDeviceCount] = useState("1");
  const [duration, setDuration] = useState("1 Year");

  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    if (!open) return;
    const now = new Date();
    const stamp = now
      .toISOString()
      .replace(/[-:TZ.]/g, "")
      .slice(0, 12);
    const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
    setOrderId(`MP-${stamp}-${rand}`);
  }, [open]);

  const handleConfirm = () => {
    if (!name || !email || !whatsapp) return;

    const message = encodeURIComponent(
      `Hi Manpra Infotech, I want to buy: ${productName}. Qty: ${deviceCount}. Duration: ${duration}. My email: ${email}. WhatsApp: ${whatsapp}. OrderID: ${orderId}. Please send key instantly.`
    );
    const link = `https://wa.me/917009955770?text=${message}`;

    const payload = {
      orderId,
      productName,
      name,
      email,
      whatsapp,
      deviceCount,
      duration,
      createdAt: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(
        window.localStorage.getItem("manpra_leads") || "[]"
      );
      existing.push(payload);
      window.localStorage.setItem("manpra_leads", JSON.stringify(existing));
      console.info("FastBuy lead captured", payload);
      // TODO: Replace with DB persistence when order API is ready.
    } catch (error) {
      console.warn("FastBuy storage failed", error);
    }

    window.open(link, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={buttonStyles({ variant, size, className })}
      >
        {buttonLabel}
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-lg rounded-3xl border border-white/70 bg-white/95 p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-ink">Fast Buy</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-steel"
              >
                Close
              </button>
            </div>
            <p className="mt-2 text-sm text-steel">
              Share your details to confirm on WhatsApp. Order ID: {orderId}
            </p>
            <div className="mt-5 grid gap-4">
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Name"
                className="w-full rounded-2xl border border-mist bg-white px-4 py-3 text-sm text-ink"
              />
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
                type="email"
                className="w-full rounded-2xl border border-mist bg-white px-4 py-3 text-sm text-ink"
              />
              <input
                value={whatsapp}
                onChange={(event) => setWhatsapp(event.target.value)}
                placeholder="WhatsApp Number"
                className="w-full rounded-2xl border border-mist bg-white px-4 py-3 text-sm text-ink"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  value={deviceCount}
                  onChange={(event) => setDeviceCount(event.target.value)}
                  placeholder="Device Count"
                  className="w-full rounded-2xl border border-mist bg-white px-4 py-3 text-sm text-ink"
                />
                <select
                  value={duration}
                  onChange={(event) => setDuration(event.target.value)}
                  className="w-full rounded-2xl border border-mist bg-white px-4 py-3 text-sm text-ink"
                >
                  <option>1 Year</option>
                  <option>2 Years</option>
                  <option>3 Years</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={handleConfirm}
                disabled={!name || !email || !whatsapp}
                className={cn(
                  buttonStyles({ size: "lg" }),
                  !name || !email || !whatsapp
                    ? "cursor-not-allowed opacity-60"
                    : ""
                )}
              >
                Confirm on WhatsApp
              </button>
              <button
                onClick={() => setOpen(false)}
                className={buttonStyles({ variant: "secondary", size: "lg" })}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
