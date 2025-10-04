import { useState } from "react";
import emailjs from "emailjs-com";

export default function SubscriptionForm() {
  const [form, setForm] = useState({ name: "", email: "", goal: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const env = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateOwner: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_OWNER,
    templateUser: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_USER,
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    ownerEmail: process.env.NEXT_PUBLIC_OWNER_EMAIL,
  } as Record<string, string | undefined>;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (
      !form.email ||
      !env.serviceId ||
      !env.publicKey ||
      !env.templateOwner ||
      !env.templateUser
    ) {
      console.error("EmailJS env vars missing.");
      setStatus("error");
      return;
    }
    try {
      setStatus("sending");

      await emailjs.send(
        env.serviceId!,
        env.templateOwner!,
        {
          from_name: form.name || "Prospect",
          from_email: form.email,
          goal: form.goal,
          owner_email: env.ownerEmail,
        },
        env.publicKey!
      );

      await emailjs.send(
        env.serviceId!,
        env.templateUser!,
        {
          to_name: form.name || "there",
          to_email: form.email,
        },
        env.publicKey!
      );
      setStatus("sent");
      setForm({ name: "", email: "", goal: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="card">
      <h3 className="text-2xl font-semibold">Register Interest</h3>
      <p className="text-white/70 mt-1">
        We’ll email you details and next steps.
      </p>

      <div className="mt-5 grid gap-3">
        <input
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-green-400"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-green-400"
          placeholder="Your email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          className="min-h-[120px] w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-green-400"
          placeholder="Tell us about your goals (optional)"
          value={form.goal}
          onChange={(e) => setForm({ ...form, goal: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-primary mt-5"
      >
        {status === "sending"
          ? "Sending…"
          : status === "sent"
          ? "Sent! Check your inbox"
          : "Send"}
      </button>

      {status === "error" && (
        <p className="mt-3 text-rose-400">
          Couldn’t send just now. Check your settings and try again.
        </p>
      )}

      <p className="text-xs text-white/40 mt-4">
        Uses EmailJS (client‑side) - replace template IDs & public key in{" "}
        <code>.env.local</code>.
      </p>
    </form>
  );
}
