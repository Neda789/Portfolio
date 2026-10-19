import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-brand">
              <img src="/assets/img/logo.svg" alt="Logo" />
              <span>
                Neda <strong>Stanisic</strong>
              </span>
            </Link>
            <p>{t("footer.tagline")}</p>
            <div className="social-row">
              <a href="https://www.linkedin.com/in/neda-sekulic2489" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A5 5 0 0 1 16 8z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://github.com/Neda789" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C7.5 2.8 6.4 3.1 6.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 5 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
                </svg>
              </a>
            
            </div>
          </div>

          <div className="footer-col">
            <h5>{t("footer.navTitle")}</h5>
            <Link to="/">{t("nav.accueil")}</Link>
            <Link to="/o-meni">{t("nav.about")}</Link>
            <Link to="/projekti">{t("nav.projects")}</Link>
            <Link to="/kontakt">{t("nav.contact")}</Link>
          </div>

          <div className="footer-col">
            <h5>{t("footer.contactTitle")}</h5>
            <a href="mailto:neda_89@live.com">neda_89@live.com</a>
        
            <a href="#">{t("footer.location")}</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Neda Stanisic. {t("footer.rights")}</span>
          <span>
            <a href="#">{t("footer.designBy")}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
