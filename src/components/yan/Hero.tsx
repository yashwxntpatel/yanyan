import { useEffect, useRef } from "react";
import hero from "@/assets/venue-exterior.jpg";
import logo from "@/assets/yanyan-logo.png";
import { Embers } from "./Embers";

export const Hero = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const y = window.scrollY;
      if (imgRef.current) {
        imgRef.current.style.transform = `translate3d(0, ${y * 0.16}px, 0) scale(${1.03 + y * 0.00012})`;
      }
      if (contentRef.current) {
        const opacity = Math.max(0, 1 - y / 720);
        contentRef.current.style.transform = `translate3d(0, ${y * 0.08}px, 0)`;
        contentRef.current.style.opacity = String(opacity);
      }
      raf = 0;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const title = "YÀN YÀN";

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-start justify-center overflow-hidden pt-32 pb-36 md:pt-36 md:pb-32 lg:pt-40 lg:pb-28"
    >
      <div className="absolute inset-0">
        <img
          ref={imgRef}
          src={hero}
          alt="Yàn Yàn Bangalore exterior entrance"
          className="img-slow-zoom h-[118%] w-full object-cover opacity-55"
          width={1366}
          height={2048}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(0 82% 18% / 0.1) 0%, hsl(0 85% 6% / 0.72) 58%, hsl(0 90% 4% / 0.96) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(0 90% 5% / 0.84) 0%, hsl(0 86% 6% / 0.34) 34%, hsl(0 85% 6% / 0.76) 72%, hsl(0 90% 4% / 0.98) 100%)",
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 silk-motion opacity-75" />
      <Embers count={18} />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 44%, hsl(0 90% 3% / 0.74) 100%)",
        }}
      />

      <div ref={contentRef} className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <div
          className="eyebrow-box mb-8 animate-fade-in"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          <span className="font-sans-lux text-[10px] text-gold/88">
            The Ritz-Carlton, Bangalore
          </span>
        </div>

        <img
          src={logo}
          alt="Yàn Yàn"
          className="mx-auto mb-10 h-16 w-auto opacity-95 drop-shadow-[0_0_24px_hsl(var(--gold)/0.28)] animate-fade-in md:h-20"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        />

        <h1 className="split-reveal in-view heading-luxe text-gold text-shadow-gold font-display text-[3.2rem] sm:text-7xl md:text-[6rem] lg:text-[8.15rem] xl:text-[9.75rem]">
          {title.split(" ").map((word, index, arr) => (
            <span key={word + index} className="split-word">
              <span style={{ transitionDelay: `${260 + index * 160}ms` }}>
                {word}
                {index < arr.length - 1 ? "\u00A0" : ""}
              </span>
            </span>
          ))}
        </h1>

        <div
          className="mx-auto mt-8 mb-9 w-52 gold-divider-thick animate-fade-in"
          style={{ animationDelay: "1.1s", animationFillMode: "both" }}
        />

        <p
          className="hero-subtitle-luxe animate-fade-up mb-4 text-[2rem] text-ivory/95 md:text-[2.8rem] lg:text-[3.25rem]"
          style={{ animationDelay: "1.2s", animationFillMode: "both" }}
        >
          <span className="font-script text-gold-script mr-2 align-middle text-[1.15em]">
            Arrival
          </span>
          Into Modern Chinese Fine Dining
        </p>

        <p
          className="hero-copy-luxe animate-fade-up mx-auto max-w-3xl text-[1.45rem] text-ivory/78 md:text-[1.75rem]"
          style={{ animationDelay: "1.4s", animationFillMode: "both" }}
        >
          Step through the crimson entrance into a dining room shaped by craft,
          atmosphere, dim sum artistry, and cocktails designed to linger.
        </p>

        <div
          className="mt-10 flex animate-fade-up flex-col justify-center gap-5 sm:flex-row"
          style={{ animationDelay: "1.7s", animationFillMode: "both" }}
        >
          <a href="#reserve" className="btn-gold">
            Book a Table
          </a>
          <a href="#menu" className="btn-ghost-gold">
            View Food & Drinks
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 animate-fade-in md:bottom-8 lg:bottom-10"
        style={{ animationDelay: "2.2s", animationFillMode: "both" }}
      >
        <span className="font-sans-lux text-[9px] text-gold/60">Scroll</span>
        <div className="h-16 w-px bg-gradient-to-b from-gold/80 via-gold/30 to-transparent animate-float-slow" />
      </div>
    </section>
  );
};
