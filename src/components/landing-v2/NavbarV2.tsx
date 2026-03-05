import * as React from "react"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const BRAND_BG = "bg-indigo-600"

export function NavbarV2() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <header className="w-full max-w-5xl rounded-full border border-zinc-800 bg-zinc-950/80 backdrop-blur-2xl px-6 py-3 transition-all hover:bg-zinc-950/90 shadow-2xl shadow-zinc-900/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${BRAND_BG} text-white transition-transform duration-500 group-hover:rotate-180`}>
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">Lumina</span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {['Features', 'Solutions', 'Pricing', 'Docs'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group/link"
              >
                {item}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-white transition-all duration-300 group-hover/link:w-full opacity-50" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden sm:inline-flex text-zinc-400 hover:text-white hover:bg-white/10 rounded-full h-10 px-5 text-sm font-medium transition-colors">
              Log in
            </Button>
            <Button className={`bg-white text-zinc-950 hover:bg-zinc-200 rounded-full px-6 h-10 text-sm font-bold transition-all hover:scale-105 active:scale-95`}>
              Start Free Trial
            </Button>
          </div>
        </div>
      </header>
    </div>
  )
}
