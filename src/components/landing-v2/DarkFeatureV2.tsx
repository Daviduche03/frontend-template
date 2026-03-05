import * as React from "react"
import { ShieldCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function DarkFeatureV2() {
  return (
    <section className="py-32 lg:py-48 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #312e81 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
              <div className="rounded-[3rem] border border-white/5 bg-zinc-900/50 p-4 backdrop-blur-3xl">
                <div className="aspect-[4/3] bg-zinc-950 rounded-[2rem] overflow-hidden flex flex-col p-10 border border-white/10">
                    <div className="flex items-center gap-4 mb-10">
                      <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                          <ShieldCheck className="h-6 w-6 text-indigo-400" />
                      </div>
                      <div className="h-2 w-32 bg-white/10 rounded-full" />
                    </div>
                    <div className="space-y-6">
                      {[1,2,3].map(i => (
                        <div key={i} className="h-12 w-full bg-white/5 rounded-2xl border border-white/5" />
                      ))}
                    </div>
                </div>
              </div>
          </div>
          <div className="order-1 lg:order-2">
            <Badge className="mb-6 bg-indigo-500/10 text-indigo-400 border-indigo-500/20 rounded-full px-5 py-1">Customer Experience</Badge>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              Personalization <br /> 
              <span className="text-indigo-400">at any scale.</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
              Lumina uses deep-learning to understand individual customer intent in real-time. Deliver the right message, on the right channel, exactly when it matters most.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: "Sentiment Engine", desc: "Detect user frustration before they reach out." },
                  { title: "Intent Mapping", desc: "Know exactly what your users are trying to achieve." },
                  { title: "Smart Routing", desc: "Connect high-value accounts to the right agent." },
                  { title: "Predictive Lead Score", desc: "Identify conversion readiness automatically." }
                ].map(item => (
                  <div key={item.title}>
                    <h4 className="font-bold text-lg mb-2 text-white">{item.title}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
