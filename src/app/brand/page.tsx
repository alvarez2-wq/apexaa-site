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

const OUTLINED = [
  { file: "wordmark-light-outlined.svg", label: "Wordmark — light bg", bg: "white" },
  { file: "wordmark-dark-outlined.svg", label: "Wordmark — dark bg (light violet)", bg: "#0a1628" },
  { file: "wordmark-dark-violet-outlined.svg", label: "Wordmark — dark bg (deep violet)", bg: "#0a1628" },
  { file: "wordmark-mono-navy-outlined.svg", label: "Mono navy", bg: "white" },
  { file: "wordmark-mono-white-outlined.svg", label: "Mono white", bg: "#0a1628" },
  { file: "wordmark-mono-black-outlined.svg", label: "Mono black", bg: "white" },
  { file: "lockup-light-outlined.svg", label: "Full lockup — light bg", bg: "white" },
  { file: "lockup-dark-outlined.svg", label: "Full lockup — dark bg", bg: "#0a1628" },
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
          <h2 className="text-2xl font-bold mb-2">PNG raster — for PowerPoint Online</h2>
          <p className="text-slate-600 mb-8">
            PowerPoint Online&apos;s SVG importer inserts visible whitespace between adjacent path elements (a known PPT limitation). <strong>Use these PNG exports instead</strong> — flat 8× resolution images, transparent background, no font fallback, no path decomposition. Drop into PPT via Insert → Pictures → This Device.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { file: "wordmark-light.png", label: "Wordmark — light bg", bg: "white" },
              { file: "wordmark-dark.png", label: "Wordmark — dark bg (light violet)", bg: "#0a1628" },
              { file: "wordmark-dark-violet.png", label: "Wordmark — dark bg (deep violet)", bg: "#0a1628" },
              { file: "wordmark-mono-navy.png", label: "Mono navy", bg: "white" },
              { file: "wordmark-mono-white.png", label: "Mono white", bg: "#0a1628" },
              { file: "wordmark-mono-black.png", label: "Mono black", bg: "white" },
              { file: "lockup-light.png", label: "Full lockup — light bg", bg: "white" },
              { file: "lockup-dark.png", label: "Full lockup — dark bg", bg: "#0a1628" },
            ].map((v) => {
              const isDark = v.bg !== "white";
              return (
                <div key={v.file}>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-sm font-medium">{v.label}</span>
                    <a href={`/brand/${v.file}`} download className="text-xs text-[#7c4dff] hover:underline">
                      Download .png ↓
                    </a>
                  </div>
                  <div
                    className={`rounded-xl border ${isDark ? "border-slate-800" : "border-slate-200"} flex items-center justify-center p-8`}
                    style={{ background: v.bg }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/brand/${v.file}`} alt={v.label} style={{ height: 56, width: "auto" }} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <hr className="my-16 border-slate-200" />

        <section>
          <h2 className="text-2xl font-bold mb-2">Outlined SVG versions</h2>
          <p className="text-slate-600 mb-8">
            Same wordmarks above, but the text is converted to vector paths instead of <code className="bg-slate-100 px-1 rounded">font-family: Inter</code>. <strong>Use these for PowerPoint, Figma, Illustrator, or any context where Inter isn&apos;t installed.</strong> They render pixel-identical anywhere — no font fallback weight differences. Trade-off: text isn&apos;t editable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OUTLINED.map((v) => {
              const isDark = v.bg !== "white";
              return (
                <div key={v.file}>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-sm font-medium">{v.label}</span>
                    <a href={`/brand/${v.file}`} download className="text-xs text-[#7c4dff] hover:underline">
                      Download ↓
                    </a>
                  </div>
                  <div
                    className={`rounded-xl border ${isDark ? "border-slate-800" : "border-slate-200"} flex items-center justify-center p-8`}
                    style={{ background: v.bg }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/brand/${v.file}`} alt={v.label} style={{ height: 56, width: "auto" }} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

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
