import { Zap, Globe } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="py-24 border-t border-slate-50 bg-white text-violet-950">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-24">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-white">
                 <Zap className="h-4 w-4 fill-current" />
              </div>
              <span className="text-xl font-bold tracking-tight">NexusFlow</span>
            </div>
            <p className="text-slate-500 font-medium text-base max-w-xs mb-10 leading-relaxed">
              The modern workflow engine for high-performing engineering teams. Built with love in San Francisco.
            </p>
            <div className="flex gap-4">
              {[1,2,3].map(i => <div key={i} className="h-10 w-10 bg-slate-50 rounded-xl hover:bg-slate-100 cursor-pointer transition-colors" />)}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-8 uppercase tracking-widest text-slate-400">Product</h4>
            <ul className="space-y-4 text-slate-600 font-semibold text-sm">
              <li><a href="#" className="hover:text-slate-950 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-slate-950 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-slate-950 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-slate-950 transition-colors">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-8 uppercase tracking-widest text-slate-400">Company</h4>
            <ul className="space-y-4 text-slate-600 font-semibold text-sm">
              <li><a href="#" className="hover:text-slate-950 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-slate-950 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-slate-950 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-slate-950 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-8 uppercase tracking-widest text-slate-400">Legal</h4>
            <ul className="space-y-4 text-slate-600 font-semibold text-sm">
              <li><a href="#" className="hover:text-slate-950 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-950 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-slate-950 transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        <Separator className="mb-10 opacity-50" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <p>© 2026 NexusFlow Inc. All rights reserved.</p>
          <div className="flex gap-10">
             <a href="#" className="hover:text-slate-950 transition-colors flex items-center gap-1.5"><Globe className="h-3 w-3" /> System Status</a>
             <a href="#" className="hover:text-slate-950 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
