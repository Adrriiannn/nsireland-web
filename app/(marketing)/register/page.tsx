"use client";

import { useState } from "react";
import { apiFetch } from "@/lib/api/client";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onRegister(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setBusy(true);

    try {
      await apiFetch("/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, password, displayName }),
      });

      router.push("/jobs");
      router.refresh();
    } catch (ex: any) {
      setErr(ex?.message ?? "Register failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#07080b] text-zinc-100">
      <div className="mx-auto max-w-md px-6 py-20">
        <h1 className="text-3xl font-semibold">Create account</h1>
        <p className="mt-2 text-sm text-zinc-400">Email + password (10+ chars).</p>

        <form onSubmit={onRegister} className="mt-6 space-y-3">
          <input
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none"
            placeholder="Display name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <input
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {err && <div className="text-sm text-red-300">{err}</div>}

          <button
            disabled={busy}
            className="w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-zinc-200 disabled:opacity-60"
          >
            {busy ? "Creating..." : "Create account"}
          </button>
        </form>
      </div>
    </main>
  );
}