import { Header } from "@/sections/Header";
import { AboutHero } from "@/sections/AboutHero";
import { ClientsTicker } from "@/sections/ClientsTicker";
import { DigitalTransformation } from "@/sections/DigitalTransformation";
import { Services } from "@/sections/Services";
import { Projects } from "@/sections/Projects";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <div className="h-[100dvh] flex flex-col">
        <div className="flex-1 flex">
          <AboutHero />
        </div>
        <ClientsTicker />
      </div>
      <DigitalTransformation />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
