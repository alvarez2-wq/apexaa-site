import ApexaaLogo from "@/components/ApexaaLogo";

const BUILD_TIMESTAMP = (() => {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const time = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  const date = `${pad(d.getDate())}:${months[d.getMonth()]}:${String(d.getFullYear()).slice(2)}`;
  return `Build ${time} || ${date}`;
})();

const PILLARS = [
  {
    tag: "Phase III",
    title: "Pivotal-Stage Pipeline",
    body: "Lead programs in late-stage clinical trials, advancing toward registration.",
  },
  {
    tag: "Neuro-Inflammation",
    title: "Modulating CNS Immunity",
    body: "Targeting the inflammatory cascades that drive neuronal injury and progressive disease.",
  },
  {
    tag: "Neuro-Ischemia",
    title: "Protecting Infarct Tissue",
    body: "Therapeutics designed to protect tissue and recover function after ischemic insult.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* ─── Top bar ─────────────────────────────────────────────── */}
      <header className="hero-gradient">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <ApexaaLogo dark />
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#approach" className="hover:text-white transition-colors">Approach</a>
          </nav>
        </div>

        {/* ─── Hero ────────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 md:pt-32 md:pb-48 animate-fade-in-up">
          <p className="text-xs uppercase tracking-[0.2em] text-[#7c4dff] font-semibold mb-6">
            Phase III &nbsp;•&nbsp; Neurotherapeutics
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] max-w-5xl">
            Targeting <span className="text-[#7c4dff]">Neuro-Inflammation</span> &amp; <span className="text-[#c62828]">Neuro-Ischemia</span> at clinical scale.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
            Apexaa is advancing late-stage therapeutics for the most under-served disorders of the central nervous system — from acute ischemic injury to chronic neuro-inflammatory disease.
          </p>
        </section>
      </header>

      {/* ─── Pillars / positioning band ──────────────────────────── */}
      <section id="approach" className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-[#1a3a6b] font-semibold mb-3">
          Therapeutic Focus
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 max-w-3xl">
          Late-stage neurology, built for clinical impact.
        </h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((p) => (
            <div
              key={p.tag}
              className="stat-card rounded-2xl border border-slate-200 bg-white p-8"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-[#c62828] font-semibold">
                {p.tag}
              </p>
              <h3 className="mt-3 text-xl font-bold text-slate-900">{p.title}</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Quiet "more info" line ──────────────────────────────── */}
      <section id="pipeline" className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-10 md:p-14 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#1a3a6b] font-semibold mb-3">
            More information coming soon
          </p>
          <p className="text-slate-700 max-w-2xl mx-auto">
            Pipeline detail, clinical-trial programs, and team information will be published shortly.
          </p>
        </div>
      </section>

      {/* ─── Footer ──────────────────────────────────────────────── */}
      <footer className="bg-[#0a1628] text-slate-400 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
          <ApexaaLogo dark />
          <span>
            &copy; 2026 Apexaa. All rights reserved. &nbsp;|&nbsp; {BUILD_TIMESTAMP}
          </span>
        </div>
      </footer>
    </main>
  );
}
