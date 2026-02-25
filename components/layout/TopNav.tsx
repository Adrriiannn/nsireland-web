"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuthContext } from "@/components/auth/AuthProvider";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/lib/api/client";

function hasPerm(perms: string[] | undefined, key: string) {
  return !!perms?.includes(key);
}

export default function TopNav() {
  const { me, setMe } = useAuthContext();
  const perms = me?.permissions ?? [];
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  async function onLogout() {
  await apiFetch("/auth/logout", { method: "POST" });
  setMe(null);
  router.refresh(); // re-render layouts/server session
}

  return (
    <div className="pointer-events-none sticky top-0 z-50 flex justify-center px-4 pt-4">
      <header className="pointer-events-auto w-full max-w-5xl">
        {/* Lock height to prevent 1–2px growth on auth hydration */}
        <nav className="flex h-[52px] items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-4 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm font-semibold tracking-wide text-zinc-100">
              NSIreland
            </Link>

            <div className="h-5 w-px bg-white/10" />

            <Link href="/jobs" className="text-sm text-zinc-200/90 hover:text-zinc-100">
              Jobs
            </Link>

            {hasPerm(perms, "acp.access") && (
              <Link href="/acp" className="text-sm text-zinc-200/90 hover:text-zinc-100">
                ACP
              </Link>
            )}

            {hasPerm(perms, "editor.web.access") && (
              <Link href="/editor/web" className="text-sm text-zinc-200/90 hover:text-zinc-100">
                Web Editor
              </Link>
            )}

            {hasPerm(perms, "editor.code.access") && (
              <Link href="/editor/code" className="text-sm text-zinc-200/90 hover:text-zinc-100">
                Code Editor
              </Link>
            )}
          </div>

          {/* Reserve width so right-side doesn't shift; placeholder is invisible so no grey flash */}
          <div className="flex min-w-[224px] items-center justify-end gap-3">
            {!mounted ? (
              <div className="h-8 w-56 opacity-0" aria-hidden="true" />
            ) : me?.user ? (
              <>
                <div className="hidden sm:flex items-center gap-2">
                  {me.user.avatarUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={me.user.avatarUrl}
                      alt=""
                      className="h-7 w-7 rounded-full border border-white/10"
                    />
                  ) : (
                    <div className="h-7 w-7 rounded-full border border-white/10 bg-white/10" />
                  )}

                  <div className="text-xs text-zinc-200/90">
                    {me.user.displayName ?? me.user.email ?? "User"}
                  </div>
                </div>

                <button
                  onClick={() => onLogout()}
                  className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs text-zinc-100 hover:bg-white/[0.10]"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs text-zinc-100 hover:bg-white/[0.10]"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="rounded-xl bg-white px-3 py-1.5 text-xs font-semibold text-black hover:bg-zinc-200"
                >
                  Create account
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}