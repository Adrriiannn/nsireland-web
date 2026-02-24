export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            NextStep Ireland
          </h1>
          <p className="mt-2 text-zinc-300">
            Platform shell is live. Internal tools first: ACP, Web Editor, Code Editor.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <a
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 hover:bg-zinc-900/60 transition"
              href="/acp"
            >
              <div className="text-lg font-medium">ACP</div>
              <div className="mt-1 text-sm text-zinc-400">
                Admin & moderation
              </div>
            </a>

            <a
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 hover:bg-zinc-900/60 transition"
              href="/editor/web"
            >
              <div className="text-lg font-medium">Web Editor</div>
              <div className="mt-1 text-sm text-zinc-400">
                Pages & layout builder
              </div>
            </a>

            <a
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 hover:bg-zinc-900/60 transition"
              href="/editor/code"
            >
              <div className="text-lg font-medium">Code Editor</div>
              <div className="mt-1 text-sm text-zinc-400">
                Scripts & automation
              </div>
            </a>
          </div>

          <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-950/40 p-4 text-sm text-zinc-300">
            <div className="font-medium text-zinc-200">Status</div>
            <div className="mt-1">
              Web: <span className="text-emerald-400">OK</span> · API:{" "}
              <a className="underline text-zinc-200" href="https://api.nsireland.ie/health" target="_blank" rel="noreferrer">
                api.nsireland.ie/health
              </a>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-zinc-500">
          NSIreland · internal-first build
        </p>
      </div>
    </main>
  );
}