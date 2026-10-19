import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";

// "card" vient du fichier de page du projet lui-meme
// (export const card = {...} dans src/pages/projects/ProjectXX.jsx).
export default function ProjectCard({ card, delay = 0 }) {
  const { t, lang } = useLanguage();
  const title = card.title[lang];

  return (
    <Reveal as="article" className="project-card" delay={delay} data-category={card.categorySlug}>
      <div className="project-media">
        <span className="project-number">{card.number}</span>
        <img src={card.thumbnail} alt={title} loading="lazy" />
      </div>
      <div className="project-body">
        <div className="project-tags">
          <span>{card.category[lang]}</span>
        </div>
        <h3>{title}</h3>
        <p>{card.description[lang]}</p>
        <div className="project-links">
          <Link to={card.path}>{t("projectCard.viewDemo")}</Link>
          <a href={card.codeUrl}>{t("projectCard.sourceCode")}</a>
        </div>
      </div>
    </Reveal>
  );
}