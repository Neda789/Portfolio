import { Link } from "react-router-dom";
import useDocumentHead from "../../hooks/useDocumentHead";
import Reveal from "../../components/Reveal";
import ProjectGallery from "../../components/ProjectGallery";
import { useLanguage } from "../../i18n/LanguageContext";

// ==========================================================================
// PROJET "11" — modifie tout ce qui suit pour changer le contenu.
// Chaque projet est un fichier independant : titre, categorie, images,
// textes et liens sont tous ecrits directement ici (pas de fichier "data").
// ==========================================================================

const CONTENT = {
  fr: {
    title: "Koukaki – Site du Studio d’Animation",
    category: "Intégration WordPress",
    description: "Dynamisation du site du studio d’animation Koukaki à partir d’un thème enfant WordPress : animations au scroll, fleurs en rotation, hero avec vidéo en arrière-plan, carrousel de personnages et menu burger animé.",
    apercu: [
      "Dans le cadre d’une mission pour l’agence MyCustomiWP, j’ai animé le site du studio Koukaki en travaillant directement sur son thème enfant WordPress. L’intégration suit les maquettes et le prototype fournis par l’équipe.",
      "Les animations accompagnent la navigation sur la page : apparition progressive des sections et de leurs titres, vidéo dans le hero, carrousel des personnages et mouvement des nuages au scroll. Une section dédiée à la nomination aux Oscars et un menu burger animé complètent l’expérience.",
    ],
    objectifs: [
      "Développer les modifications dans un thème enfant WordPress, sans utiliser de page builder.",
      "Structurer les styles avec Sass et intégrer les scripts selon les bonnes pratiques de WordPress.",
      "Animer l’apparition des sections et des titres au chargement et au défilement de la page.",
      "Créer un hero avec une vidéo en arrière-plan, une image de fallback et un effet de parallaxe.",
      "Transformer la section des personnages en carrousel Swiper avec un effet Cover Flow.",
      "Animer les nuages dans la section Lieu et les fleurs en rotation avec CSS.",
      "Ajouter une section sur la nomination aux Oscars et remplacer le menu d’origine par un menu burger animé.",
    ],
    resultat: "Le site du studio Koukaki présente des animations cohérentes sur ses différentes sections, un hero vidéo avec image de fallback, un carrousel interactif et un menu burger en plein écran. Les animations sont également adaptées à l’affichage mobile.",
  },

  en: {
    title: "Koukaki – Animation Studio Website",
    category: "WordPress Integration",
    description: "Animated the Koukaki animation studio website using a custom WordPress child theme: scroll effects, rotating flowers, a video background hero, a character carousel, and an animated burger menu.",
    apercu: [
      "As part of a project for MyCustomiWP, I animated the Koukaki studio website by working directly on its WordPress child theme. The implementation follows the mockups and prototype provided by the team.",
      "The animations guide visitors through the page, with sections and headings appearing as they scroll, a video hero, a character carousel, and moving clouds. An Oscars nomination section and an animated burger menu complete the experience.",
    ],
    objectifs: [
      "Build the changes in a WordPress child theme without using a page builder.",
      "Organize styles with Sass and add scripts according to WordPress best practices.",
      "Animate sections and headings as the page loads and as visitors scroll.",
      "Create a hero with a background video, a fallback image, and a parallax effect.",
      "Turn the character section into a Swiper carousel with a Cover Flow effect.",
      "Animate the clouds in the Location section and rotate the flowers with CSS.",
      "Add an Oscars nomination section and replace the original navigation with an animated burger menu.",
    ],
    resultat: "The Koukaki studio website features coordinated animations across its sections, a video hero with a fallback image, an interactive carousel, and a full-screen burger menu. The animations are adapted for mobile screens as well.",
  },
};

const TECHS = ["WordPress", "PHP", "JavaScript", "Sass", "CSS3", "Swiper.js"];
const THUMBNAIL = "/assets/img/KK1.png";
const GALLERY = ["/assets/img/KK1.png", "/assets/img/KK2.png", "/assets/img/KK3.png", "/assets/img/KK4.png"];
const DEMO_URL = "#";
const CODE_URL = "https://github.com/Neda789/Koukaki.git";
const CATEGORY_SLUG = "wordpress-development";

const PREV_PATH = "/projekti/10";
const PREV_NUM = "10";
const NEXT_PATH = "/projekti/12";
const NEXT_NUM = "12";

// Resume utilise par les cartes (page "Projets" et projets en vedette sur
// l'accueil) — voir src/components/ProjectCard.jsx.
export const card = {
  id: "11",
  number: "11",
  path: "/projekti/11",
  thumbnail: THUMBNAIL,
  categorySlug: CATEGORY_SLUG,
  title: { fr: CONTENT.fr.title, en: CONTENT.en.title },
  category: { fr: CONTENT.fr.category, en: CONTENT.en.category },
  description: { fr: CONTENT.fr.description, en: CONTENT.en.description },
  codeUrl: CODE_URL,
};

export default function Project11() {
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
