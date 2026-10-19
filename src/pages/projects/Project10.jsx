import { Link } from "react-router-dom";
import useDocumentHead from "../../hooks/useDocumentHead";
import Reveal from "../../components/Reveal";
import ProjectGallery from "../../components/ProjectGallery";
import { useLanguage } from "../../i18n/LanguageContext";

// ==========================================================================
// PROJET "10" — modifie tout ce qui suit pour changer le contenu.
// Chaque projet est un fichier independant : titre, categorie, images,
// textes et liens sont tous ecrits directement ici (pas de fichier "data").
// ==========================================================================

const CONTENT = {
  fr: {
    title: "Nathalie Mota – Portfolio Photographique",
    category: "Développement WordPress",
    description: "Création d’un site WordPress sur mesure pour une photographe professionnelle : galerie de photos filtrable, chargement progressif, pages dédiées aux photos et navigation en lightbox. Le thème respecte les maquettes desktop et mobile, avec des images optimisées et des requêtes Ajax déclenchées selon les besoins.",
    apercu: [
      "Pour cette mission, j’ai développé le nouveau site de Nathalie Mota, photographe spécialisée dans l’événementiel. Le site s’appuie sur un thème WordPress personnalisé, conçu à partir des maquettes fournies et adaptable aux écrans desktop et mobile.",
      "Les photos sont gérées comme un type de contenu dédié dans WordPress. La galerie permet de filtrer et trier les photos, de charger davantage de résultats progressivement et de les consulter dans une lightbox. Une modale de contact est également accessible depuis le site.",
    ],
    objectifs: [
      "Créer un thème WordPress personnalisé et intégrer les maquettes desktop et mobile.",
      "Structurer les photos avec un type de contenu personnalisé, des taxonomies et des champs dédiés.",
      "Créer des pages détaillées pour les photos, avec navigation entre les contenus et affichage de photos apparentées.",
      "Développer une galerie avec filtres, tri et pagination infinie grâce à Ajax et aux requêtes WordPress.",
      "Ajouter une lightbox navigable et une modale de contact avec la référence de la photo préremplie.",
      "Optimiser les images et limiter les appels à l’API WordPress pour réduire les chargements inutiles.",
    ],
    resultat: "Le site présente une galerie de photos responsive, avec des filtres et un tri dynamiques, un chargement progressif des résultats et une lightbox permettant de parcourir les photos. Le thème personnalisé et les contenus sont gérés dans WordPress, et les images sont optimisées pour améliorer les temps de chargement.",
  },

  en: {
    title: "Nathalie Mota – Photography Portfolio",
    category: "WordPress Development",
    description: "Built a custom WordPress website for a professional photographer, featuring a filterable photo gallery, progressive loading, individual photo pages, and lightbox navigation. The theme follows the desktop and mobile designs, with optimized images and Ajax requests made when needed.",
    apercu: [
      "For this project, I built a new website for Nathalie Mota, an event photographer. The site uses a custom WordPress theme based on the supplied mockups and adapts to desktop and mobile screens.",
      "Photos are managed in WordPress as a dedicated content type. The gallery lets visitors filter and sort photos, load more results progressively, and view images in a lightbox. A contact modal is also available throughout the site.",
    ],
    objectifs: [
      "Build a custom WordPress theme and implement the desktop and mobile designs.",
      "Organize photos with a custom post type, taxonomies, and dedicated fields.",
      "Create detailed photo pages with navigation between items and related photo suggestions.",
      "Build a gallery with filters, sorting, and infinite loading using Ajax and WordPress queries.",
      "Add a navigable lightbox and a contact modal with the photo reference filled in automatically.",
      "Optimize images and limit WordPress API requests to reduce unnecessary loading.",
    ],
    resultat: "The website features a responsive photo gallery with dynamic filters and sorting, progressive result loading, and a lightbox for browsing photos. The custom theme and photo content are managed in WordPress, and the images are optimized to improve loading times.",
  },
};
const TECHS = ["WordPress", "PHP", "JavaScript", "jQuery", "Ajax", "HTML5", "CSS3"];
const THUMBNAIL = "/assets/img/NM1.png";
const GALLERY = ["/assets/img/NM1.png", "/assets/img/NM2.png", "/assets/img/NM3.png", "/assets/img/NM4.png"];
const DEMO_URL = "#";
const CODE_URL = "https://github.com/Neda789/Nathalie-Mota.git";
const CATEGORY_SLUG = "wordpress-development";

const PREV_PATH = "/projekti/09";
const PREV_NUM = "09";
const NEXT_PATH = "/projekti/11";
const NEXT_NUM = "11";

// Resume utilise par les cartes (page "Projets" et projets en vedette sur
// l'accueil) — voir src/components/ProjectCard.jsx.
export const card = {
  id: "10",
  number: "10",
  path: "/projekti/10",
  thumbnail: THUMBNAIL,
  categorySlug: CATEGORY_SLUG,
  title: { fr: CONTENT.fr.title, en: CONTENT.en.title },
  category: { fr: CONTENT.fr.category, en: CONTENT.en.category },
  description: { fr: CONTENT.fr.description, en: CONTENT.en.description },
  codeUrl: CODE_URL,
};

export default function Project10() {
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
