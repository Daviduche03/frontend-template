import * as React from "react"
import { Zap, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <header className="w-full max-w-4xl rounded-3xl border border-white/20 bg-white/40 backdrop-blur-2xl px-6 py-3 transition-all hover:bg-white/50">
        <div className="flex items-center justify-between text-violet-950">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-950 text-white transition-transform group-hover:scale-110 group-hover:-rotate-6">
              <Zap className="h-5 w-5 fill-current" />
            </div>
            <span className="text-lg font-black tracking-tighter">NexusFlow</span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {['Features', 'Platform', 'Pricing', 'Docs'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="relative text-sm font-bold text-slate-600 hover:text-slate-950 transition-colors group/link"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-950 transition-all group-hover/link:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="font-bold text-slate-600 hover:bg-transparent hover:text-slate-950 transition-colors">Log in</Button>
            <Button className="bg-violet-950 text-white hover:bg-violet-900 rounded-2xl px-6 h-10 font-bold transition-all hover:scale-105 active:scale-95">
              Join Now
            </Button>
          </div>

          <button 
            className="lg:hidden p-2 rounded-xl hover:bg-white/20 transition-colors" 
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-60 bg-white/80 backdrop-blur-3xl animate-in fade-in duration-300 flex flex-col p-8 text-violet-950">
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-950 text-white">
                <Zap className="h-5 w-5 fill-current" />
              </div>
              <span className="text-xl font-black">NexusFlow</span>
            </div>
            <button 
              className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <nav className="flex flex-col gap-8">
            {['Features', 'Platform', 'Pricing', 'Docs'].map((item, i) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-4xl font-black tracking-tight hover:translate-x-4 transition-transform duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Separator className="my-4" />
            <div className="flex flex-col gap-4">
              <Button variant="outline" className="h-16 rounded-2xl text-xl font-bold border-slate-200">Log in</Button>
              <Button className="h-16 rounded-2xl text-xl font-bold bg-violet-950 text-white">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
