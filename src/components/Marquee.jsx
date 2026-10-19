const TECHS = [
  // IA & ML
  "Python", "TensorFlow", "PyTorch", "Machine Learning",
  "NLP","MLOps", "LangChain", "Data Science", "Cloud AI",
  "Scikit-learn", "Pandas", "NumPy", "XGBoost", "HuggingFace",
  "LLM", "RAG", "Agents IA",

  // Web & Intégration WordPress
  "WordPress", "Elementor", "HTML5", "CSS3", "JavaScript",
  "React", "jQuery", "PHP", "MySQL", "AJAX",

  // Data & Outils
  "SQL", "PostgreSQL", "Git", "GitHub", "Docker",
  "Scrum", "Kanban", "Salesforce",
];

export default function Marquee() {
  const items = [...TECHS, ...TECHS];
  return (
    <div className="marquee-wrap">
      <div className="marquee">
        {items.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
