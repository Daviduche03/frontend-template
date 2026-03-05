export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-16 italic tracking-tight text-slate-900 leading-relaxed">
            &quot;NexusFlow has completely transformed how our engineering team operates. 
            We&apos;ve seen a <span className="font-bold font-sans not-italic">40% increase</span> in productivity since switching.&quot;
          </h2>
          <div className="flex flex-col items-center">
            <div className="h-20 w-20 rounded-3xl bg-slate-100 mb-6 overflow-hidden border-4 border-white rotate-3 transition-transform hover:rotate-0">
              <img src="https://i.pravatar.cc/150?u=tech" alt="avatar" />
            </div>
            <div>
              <p className="font-black text-xl text-slate-950">Jane Doe</p>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mt-1">CTO at Pulse Systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
