import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-24 lg:py-40 border-t border-slate-100 relative overflow-hidden text-violet-950">
      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-10 leading-[0.9]">
          Ready to <br /> 
          <span className="font-serif italic font-light text-slate-900">scale your team?</span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-500 mb-16 max-w-2xl mx-auto font-medium">
          Join thousands of teams already using NexusFlow to build amazing products. 
          Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="h-14 px-8 text-base font-bold bg-violet-950 text-white hover:bg-violet-900 rounded-full transition-all hover:-translate-y-1">
            Get Started for Free
          </Button>
          <Button variant="outline" size="lg" className="h-14 px-8 text-base font-bold border-slate-200 hover:bg-slate-50 rounded-full transition-all hover:-translate-y-1">
            View Documentation
          </Button>
        </div>
      </div>
    </section>
  )
}
