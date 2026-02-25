"use client";

import { useState } from "react";
import { apiFetch } from "@/lib/api/client";
import { useRouter } from "next/navigation";
import { env } from "@/lib/config/env";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onLogin(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setBusy(true);

    try {
      await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      router.push("/jobs");
      router.refresh();
    } catch (ex: any) {
      setErr(ex?.message ?? "Login failed");
    } finally {
      setBusy(false);
    }
  }

  function loginWithGitHub() {
    window.location.href = `${env.NS_API_BASE_URL}/auth/github/start`;
  }

  return (
    <main className="min-h-screen bg-[#07080b] text-zinc-100">
      <div className="mx-auto max-w-md px-6 py-20">
        <h1 className="text-3xl font-semibold text-center">Login</h1>

        <button
          onClick={loginWithGitHub}
          className="mt-6 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm hover:bg-white/[0.10]"
        >
          Continue with GitHub
        </button>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <div className="text-xs text-zinc-500">or</div>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <form onSubmit={onLogin} className="space-y-3">
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
            {busy ? "Logging in..." : "Login"}
          </button>

          <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
          <a
            href="#"
            className="hover:text-zinc-200 transition-colors"
          >
            Forgot password?
          </a>

          <a
            href="/register"
            className="hover:text-zinc-200 transition-colors"
          >
            Create a new account
          </a>
        </div>
        </form>
      </div>
    </main>
  );
}