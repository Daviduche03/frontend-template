import * as React from "react"
import { ArrowRight, Star, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const BRAND_BG = "bg-indigo-600"

export function HeroSectionV2() {
  return (
    <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden bg-zinc-950 text-white selection:bg-indigo-500/30">
      {/* Subtle background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20" 
            style={{ backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-xs font-semibold text-indigo-300 uppercase tracking-widest">Lumina AI 2.0 is now live</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tighter mb-8 text-white leading-[0.9] lg:max-w-5xl">
            Intelligence that <br /> 
            <span className="font-serif italic font-light text-indigo-400">drives revenue.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed font-medium">
            The world&apos;s most advanced growth engine. Predict churn, automate outreach, and scale your revenue with AI-powered customer intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button className={`h-14 px-8 text-sm font-bold ${BRAND_BG} text-white hover:bg-indigo-500 rounded-full transition-all hover:scale-105 active:scale-95 group`}>
              Start Building Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="h-14 px-8 text-sm font-bold border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700 hover:text-white rounded-full transition-all">
              Contact Sales
            </Button>
          </div>
          
          <div className="mt-14 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=lumina${i}`} alt="user" className="h-8 w-8 rounded-full border-2 border-zinc-950" />
                ))}
              </div>
              <div className="text-left flex flex-col justify-center">
                <div className="flex gap-0.5 mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-indigo-400 text-indigo-400" />)}
                </div>
                <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Trusted by 2,000+ Teams</p>
              </div>
          </div>
        </div>

        {/* Product Interface Mockup - Dark Mode */}
        <div className="mt-20 relative max-w-5xl mx-auto group">
          <div className={`absolute -inset-1 ${BRAND_BG} rounded-[3rem] opacity-20 blur-2xl transition-opacity group-hover:opacity-30`} />
          <div className="relative rounded-[2.5rem] border border-zinc-800 bg-zinc-900 p-3 shadow-2xl shadow-indigo-500/10">
              <div className="rounded-[1.8rem] border border-zinc-800 bg-zinc-950 aspect-video overflow-hidden flex flex-col">
                {/* Mockup UI Header */}
                <div className="h-12 border-b border-zinc-800 bg-zinc-900/50 flex items-center px-6 justify-between">
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                      <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                      <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-1.5 w-12 bg-zinc-800 rounded-full" />
                      <div className="h-1.5 w-12 bg-zinc-800 rounded-full" />
                    </div>
                    <div className="h-6 w-6 rounded-full bg-zinc-800" />
                </div>
                
                {/* Mockup UI Content */}
                <div className="flex-1 grid grid-cols-[200px_1fr]">
                    <div className="border-r border-zinc-800 p-6 space-y-8 hidden md:block">
                      <div className="space-y-3">
                          <div className="h-1.5 w-1/3 bg-zinc-700 rounded-full" />
                          <div className="h-8 w-full bg-indigo-500/10 border border-indigo-500/20 rounded-lg" />
                      </div>
                      <div className="space-y-4">
                          {[1,2,3,4].map(i => (
                            <div key={i} className="flex items-center gap-3">
                              <div className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
                              <div className="h-1.5 w-full bg-zinc-800 rounded-full" />
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className="p-8 space-y-8 bg-zinc-950/50">
                      <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <div className="h-5 w-32 bg-zinc-800 rounded-md" />
                            <div className="h-2 w-24 bg-zinc-800 rounded-full" />
                          </div>
                          <div className={`h-8 w-28 bg-indigo-500 text-xs font-bold flex items-center justify-center rounded-lg text-white`}>Export</div>
                      </div>
                      <div className="grid grid-cols-3 gap-6">
                          {[1,2,3].map(i => (
                            <div key={i} className="h-32 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between">
                              <div className="h-2 w-1/2 bg-zinc-800 rounded-full" />
                              <div className="h-8 w-full bg-zinc-800/50 rounded-md" />
                            </div>
                          ))}
                      </div>
                      <div className="h-48 bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-4">
                          <TrendingUp className="h-12 w-12 text-indigo-500/50" />
                          <div className="h-2 w-1/4 bg-zinc-800 rounded-full" />
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
