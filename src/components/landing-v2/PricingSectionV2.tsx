import * as React from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSectionV2() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-zinc-50/50 border-t border-zinc-100">
      <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-6">
              Simple <span className="font-serif italic font-light text-indigo-600">pricing.</span>
            </h2>
            <p className="text-xl text-zinc-500 font-medium">No hidden fees. No complex tiers. Choose the plan that fits your growth stage.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Basic */}
            <div className="bg-white border border-zinc-200/60 p-10 rounded-[2rem] flex flex-col transition-colors hover:border-zinc-300">
                <h4 className="text-xl font-bold mb-2 text-zinc-900">Starter</h4>
                <p className="text-zinc-500 text-sm mb-10 font-medium">Perfect for small teams finding their way.</p>
                <div className="mb-10">
                  <span className="text-5xl font-black text-zinc-900">$79</span>
                  <span className="text-zinc-400 font-bold ml-2">/month</span>
                </div>
                <div className="space-y-4 mb-12 flex-1">
                  {["Up to 1k active users", "Neural churn prediction", "Basic workflows", "Email support"].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm font-semibold text-zinc-600">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 shrink-0">
                          <Check className="h-3 w-3" />
                        </div>
                        {item}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full h-12 text-sm rounded-full font-bold border-zinc-200 text-zinc-900 hover:bg-zinc-50">Get Started</Button>
            </div>

            {/* Pro - Featured */}
            <div className="bg-indigo-950 border-2 border-indigo-950 p-10 rounded-[2rem] flex flex-col relative text-white">
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full`}>Most Popular</div>
                <h4 className="text-xl font-bold mb-2">Growth</h4>
                <p className="text-indigo-200 text-sm mb-10 font-medium">Scale your operations with advanced AI.</p>
                <div className="mb-10">
                  <span className="text-5xl font-black">$249</span>
                  <span className="text-indigo-300 font-bold ml-2">/month</span>
                </div>
                <div className="space-y-4 mb-12 flex-1">
                  {["Up to 10k users", "Advanced AI models", "Unlimited workflows", "API & SDK access", "Priority 24/7 support", "Custom analytics"].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm font-bold">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-white shrink-0">
                          <Check className="h-3 w-3" />
                        </div>
                        {item}
                    </div>
                  ))}
                </div>
                <Button className={`w-full h-12 text-sm rounded-full font-bold bg-white text-indigo-950 hover:bg-zinc-200 transition-colors`}>Start Free Trial</Button>
            </div>

            {/* Enterprise */}
            <div className="bg-white border border-zinc-200/60 p-10 rounded-[2rem] flex flex-col transition-colors hover:border-zinc-300">
                <h4 className="text-xl font-bold mb-2 text-zinc-900">Enterprise</h4>
                <p className="text-zinc-500 text-sm mb-10 font-medium">Full control for global organizations.</p>
                <div className="mb-10">
                  <span className="text-5xl font-black text-zinc-900">Custom</span>
                </div>
                <div className="space-y-4 mb-12 flex-1">
                  {["Unlimited scale", "Custom model training", "SSO & SAML security", "Dedicated Success Lead", "SLA guarantees", "White-glove setup"].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm font-semibold text-zinc-600">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 shrink-0">
                          <Check className="h-3 w-3" />
                        </div>
                        {item}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full h-12 text-sm rounded-full font-bold border-zinc-200 text-zinc-900 hover:bg-zinc-50">Talk to Sales</Button>
            </div>
          </div>
      </div>
    </section>
  )
}
