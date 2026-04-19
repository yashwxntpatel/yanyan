import exterior from "@/assets/venue-exterior.jpg";
import lounge from "@/assets/venue-interior-lounge.jpg";
import hall from "@/assets/venue-interior-hall.jpg";
import privateRoom from "@/assets/venue-private-room.jpg";

const shots = [
  { img: exterior, label: "Arrival", caption: "A bold entrance framed in crimson" },
  { img: lounge, label: "Lounge Seating", caption: "Velvet seating and warm lacquered wood" },
  { img: hall, label: "Main Dining Hall", caption: "Tall volume, soft light, and layered texture" },
  { img: privateRoom, label: "Private Room", caption: "An intimate setting for hosted evenings" },
];

export const Ambience = () => (
  <section id="ambience" className="section-shell relative py-32 md:py-40 silk-bg">
    <div className="container relative">
      <div className="reveal mb-20 text-center md:mb-24">
        <p className="ornament font-sans-lux mb-8 justify-center text-[10px] text-gold">
          Ambience
        </p>

        <h2 className="font-display heading-luxe mb-6 text-gold text-5xl md:text-6xl lg:text-7xl">
          Spaces That
          <br />
          <span className="font-script text-gold-script text-[0.84em]">
            Shape the Evening
          </span>
        </h2>

        <p className="section-intro-luxe italic text-center">
          From arrival to after-dinner conversation, every room carries its own mood.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-12 md:grid-rows-6">
        <div className="group reveal-scale relative overflow-hidden gold-border shadow-card transition-all duration-700 hover:shadow-gold md:col-span-5 md:row-span-6">
          <img
            src={shots[0].img}
            alt={shots[0].label}
            className="zoom-img h-[520px] w-full object-cover md:h-full"
            loading="lazy"
            width={1366}
            height={2048}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, transparent 38%, hsl(0 90% 4% / 0.92))" }}
          />
          <div className="absolute bottom-7 left-7 transition-transform duration-700 group-hover:-translate-y-2">
            <p className="font-sans-lux mb-2 text-[10px] text-gold/80">
              {shots[0].caption}
            </p>
            <p className="card-title-luxe text-gold text-3xl md:text-4xl">
              {shots[0].label}
            </p>
          </div>
        </div>

        <div
          className="group reveal-scale relative overflow-hidden gold-border shadow-card transition-all duration-700 hover:shadow-gold md:col-span-7 md:row-span-3"
          style={{ transitionDelay: "100ms" }}
        >
          <img
            src={shots[1].img}
            alt={shots[1].label}
            className="zoom-img h-[320px] w-full object-cover md:h-full"
            loading="lazy"
            width={2048}
            height={1364}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, transparent 48%, hsl(0 90% 4% / 0.92))" }}
          />
          <div className="absolute bottom-6 left-6 transition-transform duration-700 group-hover:-translate-y-2">
            <p className="font-sans-lux mb-1 text-[10px] text-gold/80">
              {shots[1].caption}
            </p>
            <p className="card-title-luxe text-gold text-2xl md:text-[1.8rem]">
              {shots[1].label}
            </p>
          </div>
        </div>

        <div
          className="group reveal-scale relative overflow-hidden gold-border shadow-card transition-all duration-700 hover:shadow-gold md:col-span-4 md:row-span-3"
          style={{ transitionDelay: "180ms" }}
        >
          <img
            src={shots[2].img}
            alt={shots[2].label}
            className="zoom-img h-[280px] w-full object-cover md:h-full"
            loading="lazy"
            width={2048}
            height={1357}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, transparent 45%, hsl(0 90% 4% / 0.92))" }}
          />
          <div className="absolute bottom-6 left-6 transition-transform duration-700 group-hover:-translate-y-2">
            <p className="font-sans-lux mb-1 text-[10px] text-gold/80">
              {shots[2].caption}
            </p>
            <p className="card-title-luxe text-gold text-2xl md:text-[1.8rem]">
              {shots[2].label}
            </p>
          </div>
        </div>

        <div
          className="group reveal-scale relative overflow-hidden gold-border shadow-card transition-all duration-700 hover:shadow-gold md:col-span-3 md:row-span-3"
          style={{ transitionDelay: "260ms" }}
        >
          <img
            src={shots[3].img}
            alt={shots[3].label}
            className="zoom-img h-[280px] w-full object-cover md:h-full"
            loading="lazy"
            width={2048}
            height={1358}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, transparent 42%, hsl(0 90% 4% / 0.92))" }}
          />
          <div className="absolute bottom-6 left-6 transition-transform duration-700 group-hover:-translate-y-2">
            <p className="font-sans-lux mb-1 text-[10px] text-gold/80">
              {shots[3].caption}
            </p>
            <p className="card-title-luxe text-gold text-2xl md:text-[1.8rem]">
              {shots[3].label}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
