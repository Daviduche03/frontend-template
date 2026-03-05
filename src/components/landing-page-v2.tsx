import { NavbarV2 } from "./landing-v2/NavbarV2"
import { HeroSectionV2 } from "./landing-v2/HeroSectionV2"
import { LogoCloudV2 } from "./landing-v2/LogoCloudV2"
import { FeaturesSectionV2 } from "./landing-v2/FeaturesSectionV2"
import { DetailedBreakdownV2 } from "./landing-v2/DetailedBreakdownV2"
import { DarkFeatureV2 } from "./landing-v2/DarkFeatureV2"
import { TestimonialsV2 } from "./landing-v2/TestimonialsV2"
import { PricingSectionV2 } from "./landing-v2/PricingSectionV2"
import { FaqV2 } from "./landing-v2/FaqV2"
import { CtaSectionV2 } from "./landing-v2/CtaSectionV2"
import { Footer } from "./landing/Footer"

export function LandingPageV2() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-indigo-100 selection:text-indigo-900 font-sans">
      <NavbarV2 />
      <main className="flex-1">
        <HeroSectionV2 />
        <LogoCloudV2 />
        <FeaturesSectionV2 />
        <DetailedBreakdownV2 />
        <DarkFeatureV2 />
        <TestimonialsV2 />
        <PricingSectionV2 />
        <FaqV2 />
        <CtaSectionV2 />
      </main>
      <Footer />
    </div>
  )
}
