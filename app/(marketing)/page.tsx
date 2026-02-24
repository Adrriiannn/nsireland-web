export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07080b] text-zinc-100">
      {/* Background: subtle grids + diagonal lines + glow */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_15%,rgba(120,120,255,0.10),transparent_55%),radial-gradient(1000px_circle_at_85%_70%,rgba(120,255,220,0.06),transparent_55%),radial-gradient(900px_circle_at_50%_120%,rgba(255,255,255,0.04),transparent_55%)]" />

        {/* grid */}
        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />

        {/* diagonal “hash” lines */}
        <div className="absolute -inset-[40%] rotate-[-12deg] opacity-[0.10] [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.10)_0,rgba(255,255,255,0.10)_1px,transparent_1px,transparent_24px)]" />

        {/* top fade */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-16">
        {/* Shell card */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl">
          {/* Header */}
          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">
                NextStep Ireland
              </h1>
              <p className="mt-2 max-w-2xl text-zinc-300/90">
                Platform shell is live. Internal tools first: ACP, Web Editor,
                Code Editor.
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <a
              className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition hover:bg-white/[0.06]"
              href="/acp"
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium">ACP</div>
                <div className="text-zinc-400 transition group-hover:text-zinc-200">
                  →
                </div>
              </div>
              <div className="mt-1 text-sm text-zinc-400">
                Admin & moderation
              </div>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="mt-3 text-xs text-zinc-500">
                Roles · permissions · content control
              </div>
            </a>

            <a
              className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition hover:bg-white/[0.06]"
              href="/editor/web"
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium">Web Editor</div>
                <div className="text-zinc-400 transition group-hover:text-zinc-200">
                  →
                </div>
              </div>
              <div className="mt-1 text-sm text-zinc-400">
                Pages & layout builder
              </div>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="mt-3 text-xs text-zinc-500">
                Sections · templates · publish flow
              </div>
            </a>

            <a
              className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition hover:bg-white/[0.06]"
              href="/editor/code"
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium">Code Editor</div>
                <div className="text-zinc-400 transition group-hover:text-zinc-200">
                  →
                </div>
              </div>
              <div className="mt-1 text-sm text-zinc-400">
                Scripts & automation
              </div>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="mt-3 text-xs text-zinc-500">
                Jobs · schedulers · integrations
              </div>
            </a>
          </div>

          {/* Status glass */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-sm font-medium text-zinc-200">Status</div>
                <div className="mt-1 text-sm text-zinc-300/90">
                  Web: <span className="text-emerald-400">OK</span> · API:{" "}
                  <a
                    className="underline decoration-white/20 underline-offset-4 hover:decoration-white/50"
                    href="https://api.nsireland.ie/health"
                    target="_blank"
                    rel="noreferrer"
                  >
                    api.nsireland.ie/health
                  </a>
                </div>
              </div>

              <div className="text-xs text-zinc-500">
                Minimal shell · expand iteratively
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-zinc-500">
          NSIreland · 2026
        </p>
      </div>
    </main>
  );
}