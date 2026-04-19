import logo from "@/assets/yanyan-logo.png";

export const Contact = () => (
  <footer id="contact" className="relative border-t border-gold/20 pt-24 pb-12 silk-bg md:pt-28">
    <div className="container relative">

      <div className="mb-20 grid gap-14 md:grid-cols-4">
        
        {/* BRAND */}
        <div className="md:col-span-1">
          <img
            src={logo}
            alt="Yàn Yàn logo"
            className="mb-5 h-20 w-auto drop-shadow-[0_0_18px_hsl(var(--gold)/0.35)]"
          />

          <div className="mb-5 w-20 gold-divider" />

          <p className="font-script text-gold-script text-[1.9rem] leading-tight md:text-[2.2rem]">
            Where art meets appetite.
          </p>
        </div>

        {/* VISIT */}
        <div>
          <p className="font-sans-lux mb-5 text-[10px] text-gold">
            Visit
          </p>

          <p className="copy-luxe text-[1.25rem] text-ivory/86 md:text-[1.35rem]">
            99 Residency Road<br />
            The Ritz-Carlton, Bengaluru 560025<br />
            Karnataka, India
          </p>
        </div>

        {/* HOURS */}
        <div>
          <p className="font-sans-lux mb-5 text-[10px] text-gold">
            Hours
          </p>

          <p className="copy-luxe text-[1.25rem] text-ivory/86 md:text-[1.35rem]">
            Mon–Fri · 12:00 PM–3:30 PM, 7:00 PM–11:30 PM<br />
            Sat–Sun · 12:00 PM–5:00 PM, 7:00 PM–11:30 PM<br />
            <span className="text-ivory/58">
              Dress Code · Smart Casual
            </span>
          </p>
        </div>

        {/* CONNECT */}
        <div>
          <p className="font-sans-lux mb-5 text-[10px] text-gold">
            Connect
          </p>

          <p className="copy-luxe text-[1.25rem] text-ivory/86 md:text-[1.35rem]">
            <a
              href="tel:+918049148000"
              className="transition-colors duration-500 hover:text-gold"
            >
              +91 80 4914 8000
            </a>
            <br />
            <a
              href="https://www.instagram.com/yanyanbangalore/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-500 hover:text-gold"
            >
              @yanyanbangalore
            </a>
          </p>

          <div className="mt-5 flex gap-5 font-sans-lux text-[10px] tracking-[0.24em]">
            <a
              href="https://www.instagram.com/yanyanbangalore/"
              target="_blank"
              rel="noreferrer"
              className="text-ivory/65 transition-colors duration-500 hover:text-gold"
            >
              Instagram
            </a>
            <a
              href="https://www.ritzcarlton.com/en/hotels/blrrz-the-ritz-carlton-bangalore/dining/"
              target="_blank"
              rel="noreferrer"
              className="text-ivory/65 transition-colors duration-500 hover:text-gold"
            >
              Hotel Dining
            </a>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="ornament-divider mb-8">
        <img src={logo} alt="" aria-hidden className="h-7 w-auto opacity-70" />
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col items-center justify-between gap-3 font-sans-lux text-[10px] tracking-[0.22em] text-ivory/50 md:flex-row">
        <p>© {new Date().getFullYear()} Yàn Yàn Bangalore · All Rights Reserved</p>
        <p>Designed by Yashwant Patel</p>
      </div>

    </div>
  </footer>
);
