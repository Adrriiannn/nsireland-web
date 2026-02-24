import { env } from "@/lib/config/env";

export async function getApiHealth() {
  const res = await fetch(`${env.NS_API_BASE_URL}/health`, { cache: "no-store" });
  if (!res.ok) throw new Error(`API health failed: ${res.status}`);
  return res.json();
}