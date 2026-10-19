import { Link } from "react-router-dom";
import useDocumentHead from "../../hooks/useDocumentHead";
import Reveal from "../../components/Reveal";
import ProjectGallery from "../../components/ProjectGallery";
import { useLanguage } from "../../i18n/LanguageContext";

// ==========================================================================
// PROJET "08" — modifie tout ce qui suit pour changer le contenu.
// Chaque projet est un fichier independant : titre, categorie, images,
// textes et liens sont tous ecrits directement ici (pas de fichier "data").
// ==========================================================================

const CONTENT = {
  fr: {
    title: "Portfolio Dynamique – Architecte d'Intérieur",
    category: "Développement Front-End JavaScript",
    description: "Développement des fonctionnalités dynamiques du site portfolio d'une architecte d'intérieur pour l'agence ArchiWebos : galerie de travaux connectée à une API, authentification administrateur et ajout/suppression de médias en temps réel, le tout en JavaScript natif.",
    apercu: [
      "Intégré en renfort sur une équipe front-end déjà en place, j'ai repris une version statique du site pour la rendre entièrement dynamique à partir des maquettes Figma et de l'API back-end fournies par l'équipe.",
      "L'objectif était de transformer un site vitrine figé en une véritable interface interactive : chargement des données en direct, filtrage sans rechargement de page, et gestion complète du contenu pour l'administratrice du site.",
    ],
    objectifs: [
      "Récupérer et afficher dynamiquement les travaux de l'architecte depuis l'API.",
      "Générer le menu de filtres par catégorie de façon dynamique, sans rechargement de page.",
      "Développer un formulaire de connexion avec gestion des erreurs et affichage conditionnel de l'interface d'administration.",
      "Créer une modale d'ajout de nouveaux travaux avec validation de formulaire.",
      "Manipuler le DOM et gérer les événements utilisateur en JavaScript pur, sans attributs inline (onclick).",
    ],
    resultat: "Le site respecte fidèlement les maquettes Figma fournies : la galerie se filtre instantanément par catégorie, l'ajout et la suppression de travaux se font sans rechargement de page une fois connecté, et le formulaire de connexion affiche un message clair en cas d'identifiants invalides. Aucune erreur n'est renvoyée dans la console du navigateur.",
  },
  en: {
    title: "Dynamic Portfolio – Interior Architect",
    category: "Front-End JavaScript Development",
    description: "Built the dynamic features of an interior architect's portfolio site for the ArchiWebos agency: a work gallery connected to an API, admin authentication, and real-time media upload/deletion, all in vanilla JavaScript.",
    apercu: [
      "Brought in to support an existing front-end team, I took over a static version of the site and made it fully dynamic based on Figma mockups and a back-end API provided by the team.",
      "The goal was to turn a static showcase site into a genuinely interactive interface: live data loading, filtering without page reloads, and full content management for the site's admin.",
    ],
    objectifs: [
      "Fetch and dynamically display the architect's work from the API.",
      "Dynamically generate the category filter menu, without reloading the page.",
      "Build a login form with error handling and conditional display of the admin interface.",
      "Create a modal for adding new work items with form validation.",
      "Handle DOM manipulation and user events in vanilla JavaScript, with no inline onclick attributes.",
    ],
    resultat: "The site closely matches the provided Figma mockups: the gallery filters instantly by category, adding and deleting work items happens without a page reload once logged in, and the login form shows a clear error message for invalid credentials. No errors are thrown in the browser console.",
  },
};

const TECHS = ["HTML5", "CSS3", "JavaScript (ES6+)", "Fetch API", "Figma"];
const THUMBNAIL = "/assets/img/SB1.png";
const GALLERY = ["/assets/img/SB1.png", "/assets/img/SB3.png", "/assets/img/SB4.png"];
const DEMO_URL = "#";
const CODE_URL = "https://github.com/Neda789/Portfolio-architecte-sophie-bluel.git";
const CATEGORY_SLUG = "front-end-development";

const PREV_PATH = "/projekti/07";
const PREV_NUM = "07";
const NEXT_PATH = "/projekti/09";
const NEXT_NUM = "09";

// Resume utilise par les cartes (page "Projets" et projets en vedette sur
// l'accueil) — voir src/components/ProjectCard.jsx.
export const card = {
  id: "08",
  number: "08",
  path: "/projekti/08",
  thumbnail: THUMBNAIL,
  categorySlug: CATEGORY_SLUG,
  title: { fr: CONTENT.fr.title, en: CONTENT.en.title },
  category: { fr: CONTENT.fr.category, en: CONTENT.en.category },
  description: { fr: CONTENT.fr.description, en: CONTENT.en.description },
  codeUrl: CODE_URL,
};

export default function Project08() {
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
