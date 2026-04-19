import room from "@/assets/venue-private-room.jpg";

export const PrivateDining = () => (
  <section id="private-dining" className="section-shell relative py-32 md:py-40 silk-bg">
    <div className="container relative grid items-center gap-16 md:grid-cols-[0.95fr_1.05fr] lg:gap-24">
      <div className="reveal-left order-2 relative group md:order-1">
        <div className="absolute -inset-4 -translate-x-5 translate-y-5 gold-border opacity-50 transition-transform duration-700 group-hover:-translate-x-3 group-hover:translate-y-3" />
        <div className="absolute -inset-2 translate-x-3 -translate-y-3 border border-gold/18 transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2" />
        <div className="relative overflow-hidden gold-border shadow-deep">
          <img src={room} alt="Yàn Yàn private dining room" className="zoom-img h-[540px] w-full object-cover md:h-[620px]" loading="lazy" width={2048} height={1358} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, hsl(0 90% 4% / 0.55))" }} />
        </div>
      </div>
      <div className="reveal-right order-1 md:order-2">
        <p className="ornament font-sans-lux mb-8 justify-start text-[10px] text-gold">Private Dining</p>
        <h2 className="font-display mb-8 text-gold text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
          A Room For
          <br />
          Hosted Evenings
        </h2>
        <div className="mb-8 w-28 gold-divider-thick" />
        <p className="font-serif-lux mb-6 text-[1.65rem] leading-relaxed text-ivory/90 md:text-[1.95rem]">
          A chandelier-lit private room sets the tone for celebratory dinners, tasting menus, business hosting, and intimate gatherings with elevated service.
        </p>
        <p className="font-serif-lux mb-10 text-xl italic leading-relaxed text-ivory/68 md:text-[1.35rem]">
          Rich textures, warm wood, curated wine presence, and a table arrangement designed for conversation and ceremony.
        </p>
        <a href="#contact" className="btn-ghost-gold">Enquire Now</a>
      </div>
    </div>
  </section>
);
