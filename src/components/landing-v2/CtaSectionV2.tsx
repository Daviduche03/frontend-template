import * as React from "react"
import { Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSectionV2() {
  return (
    <section className="py-24 lg:py-40 border-t border-zinc-100 relative overflow-hidden bg-zinc-50/50">
      <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8 inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-indigo-900">
            <Zap className="h-3 w-3 mr-2" /> Start Scaling
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 mb-10 leading-[0.9]">
            Start building with <br /> 
            <span className="font-serif italic font-light text-indigo-600">Lumina today.</span>
          </h2>
          <p className="text-xl md:text-2xl text-zinc-500 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
            Join thousands of high-performing teams who use Lumina to drive predictable revenue growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-14 px-8 text-base font-bold bg-indigo-600 text-white hover:bg-indigo-700 rounded-full transition-all hover:-translate-y-1">
                Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 text-base font-bold border-zinc-200 text-zinc-900 hover:bg-zinc-50 rounded-full transition-all hover:-translate-y-1">
                Book a Demo
            </Button>
          </div>
      </div>
    </section>
  )
}
