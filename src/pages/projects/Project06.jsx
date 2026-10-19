import { Link } from "react-router-dom";
import useDocumentHead from "../../hooks/useDocumentHead";
import Reveal from "../../components/Reveal";
import ProjectGallery from "../../components/ProjectGallery";
import { useLanguage } from "../../i18n/LanguageContext";

// ==========================================================================
// PROJET "06" — modifie tout ce qui suit pour changer le contenu.
// Chaque projet est un fichier independant : titre, categorie, images,
// textes et liens sont tous ecrits directement ici (pas de fichier "data").
// ==========================================================================

const CONTENT = {
   fr: {
    title: "DATAImmo – Base de données immobilière",
    category: "Data Engineering",
    description: "Modernisation d'une base de données immobilière et foncière pour Laplace Immo : conception d'un schéma relationnel normalisé et déploiement sur Databricks.",
    apercu: ["Refonte du schéma relationnel existant pour intégrer de nouvelles sources de données (recensement INSEE, référentiel géographique des régions et communes) aux données de transactions DVF, avec un modèle normalisé en 3NF.", "Nettoyage et mise en conformité RGPD des fichiers sources (suppression des données d'identification), puis migration de l'ensemble vers Databricks pour la création des tables Delta et l'exécution des requêtes d'analyse."],
    objectifs: ["Concevoir un dictionnaire de données et un schéma relationnel normalisé (3NF) intégrant les données région et population.", "Garantir la conformité RGPD des données avant leur import.", "Déployer et peupler la base sur Databricks, puis valider son intégrité via des requêtes SQL."],
    resultat: "Base de données opérationnelle et hébergée sur Databricks, avec des tables Delta vérifiées (intégrité des clés, cohérence du nombre de lignes) et un jeu de requêtes SQL prêtes à l'emploi pour l'analyse du marché immobilier.",
  },
  en: {
    title: "DATAImmo – Real Estate Database",
    category: "Data Engineering",
    description: "Modernization of a real estate and land transaction database for Laplace Immo: designing a normalized relational schema and deploying it on Databricks.",
    apercu: ["Redesigned the existing relational schema to integrate new data sources (INSEE census data, geographic reference data for regions and municipalities) with DVF transaction data, using a schema normalized to 3NF.", "Cleaned and brought source files into GDPR compliance (removing identifying data), then migrated everything to Databricks to create Delta tables and run analytical queries."],
    objectifs: ["Design a data dictionary and a normalized (3NF) relational schema incorporating region and population data.", "Ensure GDPR compliance of the data before import.", "Deploy and populate the database on Databricks, then validate its integrity through SQL queries."],
    resultat: "A fully operational database hosted on Databricks, with verified Delta tables (key integrity, matching row counts) and a set of ready-to-use SQL queries for real estate market analysis.",
  },
};

const TECHS = ["Databricks", "SQL", "SQLite", "Delta Lake"];
const THUMBNAIL = "/assets/img/SQ1.png";
const GALLERY = ["/assets/img/SQ1.png", "/assets/img/SQ2.png", "/assets/img/SQ3.png", "/assets/img/SQ4.png"];
const DEMO_URL = "#";
const CODE_URL = "#";
const CATEGORY_SLUG = "data-engineering";

const PREV_PATH = "/projekti/05";
const PREV_NUM = "05";
const NEXT_PATH = "/projekti/07";
const NEXT_NUM = "07";

// Resume utilise par les cartes (page "Projets" et projets en vedette sur
// l'accueil) — voir src/components/ProjectCard.jsx.
export const card = {
  id: "06",
  number: "06",
  path: "/projekti/06",
  thumbnail: THUMBNAIL,
  categorySlug: CATEGORY_SLUG,
  title: { fr: CONTENT.fr.title, en: CONTENT.en.title },
  category: { fr: CONTENT.fr.category, en: CONTENT.en.category },
  description: { fr: CONTENT.fr.description, en: CONTENT.en.description },
  codeUrl: CODE_URL,
};

export default function Project06() {
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
