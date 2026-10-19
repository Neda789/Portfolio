import { LANGUAGES, useLanguage } from "../i18n/LanguageContext";

// Deux pastilles FR / EN. Clic -> toute l'application change de langue
// instantanement (voir LanguageContext.jsx).
export default function LanguageSwitcher({ className = "" }) {
  const { lang, setLang } = useLanguage();

  return (
    <div className={`lang-switcher ${className}`.trim()} role="group" aria-label="Langue / Language">
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          type="button"
          className={`lang-btn${lang === l.code ? " active" : ""}`}
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          title={l.full}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
