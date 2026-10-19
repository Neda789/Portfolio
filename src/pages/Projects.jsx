import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import useDocumentHead from "../hooks/useDocumentHead";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import { useLanguage } from "../i18n/LanguageContext";

import { card as card01 } from "./projects/Project01";
import { card as card02 } from "./projects/Project02";
import { card as card03 } from "./projects/Project03";
import { card as card04 } from "./projects/Project04";
import { card as card05 } from "./projects/Project05";
import { card as card06 } from "./projects/Project06";
import { card as card07 } from "./projects/Project07";
import { card as card08 } from "./projects/Project08";
import { card as card09 } from "./projects/Project09";
import { card as card10 } from "./projects/Project10";
import { card as card11 } from "./projects/Project11";
import { card as card12 } from "./projects/Project12";

// Tous les projets, un par fichier (src/pages/projects/ProjectXX.jsx) —
// pas de fichier "data" central.
const ALL_PROJECTS = [
  card01, card02, card03, card04, card05, card06,
  card07, card08, card09, card10, card11, card12,
];

export default function Projects() {
  const { t, lang } = useLanguage();

  useDocumentHead(t("projects.metaTitle"), t("projects.metaDescription"));

  const [filter, setFilter] = useState("all");

  // Liste des categories (slug + libelle traduit) deduite directement
  // des cartes des projets, sans table de correspondance separee.
  const categoryFilters = useMemo(() => {
    const seen = new Map();
    ALL_PROJECTS.forEach((p) => {
      if (!seen.has(p.categorySlug)) seen.set(p.categorySlug, p.category);
    });
    return Array.from(seen.entries()).map(([slug, category]) => ({ slug, category }));
  }, []);

  const visible = filter === "all" ? ALL_PROJECTS : ALL_PROJECTS.filter((p) => p.categorySlug === filter);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal as="p" className="breadcrumb">
            <Link to="/">{t("nav.accueil")}</Link> / <span>{t("nav.projects")}</span>
          </Reveal>
          <Reveal as="span" className="kicker" delay={1} style={{ justifyContent: "center" }}>
            {t("projects.kicker")}
          </Reveal>
          <Reveal as="h1" delay={2}>
            {t("projects.titleBefore")} <span className="gradient-text">{t("projects.titleGradient")}</span> {t("projects.titleAfter")}
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal className="filter-bar">
            <button
              className={`filter-btn${filter === "all" ? " active" : ""}`}
              onClick={() => setFilter("all")}
            >
              {t("common.allProjects")}
            </button>
            {categoryFilters.map((c) => (
              <button
                key={c.slug}
                className={`filter-btn${filter === c.slug ? " active" : ""}`}
                onClick={() => setFilter(c.slug)}
              >
                {c.category[lang]}
              </button>
            ))}
          </Reveal>

          <div className="projects-grid">
            {visible.map((p, i) => (
              <ProjectCard key={p.id} card={p} delay={(i % 4) + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <Reveal className="cta-banner">
            <span className="badge-soft">{t("projects.ctaBadge")}</span>
            <h2 className="mt-lg">{t("projects.ctaTitle")}</h2>
            
            <Link to="/kontakt" className="btn btn-primary">{t("common.discussProject")}</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
