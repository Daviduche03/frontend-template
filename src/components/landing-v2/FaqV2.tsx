import * as React from "react"
import { ChevronDown } from "lucide-react"

const BRAND_COLOR = "text-indigo-600"

export function FaqV2() {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(0)

  return (
    <section className="py-32 lg:py-48 bg-white">
      <div className="container mx-auto px-8 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Frequently asked questions.</h2>
            <p className="text-lg text-zinc-500 font-medium">Everything you need to know about the Lumina platform.</p>
          </div>
          <div className="space-y-6">
            {[
              { q: "How secure is my customer data?", a: "Data security is our top priority. Lumina is SOC2 Type II compliant and uses enterprise-grade encryption for all data at rest and in transit. Your data is isolated and never shared." },
              { q: "Can I integrate with my existing CRM?", a: "Yes, Lumina has native, bi-directional integrations with Salesforce, HubSpot, Pipedrive, and 40+ other CRM platforms. Setup takes less than 5 minutes." },
              { q: "Do you offer a free trial?", a: "We offer a 14-day full-featured free trial for both our Starter and Growth plans. No credit card is required to get started." },
              { q: "What kind of support do you provide?", a: "All plans include access to our documentation and community. Growth plans include 24/7 priority email support, while Enterprise includes a dedicated success manager." }
            ].map((item, i) => (
              <div key={i} className="bg-zinc-50 rounded-3xl p-4 overflow-hidden">
                  <button 
                    className="flex w-full items-center justify-between text-left p-6 transition-all"
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  >
                    <span className="text-xl font-bold text-zinc-900">{item.q}</span>
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`}>
                        <ChevronDown className={`h-5 w-5 ${BRAND_COLOR}`} />
                    </div>
                  </button>
                  {activeFaq === i && (
                    <div className="px-6 pb-8 text-zinc-500 font-medium leading-relaxed animate-in slide-in-from-top-4 duration-500">
                      {item.a}
                    </div>
                  )}
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}
