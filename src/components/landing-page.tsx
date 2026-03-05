import { Navbar } from "./landing/Navbar"
import { HeroSection } from "./landing/HeroSection"
import { LogoCloud } from "./landing/LogoCloud"
import { PlatformSection } from "./landing/PlatformSection"
import { TestimonialsSection } from "./landing/TestimonialsSection"
import { PricingSection } from "./landing/PricingSection"
import { CtaSection } from "./landing/CtaSection"
import { Footer } from "./landing/Footer"

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-violet-950 font-sans selection:bg-slate-900 selection:text-white antialiased">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <LogoCloud />
        <PlatformSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
