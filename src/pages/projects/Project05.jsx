import { Link } from "react-router-dom";
import useDocumentHead from "../../hooks/useDocumentHead";
import Reveal from "../../components/Reveal";
import ProjectGallery from "../../components/ProjectGallery";
import { useLanguage } from "../../i18n/LanguageContext";

// ==========================================================================
// PROJET "05" — modifie tout ce qui suit pour changer le contenu.
// Chaque projet est un fichier independant : titre, categorie, images,
// textes et liens sont tous ecrits directement ici (pas de fichier "data").
// ==========================================================================

const CONTENT = {
  fr: {
    title: "FishEye – Plateforme photographes",
    category: "Développement Web",
    description: "Prototype fonctionnel d'un site vitrine pour photographes indépendants, développé en React et Next.js dans le cadre d'une mission de conseil.",
    apercu: [
      "En tant que développeur front-end junior au sein d'une agence de conseil, j'ai été chargé de concevoir le prototype du nouveau site de FishEye, une plateforme permettant à des photographes indépendants de présenter leurs meilleurs travaux. À partir des maquettes fournies par le designer UI et des notes de réunion transmises par la cheffe de projet, j'ai développé l'intégralité du HTML, CSS et JavaScript nécessaires, avant intégration avec le back-end existant du client."
    ],
    objectifs: [
      "Développer une interface fidèle aux maquettes avec React et Next.js, alimentée par une base de données SQLite.",
      "Garantir une accessibilité complète : navigation au clavier, balises ARIA, textes alternatifs, conformité au test AChecker.",
      "Implémenter les interactions clés : galerie du photographe, tri des médias, lightbox, système de likes et formulaire de contact."
    ],
    resultat: "Le prototype livré a validé l'ensemble des exigences fonctionnelles et d'accessibilité du cahier des charges, permettant à l'équipe de présenter une démonstration convaincante au client FishEye.",
  },
  en: {
    title: "FishEye – Photographer Platform",
    category: "Web Development",
    description: "Functional prototype of a showcase website for independent photographers, built with React and Next.js as part of a consulting mission.",
    apercu: [
      "As a junior front-end developer at a consulting agency, I was tasked with building the prototype of FishEye's new website, a platform allowing independent photographers to showcase their best work. Based on mockups provided by the UI designer and meeting notes from the project manager, I developed the full HTML, CSS and JavaScript needed, ahead of integration with the client's existing back-end."
    ],
    objectifs: [
      "Build an interface matching the mockups using React and Next.js, backed by an SQLite database.",
      "Ensure full accessibility: keyboard navigation, ARIA tags, alt text, AChecker compliance.",
      "Implement key interactions: photographer gallery, media sorting, lightbox, like system, and contact form."
    ],
    resultat: "The delivered prototype met all functional and accessibility requirements from the brief, enabling the team to present a convincing demo to the FishEye client.",
  },
};

const TECHS = ["React", "Next.js", "SQLite", "JavaScript"];
const THUMBNAIL = "/assets/img/FE1.png";
const GALLERY = ["/assets/img/FE1.png", "/assets/img/FE2.png", "/assets/img/FE3.png", "/assets/img/FE4.png", "/assets/img/FE5.png"];
const DEMO_URL = "#";
const CODE_URL = "https://github.com/Neda789/fisheye.git";
const CATEGORY_SLUG = "Web-development";

const PREV_PATH = "/projekti/04";
const PREV_NUM = "04";
const NEXT_PATH = "/projekti/06";
const NEXT_NUM = "06";

// Resume utilise par les cartes (page "Projets" et projets en vedette sur
// l'accueil) — voir src/components/ProjectCard.jsx.
export const card = {
  id: "05",
  number: "05",
  path: "/projekti/05",
  thumbnail: THUMBNAIL,
  categorySlug: CATEGORY_SLUG,
  title: { fr: CONTENT.fr.title, en: CONTENT.en.title },
  category: { fr: CONTENT.fr.category, en: CONTENT.en.category },
  description: { fr: CONTENT.fr.description, en: CONTENT.en.description },
  codeUrl: CODE_URL,
};

export default function Project05() {
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
