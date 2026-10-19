import { Link } from "react-router-dom";
import useDocumentHead from "../../hooks/useDocumentHead";
import Reveal from "../../components/Reveal";
import ProjectGallery from "../../components/ProjectGallery";
import { useLanguage } from "../../i18n/LanguageContext";

// ==========================================================================
// PROJET "07" — modifie tout ce qui suit pour changer le contenu.
// Chaque projet est un fichier independant : titre, categorie, images,
// textes et liens sont tous ecrits directement ici (pas de fichier "data").
// ==========================================================================

const CONTENT = {
  fr: {
    title: "SportSee – Tableau de bord d'analytics sportif",
    category: "Développement Front-end / React",
    description: "Développement d'un tableau de bord d'analytics pour SportSee, startup de coaching sportif, permettant aux utilisateurs de suivre leurs sessions d'entraînement et leurs calories brûlées.",
    apercu: [
      "Conception d'une application Next.js avec authentification JWT, routes protégées et gestion d'état centralisée via Context API.",
      "Intégration de graphiques interactifs avec Recharts pour visualiser l'activité sportive, à partir de données mockées puis connectées à l'API réelle du backend Node.js."
    ],
    objectifs: [
      "Reconstruire les pages de profil utilisateur en React à partir des maquettes Figma fournies par le designer.",
      "Mettre en place un système d'authentification sécurisé et une gestion d'état globale avec Context API.",
      "Standardiser les données provenant de l'API avant de les injecter dans des composants graphiques réutilisables."
    ],
    resultat: "Le tableau de bord permet de basculer entre données mockées et API sans modifier les composants, avec une gestion complète des états de chargement et d'erreur. Les retours utilisateurs ont été très positifs, ouvrant la voie à l'intégration de fonctionnalités IA (chatbot et programme d'entraînement personnalisé).",
  },
  en: {
    title: "SportSee – Sports Analytics Dashboard",
    category: "Front-end Development / React",
    description: "Built an analytics dashboard for SportSee, a sports coaching startup, allowing users to track their training sessions and calories burned.",
    apercu: [
      "Designed a Next.js application with JWT authentication, protected routes, and centralized state management via Context API.",
      "Integrated interactive charts with Recharts to visualize sports activity, starting from mocked data and later connecting to the real Node.js backend API."
    ],
    objectifs: [
      "Rebuild the user profile pages in React based on the Figma mockups provided by the designer.",
      "Implement a secure authentication system and global state management with Context API.",
      "Standardize data coming from the API before injecting it into reusable chart components."
    ],
    resultat: "The dashboard allows switching between mocked and live data without modifying components, with full loading and error state handling. User feedback was very positive, paving the way for AI-powered features (chatbot and personalized training program).",
  },
};

const TECHS = ["Next.js", "React", "Context API", "Recharts", "Node.js", "JWT"];
const THUMBNAIL = "/assets/img/SP1.png";
const GALLERY = ["/assets/img/SP1.png", "/assets/img/SP2.png", "/assets/img/SP3.png", "/assets/img/SP4.png"];
const DEMO_URL = "#";
const CODE_URL = "https://github.com/Neda789/Sportsee.git";
const CATEGORY_SLUG = "front-end-development";

const PREV_PATH = "/projekti/06";
const PREV_NUM = "06";
const NEXT_PATH = "/projekti/08";
const NEXT_NUM = "08";

// Resume utilise par les cartes (page "Projets" et projets en vedette sur
// l'accueil) — voir src/components/ProjectCard.jsx.
export const card = {
  id: "07",
  number: "07",
  path: "/projekti/07",
  thumbnail: THUMBNAIL,
  categorySlug: CATEGORY_SLUG,
  title: { fr: CONTENT.fr.title, en: CONTENT.en.title },
  category: { fr: CONTENT.fr.category, en: CONTENT.en.category },
  description: { fr: CONTENT.fr.description, en: CONTENT.en.description },
  codeUrl: CODE_URL,
};

