import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apexaabio — Brand Assets",
  description: "Wordmark and lockup variants for various backgrounds.",
  robots: { index: false, follow: false },
};

const VARIANTS = [
  { file: "wordmark-light.svg", label: "Wordmark — light bg", bg: "white", note: "Default. Use on white, slate-50, light photos." },
  { file: "wordmark-dark.svg", label: "Wordmark — dark bg (light violet)", bg: "#0a1628", note: "Use on navy hero, dark slides, deep backgrounds. Softer feel." },
  { file: "wordmark-dark-violet.svg", label: "Wordmark — dark bg (deep violet)", bg: "#0a1628", note: "Higher-contrast variant. Use when you want the violet to pop more." },
  { file: "wordmark-mono-navy.svg", label: "Wordmark — mono navy", bg: "white", note: "Single color. For 1-color print, embossing, watermarks on light." },
  { file: "wordmark-mono-white.svg", label: "Wordmark — mono white", bg: "#0a1628", note: "Single color. For dark photo overlays, busy imagery." },
  { file: "wordmark-mono-black.svg", label: "Wordmark — mono black", bg: "white", note: "Pure black. For legal/regulatory print, fax, B&W contexts." },
  { file: "lockup-light.svg", label: "Full lockup — light bg", bg: "white", note: "Symbol + wordmark together. Decks, letterhead." },
  { file: "lockup-dark.svg", label: "Full lockup — dark bg", bg: "#0a1628", note: "For dark slides and the navy hero." },
];

export default function BrandPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Apexaabio brand assets</h1>
        <p className="text-slate-600 mb-4">Right-click any image → Save As to download. SVG scales to any size without quality loss.</p>
        <p className="mb-12">
          <a
            href="/brand/Apexaabio%20Brand%20Assets.webloc"
            download
            className="inline-flex items-center gap-2 text-sm text-[#7c4dff] hover:underline"
          >
            ⤓ Download desktop shortcut to this page (.webloc)
          </a>
        </p>

        <div className="space-y-12">
          {VARIANTS.map((v) => {
            const isDark = v.bg !== "white";
            return (
              <section key={v.file}>
                <div className="flex items-baseline justify-between mb-3">
                  <h2 className="text-lg font-semibold">{v.label}</h2>
                  <a
                    href={`/brand/${v.file}`}
                    download
                    className="text-sm text-[#7c4dff] hover:underline"
                  >
                    Download {v.file} ↓
                  </a>
                </div>
                <div
                  className={`rounded-2xl border ${isDark ? "border-slate-800" : "border-slate-200"} flex items-center justify-center p-12`}
                  style={{ background: v.bg }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/brand/${v.file}`} alt={v.label} style={{ height: 80, width: "auto" }} />
                </div>
                <p className="mt-3 text-sm text-slate-500">{v.note}</p>
              </section>
            );
          })}
        </div>

        <hr className="my-16 border-slate-200" />

        <section>
          <h2 className="text-2xl font-bold mb-4">Symbol only</h2>
          <p className="text-slate-600 mb-6">Use when the wordmark would crowd the layout — e.g. social avatar, app icon, favicon.</p>
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white flex items-center justify-center p-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/apexaa-symbol.svg" alt="Symbol on light" style={{ height: 120, width: "auto" }} />
            </div>
            <div className="rounded-2xl border border-slate-800 flex items-center justify-center p-12" style={{ background: "#0a1628" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/apexaa-symbol.svg" alt="Symbol on dark" style={{ height: 120, width: "auto" }} />
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-500">
            <a href="/brand/apexaa-symbol.svg" download className="text-[#7c4dff] hover:underline">Download apexaa-symbol.svg ↓</a> — gradient peak (navy → violet → red) on transparent background.
          </p>
        </section>

        <hr className="my-16 border-slate-200" />

        <section>
          <h2 className="text-2xl font-bold mb-4">Color reference</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { hex: "#0a1628", label: "Navy" },
              { hex: "#1a3a6b", label: "Brand blue" },
              { hex: "#7c4dff", label: "Deep violet" },
              { hex: "#b388ff", label: "Light violet" },
              { hex: "#c62828", label: "Brand red" },
              { hex: "#ffffff", label: "White", border: true },
              { hex: "#000000", label: "Black" },
            ].map((c) => (
              <div key={c.hex} className="rounded-lg overflow-hidden">
                <div className={`h-20 ${c.border ? "border border-slate-200" : ""}`} style={{ background: c.hex }} />
                <div className="px-3 py-2">
                  <div className="text-sm font-semibold">{c.label}</div>
                  <div className="text-xs text-slate-500 font-mono">{c.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-16 text-xs text-slate-400">
          Wordmarks render in Inter Semibold. If Inter isn&apos;t installed where the SVG renders, system-ui falls back automatically (close but not pixel-identical). For pixel-identical PowerPoint/Figma rendering, ask Claude to outline the text into paths.
        </p>
      </div>
    </main>
  );
}
