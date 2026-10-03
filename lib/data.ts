export const profile = {
  name: "Anshuman Nigam",
  tagline: "Ideas. Algorithms. Action.",
  email: "anshumannigam11@gmail.com",
  location: "India",
};

export const links = {
  github: "https://github.com/AnshumanNigam",
  linkedin: "https://www.linkedin.com/in/anshuman-nigam-343406255/",
  kaggle: "https://www.kaggle.com/anshumannigam",
  medium: "https://medium.com/@anshumannigam11",
  cal: "https://cal.com/anshuman-nigam/15min",
};

export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  result?: string;
  stack: string[];
  href: string;
  visual: "forecast" | "tree" | "network";
};

export const projects: Project[] = [
  {
    number: "01",
    title: "ForecastRx",
    category: "Forecasting / Healthcare",
    description:
      "A demand-forecasting system for more than 20 medicines, with a Streamlit dashboard that surfaces upcoming shortages before they become stockouts.",
    result: ">90% forecast accuracy · 35% fewer stockouts",
    stack: ["Python", "Prophet", "Pandas", "Streamlit"],
    href: "https://github.com/AnshumanNigam/ForecastRx",
    visual: "forecast",
  },
  {
    number: "02",
    title: "Decision Tree from Scratch",
    category: "Machine Learning / Foundations",
    description:
      "A multiclass decision-tree classifier implemented with NumPy and Pandas, including entropy, information gain, recursive splitting, and prediction.",
    result: "92% accuracy",
    stack: ["Python", "NumPy", "Pandas", "Algorithms"],
    href: "https://github.com/AnshumanNigam/decision-tree-from-scratch",
    visual: "tree",
  },
  {
    number: "03",
    title: "Watch-Next",
    category: "Recommender Systems",
    description:
      "A content-based movie recommender that turns plot keywords across 5,000+ films into a searchable similarity model and recommendation interface.",
    result: "5,000+ films · 85%+ relevance",
    stack: ["Scikit-Learn", "NLTK", "Python"],
    href: "https://github.com/AnshumanNigam/Movie-Recommender-System",
    visual: "network",
  },
];

export const experience = [
  {
    period: "Jul 2026 — Present",
    role: "Modelling & Analytics Intern",
    company: "Standard Chartered",
    description:
      "Working on model monitoring and development workflows, including Python automation and the transformation of recurring analytical processes.",
  },
  {
    period: "Jan 2026 — Jun 2026",
    role: "AI Engineer",
    company: "WeLaunch",
    description:
      "Built and shipped AI-powered products at an early-stage startup, working across model integration, automation, and production workflows.",
  },
  {
    period: "Oct 2025 — Dec 2025",
    role: "Data Science Engineer",
    company: "KAHANI Health",
    description:
      "Worked on data science and machine learning problems at a US healthcare AI startup, contributing to data pipelines and analytical systems.",
  },
  {
    period: "Jun 2024 — Aug 2024",
    role: "Analyst Intern",
    company: "Fortis Healthcare, Gurugram",
    description:
      "Worked on data analysis and reporting within a hospital network, building the foundation for later work in healthcare data and forecasting.",
  },
  {
    period: "2023 — 2024",
    role: "Teaching Assistant",
    company: "BITS Pilani",
    description:
      "Supported students in General Biology, helping bridge biological concepts with computational thinking.",
  },
];

export const toolkit = [
  {
    name: "Build",
    items: ["Python", "TypeScript", "SQL", "FastAPI"],
  },
  {
    name: "Model",
    items: ["Scikit-Learn", "XGBoost", "TensorFlow", "SHAP"],
  },
  {
    name: "Data",
    items: ["Pandas", "NumPy", "Matplotlib", "Streamlit"],
  },
  {
    name: "Explore",
    items: ["AI systems", "Healthcare", "Automation", "Scientific computing"],
  },
];

export const education = {
  degree: "B.E. (Hons.) Mechanical Engineering + M.Sc. Biological Sciences",
  school: "BITS Pilani, Goa Campus",
  years: "2022 — present · Integrated dual degree",
};

export const recognition = [
  {
    title: "AI/ML Hackathon — 1st place",
    detail: "Knowledge Institute of Technology · Jun 2025",
  },
  {
    title: "Site initiation visits and essential documents in maintaining integrity and compliance in clinical trials",
    detail: "Indian Journal of Health & Well-being · Jul 2024",
  },
  {
    title: "In silico formation of neurons — research presentation",
    detail: "BITS Pilani · Feb 2023",
  },
];

export const certifications = [
  "Supervised Machine Learning: Regression & Classification · DeepLearning.AI",
  "Advanced Learning Algorithms · DeepLearning.AI",
];
