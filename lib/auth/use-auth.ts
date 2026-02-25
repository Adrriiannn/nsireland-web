"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api/client";
import { loadMeFromSession, setMe, getMe, type MeResponse } from "@/lib/auth/auth-store";

export function useAuth() {
  const [ready, setReady] = useState(false);
  const [meState, setMeState] = useState<MeResponse | null>(getMe());

  async function reloadMe() {
    try {
      const data = await apiFetch<MeResponse>("/auth/me");
      setMe(data);
      setMeState(data);
      return data;
    } catch {
      setMe(null);
      setMeState(null);
      return null;
    }
  }

  async function logout() {
    try {
      await apiFetch<{ ok: boolean }>("/auth/logout", { method: "POST" });
    } finally {
      setMe(null);
      setMeState(null);
    }
  }

  useEffect(() => {
    // Optional: instant UI on refresh (cached profile only)
    const cached = loadMeFromSession();
    if (cached) {
      setMe(cached);
      setMeState(cached);
    }

    reloadMe().finally(() => setReady(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ready, me: meState, reloadMe, logout };
}
