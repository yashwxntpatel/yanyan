import { Nav } from "@/components/yan/Nav";
import { Hero } from "@/components/yan/Hero";
import { Story } from "@/components/yan/Story";
import { Menu } from "@/components/yan/Menu";
import { Signatures } from "@/components/yan/Signatures";
import { Bar } from "@/components/yan/Bar";
import { Ambience } from "@/components/yan/Ambience";
import { PrivateDining } from "@/components/yan/PrivateDining";
import { Reserve } from "@/components/yan/Reserve";
import { Contact } from "@/components/yan/Contact";
import { ScrollProgress } from "@/components/yan/ScrollProgress";
import { useReveal } from "@/components/yan/useReveal";
import { useEffect } from "react";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Yàn Yàn Bangalore — Modern Chinese Fine Dining";
    const desc = "Yàn Yàn Bangalore at The Ritz-Carlton — modern Chinese fine dining, dim sum craftsmanship, refined flavours, and understated elegance.";

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      <ScrollProgress />
      <Nav />
      <Hero />
      <Story />
      <Menu />
      <Signatures />
      <Bar />
      <Ambience />
      <PrivateDining />
      <Reserve />
      <Contact />
    </main>
  );
};

export default Index;
