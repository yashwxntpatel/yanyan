import { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const useLuxuryMotion = (scope: RefObject<HTMLElement>) => {
  useGSAP(
    () => {
      const q = gsap.utils.selector(scope);

      gsap.set(q(".reveal"), { y: 42, opacity: 0, filter: "blur(6px)" });
      gsap.set(q(".reveal-left"), { x: -42, opacity: 0, filter: "blur(6px)" });
      gsap.set(q(".reveal-right"), { x: 42, opacity: 0, filter: "blur(6px)" });
      gsap.set(q(".reveal-scale"), { y: 28, scale: 0.96, opacity: 0, filter: "blur(6px)" });

      q(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => {
        gsap.to(el, {
          y: 0,
          x: 0,
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            once: true,
          },
        });
      });

      q(".font-display.heading-luxe, .font-display:not(.split-reveal), .card-title-luxe").forEach((el) => {
        gsap.fromTo(
          el,
          {
            y: 36,
            opacity: 0,
            clipPath: "inset(0 0 100% 0)",
          },
          {
            y: 0,
            opacity: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
              once: true,
            },
          }
        );
      });

      q(".hero-subtitle-luxe, .hero-copy-luxe, .copy-luxe, .section-intro-luxe").forEach((el) => {
        gsap.fromTo(
          el,
          {
            y: 24,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      q(".split-reveal .split-word > span").forEach((el, index) => {
        gsap.fromTo(
          el,
          {
            yPercent: 115,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.25,
            delay: 0.26 + index * 0.08,
            ease: "power4.out",
          }
        );
      });

      q(".gold-divider-thick, .gold-divider").forEach((el) => {
        gsap.fromTo(
          el,
          {
            scaleX: 0.2,
            opacity: 0,
            transformOrigin: "center center",
          },
          {
            scaleX: 1,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              once: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    },
    { scope }
  );
};
