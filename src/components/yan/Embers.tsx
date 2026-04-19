import { useMemo } from "react";

export const Embers = ({ count = 18 }: { count?: number }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        delay: Math.random() * 14,
        duration: 14 + Math.random() * 18,
        size: 2 + Math.random() * 3,
        opacity: 0.4 + Math.random() * 0.5,
      })),
    [count]
  );
  return (
    <div className="embers" aria-hidden>
      {particles.map((p, i) => (
        <span
          key={i}
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
};
