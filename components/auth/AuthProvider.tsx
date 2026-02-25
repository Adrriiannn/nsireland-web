"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import type { MeResponse } from "@/lib/auth/server-session";

type AuthCtx = {
  me: MeResponse | null;
  setMe: (m: MeResponse | null) => void;
};

const Ctx = createContext<AuthCtx | null>(null);

export function AuthProvider({
  initialMe,
  children,
}: {
  initialMe: MeResponse | null;
  children: React.ReactNode;
}) {
  const [me, setMe] = useState<MeResponse | null>(initialMe);
  const value = useMemo(() => ({ me, setMe }), [me]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuthContext() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAuthContext must be used within AuthProvider");
  return ctx;
}