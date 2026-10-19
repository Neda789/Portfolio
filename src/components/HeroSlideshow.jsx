import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function HeroSlideshow({ images }) {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 5500);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  const goTo = (i) => {
    setCurrent(i);
    resetTimer();
  };

  return (
    <>
      <div className="hero-slides">
        {images.map((src, i) => (
          <div
            key={src}
            className={`hero-slide${i === current ? " active" : ""}`}
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}
      </div>
      <div className="slide-controls">
        {images.map((_, i) => (
          <button
            key={i}
            className={`slide-dot${i === current ? " active" : ""}`}
            aria-label={`${t("aria.slide")} ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </>
  );
}