export default function Project07() {
  const { t, lang } = useLanguage();
  const c = CONTENT[lang];

  useDocumentHead(`${c.title} — Neda Stanisic`, t("projectDetail.metaDescription", c.title, c.category));

  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 0 }}>
        <div className="container">
          <Reveal as="p" className="breadcrumb">
            <Link to="/">{t("nav.accueil")}</Link> / <Link to="/projekti">{t("nav.projects")}</Link> / <span>{c.title}</span>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 36 }}>
        <div className="container">
          <Reveal className="project-detail-header">
            <div>
              <span className="kicker">{c.category}</span>
              <h1>{c.title}</h1>
            </div>
            <div className="hero-actions" style={{ marginBottom: 0 }}>
              <Link to="/projekti" className="btn btn-outline btn-sm">{t("projectDetail.allProjects")}</Link>
              <a href={CODE_URL} className="btn btn-primary btn-sm">{t("projectDetail.sourceCode")}</a>
            </div>
          </Reveal>

          <Reveal>
            <ProjectGallery images={GALLERY} />
          </Reveal>

          <div className="project-detail-grid">
            <div className="project-detail-main">
              <Reveal className="project-detail-block">
                <h3>{t("projectDetail.overview")}</h3>
                {c.apercu.map((p, i) => <p key={i}>{p}</p>)}
              </Reveal>

              <Reveal className="project-detail-block" delay={1}>
                <h3>{t("projectDetail.objectives")}</h3>
                <ul>
                  {c.objectifs.map((o, i) => <li key={i}>{o}</li>)}
                </ul>
              </Reveal>

            

              <Reveal className="project-detail-block" delay={3}>
                <h3>{t("projectDetail.results")}</h3>
                <p>{c.resultat}</p>
              </Reveal>
            </div>

            <Reveal as="aside" className="project-sidebar" delay={1}>
              <div className="glass-card sidebar-card">
                <h4>{t("projectDetail.infoTitle")}</h4>
                <div className="sidebar-row"><span>{t("projectDetail.category")}</span><span>{c.category}</span></div>
               
                <div className="sidebar-row"><span>{t("projectDetail.role")}</span><span>{t("projectDetail.roleValue")}</span></div>
                <div className="sidebar-row"><span>{t("projectDetail.year")}</span><span>2026</span></div>
              </div>
              <div className="glass-card sidebar-card">
                <h4>{t("projectDetail.stackTitle")}</h4>
                <div className="sidebar-tags">
                  {TECHS.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </div>
              <div className="glass-card sidebar-card">
                <h4>{t("projectDetail.linksTitle")}</h4>
                <a href={CODE_URL} className="btn btn-outline btn-sm">{t("projectDetail.sourceCodeGithub")}</a>
              </div>
            </Reveal>
          </div>

          <Reveal className="project-pager">
            <Link to={PREV_PATH} className="pager-link prev">
              <span className="pager-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
              </span>
              <span><span className="pager-label">{t("projectDetail.previous")}</span><span className="pager-title">{t("projectDetail.projectNum")} {PREV_NUM}</span></span>
            </Link>
            <Link to="/projekti" className="pager-center" style={{ color: "var(--text-muted)", fontSize: ".85rem" }}>
              {t("common.allProjects")}
            </Link>
            <Link to={NEXT_PATH} className="pager-link next">
              <span><span className="pager-label">{t("projectDetail.next")}</span><span className="pager-title">{t("projectDetail.projectNum")} {NEXT_NUM}</span></span>
              <span className="pager-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <Reveal className="cta-banner">
            <span className="badge-soft">{t("common.wantToGoFurther")}</span>
            <h2 className="mt-lg">{t("projectDetail.ctaTitle")}</h2>
            <p>{t("projects.ctaText")}</p>
            <Link to="/kontakt" className="btn btn-primary">{t("common.discussProject")}</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
