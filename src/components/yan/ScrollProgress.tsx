import { useEffect, useState } from "react";

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none">
      <div
        className="h-full origin-left"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, hsl(var(--gold-deep)), hsl(var(--gold-bright)), hsl(var(--gold-deep)))",
          boxShadow: "0 0 12px hsl(var(--gold) / 0.6)",
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
};
