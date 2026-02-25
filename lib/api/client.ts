"use client";

import { env } from "@/lib/config/env";

// Cookie-session API client:
// - Access token is HttpOnly cookie (nsi_access)
// - Refresh token is HttpOnly cookie (nsi_refresh)
// - Frontend never stores tokens.
async function refreshSession(): Promise<boolean> {
  const res = await fetch(`${env.NS_API_BASE_URL}/auth/refresh`, {
    method: "POST",
    credentials: "include",
  });

  return res.ok;
}

export async function apiFetch<T>(
  path: string,
  init: RequestInit & { retry?: boolean } = {}
): Promise<T> {
  const url = `${env.NS_API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  const headers = new Headers(init.headers);
  if (!headers.has("Content-Type") && init.body) headers.set("Content-Type", "application/json");

  const res = await fetch(url, {
    ...init,
    headers,
    credentials: "include",
  });

  if (res.status !== 401) {
    if (!res.ok) throw new Error(`API ${path} failed: ${res.status}`);
    // Some endpoints may return no content
    if (res.status === 204) return undefined as T;
    return (await res.json()) as T;
  }

  // 401: try refresh once
  if (init.retry === false) throw new Error("Unauthorized");

  const ok = await refreshSession();
  if (!ok) throw new Error("Unauthorized");

  const res2 = await fetch(url, {
    ...init,
    headers,
    credentials: "include",
  });

  if (!res2.ok) throw new Error(`API ${path} failed: ${res2.status}`);
  if (res2.status === 204) return undefined as T;
  return (await res2.json()) as T;
}
