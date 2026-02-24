export default function AcpPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-semibold">ACP</h1>
        <p className="mt-2 text-zinc-300">
          Admin Control Panel (placeholder).
        </p>

        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
          <ul className="space-y-2 text-zinc-300">
            <li>• Users & Roles</li>
            <li>• Content moderation</li>
            <li>• Site config</li>
            <li>• Audit logs</li>
          </ul>
        </div>

        <a className="mt-8 inline-block text-sm underline text-zinc-200" href="/">
          ← Back to home
        </a>
      </div>
    </main>
  );
}