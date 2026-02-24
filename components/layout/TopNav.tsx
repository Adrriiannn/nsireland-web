import Link from "next/link";

export default function TopNav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(10px)",
        background: "rgba(15, 15, 18, 0.6)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link href="/" style={{ fontWeight: 700, color: "white" }}>
            NSIreland
          </Link>
          <span style={{ opacity: 0.6, color: "white" }}>|</span>
          <span style={{ opacity: 0.8, color: "white" }}>Tools</span>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <Link href="/acp" style={{ color: "white", opacity: 0.85 }}>
            ACP
          </Link>
          <Link href="/editor/web" style={{ color: "white", opacity: 0.85 }}>
            Web Editor
          </Link>
          <Link href="/editor/code" style={{ color: "white", opacity: 0.85 }}>
            Code Editor
          </Link>
        </div>
      </nav>
    </header>
  );
}