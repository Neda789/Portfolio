import { Link } from "react-router-dom";
import useDocumentHead from "../../hooks/useDocumentHead";
import Reveal from "../../components/Reveal";
import ProjectGallery from "../../components/ProjectGallery";
import { useLanguage } from "../../i18n/LanguageContext";

// ==========================================================================
// PROJET "03" — modifie tout ce qui suit pour changer le contenu.
// Chaque projet est un fichier independant : titre, categorie, images,
// textes et liens sont tous ecrits directement ici (pas de fichier "data").
// ==========================================================================

const CONTENT = {
  fr: {
    title: "Abricot — SaaS de Gestion de Projet IA",
    category: ["Développement Front-End & Intégration IA"],
    description: "Interface front-end complète pour une plateforme SaaS de gestion de projet collaboratif, avec génération automatique de tâches par IA (RAG).",
    apercu: ["Développement de l'intégralité de l'interface front-end avec Next.js à partir de maquettes Figma, connectée à une API back-end existante (authentification, projets, tâches, contributeurs).", "Conception et implémentation d'une fonctionnalité de génération automatique de tâches via un LLM (Mistral), avec une architecture RAG s'appuyant sur les tâches existantes du projet pour produire des suggestions pertinentes et contextualisées."],
    objectifs: ["Développer une interface accessible (WCAG AA), responsive et fidèle aux maquettes fournies.", "Mettre en place une authentification sécurisée avec gestion fine des droits d'accès par rôle (administrateur / contributeur).", "Intégrer un pipeline de RAG côté serveur pour générer des tâches pertinentes à partir du contexte projet, en sécurisant les appels à l'API du LLM."],
    resultat: "Application fonctionnelle couvrant l'ensemble du parcours utilisateur (authentification, création/édition de projets et de tâches, tableaux de bord) ainsi qu'une fonctionnalité IA opérationnelle générant des tâches cohérentes avec le contexte existant du projet.",
  },
  en: {
    title: "Abricot — AI-Powered Project Management SaaS",
    category: ["Front-End Development & AI Integration"],
    description: "Full front-end interface for a collaborative project management SaaS platform, featuring AI-powered automatic task generation (RAG).",
    apercu: ["Built the entire front-end interface with Next.js from Figma mockups, connected to an existing back-end API (authentication, projects, tasks, contributors).", "Designed and implemented an automatic task generation feature powered by an LLM (Mistral), using a RAG architecture that leverages the project's existing tasks to produce relevant, context-aware suggestions."],
    objectifs: ["Build an accessible (WCAG AA), responsive interface faithful to the provided mockups.", "Implement secure authentication with fine-grained role-based access control (admin / contributor).", "Integrate a server-side RAG pipeline to generate relevant tasks from project context, securing all calls to the LLM API."],
    resultat: "A fully functional application covering the entire user journey (authentication, project and task creation/editing, dashboards) along with a working AI feature that generates tasks consistent with the project's existing context.",
  },
};

const TECHS = ["Next.js", "TypeScript", "LlamaIndex.TS", "Mistral AI", "RAG", "Prisma", "REST API", "Tailwind CSS"];
const THUMBNAIL = "/assets/img/Abricot1.png";
const GALLERY = ["/assets/img/Abricot1.png", "/assets/img/Abricot2.png", "/assets/img/Abricot3.png", "/assets/img/Abricot4.png"];

const CODE_URL = "https://github.com/Neda789/Abricot.co.git";
const CATEGORY_SLUG = "front-end-development";

const PREV_PATH = "/projekti/02";
const PREV_NUM = "02";
const NEXT_PATH = "/projekti/04";
const NEXT_NUM = "04";

// Resume utilise par les cartes (page "Projets" et projets en vedette sur
// l'accueil) — voir src/components/ProjectCard.jsx.
export const card = {
  id: "03",
  number: "03",
  path: "/projekti/03",
  thumbnail: THUMBNAIL,
  categorySlug: CATEGORY_SLUG,
  title: { fr: CONTENT.fr.title, en: CONTENT.en.title },
  category: { fr: CONTENT.fr.category, en: CONTENT.en.category },
  description: { fr: CONTENT.fr.description, en: CONTENT.en.description },
  codeUrl: CODE_URL,
};

export default function Project03() {
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
