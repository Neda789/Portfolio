import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";

// Contexte de langue (FR / EN) partage par toute l'application.
// Utilisation dans un composant : const { lang, setLang, t } = useLanguage();

const LanguageContext = createContext(null);
const STORAGE_KEY = "portfolio-lang";

export const LANGUAGES = [
  { code: "fr", label: "FR", full: "Français" },
  { code: "en", label: "EN", full: "English" },
];

function readFromPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

function detectInitialLang() {
  if (typeof window === "undefined") return "fr";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "fr" || saved === "en") return saved;
  } catch {
    /* localStorage indisponible (mode prive, etc.) — on ignore */
  }
  return "fr";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLang);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang;
  }, [lang]);

  // t("nav.accueil") -> chaine traduite. Si la valeur est une fonction
  // (ex. projectDetail.metaDescription), passe les arguments a la fonction.
  const t = useMemo(() => {
    return (path, ...args) => {
      const value = readFromPath(translations[lang], path);
      if (typeof value === "function") return value(...args);
      if (value === undefined) return path;
      return value;
    };
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "fr" ? "en" : "fr"));

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t }),
    [lang, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage() doit etre utilise a l'interieur d'un <LanguageProvider>.");
  }
  return ctx;
}
