import { Zap, Shield, Terminal, Workflow } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PlatformSection() {
  return (
    <section id="platform" className="py-24 lg:py-32 bg-slate-50/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-24">
          <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-950">The Platform</div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-950 mb-6">Designed for <span className="font-serif italic font-light">scale.</span></h2>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">Built by engineers, for engineers. A complete ecosystem to automate, observe, and grow your digital products.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - 2/3 Width */}
          <div className="md:col-span-2 rounded-[2rem] border border-slate-200/60 bg-white p-10 flex flex-col justify-between transition-colors hover:border-slate-300">
             <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-slate-900">
                   <Zap className="h-5 w-5 fill-current" />
                </div>
                <h3 className="text-3xl font-bold mb-3 tracking-tight text-slate-950">Ultra-Fast Infrastructure.</h3>
             </div>
             <p className="text-slate-500 text-lg leading-relaxed max-w-lg mt-12">
               Deploy global logic with sub-millisecond cold starts. Our distributed network ensures your users get the lowest latency possible, everywhere.
             </p>
          </div>

          {/* Card 2 - 1/3 Width */}
          <div className="rounded-[2rem] border border-slate-200/60 bg-white p-10 flex flex-col justify-between transition-colors hover:border-slate-300">
             <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-slate-900">
                   <Shield className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight text-slate-950">Security Native.</h3>
             </div>
             <p className="text-slate-500 leading-relaxed mt-12">
               Hardened runtimes and SOC2 compliance out of the box. Your data is isolated, encrypted, and protected.
             </p>
          </div>

          {/* Card 3 - 1/3 Width */}
          <div className="rounded-[2rem] border border-slate-200/60 bg-white p-10 flex flex-col justify-between transition-colors hover:border-slate-300">
             <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-slate-900">
                   <Terminal className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight text-slate-950">Unified CLI.</h3>
             </div>
             <p className="text-slate-500 leading-relaxed mt-12">
               One tool to rule your entire stack. Deploy, debug, and monitor from the comfort of your terminal.
             </p>
          </div>

          {/* Card 4 - 2/3 Width */}
          <div className="md:col-span-2 rounded-[2rem] border border-slate-200/60 bg-slate-50 p-10 flex flex-col justify-between transition-colors hover:border-slate-300">
             <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-900">
                   <Workflow className="h-5 w-5" />
                </div>
                <h3 className="text-3xl font-bold mb-3 tracking-tight text-slate-950">Predictive Workflows.</h3>
             </div>
             <div className="mt-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
               <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                 AI-powered models that understand user intent. Automate customer engagement and product optimizations before your users even ask.
               </p>
               <Button className="h-11 px-6 text-sm rounded-full bg-slate-950 text-white hover:bg-slate-800 font-bold w-fit shrink-0">
                  Learn More
               </Button>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
