import * as React from "react"
import { 
  ArrowRight, 
  BarChart3, 
  Check, 
  ChevronDown, 
  Database, 
  Globe, 
  LayoutDashboard, 
  MessageSquare, 
  PieChart, 
  Sparkles, 
  Target, 
  Users, 
  Zap,
  Star,
  PlusIcon,
  MinusIcon,
  ExternalLink,
  Lock,
  Workflow,
  ArrowUpRight,
  TrendingUp,
  ShieldCheck
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Using a vibrant Indigo as the primary brand color
const BRAND_COLOR = "text-indigo-600"
const BRAND_BG = "bg-indigo-600"
const BRAND_BORDER = "border-indigo-100"

export function LandingPageV2() {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(0)

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-indigo-100 selection:text-indigo-900 font-sans">
      {/* --- Navigation --- */}
      <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-zinc-50">
        <div className="container mx-auto flex h-20 items-center justify-between px-8">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2.5">
              <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${BRAND_BG} text-white`}>
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-zinc-900">Lumina</span>
            </div>
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#features" className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors">Features</a>
              <a href="#solutions" className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors">Solutions</a>
              <a href="#pricing" className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors">Pricing</a>
              <a href="#docs" className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors">Docs</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex font-semibold text-zinc-600">Log in</Button>
            <Button className={`${BRAND_BG} hover:bg-indigo-700 text-white rounded-full px-7 h-11 font-bold transition-all hover:scale-105 active:scale-95`}>
              Start Free Trial
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* --- Hero Section --- */}
        <section className="relative pt-24 pb-24 lg:pt-40 lg:pb-40 overflow-hidden">
          {/* Subtle background element */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-[0.03]" 
               style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="container mx-auto px-8 relative z-10">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <Badge variant="outline" className={`mb-8 border-indigo-100 bg-indigo-50/50 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.1em] ${BRAND_COLOR} rounded-full`}>
                Lumina AI 2.0 is now live
              </Badge>
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 text-zinc-900 leading-[0.95] lg:max-w-5xl">
                Intelligence that <br /> 
                <span className={BRAND_COLOR}>drives revenue.</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-500 mb-12 max-w-2xl leading-relaxed font-medium">
                The world&apos;s most advanced growth engine. Predict churn, automate outreach, and scale your revenue with AI-powered customer intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                <Button size="lg" className={`h-16 px-10 text-lg font-bold ${BRAND_BG} text-white hover:bg-indigo-700 rounded-2xl transition-all hover:-translate-y-1 active:scale-95`}>
                  Get Started for Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="h-16 px-10 text-lg font-bold border-zinc-200 text-zinc-900 hover:bg-zinc-50 rounded-2xl transition-all">
                  Book a Demo
                </Button>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                 <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="h-10 w-10 rounded-full border-4 border-white" />
                    ))}
                 </div>
                 <div className="text-left">
                    <div className="flex gap-0.5 mb-0.5">
                       {[1,2,3,4,5].map(i => <Star key={i} className="h-3.5 w-3.5 fill-indigo-500 text-indigo-500" />)}
                    </div>
                    <p className="text-sm font-bold text-zinc-400">Trusted by 2,000+ Enterprises</p>
                 </div>
              </div>
            </div>

            {/* Product Interface Mockup */}
            <div className="mt-24 relative max-w-6xl mx-auto group">
              <div className={`absolute -inset-4 ${BRAND_BG} rounded-[3rem] opacity-[0.03] blur-3xl transition-opacity group-hover:opacity-[0.05]`} />
              <div className="relative rounded-[2.5rem] border border-zinc-100 bg-white p-4">
                 <div className="rounded-[1.8rem] border border-zinc-100 bg-zinc-50/50 aspect-[16/9] overflow-hidden flex flex-col">
                    {/* Mockup UI Header */}
                    <div className="h-14 border-b border-zinc-100 bg-white/80 backdrop-blur flex items-center px-8 justify-between">
                       <div className="flex gap-2">
                          <div className="h-3 w-3 rounded-full bg-zinc-200" />
                          <div className="h-3 w-3 rounded-full bg-zinc-200" />
                          <div className="h-3 w-3 rounded-full bg-zinc-200" />
                       </div>
                       <div className="flex items-center gap-6">
                          <div className="h-2 w-16 bg-zinc-100 rounded-full" />
                          <div className="h-2 w-16 bg-zinc-100 rounded-full" />
                       </div>
                       <div className="h-8 w-8 rounded-full bg-zinc-100" />
                    </div>
                    
                    {/* Mockup UI Content */}
                    <div className="flex-1 grid grid-cols-[260px_1fr]">
                       <div className="border-r border-zinc-100 p-8 space-y-10 hidden md:block">
                          <div className="space-y-4">
                             <div className="h-2 w-1/3 bg-zinc-200 rounded-full" />
                             <div className="h-10 w-full bg-white border border-zinc-100 rounded-xl" />
                          </div>
                          <div className="space-y-6">
                             {[1,2,3,4].map(i => (
                               <div key={i} className="flex items-center gap-3">
                                  <div className="h-2 w-2 rounded-full bg-zinc-200" />
                                  <div className="h-2 w-full bg-zinc-100 rounded-full" />
                               </div>
                             ))}
                          </div>
                       </div>
                       <div className="p-12 space-y-10">
                          <div className="flex items-center justify-between">
                             <div className="space-y-2">
                                <div className="h-6 w-48 bg-zinc-900/10 rounded-lg" />
                                <div className="h-3 w-32 bg-zinc-200 rounded-full" />
                             </div>
                             <div className={`h-11 w-40 ${BRAND_BG} opacity-20 rounded-xl`} />
                          </div>
                          <div className="grid grid-cols-3 gap-8">
                             {[1,2,3].map(i => (
                               <div key={i} className="h-44 bg-white border border-zinc-100 rounded-[1.5rem] p-6 flex flex-col justify-between">
                                  <div className="h-3 w-1/2 bg-zinc-100 rounded-full" />
                                  <div className="h-12 w-full bg-zinc-50 rounded-lg" />
                               </div>
                             ))}
                          </div>
                          <div className="h-72 bg-white border border-zinc-100 rounded-[2rem] flex items-center justify-center">
                             <TrendingUp className="h-24 w-24 text-zinc-50" />
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Logo Cloud --- */}
        <section className="py-24 border-y border-zinc-50">
          <div className="container mx-auto px-8">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-16">
              Empowering high-growth companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-30 grayscale contrast-125">
               <div className="font-bold text-3xl tracking-tighter italic">Vortex</div>
               <div className="font-bold text-3xl tracking-tighter">CIRRUS</div>
               <div className="font-bold text-3xl tracking-tighter uppercase underline decoration-4 decoration-indigo-500 underline-offset-8">Orbital</div>
               <div className="font-bold text-3xl tracking-tighter font-serif">ACME</div>
               <div className="font-bold text-3xl tracking-tighter">PULSE</div>
            </div>
          </div>
        </section>

        {/* --- Features Grid --- */}
        <section id="features" className="py-32 lg:py-48 bg-zinc-50/30">
          <div className="container mx-auto px-8">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">
              <Badge className={`mb-6 ${BRAND_BG} text-white hover:${BRAND_BG} border-none rounded-full px-5 py-1 text-[10px] font-bold uppercase tracking-widest`}>
                The Platform
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-6">
                Everything you need to <span className={BRAND_COLOR}>scale.</span>
              </h2>
              <p className="text-xl text-zinc-500 leading-relaxed">
                A complete suite of customer intelligence tools designed to help you understand, engage, and grow your audience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Predictive Analytics",
                  desc: "Identify expansion opportunities and churn risks before they happen with our neural forecasting engine.",
                  icon: <PieChart className="h-7 w-7" />
                },
                {
                  title: "Smart Workflows",
                  desc: "Trigger personalized multi-channel campaigns based on complex behavioral data and user intent.",
                  icon: <Workflow className="h-7 w-7" />
                },
                {
                  title: "Unified Profile",
                  desc: "Bring every customer interaction into one single source of truth. No data silos, no manual syncing.",
                  icon: <Database className="h-7 w-7" />
                }
              ].map((f, i) => (
                <div key={i} className="group p-10 bg-white border border-zinc-100 rounded-[2.5rem] transition-all hover:-translate-y-2">
                   <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${BRAND_BG} text-white`}>
                      {f.icon}
                   </div>
                   <h4 className="text-2xl font-bold mb-4">{f.title}</h4>
                   <p className="text-zinc-500 leading-relaxed">{f.desc}</p>
                   <div className="mt-8">
                      <Button variant="link" className={`px-0 font-bold ${BRAND_COLOR} flex items-center gap-2 group-hover:gap-3 transition-all`}>
                        Learn more <ArrowRight className="h-4 w-4" />
                      </Button>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Detailed Breakdown --- */}
        <section className="py-32 lg:py-48 overflow-hidden">
          <div className="container mx-auto px-8">
             <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="relative">
                   <div className={`absolute -top-10 -left-10 w-40 h-40 ${BRAND_BG} rounded-full opacity-[0.03] blur-3xl`} />
                   <Badge variant="outline" className={`mb-6 border-indigo-100 ${BRAND_COLOR} rounded-full px-4`}>Revenue Operations</Badge>
                   <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
                     Attribution that finally <br /> 
                     <span className={BRAND_COLOR}>makes sense.</span>
                   </h2>
                   <p className="text-xl text-zinc-500 mb-10 leading-relaxed">
                     Lumina connects the dots across your entire funnel. From the first ad click to the final enterprise contract expansion—know exactly what drives your growth.
                   </p>
                   <div className="grid gap-6">
                      {[
                        "Multi-touch attribution models",
                        "Real-time pipeline visibility",
                        "Channel ROI performance tracking",
                        "Automated cohort reporting"
                      ].map(item => (
                        <div key={item} className="flex items-center gap-4">
                           <div className={`h-6 w-6 rounded-full ${BRAND_BG} flex items-center justify-center`}>
                              <Check className="h-3.5 w-3.5 text-white" />
                           </div>
                           <span className="font-semibold text-zinc-700">{item}</span>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="relative rounded-[3rem] border border-zinc-100 bg-zinc-50/50 p-8">
                   <div className="aspect-square bg-white rounded-[2rem] flex flex-col p-10">
                      <div className="flex items-center justify-between mb-12">
                         <div className="h-3 w-32 bg-zinc-100 rounded-full" />
                         <div className="h-8 w-24 bg-zinc-50 rounded-lg" />
                      </div>
                      <div className="flex-1 flex items-end gap-4">
                         <div className="h-1/3 flex-1 bg-zinc-50 rounded-xl" />
                         <div className="h-2/3 flex-1 bg-zinc-100 rounded-xl" />
                         <div className={`h-[85%] flex-1 ${BRAND_BG} rounded-xl`} />
                         <div className="h-1/2 flex-1 bg-zinc-50 rounded-xl" />
                      </div>
                      <div className="mt-10 flex justify-center">
                         <Badge className="bg-emerald-50 text-emerald-600 hover:bg-emerald-50 border-emerald-100 rounded-full px-4 py-1">
                            +42% MoM Growth
                         </Badge>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* --- Dark Themed Feature --- */}
        <section className="py-32 lg:py-48 bg-zinc-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #312e81 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          
          <div className="container mx-auto px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="order-2 lg:order-1 relative">
                 <div className="rounded-[3rem] border border-white/5 bg-zinc-900/50 p-4 backdrop-blur-3xl">
                    <div className="aspect-[4/3] bg-zinc-950 rounded-[2rem] overflow-hidden flex flex-col p-10 border border-white/10">
                       <div className="flex items-center gap-4 mb-10">
                          <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                             <ShieldCheck className="h-6 w-6 text-indigo-400" />
                          </div>
                          <div className="h-2 w-32 bg-white/10 rounded-full" />
                       </div>
                       <div className="space-y-6">
                          {[1,2,3].map(i => (
                            <div key={i} className="h-12 w-full bg-white/5 rounded-2xl border border-white/5" />
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
              <div className="order-1 lg:order-2">
                <Badge className="mb-6 bg-indigo-500/10 text-indigo-400 border-indigo-500/20 rounded-full px-5 py-1">Customer Experience</Badge>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
                  Personalization <br /> 
                  <span className="text-indigo-400">at any scale.</span>
                </h2>
                <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
                  Lumina uses deep-learning to understand individual customer intent in real-time. Deliver the right message, on the right channel, exactly when it matters most.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                   {[
                     { title: "Sentiment Engine", desc: "Detect user frustration before they reach out." },
                     { title: "Intent Mapping", desc: "Know exactly what your users are trying to achieve." },
                     { title: "Smart Routing", desc: "Connect high-value accounts to the right agent." },
                     { title: "Predictive Lead Score", desc: "Identify conversion readiness automatically." }
                   ].map(item => (
                     <div key={item.title}>
                        <h4 className="font-bold text-lg mb-2 text-white">{item.title}</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Testimonials --- */}
        <section className="py-32 lg:py-48 bg-white">
          <div className="container mx-auto px-8 text-center">
             <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-20 max-w-4xl mx-auto">
               Trusted by the teams <br /> 
               <span className={BRAND_COLOR}>building the future.</span>
             </h2>
             <div className="grid md:grid-cols-3 gap-8">
                {[
                  { 
                    text: "Lumina has completely changed how we think about customer success. We've reduced churn by 28% in just 3 months. It's an essential part of our stack now.", 
                    name: "Sarah Johnson", 
                    role: "VP of CS, Vortex Inc",
                    avatar: "https://i.pravatar.cc/100?u=12"
                  },
                  { 
                    text: "The predictive leads feature is a game changer for our sales team. We spend 50% less time on discovery and 100% more time closing high-value deals.", 
                    name: "Mark Peterson", 
                    role: "Head of Sales, Pulse",
                    avatar: "https://i.pravatar.cc/100?u=24"
                  },
                  { 
                    text: "Easiest integration I've ever dealt with. We were up and running in a single afternoon and saw ROI within the first week of deployment.", 
                    name: "Elena Rodriguez", 
                    role: "CTO, Orbit Systems",
                    avatar: "https://i.pravatar.cc/100?u=36"
                  }
                ].map((t, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-12 rounded-[3rem] bg-zinc-50 border border-zinc-100 transition-all hover:bg-white hover:border-indigo-100">
                     <div className="mb-8">
                        <img src={t.avatar} alt={t.name} className="h-16 w-16 rounded-full border-4 border-white mx-auto" />
                     </div>
                     <p className="text-lg text-zinc-600 mb-10 font-medium leading-relaxed">&quot;{t.text}&quot;</p>
                     <div>
                        <p className="font-bold text-zinc-900">{t.name}</p>
                        <p className={`text-sm font-bold ${BRAND_COLOR} uppercase tracking-widest mt-1`}>{t.role}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* --- Pricing --- */}
        <section id="pricing" className="py-32 lg:py-48 bg-zinc-50/50 border-t border-zinc-100">
          <div className="container mx-auto px-8">
             <div className="text-center max-w-2xl mx-auto mb-24">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-6">Simple pricing.</h2>
                <p className="text-xl text-zinc-500 font-medium">No hidden fees. No complex tiers. Choose the plan that fits your growth stage.</p>
             </div>

             <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Basic */}
                <div className="bg-white border border-zinc-100 p-12 rounded-[3rem] flex flex-col transition-all">
                   <h4 className="text-xl font-bold mb-2">Starter</h4>
                   <p className="text-zinc-500 text-sm mb-10 font-medium">Perfect for small teams finding their way.</p>
                   <div className="mb-10">
                      <span className="text-6xl font-extrabold text-zinc-900">$79</span>
                      <span className="text-zinc-400 font-bold ml-2">/mo</span>
                   </div>
                   <div className="space-y-5 mb-12 flex-1">
                      {["Up to 1k active users", "Neural churn prediction", "Basic workflows", "Email support"].map(item => (
                        <div key={item} className="flex items-center gap-3 text-sm font-semibold text-zinc-600">
                           <Check className={`h-5 w-5 ${BRAND_COLOR}`} /> {item}
                        </div>
                      ))}
                   </div>
                   <Button className="w-full h-14 bg-zinc-50 text-zinc-900 hover:bg-zinc-100 font-bold rounded-2xl transition-all">Get Started</Button>
                </div>

                {/* Pro - Featured */}
                <div className="bg-white border-2 border-indigo-600 p-12 rounded-[3.5rem] flex flex-col scale-105 relative z-10">
                   <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ${BRAND_BG} text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2 rounded-full`}>Most Popular</div>
                   <h4 className="text-xl font-bold mb-2">Growth</h4>
                   <p className="text-zinc-500 text-sm mb-10 font-medium">Scale your operations with advanced AI.</p>
                   <div className="mb-10">
                      <span className="text-6xl font-extrabold text-zinc-900">$249</span>
                      <span className="text-zinc-400 font-bold ml-2">/mo</span>
                   </div>
                   <div className="space-y-5 mb-12 flex-1">
                      {["Up to 10k users", "Advanced AI models", "Unlimited workflows", "API & SDK access", "Priority 24/7 support", "Custom analytics"].map(item => (
                        <div key={item} className="flex items-center gap-3 text-sm font-bold text-zinc-900">
                           <Check className={`h-5 w-5 ${BRAND_COLOR}`} /> {item}
                        </div>
                      ))}
                   </div>
                   <Button className={`w-full h-14 ${BRAND_BG} text-white hover:bg-indigo-700 font-bold rounded-2xl transition-all`}>Start Free Trial</Button>
                </div>

                {/* Enterprise */}
                <div className="bg-white border border-zinc-100 p-12 rounded-[3rem] flex flex-col transition-all">
                   <h4 className="text-xl font-bold mb-2">Enterprise</h4>
                   <p className="text-zinc-500 text-sm mb-10 font-medium">Full control for global organizations.</p>
                   <div className="mb-10">
                      <span className="text-6xl font-extrabold text-zinc-900">Custom</span>
                   </div>
                   <div className="space-y-5 mb-12 flex-1">
                      {["Unlimited scale", "Custom model training", "SSO & SAML security", "Dedicated Success Lead", "SLA guarantees", "White-glove setup"].map(item => (
                        <div key={item} className="flex items-center gap-3 text-sm font-semibold text-zinc-600">
                           <Check className={`h-5 w-5 ${BRAND_COLOR}`} /> {item}
                        </div>
                      ))}
                   </div>
                   <Button className="w-full h-14 bg-zinc-50 text-zinc-900 hover:bg-zinc-100 font-bold rounded-2xl transition-all">Talk to Sales</Button>
                </div>
             </div>
          </div>
        </section>

        {/* --- FAQ --- */}
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

        {/* --- Final CTA --- */}
        <section className="py-32 lg:py-48 bg-white relative overflow-hidden">
          <div className="container mx-auto px-8 text-center relative z-10">
             <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 ${BRAND_COLOR} text-[10px] font-bold uppercase tracking-widest mb-10`}>
                <Zap className="h-4 w-4" /> Ready to transform your growth?
             </div>
             <h2 className="text-5xl md:text-8xl font-extrabold tracking-tight text-zinc-900 mb-10 leading-[0.9]">
                Start building with <br /> 
                <span className={BRAND_COLOR}>Lumina today.</span>
             </h2>
             <p className="text-xl md:text-2xl text-zinc-500 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
                Join thousands of high-performing teams who use Lumina to drive predictable revenue growth.
             </p>
             <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className={`h-20 px-12 text-2xl font-black ${BRAND_BG} text-white hover:bg-indigo-700 rounded-[2rem] transition-all hover:-translate-y-2`}>
                   Start Free Trial
                </Button>
                <Button variant="outline" size="lg" className="h-20 px-12 text-2xl font-black border-zinc-200 text-zinc-900 hover:bg-zinc-50 rounded-[2rem] transition-all">
                   Book a Demo
                </Button>
             </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="py-24 bg-white border-t border-zinc-50">
         <div className="container mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-16 mb-24">
               <div className="col-span-2">
                  <div className="flex items-center gap-2.5 mb-8">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${BRAND_BG} text-white`}>
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-zinc-900">Lumina</span>
                  </div>
                  <p className="text-zinc-500 font-medium text-base max-w-xs mb-10 leading-relaxed">
                     The complete revenue operations platform for high-performing growth teams.
                  </p>
                  <div className="flex gap-4">
                     {[1,2,3,4].map(i => <div key={i} className="h-10 w-10 bg-zinc-50 rounded-xl hover:bg-indigo-50 transition-colors cursor-pointer" />)}
                  </div>
               </div>
               <div>
                  <h5 className="font-bold text-sm mb-8 uppercase tracking-widest text-zinc-400">Product</h5>
                  <ul className="space-y-5 text-sm font-semibold text-zinc-500">
                     <li><a href="#" className="hover:text-indigo-600 transition-colors">Features</a></li>
                     <li><a href="#" className="hover:text-indigo-600 transition-colors">Integrations</a></li>
                     <li><a href="#" className="hover:text-indigo-600 transition-colors">Enterprise</a></li>
                     <li><a href="#" className="hover:text-indigo-600 transition-colors">Changelog</a></li>
                  </ul>
               </div>
               <div>
                  <h5 className="font-bold text-sm mb-8 uppercase tracking-widest text-zinc-400">Company</h5>
                  <ul className="space-y-5 text-sm font-semibold text-zinc-500">
                     <li><a href="#" className="hover:text-indigo-600 transition-colors">About Us</a></li>
                     <li><a href="#" className="hover:text-indigo-600 transition-colors">Careers</a></li>
                     <li><a href="#" className="hover:text-indigo-600 transition-colors">Blog</a></li>
                     <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact</a></li>
                  </ul>
               </div>
               <div>
                  <h5 className="font-bold text-sm mb-8 uppercase tracking-widest text-zinc-400">Legal</h5>
                  <ul className="space-y-5 text-sm font-semibold text-zinc-500">
                     <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
                     <li><a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a></li>
                     <li><a href="#" className="hover:text-indigo-600 transition-colors">Security</a></li>
                     <li><a href="#" className="hover:text-indigo-600 transition-colors">Cookie Policy</a></li>
                  </ul>
               </div>
            </div>
            <Separator className="mb-10 opacity-50" />
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-bold text-zinc-400">
               <p>© 2026 Lumina Intelligence Inc. All rights reserved.</p>
               <div className="flex gap-8">
                  <span className="flex items-center gap-2"><Globe className="h-4 w-4" /> Global-1</span>
                  <span className="flex items-center gap-2"><Lock className="h-4 w-4" /> Protected</span>
               </div>
            </div>
         </div>
      </footer>
    </div>
  )
}
