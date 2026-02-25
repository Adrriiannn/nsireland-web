"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GitHubReturnPage() {
  const router = useRouter();

  useEffect(() => {
    // Cookie-session: API sets HttpOnly cookies, nothing to read from URL.
    router.replace("/jobs");
    router.refresh();
  }, [router]);

  return (
    <main className="min-h-screen bg-[#07080b] text-zinc-100">
      <div className="mx-auto max-w-md px-6 py-20 text-sm text-zinc-300">
        Completing GitHub login…
      </div>
    </main>
  );
}
