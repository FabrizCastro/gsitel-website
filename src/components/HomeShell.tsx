"use client";

import { useState } from "react";
import type { SiteMode } from "@/lib/siteMode";
import { Header } from "@/sections/Header";
import { AboutHero } from "@/sections/AboutHero";
import { ClientsTicker } from "@/sections/ClientsTicker";
import { DigitalTransformation } from "@/sections/DigitalTransformation";
import { Services } from "@/sections/Services";
import { Projects } from "@/sections/Projects";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export const HomeShell = () => {
  const [mode, setMode] = useState<SiteMode>("software");

  return (
    <>
      <Header mode={mode} onModeChange={setMode} />
      <AboutHero mode={mode} />
      <ClientsTicker />
      <DigitalTransformation mode={mode} />
      <Services mode={mode} />
      <Projects mode={mode} />
      <Testimonials mode={mode} />
      <Contact mode={mode} />
      <Footer />
    </>
  );
};
