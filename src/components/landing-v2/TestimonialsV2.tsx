import * as React from "react"

const BRAND_COLOR = "text-indigo-600"

export function TestimonialsV2() {
  return (
    <section className="py-32 lg:py-48 bg-white">
      <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-20 max-w-4xl mx-auto">
            Trusted by the teams <br /> 
            <span className={BRAND_COLOR}>building the future.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                text: "Lumina has completely changed how we think about customer success. We've reduced churn by 28% in just 3 months. It's an essential part of our stack now.", 
                name: "Sarah Johnson", 
                role: "VP of CS, Vortex Inc",
                avatar: "https://i.pravatar.cc/100?u=12"
              },
              { 
                text: "The predictive leads feature is a game changer for our sales team. We spend 50% less time on discovery and 100% more time closing high-value deals.", 
                name: "Mark Peterson", 
                role: "Head of Sales, Pulse",
                avatar: "https://i.pravatar.cc/100?u=24"
              },
              { 
                text: "Easiest integration I've ever dealt with. We were up and running in a single afternoon and saw ROI within the first week of deployment.", 
                name: "Elena Rodriguez", 
                role: "CTO, Orbit Systems",
                avatar: "https://i.pravatar.cc/100?u=36"
              }
            ].map((t, i) => (
              <div key={i} className="flex flex-col items-center text-center p-12 rounded-[3rem] bg-zinc-50 border border-zinc-100 transition-all hover:bg-white hover:border-indigo-100">
                  <div className="mb-8">
                    <img src={t.avatar} alt={t.name} className="h-16 w-16 rounded-full border-4 border-white mx-auto" />
                  </div>
                  <p className="text-lg text-zinc-600 mb-10 font-medium leading-relaxed">&quot;{t.text}&quot;</p>
                  <div>
                    <p className="font-bold text-zinc-900">{t.name}</p>
                    <p className={`text-sm font-bold ${BRAND_COLOR} uppercase tracking-widest mt-1`}>{t.role}</p>
                  </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}
