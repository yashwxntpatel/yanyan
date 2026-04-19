import soup from "@/assets/food-soup-dumpling.jpg";
import dimsum from "@/assets/food-dim-sum-platter.jpg";
import bao from "@/assets/food-charcoal-bao.jpg";
import mushrooms from "@/assets/food-mushroom-bowl.jpg";
import blackDumplings from "@/assets/food-black-dumplings.jpg";
import crispyBites from "@/assets/food-crispy-bites.jpg";
import greens from "@/assets/food-seasonal-greens.jpg";
import dimsumAlt from "@/assets/food-dim-sum-platter-2.jpg";
import spritz from "@/assets/drink-grapefruit-spritz.jpg";
import martini from "@/assets/drink-herbal-martini.jpg";
import highball from "@/assets/drink-lychee-highball.jpg";
import blossom from "@/assets/drink-blossom-sparkler.jpg";
import spritzAlt from "@/assets/drink-grapefruit-spritz-2.jpg";

const featuredCategories = [
  {
    title: "Food",
    description: "Dim sum, wok-fired plates, and elegant small plates presented with modern precision.",
    image: dimsum,
  },
  {
    title: "Drinks",
    description: "Cocktails and chilled pours crafted to mirror the room's richness with freshness and balance.",
    image: spritz,
  },
];

const foodItems = [
  { image: soup, name: "Dumpling Broth", description: "A delicate clear broth with folded dumplings and a comforting, polished finish." },
  { image: dimsum, name: "Signature Dim Sum Basket", description: "Colour, technique, and varied fillings brought together in one elegant steamer." },
  { image: bao, name: "Charcoal Bao", description: "Soft black bao layered with richness, crunch, and fresh greens." },
  { image: mushrooms, name: "Wild Mushroom Pot", description: "Earthy mushrooms in a deep savoury sauce with refined wok warmth." },
  { image: blackDumplings, name: "Black Gold Dumplings", description: "Dark pleats, dramatic presentation, and a luxurious one-bite finish." },
  { image: crispyBites, name: "Crispy House Special", description: "Golden, crisp, and glossy with spice, sesame, and just enough heat." },
  { image: greens, name: "Seasonal Greens", description: "Bright vegetables wok-tossed to keep texture, colour, and freshness intact." },
  { image: dimsumAlt, name: "Chef's Dim Sum Selection", description: "A second tasting of handcrafted dim sum for guests who begin with the basket." },
];

const drinkItems = [
  { image: spritz, name: "Citrus Spritz", description: "A soft pink pour with grapefruit brightness and a smooth, silky top." },
  { image: martini, name: "Herbal Martini", description: "Cold, clean, and sharply elegant with aromatic garnish across the rim." },
  { image: highball, name: "Lychee Highball", description: "Tall, chilled, and lightly sparkling with a playful fruit-led finish." },
  { image: blossom, name: "Blossom Sparkler", description: "A floral sparkling serve with delicate colour and celebratory lift." },
  { image: spritzAlt, name: "Signature Pink House Pour", description: "The lounge favourite served with citrus depth, foam, and warm bar ambience." },
];

export const Menu = () => (
  <section id="menu" className="section-shell relative py-32 md:py-40 silk-bg">
    <div className="container relative">
      <div className="reveal mb-20 text-center md:mb-24">
        <p className="ornament font-sans-lux mb-8 justify-center text-[10px] text-gold">The Menu</p>
        <h2 className="font-display mb-6 text-gold text-5xl md:text-6xl lg:text-7xl">Food & Drinks, Curated Beautifully</h2>
        <p className="font-serif-lux mx-auto max-w-3xl text-xl italic text-ivory/68 md:text-[1.65rem]">Every image now lives inside the experience — from signature plates to cocktails designed for slow evenings.</p>
      </div>

      <div className="mb-20 grid gap-6 md:grid-cols-2">
        {featuredCategories.map((category, index) => (
          <article key={category.title} className="group reveal-scale relative overflow-hidden gold-border shadow-card" style={{ transitionDelay: `${index * 110}ms` }}>
            <div className="grid md:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[280px] overflow-hidden">
                <img src={category.image} alt={category.title} className="zoom-img h-full w-full object-cover" loading="lazy" width={2048} height={1492} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(0 90% 4% / 0.18), hsl(0 90% 4% / 0.56))" }} />
              </div>
              <div className="flex items-center p-8 md:p-10">
                <div>
                  <p className="font-sans-lux mb-4 text-[10px] text-gold/82">Category</p>
                  <h3 className="font-display mb-4 text-gold text-4xl md:text-[2.5rem]">{category.title}</h3>
                  <p className="font-serif-lux text-xl leading-relaxed text-ivory/76 md:text-[1.35rem]">{category.description}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mb-24">
        <div className="reveal mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sans-lux mb-3 text-[10px] text-gold">Food</p>
            <h3 className="font-display text-gold text-4xl md:text-5xl">Signature Food Selection</h3>
          </div>
          <p className="font-serif-lux max-w-2xl text-lg italic text-ivory/64 md:text-[1.25rem]">Dim sum baskets, comforting broths, wok dishes, and refined plates showcased with one-line tasting notes.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {foodItems.map((item, index) => (
            <article key={item.name} className="group reveal-scale overflow-hidden gold-border shadow-card" style={{ transitionDelay: `${index * 70}ms` }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={item.image} alt={item.name} className="zoom-img h-full w-full object-cover" loading="lazy" width={2048} height={1404} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(0 90% 4% / 0.04), hsl(0 90% 4% / 0.38))" }} />
              </div>
              <div className="p-6 md:p-7">
                <h4 className="font-display mb-3 text-gold text-[1.75rem] leading-tight">{item.name}</h4>
                <p className="font-serif-lux text-lg leading-relaxed text-ivory/72">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div>
        <div className="reveal mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sans-lux mb-3 text-[10px] text-gold">Drinks</p>
            <h3 className="font-display text-gold text-4xl md:text-5xl">Cocktails & House Pours</h3>
          </div>
          <p className="font-serif-lux max-w-2xl text-lg italic text-ivory/64 md:text-[1.25rem]">Fresh citrus, floral sparkle, chilled martini depth, and lounge-led serves built for the bar mood.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {drinkItems.map((item, index) => (
            <article key={item.name} className="group reveal-scale overflow-hidden gold-border shadow-card" style={{ transitionDelay: `${index * 80}ms` }}>
              <div className="relative aspect-[3/4] overflow-hidden bg-black/50">
                <img src={item.image} alt={item.name} className="zoom-img h-full w-full object-cover" loading="lazy" width={1435} height={2048} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(0 90% 4% / 0.03), hsl(0 90% 4% / 0.46))" }} />
              </div>
              <div className="p-6 md:p-7">
                <h4 className="font-display mb-3 text-gold text-[1.7rem] leading-tight">{item.name}</h4>
                <p className="font-serif-lux text-lg leading-relaxed text-ivory/72">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);
