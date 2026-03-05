import * as React from "react"
import { Database, PieChart, Workflow } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FeaturesSectionV2() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-zinc-50/50 border-t border-zinc-100">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-20 max-w-3xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-indigo-900">
            Platform Capabilities
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-6">
            Everything you need to <span className="font-serif italic font-light text-indigo-600">scale.</span>
          </h2>
          <p className="text-xl text-zinc-500 leading-relaxed font-medium">
            A definitive suite of customer intelligence tools designed to help you understand, engage, and grow your audience seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="rounded-[2rem] border border-zinc-200/60 bg-white p-10 flex flex-col justify-between transition-colors hover:border-zinc-300 group">
              <div>
                <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
                    <PieChart className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight text-zinc-900">Predictive Analytics.</h3>
              </div>
              <p className="text-zinc-500 text-lg leading-relaxed max-w-md mt-12">
                Identify expansion opportunities and churn risks before they happen with our neural forecasting engine. Stop guessing and start knowing.
              </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-[2rem] border border-zinc-200/60 bg-white p-10 flex flex-col justify-between transition-colors hover:border-zinc-300 group">
              <div>
                <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
                    <Workflow className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight text-zinc-900">Smart Workflows.</h3>
              </div>
              <p className="text-zinc-500 text-lg leading-relaxed max-w-md mt-12">
                Trigger highly personalized, multi-channel campaigns based on complex behavioral data and user intent. Fully automated growth.
              </p>
          </div>

          {/* Card 3 - Full Width */}
          <div className="md:col-span-2 rounded-[2rem] border border-zinc-200/60 bg-white p-10 flex flex-col justify-between transition-colors hover:border-zinc-300 group">
              <div>
                <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
                    <Database className="h-5 w-5" />
                </div>
                <h3 className="text-3xl font-bold mb-3 tracking-tight text-zinc-900">Unified Profile.</h3>
              </div>
              <div className="mt-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <p className="text-zinc-500 text-lg leading-relaxed max-w-xl">
                  Bring every single customer interaction into one centralized source of truth. Eliminate data silos, remove manual syncing, and get the full picture instantly.
                </p>
                <Button variant="outline" className="h-11 px-6 text-sm rounded-full border-zinc-200 text-zinc-900 hover:bg-zinc-50 font-bold w-fit shrink-0">
                  Explore Infrastructure
                </Button>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
