import { useEffect, useState } from "react";
import logo from "@/assets/yanyan-logo.png";

const links = [
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#bar", label: "Bar" },
  { href: "#ambience", label: "Ambience" },
  { href: "#private-dining", label: "Private Dining" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: 0.02 }
    );
    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "sticky-luxe border-b border-gold/18 shadow-deep" : "bg-transparent"
      }`}
    >
      <nav className="container flex h-20 items-center justify-between lg:h-[92px]">
        <a href="#top" className="group flex items-center" aria-label="Yàn Yàn Bangalore" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Yàn Yàn logo"
           className={`w-auto transition-all duration-700 group-hover:drop-shadow-[0_0_16px_hsl(var(--gold)/0.5)] ${
           scrolled ? "h-16 lg:h-18" : "h-20 lg:h-22"
           }`}
          />
        </a>

        <ul className="hidden items-center gap-7 lg:flex xl:gap-9 font-sans-lux text-[10px] text-ivory/76">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a href={link.href} className={`relative py-2 transition-colors duration-500 hover:text-gold ${isActive ? "nav-active" : ""}`}>
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-1/2 h-px -translate-x-1/2 bg-gold transition-all duration-500 ${
                      isActive ? "w-7 opacity-100" : "w-0 opacity-0"
                    }`}
                    style={{ boxShadow: "0 0 8px hsl(var(--gold) / 0.65)" }}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a href="https://www.instagram.com/yanyanbangalore/" target="_blank" rel="noreferrer" className="font-sans-lux text-[10px] text-ivory/64 transition-colors duration-500 hover:text-gold">
            Instagram
          </a>
          <a href="#reserve" className="btn-gold !px-5 !text-[9px]">
            Book a Table
          </a>
        </div>

        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex flex-col gap-1.5 p-2 lg:hidden"
        >
          <span className={`block h-px w-6 bg-gold transition-transform duration-500 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-gold transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-gold transition-transform duration-500 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      <div className={`overflow-hidden transition-all duration-700 ease-out lg:hidden ${open ? "max-h-[85vh]" : "max-h-0"}`}>
        <div className="glass-luxe border-t border-gold/20">
          <ul className="container flex flex-col gap-5 py-8 font-sans-lux text-xs text-ivory/86">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className={`block py-2 transition-colors hover:text-gold ${active === link.href ? "nav-active" : ""}`}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a href="#reserve" onClick={() => setOpen(false)} className="btn-gold w-full">
                Book a Table
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
