import { ArrowRight, Activity, Workflow } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle, #0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-4">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-24">
          <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-bold tracking-tighter mb-8 text-slate-950 leading-[0.9] max-w-5xl">
            Code at the <br className="hidden md:block" />
            speed of <span className="font-serif italic font-light tracking-tight text-slate-900">thought.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl font-medium leading-relaxed">
            The high-performance workflow engine that scales with your engineering team. Ship faster, measure better, and automate everything.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Button className="h-12 px-6 text-sm font-semibold bg-violet-950 text-white hover:bg-violet-900 rounded-full transition-all hover:scale-105 active:scale-95 group">
              Start Building Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="h-12 px-6 text-sm font-semibold border-slate-200 text-slate-950 hover:bg-slate-50 rounded-full transition-all">
              Book a Demo
            </Button>
          </div>
        </div>

        {/* Main Mockup */}
        <div className="relative max-w-6xl mx-auto group">
          <div className="absolute -inset-4 bg-slate-100 rounded-[3rem] opacity-20 blur-3xl" />
          <div className="relative rounded-[2.5rem] border border-slate-100 bg-white p-3">
             <div className="rounded-[1.8rem] border border-slate-50 bg-slate-50/50 aspect-video overflow-hidden flex flex-col">
                <div className="h-12 border-b border-slate-100 bg-white flex items-center px-6 justify-between">
                   <div className="flex gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                      <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                      <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                   </div>
                   <div className="h-2 w-1/4 bg-slate-50 rounded-full" />
                   <div className="h-6 w-6 rounded-full bg-slate-100" />
                </div>
                <div className="flex-1 grid grid-cols-12 gap-8 p-10">
                   <div className="col-span-3 border border-slate-100 bg-white rounded-2xl p-6 space-y-6">
                      <div className="h-2 w-1/2 bg-slate-200 rounded-full" />
                      <div className="space-y-3">
                         {[1,2,3,4,5].map(i => <div key={i} className="h-2 w-full bg-slate-100 rounded-full" />)}
                      </div>
                      <div className="h-20 w-full bg-slate-50 rounded-xl" />
                   </div>
                   <div className="col-span-9 border border-slate-100 bg-white rounded-2xl p-8 relative overflow-hidden">
                      <div className="flex items-center justify-between mb-10">
                         <div className="h-8 w-1/3 bg-slate-100 rounded-lg" />
                         <div className="h-8 w-24 bg-violet-950 rounded-lg" />
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                         <div className="h-40 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 flex items-center justify-center">
                            <Activity className="h-12 w-12 text-slate-100" />
                         </div>
                         <div className="h-40 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 flex items-center justify-center">
                            <Workflow className="h-12 w-12 text-slate-100" />
                         </div>
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
