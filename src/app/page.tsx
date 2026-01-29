import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-[100dvh] flex flex-col">
        <RevealOnScroll className="flex-1 flex">
          <Hero />
        </RevealOnScroll>
        <RevealOnScroll delay={120}>
          <LogoTicker />
        </RevealOnScroll>
      </div>
      <RevealOnScroll>
        <ProductShowcase />
      </RevealOnScroll>
      <RevealOnScroll delay={120}>
        <Pricing />
      </RevealOnScroll>
      <RevealOnScroll>
        <Testimonials />
      </RevealOnScroll>
      <RevealOnScroll delay={120}>
        <CallToAction />
      </RevealOnScroll>
      <RevealOnScroll>
        <Footer />
      </RevealOnScroll>
    </>
  );
}
