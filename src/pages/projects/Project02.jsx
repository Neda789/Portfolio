import { Link } from "react-router-dom";
import useDocumentHead from "../../hooks/useDocumentHead";
import Reveal from "../../components/Reveal";
import ProjectGallery from "../../components/ProjectGallery";
import { useLanguage } from "../../i18n/LanguageContext";

// ==========================================================================
// PROJET "02" — modifie tout ce qui suit pour changer le contenu.
// Chaque projet est un fichier independant : titre, categorie, images,
// textes et liens sont tous ecrits directement ici (pas de fichier "data").
// ==========================================================================

const CONTENT = {
   fr: {
    title: "ZenAssist",
    category: "Machine Learning",
    description: "Application intelligente de tri des réclamations clients, combinant machine learning et intelligence artificielle générative.",
    apercu: ["ZenAssist est une application de gestion des réclamations clients conçue pour automatiser leur classification par catégorie. Le projet s'appuie sur un pipeline de machine learning entraîné sur un large jeu de données de réclamations financières (CFPB), capable d'attribuer automatiquement la catégorie adaptée à chaque nouvelle réclamation. La solution combine un modèle de classification supervisée (TF-IDF et SVM linéaire) exposé via une API FastAPI, ainsi qu'une intégration d'un modèle de langage pour l'aide à la qualification des demandes. L'ensemble est déployé et versionné automatiquement grâce à un pipeline CI/CD sur GitHub Actions, garantissant une mise à jour fiable du modèle en production."],
    objectifs: ["Comparer plusieurs approches de classification (machine learning supervisé et modèle de langage) afin d'identifier la solution la plus pertinente.", "Industrialiser le modèle retenu sous forme d'API réutilisable, avec un pipeline automatisé d'entraînement et de déploiement.", "Intégrer la classification automatique des réclamations dans l'application existante pour fluidifier le traitement des demandes."],
    resultat: ["Le modèle final (SVM linéaire) atteint une précision globale de 84,7 % sur le jeu de test, avec de bonnes performances sur les catégories majoritaires du jeu de données. Le remplacement de l'appel au LLM par une inférence locale via l'API a permis de réduire le temps de réponse et le coût par requête, tout en conservant une qualité de classification comparable. La solution est aujourd'hui intégrée en production et alimente l'attribution automatique des catégories pour chaque nouvelle réclamation reçue."],
  },
  en: {
    title: "ZenAssist",
    category: "Machine Learning",
    description: "Smart customer complaint triage application combining machine learning and generative AI to automatically classify incoming requests.",
    apercu: ["ZenAssist is a customer complaint management application designed to automate their classification by category. The project relies on a machine learning pipeline trained on a large dataset of financial complaints (CFPB), capable of automatically assigning the appropriate category to each new complaint. The solution combines a supervised classification model (TF-IDF and linear SVM) exposed via a FastAPI, along with the integration of a language model to assist with request qualification. The whole system is automatically deployed and versioned through a CI/CD pipeline on GitHub Actions, ensuring reliable model updates in production."],
    objectifs: ["Compare several classification approaches (supervised machine learning and language model) to identify the most relevant solution.", "Industrialize the selected model as a reusable API, with an automated training and deployment pipeline.", "Integrate automatic complaint classification into the existing application to streamline request processing."],
    resultat: ["The final model (linear SVM) achieves an overall accuracy of 84.7% on the test set, with strong performance on the dataset's majority categories. Replacing the LLM call with local inference via the API reduced response time and cost per request, while maintaining comparable classification quality. The solution is now integrated into production and powers the automatic category assignment for every new complaint received."],
  },
};

const TECHS = ["Python", "Scikit-learn", "Pandas", "FastAPI", "Next.js", "React", "Mistral AI", "GitHub Actions"];
const THUMBNAIL = "/assets/img/ZennA1.png";
const GALLERY = ["/assets/img/ZennA1.png", "/assets/img/ZennA2.png", "/assets/img/output.png", "/assets/img/output1.png", "/assets/img/output4.png"];

const CODE_URL = "https://github.com/Neda789/ZenAssist.git";
const CATEGORY_SLUG = "deep-learning";

const PREV_PATH = "/projekti/01";
const PREV_NUM = "01";
const NEXT_PATH = "/projekti/03";
const NEXT_NUM = "03";

// Resume utilise par les cartes (page "Projets" et projets en vedette sur
// l'accueil) — voir src/components/ProjectCard.jsx.
export const card = {
  id: "02",
  number: "02",
  path: "/projekti/02",
  thumbnail: THUMBNAIL,
  categorySlug: CATEGORY_SLUG,
  title: { fr: CONTENT.fr.title, en: CONTENT.en.title },
  category: { fr: CONTENT.fr.category, en: CONTENT.en.category },
  description: { fr: CONTENT.fr.description, en: CONTENT.en.description },
  codeUrl: CODE_URL,
};

export default function Project02() {
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
