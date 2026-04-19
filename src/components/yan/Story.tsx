import interior from "@/assets/venue-interior-hall.jpg";

export const Story = () => (
  <section id="story" className="section-shell relative overflow-hidden py-32 md:py-40 silk-bg">
    <div className="container relative grid items-center gap-16 md:grid-cols-[1.05fr_0.95fr] lg:gap-24">
      <div className="reveal-left">
        <p className="ornament font-sans-lux mb-8 justify-start text-[10px] text-gold">Brand Philosophy</p>
        <h2 className="font-display mb-8 text-gold text-5xl leading-[1.04] md:text-6xl lg:text-7xl">
          A Dining Room
          <br />
          Dressed In Crimson
        </h2>
        <div className="mb-8 w-32 gold-divider-thick" />
        <p className="font-serif-lux mb-6 text-[1.65rem] leading-relaxed text-ivory/90 md:text-[1.95rem]">
          Yàn Yàn brings modern Chinese dining into a richly layered setting where architecture, lighting, and plating feel composed as one experience.
        </p>
        <p className="font-serif-lux mb-6 text-xl leading-relaxed text-ivory/74 md:text-[1.45rem]">
          The room carries warmth through lacquered reds, textured walls, soft gold highlights, and a confident sense of theatre that never feels overstated.
        </p>
        <p className="font-serif-lux italic text-xl leading-relaxed text-ivory/58 md:text-[1.35rem]">
          Every detail is designed to make the evening feel ceremonial from the moment guests arrive to the final pour at the bar.
        </p>
      </div>

      <div className="reveal-right relative group">
        <div className="absolute -inset-4 translate-x-5 translate-y-5 gold-border opacity-50 transition-transform duration-700 group-hover:translate-x-3 group-hover:translate-y-3" />
        <div className="absolute -inset-2 -translate-x-3 -translate-y-3 border border-gold/18 transition-transform duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2" />
        <div className="relative overflow-hidden gold-border shadow-deep">
          <img src={interior} alt="Yàn Yàn main interior hall" className="zoom-img h-[560px] w-full object-cover md:h-[620px]" loading="lazy" width={2048} height={1357} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(0 90% 4% / 0.04) 0%, hsl(0 90% 4% / 0.55) 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
            <p className="font-sans-lux mb-2 text-[10px] text-gold/84">Luxury ambience</p>
            <p className="font-serif-lux text-2xl text-ivory/88 md:text-[1.9rem]">A room of height, glow, texture, and quiet drama designed for long conversations and memorable service.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
