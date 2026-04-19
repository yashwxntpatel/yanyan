import logo from "@/assets/yanyan-logo.png";
import { Embers } from "./Embers";

export const Reserve = () => (
  <section id="reserve" className="section-shell relative overflow-hidden py-32 md:py-40 velvet-bg">
    <div className="absolute inset-0 silk-motion opacity-45" />
    <Embers count={12} />
    <img src={logo} alt="" aria-hidden className="pointer-events-none absolute inset-x-0 top-12 mx-auto h-36 w-auto opacity-[0.06] md:h-44" />

    <div className="container relative max-w-4xl text-center reveal">
      <img src={logo} alt="Yàn Yàn" className="mx-auto mb-10 h-16 w-auto drop-shadow-[0_0_24px_hsl(var(--gold)/0.36)] md:h-[4.5rem]" />
      <p className="ornament font-sans-lux mb-8 justify-center text-[10px] text-gold">Reservations</p>
      <h2 className="font-display text-shadow-gold mb-8 text-gold text-5xl leading-[1.04] md:text-7xl lg:text-[5.5rem]">
        Reserve Your
        <br />
        Experience
      </h2>
      <div className="mx-auto mb-8 w-40 gold-divider-thick" />
      <p className="font-serif-lux mx-auto mb-12 max-w-2xl text-[1.5rem] leading-relaxed text-ivory/84 md:text-[1.85rem]">
        Book lunch, dinner, or the weekend brunch experience and step into a dining room shaped by craft, theatre, and quiet luxury.
      </p>
      <div className="flex flex-col justify-center gap-5 sm:flex-row">
        <a href="tel:+918049148000" className="btn-gold">Call to Reserve</a>
        <a href="#contact" className="btn-ghost-gold">Plan a Private Evening</a>
      </div>
    </div>
  </section>
);
