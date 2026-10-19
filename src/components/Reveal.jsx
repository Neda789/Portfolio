import { useEffect, useRef, useState } from "react";

/**
 * Enveloppe un bloc de contenu et lui ajoute la classe "in" quand il entre
 * dans le viewport (anime en CSS via .reveal / .reveal.in dans style.css).
 * Equivalent React de l'IntersectionObserver utilise par le site original.
 */
export default function Reveal({ children, delay = 0, as: Tag = "div", className = "", ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delayClass = delay ? ` reveal-delay-${delay}` : "";

  return (
    <Tag ref={ref} className={`reveal${visible ? " in" : ""}${delayClass}${className ? " " + className : ""}`} {...rest}>
      {children}
    </Tag>
  );
}
