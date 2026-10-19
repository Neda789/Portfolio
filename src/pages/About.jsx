import { Link } from "react-router-dom";
import useDocumentHead from "../hooks/useDocumentHead";
import Reveal from "../components/Reveal";
import AnimatedCounter from "../components/AnimatedCounter";
import SkillBar from "../components/SkillBar";
import { useLanguage } from "../i18n/LanguageContext";

const TAGS = ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "LangChain", "OpenCV", "Docker", "Kubernetes", "SQL / NoSQL", "Git", "FastAPI", "React"];

export default function About() {
  const { t } = useLanguage();

  useDocumentHead(t("about.metaTitle"), t("about.metaDescription"));

  const SKILLS = [
    { label: t("about.skill1"), value: 95 },
    { label: t("about.skill2"), value: 90 },
    { label: t("about.skill3"), value: 88 },
    { label: t("about.skill4"), value: 85 },
    { label: t("about.skill5"), value: 80 },
    { label: t("about.skill6"), value: 78 },
  ];

  const TIMELINE = [
    { period: t("about.t1period"), title: t("about.t1title"), text: t("about.t1text") },
    { period: t("about.t2period"), title: t("about.t2title"), text: t("about.t2text") },
    { period: t("about.t3period"), title: t("about.t3title"), text: t("about.t3text") },
    { period: t("about.t4period"), title: t("about.t4title"), text: t("about.t4text") },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal as="p" className="breadcrumb">
            <Link to="/">{t("nav.accueil")}</Link> / <span>{t("nav.about")}</span>
          </Reveal>
          <Reveal as="span" className="kicker" delay={1} style={{ justifyContent: "center" }}>
            {t("about.kicker")}
          </Reveal>
          <Reveal as="h1" delay={2}>
            {t("about.titleBefore")} <span className="gradient-text">{t("about.titleGradient")}</span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <Reveal className="about-photo-wrap">
            <div className="about-photo-frame"></div>
            <img src="/assets/img/IA.webp" alt={t("about.photoAlt")} />
          </Reveal>
          <div className="about-text">
            <Reveal as="span" className="kicker">{t("about.bioKicker")}</Reveal>
            <Reveal as="h2" className="section-title" delay={1}>
              {t("about.bioTitle")}
            </Reveal>
            <Reveal as="p" delay={2}>
              {t("about.bioP1")}
            </Reveal>
            <Reveal as="p" delay={3}>
              {t("about.bioP2")}
            </Reveal>
            <Reveal as="p" delay={4}>
              {t("about.bioP3")}
            </Reveal>
            <Reveal as="p" className="about-signature" delay={4}>Neda Stanisic</Reveal>
          </div>
        </div>

        <div className="container">
          <div className="stat-row">
            <Reveal as="div" className="glass-card stat-card">
              <strong><AnimatedCounter value={12} suffix="+" /></strong>
              <p>{t("about.statProjects")}</p>
            </Reveal>
            
      
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="kicker">{t("about.skillsKicker")}</span>
            <h2 className="section-title">{t("about.skillsTitle")}</h2>
            <p className="section-lead">{t("about.skillsLead")}</p>
          </Reveal>

          <div className="skills-grid">
            {SKILLS.map((s) => (
              <SkillBar key={s.label} label={s.label} value={s.value} />
            ))}
          </div>

          <Reveal className="tag-cloud mt-lg">
            {TAGS.map((tag) => (
              <span className="tag-pill" key={tag}>{tag}</span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="kicker">{t("about.timelineKicker")}</span>
            <h2 className="section-title">{t("about.timelineTitle")}</h2>
          </Reveal>

          <div className="timeline">
            {TIMELINE.map((item, i) => (
              <Reveal as="div" className="timeline-item" delay={i} key={item.title}>
                <span className="meta">{item.period}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <Reveal className="cta-banner">
            <span className="badge-soft">{t("about.ctaBadge")}</span>
            <h2 className="mt-lg">{t("about.ctaTitle")}</h2>
            <p>{t("about.ctaText")}</p>
            <Link to="/kontakt" className="btn btn-primary">{t("common.contactMe")}</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
