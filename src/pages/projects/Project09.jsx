import { Link } from "react-router-dom";
import useDocumentHead from "../../hooks/useDocumentHead";
import Reveal from "../../components/Reveal";
import ProjectGallery from "../../components/ProjectGallery";
import { useLanguage } from "../../i18n/LanguageContext";

// ==========================================================================
// PROJET "09" — modifie tout ce qui suit pour changer le contenu.
// Chaque projet est un fichier independant : titre, categorie, images,
// textes et liens sont tous ecrits directement ici (pas de fichier "data").
// ==========================================================================

const CONTENT = {
  fr: {
    title: "Les Petits Plats – Site de Recettes",
    category: "Développement Front-End React",
    description: "Création d’un site de recettes permettant de parcourir 50 recettes, de les filtrer par tags et de les rechercher selon leurs ingrédients ou leur description. Le projet comprend aussi des pages dédiées à chaque recette et une gestion des recherches sans accents ni distinction entre majuscules et minuscules.",
    apercu: [
      "Dans le cadre d’une mission pour l’entreprise Les Petits Plats, j’ai développé une application de recettes à partir de maquettes Figma et d’un jeu de données contenant 50 recettes.",
      "L’objectif était de proposer une expérience de recherche simple et rapide : les utilisateurs peuvent explorer les recettes, combiner plusieurs tags et rechercher un plat à partir de son nom, de ses ingrédients ou de sa description. Chaque recette dispose également de sa propre page.",
    ],
    objectifs: [
      "Intégrer l’interface du site à partir des maquettes Figma et créer des composants réutilisables.",
      "Afficher les 50 recettes et leurs informations à partir des données fournies.",
      "Créer une page dédiée à chaque recette, accessible depuis une URL dynamique.",
      "Permettre le filtrage des recettes par tags et mettre à jour les tags disponibles selon les résultats.",
      "Développer une recherche textuelle qui prend en compte le nom, les ingrédients et la description, à partir de trois caractères.",
      "Gérer les majuscules, les minuscules et les accents dans les termes de recherche, ainsi que les recettes introuvables.",
    ],
    resultat: "Le site permet de parcourir les 50 recettes, de les filtrer avec des tags et d’effectuer une recherche textuelle adaptée aux critères du projet. Chaque recette possède une page dédiée, et une page 404 s’affiche lorsqu’une recette demandée n’existe pas.",
  },

  en: {
    title: "Les Petits Plats – Recipe Website",
    category: "React Front-End Development",
    description: "Built a recipe website where users can browse 50 recipes, filter them by tags, and search by ingredients or description. The project also includes a dedicated page for each recipe and search handling that ignores accents and letter case.",
    apercu: [
      "As part of a project for Les Petits Plats, I built a recipe website based on Figma mockups and a dataset containing 50 recipes.",
      "The goal was to make recipe discovery simple and fast: users can browse recipes, combine multiple tags, and search by recipe name, ingredients, or description. Each recipe also has its own page.",
    ],
    objectifs: [
      "Build the website interface from the Figma mockups using reusable components.",
      "Display the 50 recipes and their details from the provided data.",
      "Create a dedicated page for each recipe, accessible through a dynamic URL.",
      "Filter recipes by tags and update the available tags based on the results.",
      "Build a text search across recipe names, ingredients, and descriptions, starting at three characters.",
      "Handle uppercase and lowercase letters, accents, and requests for recipes that do not exist.",
    ],
    resultat: "The website lets users browse all 50 recipes, filter them with tags, and search according to the project criteria. Each recipe has its own page, and a 404 page is shown when the requested recipe cannot be found.",
  },
};

const TECHS = ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Figma"];
const THUMBNAIL = "/assets/img/Food1.png";
const GALLERY = ["/assets/img/Food1.png", "/assets/img/Food2.png", "/assets/img/Food3.png", "/assets/img/Food4.png"];
const DEMO_URL = "#";
const CODE_URL = "https://github.com/Neda789/LesPetitsPlats.git";
const CATEGORY_SLUG = "front-end-development";

const PREV_PATH = "/projekti/08";
const PREV_NUM = "08";
const NEXT_PATH = "/projekti/10";
const NEXT_NUM = "10";

// Resume utilise par les cartes (page "Projets" et projets en vedette sur
// l'accueil) — voir src/components/ProjectCard.jsx.
export const card = {
  id: "09",
  number: "09",
  path: "/projekti/09",
  thumbnail: THUMBNAIL,
  categorySlug: CATEGORY_SLUG,
  title: { fr: CONTENT.fr.title, en: CONTENT.en.title },
  category: { fr: CONTENT.fr.category, en: CONTENT.en.category },
  description: { fr: CONTENT.fr.description, en: CONTENT.en.description },
  codeUrl: CODE_URL,
};

export default function Project09() {
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
