import dim from "@/assets/dish-dimsum.jpg";
import duck from "@/assets/dish-duck.jpg";
import wok from "@/assets/dish-wok.jpg";
import noodles from "@/assets/dish-noodles.jpg";
import dessert from "@/assets/dish-dessert.jpg";
import sig from "@/assets/dish-signature.jpg";

const dishes = [
  { img: sig, name: "Crystal Lobster Har Gow", desc: "Translucent folds, sweet lobster, ginger oil, and impeccable balance." },
  { img: duck, name: "Lacquered Peking Duck", desc: "Long-cured, deeply glossy, and finished with a sense of ceremony." },
  { img: wok, name: "Black Pepper Wagyu", desc: "Smoked pepper, charred scallion, and a heat that arrives with control." },
  { img: noodles, name: "Truffle Hand-Pulled Noodles", desc: "Silken texture, aged soy, and richness without excess." },
  { img: dim, name: "Imperial Siu Mai", desc: "Seafood sweetness, delicate structure, and exacting craftsmanship." },
  { img: dessert, name: "Mango Pomelo Sago", desc: "Bright fruit, a polished finish, and a final note of softness." },
];

export const Signatures = () => (
  <section className="section-shell relative py-32 md:py-40">
    <div className="container">
      <div className="reveal mb-20 text-center md:mb-24">
        <p className="ornament font-sans-lux mb-8 justify-center text-[10px] text-gold">Signature Plates</p>
        <h2 className="font-display mb-6 text-gold text-5xl md:text-6xl lg:text-7xl">Moments on the Table</h2>
        <p className="font-serif-lux text-xl italic text-ivory/68 md:text-[1.65rem]">A visual and sensory edit of the evening.</p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dish, index) => (
          <article key={dish.name} className="group reveal" style={{ transitionDelay: `${index * 110}ms` }}>
            <div className="relative aspect-square overflow-hidden gold-border shadow-card transition-all duration-700 group-hover:shadow-gold">
              <img src={dish.img} alt={dish.name} className="zoom-img h-full w-full object-cover" loading="lazy" width={1024} height={1024} />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, hsl(0 80% 15% / 0.05) 0%, hsl(0 90% 4% / 0.52) 100%)" }} />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{ background: "linear-gradient(180deg, transparent 28%, hsl(0 90% 4% / 0.92) 100%)" }} />
              <div className="absolute inset-x-0 bottom-0 translate-y-7 p-7 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-serif-lux text-[1.35rem] italic leading-relaxed text-ivory/94">{dish.desc}</p>
              </div>
              <span className="absolute left-3 top-3 h-5 w-5 border-l border-t border-gold/0 transition-all duration-700 group-hover:border-gold/78" />
              <span className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-gold/0 transition-all duration-700 group-hover:border-gold/78" />
            </div>
            <div className="mt-6 flex items-baseline gap-3">
              <h3 className="font-display text-xl text-gold md:text-[1.55rem]">{dish.name}</h3>
              <div className="flex-1 border-b border-dotted border-gold/30" />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
