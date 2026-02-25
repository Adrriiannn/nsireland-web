"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth/use-auth";

export default function JobsPage() {
  const { ready, me } = useAuth();
  const perms = me?.permissions ?? [];

  const isAdminSurface =
    perms.includes("acp.access") ||
    perms.includes("editor.web.access") ||
    perms.includes("editor.code.access");

  return (
    <main className="min-h-screen bg-[#07080b] text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-semibold">Jobs</h1>
        <p className="mt-2 text-zinc-300">
          Temporary placeholder page (this becomes the first real vertical).
        </p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
          <div className="text-sm text-zinc-300">
            Coming next: job list + filters + details page.
          </div>
        </div>

        {ready && isAdminSurface && (
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {perms.includes("acp.access") && (
              <Link className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 hover:bg-white/[0.06]" href="/acp">
                <div className="font-medium">ACP</div>
                <div className="mt-1 text-sm text-zinc-400">Admin control panel</div>
              </Link>
            )}
            {perms.includes("editor.web.access") && (
              <Link className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 hover:bg-white/[0.06]" href="/editor/web">
                <div className="font-medium">Web Editor</div>
                <div className="mt-1 text-sm text-zinc-400">Elementor-like builder</div>
              </Link>
            )}
            {perms.includes("editor.code.access") && (
              <Link className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 hover:bg-white/[0.06]" href="/editor/code">
                <div className="font-medium">Code Editor</div>
                <div className="mt-1 text-sm text-zinc-400">Monaco-based editor</div>
              </Link>
            )}
          </div>
        )}
      </div>
    </main>
  );
}