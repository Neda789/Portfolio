import { Link } from "react-router-dom";
import useDocumentHead from "../../hooks/useDocumentHead";
import Reveal from "../../components/Reveal";
import ProjectGallery from "../../components/ProjectGallery";
import { useLanguage } from "../../i18n/LanguageContext";

// ==========================================================================
// PROJET "12" — modifie tout ce qui suit pour changer le contenu.
// Chaque projet est un fichier independant : titre, categorie, images,
// textes et liens sont tous ecrits directement ici (pas de fichier "data").
// ==========================================================================

const CONTENT = {
  fr: {
    title: "Planty – Boissons Énergisantes aux Plantes",
    category: "Développement WordPress",
    description: "Création d’un site vitrine responsive pour Planty, une jeune marque de boissons énergisantes à base de plantes. Le site présente la marque, permet aux administrateurs de modifier le contenu depuis WordPress et donne aux visiteurs la possibilité d’envoyer une demande de précommande.",
    apercu: [
      "Dans le cadre de ce projet, j’ai développé le site vitrine de Planty à partir des maquettes fournies. Le site présente cette nouvelle marque de boissons énergisantes à base de plantes et ses produits.",
      "Le thème enfant WordPress a été personnalisé pour respecter le design sur ordinateur et mobile. Les pages et leur contenu sont gérés depuis l’administration WordPress, avec un formulaire permettant aux visiteurs de contacter la marque et d’envoyer une demande de précommande.",
    ],
    objectifs: [
      "Créer et personnaliser un thème enfant WordPress sans modifier le thème parent.",
      "Intégrer la structure du site et les pages à partir des maquettes fournies.",
      "Adapter l’affichage aux écrans desktop et mobile.",
      "Permettre aux administrateurs de modifier le contenu depuis l’interface WordPress.",
      "Mettre en place un formulaire de contact et de demande de précommande.",
      "Afficher un lien d’administration dans le menu uniquement pour les utilisateurs connectés.",
      "Suivre les modifications du projet avec Git et GitHub.",
    ],
    resultat: "Le site Planty présente la marque et ses boissons dans une interface responsive fidèle aux maquettes. Les administrateurs peuvent modifier le contenu depuis WordPress, et les visiteurs peuvent contacter la marque ou envoyer une demande de précommande.",
  },

  en: {
    title: "Planty – Plant-Based Energy Drinks",
    category: "WordPress Development",
    description: "Built a responsive showcase website for Planty, a new plant-based energy drink brand. The site introduces the brand, lets administrators update content in WordPress, and gives visitors a way to submit a pre-order request.",
    apercu: [
      "For this project, I built Planty’s showcase website from the supplied mockups. The site introduces the new plant-based energy drink brand and its products.",
      "I customized a WordPress child theme to match the design on desktop and mobile. Pages and content can be managed through the WordPress dashboard, and visitors can contact the brand or submit a pre-order request through a form.",
    ],
    objectifs: [
      "Create and customize a WordPress child theme without modifying the parent theme.",
      "Build the site structure and pages from the supplied mockups.",
      "Make the layout responsive for desktop and mobile screens.",
      "Let administrators update the website content through WordPress.",
      "Add a contact form and a pre-order request form.",
      "Show an admin link in the menu only to logged-in users.",
      "Track project changes with Git and GitHub.",
    ],
    resultat: "The Planty website presents the brand and its drinks in a responsive interface based on the supplied mockups. Administrators can update the content in WordPress, while visitors can contact the brand or submit a pre-order request.",
  },
};

const TECHS = ["WordPress", "PHP", "HTML5", "CSS3", "Git", "GitHub"];
const THUMBNAIL = "/assets/img/PL1.png";
const GALLERY = ["/assets/img/PL1.png", "/assets/img/PL2.png", "/assets/img/PL3.png", "/assets/img/PL4.png"];
const DEMO_URL = "#";
const CODE_URL = "https://github.com/Neda789/Planty.git";
const CATEGORY_SLUG = "wordpress-development";

const PREV_PATH = "/projekti/11";
const PREV_NUM = "11";
const NEXT_PATH = "/projekti/01";
const NEXT_NUM = "01";

// Resume utilise par les cartes (page "Projets" et projets en vedette sur
// l'accueil) — voir src/components/ProjectCard.jsx.
export const card = {
  id: "12",
  number: "12",
  path: "/projekti/12",
  thumbnail: THUMBNAIL,
  categorySlug: CATEGORY_SLUG,
  title: { fr: CONTENT.fr.title, en: CONTENT.en.title },
  category: { fr: CONTENT.fr.category, en: CONTENT.en.category },
  description: { fr: CONTENT.fr.description, en: CONTENT.en.description },
  codeUrl: CODE_URL,
};

export default function Project12() {
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
