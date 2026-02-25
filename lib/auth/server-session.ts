import { cookies } from "next/headers";
import { env } from "@/lib/config/env";

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

export async function getServerMe(): Promise<MeResponse | null> {
  // Build Cookie header from incoming request cookies
  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map((c: { name: string; value: string }) => `${c.name}=${c.value}`)
    .join("; ");

  if (!cookieHeader) return null;

  const res = await fetch(`${env.NS_API_BASE_URL}/auth/me`, {
    headers: { Cookie: cookieHeader },
    cache: "no-store",
  });

  if (!res.ok) return null;
  return (await res.json()) as MeResponse;
}