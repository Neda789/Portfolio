import { Link } from "react-router-dom";
import useDocumentHead from "../../hooks/useDocumentHead";
import Reveal from "../../components/Reveal";
import ProjectGallery from "../../components/ProjectGallery";
import { useLanguage } from "../../i18n/LanguageContext";

// ==========================================================================
// PROJET "04" — modifie tout ce qui suit pour changer le contenu.
// Chaque projet est un fichier independant : titre, categorie, images,
// textes et liens sont tous ecrits directement ici (pas de fichier "data").
// ==========================================================================

const CONTENT = {
   fr: {
    title: "Identifier les causes d'attrition en entreprise",
    category: "Machine Learning",
    description: "Analyse des causes de démission au sein d'une ESN à partir de données RH, et construction d'un modèle de classification interprétable pour en dégager les facteurs clés.",
    apercu: ["Trois sources de données RH (SIRH, évaluations de performance, sondage de satisfaction) ont été rapprochées en un jeu de données unique pour comparer les employés ayant quitté l'entreprise à ceux restés en poste.", "Une analyse exploratoire a permis de faire émerger des différences significatives entre les deux populations, avant la mise en place d'un pipeline de modélisation supervisée."],
    objectifs: ["Rapprocher et nettoyer trois jeux de données hétérogènes issus de systèmes RH différents.", "Entraîner un modèle de classification robuste malgré le déséquilibre des classes.", "Identifier les causes racines de démission via une interprétation globale et locale du modèle (SHAP)."],
    resultat: "Le modèle final, optimisé et interprété avec le package SHAP, met en évidence les leviers RH les plus déterminants dans la décision de départ des employés et atteint un rappel de [XX]% sur la classe des démissionnaires en jeu de test.",
  },
  en: {
    title: "Identifying Causes of Employee Attrition",
    category: "Machine Learning",
    description: "Analysis of resignation drivers at a digital consulting firm using HR data, with an interpretable classification model built to surface the key underlying factors.",
    apercu: ["Three HR data sources (HRIS, performance reviews, satisfaction survey) were merged into a single dataset to compare employees who left the company with those who stayed.", "Exploratory analysis surfaced meaningful differences between the two populations, ahead of building a supervised modeling pipeline."],
    objectifs: ["Merge and clean three heterogeneous datasets from different HR systems.", "Train a robust classification model despite significant class imbalance.", "Identify root causes of attrition through global and local model interpretation (SHAP)."],
    resultat: "The final, tuned model, interpreted with the SHAP package, highlights the HR levers most predictive of employee departure and reaches a recall of [XX]% on the resigned-employee class on the test set.",
  },
};

const TECHS = ["Python", "Pandas", "scikit-learn", "XGBoost", "SHAP", "imbalanced-learn (SMOTE)", "Matplotlib/Seaborn"];
const THUMBNAIL = "/assets/img/TN1.png";
const GALLERY = ["/assets/img/TN1.png", "/assets/img/TN2.png", "/assets/img/TN3.png", "/assets/img/TN4.png", "/assets/img/TN5.png", "/assets/img/TN6.png"];
const DEMO_URL = "#";
const CODE_URL = "#";
const CATEGORY_SLUG = "nlp";

const PREV_PATH = "/projekti/03";
const PREV_NUM = "03";
const NEXT_PATH = "/projekti/05";
const NEXT_NUM = "05";

// Resume utilise par les cartes (page "Projets" et projets en vedette sur
// l'accueil) — voir src/components/ProjectCard.jsx.
export const card = {
  id: "04",
  number: "04",
  path: "/projekti/04",
  thumbnail: THUMBNAIL,
  categorySlug: CATEGORY_SLUG,
  title: { fr: CONTENT.fr.title, en: CONTENT.en.title },
  category: { fr: CONTENT.fr.category, en: CONTENT.en.category },
  description: { fr: CONTENT.fr.description, en: CONTENT.en.description },
  codeUrl: CODE_URL,
};

export default function Project04() {
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
