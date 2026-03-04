import * as React from "react"
import { 
  ArrowRight, 
  Check, 
  Globe, 
  Zap,
  Menu,
  X,
  Shield,
  Activity,
  Terminal,
  MousePointer2,
  Workflow
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-white text-violet-600 font-sans selection:bg-slate-900 selection:text-white antialiased">
      {/* --- Floating Navigation --- */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <header className="w-full max-w-4xl rounded-3xl border border-white/20 bg-white/40 backdrop-blur-2xl px-6 py-3 transition-all hover:bg-white/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white transition-transform group-hover:scale-110 group-hover:-rotate-6">
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
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 transition-all group-hover/link:w-full" />
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" className="font-bold text-slate-600 hover:bg-transparent hover:text-slate-950 transition-colors">Log in</Button>
              <Button className="bg-violet-600 text-white hover:bg-violet-700 rounded-2xl px-6 h-10 font-bold transition-all hover:scale-105 active:scale-95">
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
          <div className="fixed inset-0 z-[60] bg-white/80 backdrop-blur-3xl animate-in fade-in duration-300 flex flex-col p-8">
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white">
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
                <Button className="h-16 rounded-2xl text-xl font-bold bg-violet-600 text-white">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      <main className="flex-1">
        {/* --- Hero Section --- */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
          {/* Subtle decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-[0.03]" 
               style={{ backgroundImage: 'radial-gradient(circle, #0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-8">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-24">
              <div className="mb-10 inline-flex items-center rounded-full border border-slate-200/60 bg-slate-50/50 backdrop-blur-sm px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-800">
                <span className="mr-3 flex h-2 w-2 relative">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                Nexus V2 is now in public beta
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-bold tracking-tighter mb-8 text-slate-950 leading-[0.9] max-w-5xl">
                Code at the <br className="hidden md:block" />
                speed of <span className="font-serif italic font-light tracking-tight text-slate-900">thought.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl font-medium leading-relaxed">
                The high-performance workflow engine that scales with your engineering team. Ship faster, measure better, and automate everything.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                <Button className="h-12 px-6 text-sm font-semibold bg-violet-600 text-white hover:bg-violet-700 rounded-full transition-all hover:scale-105 active:scale-95 group">
                  Start Building Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" className="h-12 px-6 text-sm font-semibold border-slate-200 text-slate-950 hover:bg-slate-50 rounded-full transition-all">
                  Book a Demo
                </Button>
              </div>
            </div>

            {/* Main Mockup */}
            <div className="relative max-w-6xl mx-auto group">
              <div className="absolute -inset-4 bg-slate-100 rounded-[3rem] opacity-20 blur-3xl" />
              <div className="relative rounded-[2.5rem] border border-slate-100 bg-white p-3">
                 <div className="rounded-[1.8rem] border border-slate-50 bg-slate-50/50 aspect-[16/9] overflow-hidden flex flex-col">
                    <div className="h-12 border-b border-slate-100 bg-white flex items-center px-6 justify-between">
                       <div className="flex gap-2">
                          <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                          <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                          <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                       </div>
                       <div className="h-2 w-1/4 bg-slate-50 rounded-full" />
                       <div className="h-6 w-6 rounded-full bg-slate-100" />
                    </div>
                    <div className="flex-1 grid grid-cols-12 gap-8 p-10">
                       <div className="col-span-3 border border-slate-100 bg-white rounded-2xl p-6 space-y-6">
                          <div className="h-2 w-1/2 bg-slate-200 rounded-full" />
                          <div className="space-y-3">
                             {[1,2,3,4,5].map(i => <div key={i} className="h-2 w-full bg-slate-100 rounded-full" />)}
                          </div>
                          <div className="h-20 w-full bg-slate-50 rounded-xl" />
                       </div>
                       <div className="col-span-9 border border-slate-100 bg-white rounded-2xl p-8 relative overflow-hidden">
                          <div className="flex items-center justify-between mb-10">
                             <div className="h-8 w-1/3 bg-slate-100 rounded-lg" />
                             <div className="h-8 w-24 bg-violet-600 rounded-lg" />
                          </div>
                          <div className="grid grid-cols-2 gap-8">
                             <div className="h-40 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 flex items-center justify-center">
                                <Activity className="h-12 w-12 text-slate-100" />
                             </div>
                             <div className="h-40 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 flex items-center justify-center">
                                <Workflow className="h-12 w-12 text-slate-100" />
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Logo Cloud --- */}
        <section className="py-20 border-y border-slate-50">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-12">Trusted by fast-moving teams</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2 font-black text-2xl tracking-tighter italic">Vortex</div>
                <div className="flex items-center gap-2 font-black text-2xl tracking-tighter uppercase">Cirrus</div>
                <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">ORBIT.</div>
                <div className="flex items-center gap-2 font-black text-2xl tracking-tighter border-b-4 border-violet-600 leading-none pb-1">ACME</div>
                <div className="flex items-center gap-2 font-black text-2xl tracking-tighter italic">PULSE</div>
            </div>
          </div>
        </section>

        {/* --- Platform Bento Section (2:1 Arrangement) --- */}
        <section id="platform" className="py-24 lg:py-32 bg-slate-50/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-24">
              <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-950">The Platform</div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-950 mb-6">Designed for <span className="font-serif italic font-light">scale.</span></h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">Built by engineers, for engineers. A complete ecosystem to automate, observe, and grow your digital products.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 - 2/3 Width */}
              <div className="md:col-span-2 relative group rounded-[2.5rem] border border-slate-100 bg-white p-12 overflow-hidden transition-all hover:-translate-y-1">
                 <div className="relative z-10 max-w-md">
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600 text-white">
                       <Zap className="h-7 w-7 fill-current animate-pulse" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 tracking-tight text-slate-950">Ultra-Fast Infrastructure</h3>
                    <p className="text-slate-500 text-lg leading-relaxed">
                      Deploy global logic with sub-millisecond cold starts. Our distributed network ensures your users get the lowest latency possible, everywhere.
                    </p>
                 </div>
                 {/* Moving SVG Element */}
                 <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                    <div className="relative w-64 h-64">
                       <div className="absolute inset-0 border-[3px] border-slate-900 rounded-full animate-[spin_8s_linear_infinite]" />
                       <div className="absolute inset-8 border-[3px] border-slate-400 rounded-full animate-[spin_12s_linear_infinite_reverse]" />
                       <div className="absolute inset-16 border-[3px] border-slate-200 rounded-full animate-[spin_6s_linear_infinite]" />
                       <Zap className="absolute inset-0 m-auto h-24 w-24 text-slate-950 animate-bounce" />
                    </div>
                 </div>
              </div>

              {/* Card 2 - 1/3 Width */}
              <div className="group rounded-[2.5rem] border border-slate-100 bg-white p-12 overflow-hidden transition-all hover:-translate-y-1">
                 <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600 text-white">
                    <Shield className="h-7 w-7" />
                 </div>
                 <h3 className="text-2xl font-bold mb-4 tracking-tight text-slate-950">Security Native</h3>
                 <p className="text-slate-500 leading-relaxed">
                   Hardened runtimes and SOC2 compliance out of the box. Your data is isolated, encrypted, and protected.
                 </p>
                 <div className="mt-12 flex justify-center">
                    <div className="flex gap-2">
                       {[1,2,3,4].map(i => (
                         <div key={i} className={`h-1.5 w-1.5 rounded-full bg-slate-200 animate-pulse`} style={{ animationDelay: `${i * 0.2}s` }} />
                       ))}
                    </div>
                 </div>
              </div>

              {/* Card 3 - 1/3 Width */}
              <div className="group rounded-[2.5rem] border border-slate-100 bg-white p-12 overflow-hidden transition-all hover:-translate-y-1">
                 <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600 text-white">
                    <Terminal className="h-7 w-7" />
                 </div>
                 <h3 className="text-2xl font-bold mb-4 tracking-tight text-slate-950">Unified CLI</h3>
                 <p className="text-slate-500 leading-relaxed">
                   One tool to rule your entire stack. Deploy, debug, and monitor from the comfort of your terminal.
                 </p>
                 <div className="mt-12 space-y-2 font-mono text-[10px] text-slate-400">
                    <div className="flex gap-2"><span>$</span><span className="text-slate-900 group-hover:text-slate-600 transition-colors">nexus deploy --prod</span></div>
                    <div className="flex gap-2"><span>$</span><span className="text-slate-200 transition-colors duration-1000 group-hover:text-slate-400">analyzing stack...</span></div>
                 </div>
              </div>

              {/* Card 4 - 2/3 Width */}
              <div className="md:col-span-2 relative group rounded-[2.5rem] border border-slate-100 bg-violet-600 text-white p-12 overflow-hidden transition-all hover:-translate-y-1">
                 <div className="relative z-10 max-w-md">
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-violet-600">
                       <Workflow className="h-7 w-7" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 tracking-tight">Predictive Workflows</h3>
                    <p className="text-slate-400 text-lg leading-relaxed">
                      AI-powered models that understand user intent. Automate customer engagement and product optimizations before your users even ask.
                    </p>
                    <div className="mt-10">
                       <Button className="h-11 px-6 text-sm rounded-full bg-white text-violet-600 hover:bg-slate-100 font-bold">
                          Get Early Access
                       </Button>
                    </div>
                 </div>
                 {/* Moving SVG element for dark card */}
                 <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:flex items-center justify-center">
                    <div className="relative w-80 h-40">
                       <svg className="w-full h-full text-white/5" viewBox="0 0 200 100">
                          <path d="M0 50 Q 50 10 100 50 T 200 50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="animate-[slide_10s_linear_infinite]" />
                          <path d="M0 70 Q 50 30 100 70 T 200 70" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="animate-[slide_7s_linear_infinite_reverse]" />
                       </svg>
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <MousePointer2 className="h-8 w-8 text-white animate-bounce" />
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Testimonials --- */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-16 italic tracking-tight text-slate-900 leading-relaxed">
                &quot;NexusFlow has completely transformed how our engineering team operates. 
                We&apos;ve seen a <span className="font-bold font-sans not-italic">40% increase</span> in productivity since switching.&quot;
              </h2>
              <div className="flex flex-col items-center">
                <div className="h-20 w-20 rounded-3xl bg-slate-100 mb-6 overflow-hidden border-4 border-white rotate-3 transition-transform hover:rotate-0">
                  <img src="https://i.pravatar.cc/150?u=tech" alt="avatar" />
                </div>
                <div>
                  <p className="font-black text-xl text-slate-950">Jane Doe</p>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mt-1">CTO at Pulse Systems</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Pricing --- */}
        <section id="pricing" className="py-24 lg:py-32 bg-slate-50/50 border-t border-slate-100">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-24 max-w-2xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-950 mb-6">Simple <span className="font-serif italic font-light">pricing.</span></h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">No hidden fees, no complexity. Choose the plan that fits your growth stage.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Basic */}
              <div className="bg-white border border-slate-100 p-12 rounded-[2.5rem] flex flex-col transition-all">
                <h4 className="text-xl font-bold mb-2">Starter</h4>
                <p className="text-slate-400 text-sm mb-10 font-medium">Great for side projects and small teams.</p>
                <div className="mb-10">
                  <span className="text-5xl font-black text-slate-950">$0</span>
                  <span className="text-slate-400 font-bold ml-2">/month</span>
                </div>
                <ul className="space-y-4 mb-12 flex-1">
                  {["Up to 3 projects", "1,000 requests/mo", "Community support", "Basic analytics"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                      <Check className="h-5 w-5 text-slate-950" /> {item}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full h-12 text-sm rounded-2xl font-bold border-slate-200">Get Started</Button>
              </div>

              {/* Pro */}
              <div className="bg-white border-4 border-violet-600 p-12 rounded-[3rem] flex flex-col scale-105 relative z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-600 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2 rounded-full">Most Popular</div>
                <h4 className="text-xl font-bold mb-2">Professional</h4>
                <p className="text-slate-400 text-sm mb-10 font-medium">Everything you need to grow.</p>
                <div className="mb-10">
                  <span className="text-5xl font-black text-slate-950">$49</span>
                  <span className="text-slate-400 font-bold ml-2">/month</span>
                </div>
                <ul className="space-y-4 mb-12 flex-1 font-bold text-slate-900">
                  {["Unlimited projects", "100k requests/mo", "Priority email support", "Advanced analytics", "Custom domains", "Team collaboration"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <Check className="h-5 w-5 text-slate-950" /> {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full h-12 text-sm rounded-2xl font-bold bg-violet-600 text-white hover:bg-violet-700">Start 14-day Free Trial</Button>
              </div>

              {/* Enterprise */}
              <div className="bg-white border border-slate-100 p-12 rounded-[2.5rem] flex flex-col transition-all">
                <h4 className="text-xl font-bold mb-2">Enterprise</h4>
                <p className="text-slate-400 text-sm mb-10 font-medium">Scalability for large organizations.</p>
                <div className="mb-10">
                  <span className="text-5xl font-black text-slate-950">Custom</span>
                </div>
                <ul className="space-y-4 mb-12 flex-1">
                  {["Unlimited everything", "Dedicated account manager", "24/7 Phone support", "SLA guarantees", "SSO & Security", "Custom contracts"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                      <Check className="h-5 w-5 text-slate-950" /> {item}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full h-12 text-sm rounded-2xl font-bold border-slate-200">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>

        {/* --- Final CTA --- */}
        <section className="py-24 lg:py-40 border-t border-slate-100 relative overflow-hidden">
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
              <Button size="lg" className="h-14 px-8 text-base font-bold bg-violet-600 text-white hover:bg-violet-700 rounded-full transition-all hover:-translate-y-1">
                Get Started for Free
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-base font-bold border-slate-200 text-slate-950 hover:bg-slate-50 rounded-full transition-all hover:-translate-y-1">
                View Documentation
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="py-24 border-t border-slate-50 bg-white">
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
    </div>
  )
}
