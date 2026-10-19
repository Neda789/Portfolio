import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function ProjectGallery({ images }) {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const goTo = (i) => setCurrent((i + images.length) % images.length);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % images.length), 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  return (
    <div
      className="project-gallery"
      onMouseEnter={() => clearInterval(timerRef.current)}
      onMouseLeave={resetTimer}
    >
      {images.map((src, i) => (
        <div
          key={src}
          className={`gallery-slide${i === current ? " active" : ""}`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}

      <div className="gallery-controls">
        <button
          className="gallery-arrow prev"
          aria-label={t("aria.prevImage")}
          onClick={() => {
            goTo(current - 1);
            resetTimer();
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          className="gallery-arrow next"
          aria-label={t("aria.nextImage")}
          onClick={() => {
            goTo(current + 1);
            resetTimer();
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="gallery-counter">
        {current + 1} / {images.length}
      </div>

      <div className="gallery-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`gallery-dot${i === current ? " active" : ""}`}
            aria-label={`${t("aria.image")} ${i + 1}`}
            onClick={() => {
              goTo(i);
              resetTimer();
            }}
          />
        ))}
      </div>
    </div>
  );
}
