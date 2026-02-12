export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-[#0a1a12] text-white flex flex-col items-center justify-center relative overflow-hidden font-[family-name:var(--font-geist-sans)]">
      {/* Subtle background glow effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-emerald-700/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-slate-600/5 blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-xl mx-auto">
        {/* Icon */}
        <div className="mb-8 text-5xl opacity-50">🚗</div>

        {/* Two-tone project name */}
        <h1 className="text-5xl sm:text-6xl font-light tracking-tight mb-4">
          <span className="text-slate-200">Carpool</span>
          <span className="text-emerald-400">Network</span>
        </h1>

        {/* Description */}
        <p className="text-base text-slate-400 leading-relaxed mb-10 max-w-md mx-auto">
          Community-driven ridesharing for a more sustainable commute.
        </p>

        {/* Tag pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Rideshare", "Community", "Sustainable"].map((label) => (
            <span
              key={label}
              className="px-4 py-1.5 rounded-full text-xs tracking-wide border border-emerald-500/20 text-emerald-400/70 bg-emerald-500/5"
            >
              {label}
            </span>
          ))}
        </div>

        {/* Coming Soon badge */}
        <div className="inline-block px-8 py-3 rounded-full bg-emerald-600/10 border border-emerald-500/20 text-sm text-slate-300 tracking-wide">
          Coming Soon
        </div>
      </div>

      {/* Domain footer */}
      <div className="absolute bottom-8 text-xs text-slate-700 tracking-widest uppercase">
        carpoolnetwork.org
      </div>
    </div>
  );
}
