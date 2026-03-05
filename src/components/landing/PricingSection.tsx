import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-slate-50/50 border-t border-slate-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-950 mb-6">Simple <span className="font-serif italic font-light">pricing.</span></h2>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">No hidden fees, no complexity. Choose the plan that fits your growth stage.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic */}
          <div className="rounded-[2rem] border border-slate-200/60 bg-white p-10 flex flex-col transition-colors hover:border-slate-300 text-violet-950">
            <h4 className="text-xl font-bold mb-2">Starter</h4>
            <p className="text-slate-500 text-sm mb-10 font-medium">Great for side projects and small teams.</p>
            <div className="mb-10">
              <span className="text-5xl font-black">$0</span>
              <span className="text-slate-400 font-bold ml-2">/month</span>
            </div>
            <ul className="space-y-4 mb-12 flex-1">
              {["Up to 3 projects", "1,000 requests/mo", "Community support", "Basic analytics"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-900 shrink-0">
                    <Check className="h-3 w-3" />
                  </div> 
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full h-12 text-sm rounded-full font-bold border-slate-200 hover:bg-slate-50">Get Started</Button>
          </div>

          {/* Pro */}
          <div className="rounded-[2rem] border-2 border-violet-950 bg-slate-50 p-10 flex flex-col relative transition-colors text-violet-950">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-950 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">Most Popular</div>
            <h4 className="text-xl font-bold mb-2">Professional</h4>
            <p className="text-slate-500 text-sm mb-10 font-medium">Everything you need to grow.</p>
            <div className="mb-10">
              <span className="text-5xl font-black">$49</span>
              <span className="text-slate-400 font-bold ml-2">/month</span>
            </div>
            <ul className="space-y-4 mb-12 flex-1 font-bold text-slate-900">
              {["Unlimited projects", "100k requests/mo", "Priority email support", "Advanced analytics", "Custom domains", "Team collaboration"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-950 text-white shrink-0">
                    <Check className="h-3 w-3" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Button className="w-full h-12 text-sm rounded-full font-bold bg-violet-950 text-white hover:bg-violet-900">Start 14-day Free Trial</Button>
          </div>

          {/* Enterprise */}
          <div className="rounded-[2rem] border border-slate-200/60 bg-white p-10 flex flex-col transition-colors hover:border-slate-300 text-violet-950">
            <h4 className="text-xl font-bold mb-2">Enterprise</h4>
            <p className="text-slate-500 text-sm mb-10 font-medium">Scalability for large organizations.</p>
            <div className="mb-10">
              <span className="text-5xl font-black">Custom</span>
            </div>
            <ul className="space-y-4 mb-12 flex-1">
              {["Unlimited everything", "Dedicated account manager", "24/7 Phone support", "SLA guarantees", "SSO & Security", "Custom contracts"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-900 shrink-0">
                    <Check className="h-3 w-3" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full h-12 text-sm rounded-full font-bold border-slate-200 hover:bg-slate-50">Contact Sales</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
