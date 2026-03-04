import * as React from "react"
import { 
  ArrowRight, 
  Check, 
  ChevronRight, 
  Cloud, 
  Cpu, 
  Globe, 
  Layers, 
  Layout, 
  Lock, 
  MessageSquare, 
  Zap,
  Menu,
  X
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary fill-primary" />
            <span className="text-xl font-bold tracking-tight">NexusFlow</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium transition-colors hover:text-primary">Features</a>
            <a href="#solutions" className="text-sm font-medium transition-colors hover:text-primary">Solutions</a>
            <a href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">Pricing</a>
            <a href="#docs" className="text-sm font-medium transition-colors hover:text-primary">Docs</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">Log in</Button>
            <Button size="sm">Get Started</Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t p-4 bg-background animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-sm font-medium">Features</a>
              <a href="#solutions" className="text-sm font-medium">Solutions</a>
              <a href="#pricing" className="text-sm font-medium">Pricing</a>
              <a href="#docs" className="text-sm font-medium">Docs</a>
              <Separator />
              <div className="flex flex-col gap-2">
                <Button variant="ghost" className="justify-start">Log in</Button>
                <Button className="justify-start">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-20 lg:pt-32 lg:pb-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                Now in Public Beta
              </Badge>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Ship better products, <br className="hidden md:block" /> 
                <span className="text-primary">without the friction.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
                The modern workflow engine for engineering teams. NexusFlow automates the mundane, 
                so you can focus on building what matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button size="lg" className="px-8 text-lg font-semibold group">
                  Start Building Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 text-lg font-semibold">
                  Book a Demo
                </Button>
              </div>
            </div>

            {/* Hero Image/Mockup Placeholder */}
            <div className="mt-16 lg:mt-24 relative max-w-5xl mx-auto border rounded-2xl bg-muted/30 p-2 shadow-2xl">
               <div className="rounded-xl border bg-background aspect-[16/9] flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-muted/10 relative">
                     {/* Abstract UI representation */}
                     <div className="absolute inset-4 grid grid-cols-12 gap-4 opacity-40">
                        <div className="col-span-3 border rounded-lg bg-card p-4 space-y-3">
                           <div className="h-2 w-2/3 bg-muted rounded" />
                           <div className="h-2 w-full bg-muted rounded" />
                           <div className="h-2 w-1/2 bg-muted rounded" />
                        </div>
                        <div className="col-span-9 border rounded-lg bg-card p-6">
                            <div className="flex items-center justify-between mb-8">
                               <div className="h-4 w-1/4 bg-primary/20 rounded" />
                               <div className="h-4 w-12 bg-muted rounded" />
                            </div>
                            <div className="space-y-4">
                               <div className="h-24 w-full bg-muted/50 rounded-xl" />
                               <div className="grid grid-cols-3 gap-4">
                                  <div className="h-32 bg-muted/50 rounded-xl" />
                                  <div className="h-32 bg-muted/50 rounded-xl" />
                                  <div className="h-32 bg-muted/50 rounded-xl" />
                               </div>
                            </div>
                        </div>
                     </div>
                     <Layout className="h-16 w-16 text-muted/30" />
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="py-12 border-y bg-muted/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
               Powering the world&apos;s most innovative teams
             </p>
             <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
                <div className="flex items-center gap-2 font-bold text-xl"><Globe className="h-6 w-6" /> Terra</div>
                <div className="flex items-center gap-2 font-bold text-xl"><Cpu className="h-6 w-6" /> Pulse</div>
                <div className="flex items-center gap-2 font-bold text-xl"><Cloud className="h-6 w-6" /> Cirrus</div>
                <div className="flex items-center gap-2 font-bold text-xl"><Layers className="h-6 w-6" /> Stack</div>
                <div className="flex items-center gap-2 font-bold text-xl"><Zap className="h-6 w-6" /> Volt</div>
             </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Everything you need to scale</h2>
              <p className="text-lg text-muted-foreground">
                We&apos;ve built the infrastructure, so you can build the future. 
                Optimized for performance and designed for developers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Lightning Fast",
                  description: "Built on top of a highly optimized engine that delivers sub-millisecond response times.",
                  icon: <Zap className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Secure by Design",
                  description: "Enterprise-grade security with end-to-end encryption and SOC2 compliance out of the box.",
                  icon: <Lock className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Global Infrastructure",
                  description: "Deploy your workflows across 25+ regions worldwide with automatic failover.",
                  icon: <Globe className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Collaborative",
                  description: "Real-time collaboration tools that keep your entire team in sync, no matter where they are.",
                  icon: <MessageSquare className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Cloud Native",
                  description: "Seamlessly integrates with AWS, GCP, and Azure. No complex configuration required.",
                  icon: <Cloud className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Deep Insights",
                  description: "Comprehensive analytics and observability tools to track every single event in your system.",
                  icon: <Cpu className="h-8 w-8 text-primary" />,
                },
              ].map((feature, idx) => (
                <div key={idx} className="group p-8 rounded-2xl border bg-card transition-all hover:border-primary/50 hover:shadow-lg">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12 italic">
                &quot;NexusFlow has completely transformed how our engineering team operates. 
                We&apos;ve seen a 40% increase in productivity since switching.&quot;
              </h2>
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 mb-4 overflow-hidden border-2 border-primary">
                  <div className="w-full h-full flex items-center justify-center font-bold text-xl">JD</div>
                </div>
                <div>
                  <p className="font-bold text-lg">Jane Doe</p>
                  <p className="text-muted-foreground">CTO at Pulse Systems</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Simple, transparent pricing</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the plan that fits your team&apos;s needs. No hidden fees, ever.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Basic */}
              <Card className="flex flex-col h-full border-2 transition-transform hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-2xl">Starter</CardTitle>
                  <CardDescription>Perfect for small projects and side hustles.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                  <ul className="space-y-3">
                    {["Up to 3 projects", "1,000 requests/mo", "Community support", "Basic analytics"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Get Started</Button>
                </CardFooter>
              </Card>

              {/* Pro */}
              <Card className="flex flex-col h-full border-primary border-2 shadow-xl relative transition-transform hover:scale-[1.02]">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mr-6">
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Professional</CardTitle>
                  <CardDescription>Everything you need for growing teams.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$49</span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                  <ul className="space-y-3">
                    {["Unlimited projects", "100k requests/mo", "Priority email support", "Advanced analytics", "Custom domains", "Team collaboration"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start 14-day Free Trial</Button>
                </CardFooter>
              </Card>

              {/* Enterprise */}
              <Card className="flex flex-col h-full border-2 transition-transform hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-2xl">Enterprise</CardTitle>
                  <CardDescription>Advanced control and support for large orgs.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">Custom</span>
                  </div>
                  <ul className="space-y-3">
                    {["Everything in Pro", "Unlimited requests", "24/7 Phone support", "Dedicated account manager", "SLA guarantees", "Custom contracts"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to scale your engineering?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Join thousands of teams already using NexusFlow to build amazing products. 
              Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 font-bold">
                Get Started for Free
              </Button>
              <Button size="lg" variant="outline" className="px-8 font-bold bg-transparent border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Documentation
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-6 w-6 text-primary fill-primary" />
                <span className="text-xl font-bold tracking-tight">NexusFlow</span>
              </div>
              <p className="text-muted-foreground max-w-xs mb-4">
                The modern workflow engine for high-performing engineering teams. Built with love in San Francisco.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="h-5 w-5 bg-muted rounded" />
                <div className="h-5 w-5 bg-muted rounded" />
                <div className="h-5 w-5 bg-muted rounded" />
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <Separator className="mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2026 NexusFlow Inc. All rights reserved.</p>
            <div className="flex gap-6">
               <a href="#" className="hover:text-primary transition-colors">Status</a>
               <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
