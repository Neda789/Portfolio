import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const NAV_LINKS = [
    { to: "/", label: t("nav.accueil") },
    { to: "/o-meni", label: t("nav.about") },
    { to: "/projekti", label: t("nav.projects") },
    { to: "/kontakt", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
    <Link to="/" className="nav-brand" onClick={closeMenu}>
  <img src="/assets/img/logo.svg" alt="Logo" />
  <span>
    Neda <strong>Stanisic</strong>
  </span>
</Link>

      <nav className={`nav-links${open ? " open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="nav-cta">
        <LanguageSwitcher />
        <Link to="/kontakt" className="btn btn-outline btn-sm">
          {t("nav.cta")}
        </Link>
        <button
          className={`nav-toggle${open ? " open" : ""}`}
          aria-label={t("aria.menu")}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
