"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth/use-auth";

export default function RequirePerm({
  perm,
  children,
}: {
  perm: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { ready, me } = useAuth();

  useEffect(() => {
    if (!ready) return;

    const perms = me?.permissions ?? [];
    const ok = perms.includes(perm);

    if (!ok) router.replace("/login");
  }, [ready, me, perm, router]);

  if (!ready) {
    return (
      <div className="p-6 text-sm text-zinc-400">Checking access…</div>
    );
  }

  const perms = me?.permissions ?? [];
  if (!perms.includes(perm)) return null;

  return <>{children}</>;
}