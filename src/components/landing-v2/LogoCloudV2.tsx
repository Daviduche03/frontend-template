import * as React from "react"

export function LogoCloudV2() {
  return (
    <section className="py-24 border-y border-zinc-50">
      <div className="container mx-auto px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-16">
          Empowering high-growth companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-30 grayscale contrast-125">
            <div className="font-bold text-3xl tracking-tighter italic">Vortex</div>
            <div className="font-bold text-3xl tracking-tighter">CIRRUS</div>
            <div className="font-bold text-3xl tracking-tighter uppercase underline decoration-4 decoration-indigo-500 underline-offset-8">Orbital</div>
            <div className="font-bold text-3xl tracking-tighter font-serif">ACME</div>
            <div className="font-bold text-3xl tracking-tighter">PULSE</div>
        </div>
      </div>
    </section>
  )
}
