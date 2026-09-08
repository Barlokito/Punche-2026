import { useEffect, useState } from "react";
import Lenis from "lenis";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MarqueeRibbon } from "@/components/MarqueeRibbon";
import { AboutManifesto } from "@/components/AboutManifesto";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { ClientsWall } from "@/components/ClientsWall";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [quoteService, setQuoteService] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1, anchors: { offset: -88 } });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <Hero />
        <MarqueeRibbon />
        <AboutManifesto />
        <ServicesShowcase onQuote={setQuoteService} />
        <ClientsWall />
        <ContactSection preselected={quoteService} />
      </main>
      <Footer />
    </div>
  );
}
