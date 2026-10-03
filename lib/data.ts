// All site content lives here. Edit this file to update the site.

export const profile = {
  name: "Anshuman Nigam",
  email: "anshumannigam11@gmail.com",
};

export const links = {
  github: "https://github.com/AnshumanNigam",
  linkedin: "https://www.linkedin.com/in/anshuman-nigam-343406255/",
  kaggle: "https://www.kaggle.com/anshumannigam",
  medium: "https://medium.com/@anshumannigam11",
  cal: "https://cal.com/anshuman-nigam/15min",
  formspree: "https://formspree.io/f/xykajkpq",
};

export type Metric = { value: number; prefix?: string; suffix?: string; label: string };

export type Project = {
  id: "forecastrx" | "decision-tree" | "watch-next";
  title: string;
  description: string;
  metrics: Metric[];
  href: string;
};

export const projects: Project[] = [
  {
    id: "forecastrx",
    title: "ForecastRx",
    description:
      "Demand forecasting for more than 20 medicines using Facebook Prophet. A Streamlit dashboard flags upcoming shortages so a pharmacy can reorder before it runs out.",
    metrics: [
      { value: 90, prefix: ">", suffix: "%", label: "forecast accuracy" },
      { value: 35, suffix: "%", label: "fewer stockouts" },
      { value: 20, suffix: "+", label: "medicines tracked" },
    ],
    href: "https://github.com/AnshumanNigam/ForecastRx",
  },
  {
    id: "decision-tree",
    title: "Decision Tree from Scratch",
    description:
      "A multi-class classifier written in pure NumPy and Pandas: entropy, information gain and recursive splitting, with no ML library doing the work.",
    metrics: [
      { value: 92, suffix: "%", label: "accuracy" },
    ],
    href: "https://github.com/AnshumanNigam/decision-tree-from-scratch",
  },
  {
    id: "watch-next",
    title: "Watch-Next",
    description:
      "A content-based movie recommender built with Scikit-Learn and NLTK. It reads plot keywords across 5,000+ films and is benchmarked against collaborative filtering.",
    metrics: [
      { value: 85, suffix: "%+", label: "relevance" },
      { value: 5000, suffix: "+", label: "films" },
    ],
    href: "https://github.com/AnshumanNigam/Movie-Recommender-System",
  },
];

export const experience = [
  {
    from: "Jul 2026",
    to: "Present",
    role: "Data Engineer",
    company: "Standard Chartered",
    description:
      "Building and maintaining the data pipelines and infrastructure behind banking systems: reliability, transformation and platform work that supports analytics and ML at scale.",
  },
  {
    from: "Jan 2026",
    to: "Jun 2026",
    role: "AI Engineer",
    company: "WeLaunch",
    description:
      "Developed and deployed AI-powered products at an early-stage startup, covering model development, integration pipelines and production ML systems.",
  },
  {
    from: "Oct 2025",
    to: "Dec 2025",
    role: "Data Scientist",
    company: "KAHANI Health",
    description:
      "Applied machine learning to healthcare problems at a US health-tech startup: predictive modelling, data pipelines and analytical reporting.",
  },
  {
    from: "Jun 2024",
    to: "Aug 2024",
    role: "Analyst Intern",
    company: "Fortis Healthcare, Gurugram",
    description:
      "Data analysis and reporting inside a leading Indian hospital network. The groundwork that led directly to ForecastRx.",
  },
  {
    from: "2023",
    to: "2024",
    role: "Teaching Assistant",
    company: "BITS Pilani, Online BSc Computer Science",
    description:
      "Supported students in General Biology within BITS Pilani's online computer science program, bridging biological and computational thinking.",
  },
];

export const toolkit = [
  { group: "Languages", items: ["Python", "Java", "SQL"] },
  { group: "Data science", items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Streamlit"] },
  { group: "Machine learning", items: ["Scikit-Learn", "XGBoost", "Random Forest", "Recommender systems"] },
  { group: "Deep learning", items: ["TensorFlow", "ANN", "CNN"] },
  { group: "Time series", items: ["Facebook Prophet", "Forecasting", "Trend analysis"] },
  { group: "Domains", items: ["Banking AI", "Healthcare AI", "Bioinformatics", "Clinical trials"] },
];

export const education = {
  degree: "B.E. (Hons.) Mechanical Engineering and M.Sc. Biological Sciences",
  school: "BITS Pilani, Goa Campus",
  years: "2022 to present, integrated dual degree",
};

export const recognition = [
  {
    title: "AI/ML Hackathon, 1st place",
    detail: "Knowledge Institute of Technology",
    date: "Jun 2025",
  },
  {
    title: "Site initiation visits and essential documents in maintaining integrity and compliance in clinical trials",
    detail: "Indian Journal of Health & Well-being",
    date: "Jul 2024",
  },
  {
    title: "In silico formation of neurons, research presentation",
    detail: "BITS Pilani",
    date: "Feb 2023",
  },
];

export const certifications = [
  { title: "Supervised Machine Learning: Regression & Classification", detail: "DeepLearning.AI" },
  { title: "Advanced Learning Algorithms", detail: "DeepLearning.AI" },
];
