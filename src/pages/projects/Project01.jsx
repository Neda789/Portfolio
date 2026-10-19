import { Link } from "react-router-dom";
import useDocumentHead from "../../hooks/useDocumentHead";
import Reveal from "../../components/Reveal";
import ProjectGallery from "../../components/ProjectGallery";
import { useLanguage } from "../../i18n/LanguageContext";

// ==========================================================================
// PROJET "01" — modifie tout ce qui suit pour changer le contenu.
// Chaque projet est un fichier independant : titre, categorie, images,
// textes et liens sont tous ecrits directement ici (pas de fichier "data").
// ==========================================================================

const CONTENT = {
  fr: {
    title: "NewsFoundry – Revue de Presse Assistée par IA",
    category: "Développement Full-Stack & Intelligence Artificielle",
    description: "Développement d’un outil de revue de presse assisté par IA avec Next.js et Python. L’application récupère l’actualité, permet d’explorer des articles avec un agent conversationnel et génère des synthèses sauvegardées pour chaque utilisateur.",
    apercu: [
      "Pour NewsFoundry, une startup qui développe des outils pour les médias, j’ai conçu une première version d’une application de revue de presse automatisée. Le projet associe une interface Next.js à un backend Python connecté à une base de données et à une API d’actualités.",
      "Les utilisateurs peuvent se connecter, consulter leurs discussions, demander à un agent IA de rechercher des articles supplémentaires et générer une revue de presse à partir de l’historique de leur conversation. Les discussions et les revues générées sont sauvegardées et accessibles à leur propriétaire.",
    ],
    objectifs: [
      "Développer l’interface de l’application avec Next.js et le backend avec Python.",
      "Mettre en place l’authentification par token et protéger les discussions de chaque utilisateur.",
      "Créer un chat avec historique sauvegardé et réponses générées par un modèle de langage via PydanticAI.",
      "Intégrer World News API pour récupérer les dernières actualités et rechercher des articles sur un sujet.",
      "Générer des revues de presse structurées à partir des discussions et les sauvegarder en base de données.",
      "Ajouter des tests pour les fonctionnalités du chat et les autorisations, ainsi qu’un workflow de tests en intégration continue.",
      "Déployer le frontend sur Vercel et le backend avec sa base de données sur Railway.",
    ],
    resultat: "L’application permet de consulter les actualités, d’affiner une recherche avec un agent conversationnel et de générer des revues de presse conservées en base de données. Les discussions restent privées à chaque utilisateur, et le frontend ainsi que le backend sont déployés séparément.",
  },

  en: {
    title: "NewsFoundry – AI-Powered Press Review",
    category: "Full-Stack Development & Artificial Intelligence",
    description: "Built an AI-powered press review tool with Next.js and Python. The application retrieves current news, lets users explore articles with a conversational agent, and generates summaries saved for each user.",
    apercu: [
      "For NewsFoundry, a startup building tools for media professionals, I developed the first version of an automated press review application. The project combines a Next.js interface with a Python backend connected to a database and a news API.",
      "Users can sign in, view their conversations, ask an AI agent to find additional articles, and generate a press review from their chat history. Conversations and generated reviews are saved and remain accessible to their owner.",
    ],
    objectifs: [
      "Build the application interface with Next.js and the backend with Python.",
      "Implement token-based authentication and protect each user’s conversations.",
      "Create a chat with saved history and language-model responses powered by PydanticAI.",
      "Integrate World News API to retrieve the latest news and search for articles on a topic.",
      "Generate structured press reviews from conversations and save them to the database.",
      "Add tests for chat features and access permissions, plus a continuous integration test workflow.",
      "Deploy the frontend to Vercel and the backend with its database to Railway.",
    ],
    resultat: "The application lets users browse current news, refine searches with a conversational agent, and generate press reviews saved to the database. Conversations remain private to each user, and the frontend and backend are deployed separately.",
  },
};

const TECHS = ["Next.js", "React", "Python", "PydanticAI", "SQLModel", "World News API", "JWT", "Pytest"];
const THUMBNAIL = "/assets/img/NF1.png";
const GALLERY = ["/assets/img/NF1.png", "/assets/img/NF2.png", "/assets/img/NF3.png", "/assets/img/NF4.png"];

const CODE_URL = "https://github.com/Neda789/NewsFoundry.git";
const CATEGORY_SLUG = "machine-learning";

const PREV_PATH = "/projekti/12";
const PREV_NUM = "12";
const NEXT_PATH = "/projekti/02";
const NEXT_NUM = "02";

// Resume utilise par les cartes (page "Projets" et projets en vedette sur
// l'accueil) — voir src/components/ProjectCard.jsx.
export const card = {
  id: "01",
  number: "01",
  path: "/projekti/01",
  thumbnail: THUMBNAIL,
  categorySlug: CATEGORY_SLUG,
  title: { fr: CONTENT.fr.title, en: CONTENT.en.title },
  category: { fr: CONTENT.fr.category, en: CONTENT.en.category },
  description: { fr: CONTENT.fr.description, en: CONTENT.en.description },
  codeUrl: CODE_URL,
};

export default function Project01() {
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
