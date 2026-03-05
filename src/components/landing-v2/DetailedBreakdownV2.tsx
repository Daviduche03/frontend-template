import * as React from "react"
import { Check } from "lucide-react"

export function DetailedBreakdownV2() {
  return (
    <section className="py-24 lg:py-32 overflow-hidden bg-white border-t border-zinc-100">
      <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
                <div className="mb-6 inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-indigo-900">
                  Revenue Operations
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
                  Attribution that finally <br /> 
                  <span className="font-serif italic font-light text-indigo-600">makes sense.</span>
                </h2>
                <p className="text-xl text-zinc-500 mb-10 leading-relaxed font-medium">
                  Lumina connects the dots across your entire funnel. From the first ad click to the final enterprise contract expansion—know exactly what drives your growth.
                </p>
                <div className="grid gap-5">
                  {[
                    "Multi-touch attribution models",
                    "Real-time pipeline visibility",
                    "Channel ROI performance tracking",
                    "Automated cohort reporting"
                  ].map(item => (
                    <div key={item} className="flex items-center gap-4">
                        <div className={`h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center`}>
                          <Check className="h-3 w-3 text-indigo-600" />
                        </div>
                        <span className="font-semibold text-zinc-700">{item}</span>
                    </div>
                  ))}
                </div>
            </div>
            <div className="relative rounded-[2.5rem] border border-zinc-200/60 bg-zinc-50/50 p-6">
                <div className="aspect-square bg-white border border-zinc-100/50 rounded-[2rem] flex flex-col p-10 shadow-sm shadow-zinc-200/20">
                  <div className="flex items-center justify-between mb-12">
                      <div className="flex gap-2 items-center">
                        <div className="h-3 w-3 bg-indigo-600 rounded-sm" />
                        <div className="h-3 w-20 bg-zinc-100 rounded-full" />
                      </div>
                      <div className="h-8 w-24 bg-zinc-50 rounded-lg flex items-center justify-center border border-zinc-100">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Q3 Report</span>
                      </div>
                  </div>
                  <div className="flex-1 flex items-end gap-4">
                      <div className="h-1/3 flex-1 bg-zinc-50 rounded-xl transition-all hover:bg-zinc-100" />
                      <div className="h-2/3 flex-1 bg-zinc-100 rounded-xl transition-all hover:bg-zinc-200" />
                      <div className={`h-[85%] flex-1 bg-indigo-600 rounded-xl relative group`}>
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Peak Growth</div>
                      </div>
                      <div className="h-1/2 flex-1 bg-zinc-50 rounded-xl transition-all hover:bg-zinc-100" />
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section>
  )
}
