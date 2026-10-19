import { Link } from "react-router-dom";
import useDocumentHead from "../hooks/useDocumentHead";
import Marquee from "../components/Marquee";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import AnimatedCounter from "../components/AnimatedCounter";
import { useLanguage } from "../i18n/LanguageContext";

import { card as card01 } from "./projects/Project01";
import { card as card02 } from "./projects/Project02";
import { card as card03 } from "./projects/Project03";
import { card as card04 } from "./projects/Project04";
import { card as card05 } from "./projects/Project05";
import { card as card06 } from "./projects/Project06";


// Projets mis en avant sur l'accueil — change simplement les imports
// ci-dessus (ex. Project04 -> Project07) pour en afficher d'autres.
const FEATURED = [card01, card02, card03, card04, card05, card06];

const COMPETENCY_GROUPS = [
  [
    { name: "Machine Learning", icon: "tensorflow", mark: "ML" },
    { name: "NLP", icon: "huggingface", mark: "NLP" },
    { name: "MLOps", icon: "mlflow", mark: "MLOps" },
    { name: "Python", icon: "python", mark: "Py" },
    { name: "Pandas", icon: "pandas", mark: "Pd" },
    { name: "NumPy", icon: "numpy", mark: "Np" },
    { name: "Scikit-learn", icon: "scikitlearn", mark: "Sk" },
    { name: "XGBoost", icon: "xgboost", mark: "XGB", showLogo: false },
    { name: "SMOTE", mark: "SM", showLogo: false },
  
    { name: "HuggingFace", icon: "huggingface", mark: "HF" },
    { name: "LLM", icon: "openai", mark: "LLM", showLogo: false },
    { name: "RAG", icon: "langchain", mark: "RAG" },
    { name: "Agents IA", icon: "langchain", mark: "AI" },
  ],
  [
    { name: "WordPress", icon: "wordpress", mark: "WP" },
    { name: "Elementor", icon: "elementor", mark: "El" },
    { name: "HTML5", icon: "html5", mark: "HTML" },
    { name: "CSS3", image: "/assets/img/skills/css3.svg", mark: "CSS" },
    { name: "JavaScript", icon: "javascript", mark: "JS" },
    { name: "React", icon: "react", mark: "R" },
    { name: "jQuery", icon: "jquery", mark: "jQ" },
    { name: "PHP", icon: "php", mark: "PHP" },
    { name: "MySQL", icon: "mysql", mark: "SQL" },
    { name: "AJAX", icon: "javascript", mark: "AJAX" },
  ],
  [
    { name: "SQL", icon: "postgresql", mark: "SQL" },
    { name: "PostgreSQL", icon: "postgresql", mark: "Pg" },
    { name: "Git / GitHub", icon: "github", mark: "Git" },
    { name: "Docker", icon: "docker", mark: "Dk" },
    { name: "Scrum", icon: "atlassian", mark: "Sc" },
    { name: "Kanban", icon: "trello", mark: "Kb" },
    { name: "Figma", icon: "figma", mark: "Fg" },
    

  ],
];

function CompetencyCard({ competency }) {
  return (
    <div className={`competency-card${competency.showLogo === false ? " competency-card-text-only" : ""}`}>
      {competency.showLogo !== false && (
        <span className="competency-logo" aria-hidden="true">
          <img
            src={competency.image || `https://cdn.simpleicons.org/${competency.icon}/${competency.color || "A78BFA"}`}
            alt=""
            loading="lazy"
            onError={(event) => {
              event.currentTarget.hidden = true;
              event.currentTarget.nextElementSibling.hidden = false;
            }}
          />
          <span className="competency-logo-fallback" hidden>{competency.mark}</span>
        </span>
      )}
      <span className="competency-name">{competency.name}</span>
    </div>
  );
}

export default function Home() {
  const { t } = useLanguage();

  useDocumentHead(t("home.metaTitle"), t("home.metaDescription"));

  return (
    <>
      {/* ============ HERO + SLIDESHOW ============ */}
      <section className="hero" id="accueil">
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="kicker">{t("home.kicker")}</span>
            <h1 className="hero-title">
              {t("home.titleBefore")}{" "}
              <span className="gradient-text">{t("home.titleGradient")}</span> {t("home.titleAfter")}
            </h1>
            <p className="hero-sub">{t("home.subtitle")}</p>
            <div className="hero-actions">
              <Link to="/projekti" className="btn btn-primary">{t("home.viewProjects")}</Link>
              <Link to="/kontakt" className="btn btn-outline">{t("common.contactMe")}</Link>
            </div>
            <div className="hero-stats">
              <div>
                <strong><AnimatedCounter value={12} suffix="+" /></strong>
                <span>{t("home.statProjects")}</span>
              </div>
              
              <div>
                <strong><AnimatedCounter value={37} suffix="+" /></strong>
                <span>{t("home.statTech")}</span>
              </div>
            </div>
          </div>

          <div className="hero-portrait">
            <div className="portrait-ring">
              <div className="portrait-inner">
                {/* Remplacez /assets/img/avatar.svg par votre propre photo de profil */}
                <img src="/assets/img/mojaslika.jpg" alt={t("home.portraitAlt")} />
              </div>
            </div>
            <div className="portrait-badge">
              <span className="dot"></span> {t("home.badgeAvailable")}
            </div>
          </div>
        </div>

        <div className="scroll-cue">
          <span className="line"></span>{t("home.scroll")}
        </div>
      </section>

      <Marquee />

      {/* ============ APERCU A PROPOS ============ */}
      <section className="section">
        <div className="container about-grid">
          <Reveal className="about-photo-wrap">
            <div className="about-photo-frame"></div>
            <img src="/assets/img/IA.webp" alt={t("about.photoAlt")} />
          </Reveal>
          <div className="about-text">
            <Reveal as="span" className="kicker">{t("home.aboutKicker")}</Reveal>
            <Reveal as="h2" className="section-title" delay={1}>
              {t("home.aboutTitle")}
            </Reveal>
            <Reveal as="p" delay={2}>
              {t("home.aboutP1")}
            </Reveal>
            <Reveal as="p" delay={3}>
              {t("home.aboutP2")}
            </Reveal>
            {COMPETENCY_GROUPS.map((group, index) => (
              <Reveal className="competency-grid" delay={4 + index} key={index}>
                {group.map((competency) => (
                  <CompetencyCard key={competency.name} competency={competency} />
                ))}
              </Reveal>
            ))}
            <Reveal delay={4}>
              <Link to="/o-meni" className="btn btn-outline mt-lg">{t("home.learnMore")}</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ PROJETS EN VEDETTE ============ */}
      <section className="section alt">
        <div className="container">
          <Reveal as="div" className="section-head center">
            <span className="kicker">{t("home.featuredKicker")}</span>
            <h2 className="section-title">{t("home.featuredTitle")}</h2>
            <p className="section-lead">{t("home.featuredLead")}</p>
          </Reveal>

          <div className="projects-grid">
            {FEATURED.map((p, i) => (
              <ProjectCard key={p.id} card={p} delay={i} />
            ))}
          </div>

          <Reveal className="text-center mt-lg">
            <Link to="/projekti" className="btn btn-primary">{t("home.viewAllProjects")}</Link>
          </Reveal>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section">
        <div className="container">
          <Reveal className="cta-banner">
            <span className="badge-soft">{t("home.ctaBadge")}</span>
            <h2 className="mt-lg">{t("home.ctaTitle")}</h2>
            <p>{t("home.ctaText")}</p>
            <Link to="/kontakt" className="btn btn-primary">{t("common.contactMe")}</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
