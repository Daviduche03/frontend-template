export function LogoCloud() {
  return (
    <section className="py-20 border-y border-slate-50">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-12">Trusted by fast-moving teams</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 font-black text-2xl tracking-tighter italic">Vortex</div>
            <div className="flex items-center gap-2 font-black text-2xl tracking-tighter uppercase">Cirrus</div>
            <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">ORBIT.</div>
            <div className="flex items-center gap-2 font-black text-2xl tracking-tighter border-b-4 border-violet-950 leading-none pb-1">ACME</div>
            <div className="flex items-center gap-2 font-black text-2xl tracking-tighter italic">PULSE</div>
        </div>
      </div>
    </section>
  )
}
