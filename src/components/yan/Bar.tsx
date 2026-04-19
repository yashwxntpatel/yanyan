import barDrink from "@/assets/drink-grapefruit-spritz.jpg";

export const Bar = () => (
  <section id="bar" className="section-shell relative overflow-hidden py-32 md:py-40">
    
    <div className="absolute inset-0">
      <img
        src={barDrink}
        alt="Yàn Yàn signature cocktail"
        className="h-full w-full object-cover scale-[1.04]"
        loading="lazy"
        width={1435}
        height={2048}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, hsl(0 90% 4% / 0.97) 0%, hsl(0 85% 8% / 0.78) 42%, hsl(0 85% 5% / 0.5) 100%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 82% 50%, hsl(43 70% 40% / 0.18), transparent 58%)",
        }}
      />
    </div>

    <div className="container relative grid gap-12 md:grid-cols-2">
      
      <div className="reveal-left max-w-xl">
        
        <p className="ornament font-sans-lux mb-8 justify-start text-[10px] text-gold">
          The Bar
        </p>

        <h2 className="font-display heading-luxe mb-8 text-gold text-5xl md:text-6xl lg:text-7xl">
          Cocktails With
          <br />
          <span className="font-script text-gold-script mr-3 text-[0.88em] normal-case">
            evening
          </span>
          Glow
        </h2>

        <div className="mb-8 w-28 gold-divider-thick" />

        <p className="copy-luxe mb-6 text-[1.65rem] text-ivory/90 md:text-[1.95rem]">
          The bar program is built around freshness, poise, and visual impact — perfect before dinner, between courses, or deep into the night.
        </p>

        <p className="copy-luxe mb-10 text-xl italic text-ivory/70 md:text-[1.35rem]">
          Think citrus foam, crystal stems, floral sparkle, and crisp pours that match the richness of the room without overpowering it.
        </p>

        <a href="#reserve" className="btn-gold">
          Reserve the Lounge
        </a>
      </div>

    </div>
  </section>
);
