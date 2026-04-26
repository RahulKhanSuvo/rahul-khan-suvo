export default function Loading() {
  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-background">
      {/* ── Outer ring ─────────────────────────────────────────────────── */}
      <div className="relative flex items-center justify-center">
        {/* Spinning gradient ring */}
        <span
          className="block rounded-full animate-spin"
          style={{
            width: 72,
            height: 72,
            background:
              "conic-gradient(from 0deg, #502FFe 0%, #a78bfa 40%, transparent 70%)",
            padding: 3,
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
          }}
        />

        {/* Centre dot — pulsing */}
        <span
          className="absolute rounded-full animate-ping"
          style={{
            width: 14,
            height: 14,
            background: "#502FFe",
            opacity: 0.75,
          }}
        />
        <span
          className="absolute rounded-full"
          style={{ width: 10, height: 10, background: "#502FFe" }}
        />
      </div>

    </div>
  );
}
