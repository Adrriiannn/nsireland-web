"use client";

export type MeResponse = {
  user: {
    id: string;
    email: string | null;
    displayName: string | null;
    username: string | null;
    avatarUrl: string | null;
  };
  roles: string[];
  permissions: string[];
};

let me: MeResponse | null = null;

function canUseSessionStorage() {
  return typeof window !== "undefined" && typeof sessionStorage !== "undefined";
}

export function getMe() {
  return me;
}

export function setMe(value: MeResponse | null) {
  me = value;
  if (!canUseSessionStorage()) return;

  // Optional cache to reduce UI flicker on refresh
  if (value) sessionStorage.setItem("nsi_me", JSON.stringify(value));
  else sessionStorage.removeItem("nsi_me");
}

export function loadMeFromSession() {
  if (!canUseSessionStorage()) return null;

  const raw = sessionStorage.getItem("nsi_me");
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as MeResponse;
    me = parsed;
    return parsed;
  } catch {
    sessionStorage.removeItem("nsi_me");
    me = null;
    return null;
  }
}
