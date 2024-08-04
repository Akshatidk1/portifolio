import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  sql,
  tensor,
  machine,
  python,
  stats,
  oges,
  power,
  fast,
  airflow,
  aws,
  data,
  linux,
  sas,jira,
  // starbucks,
  // tesla,
  shopify,
  jobit,
  carrent,
  newton_school,
  tripguide,
  threejs,
  devEng,
  devops,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Data Scientist",
    icon: web,
  },
  {
    title: "Machine Learning Engineer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: devEng,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "TensorFlow",
    icon: tensor,
  },
  {
    name: "Machine Learning",
    icon: machine,
  },
  {
    name: "Statistics",
    icon: stats,
  },
  {
    name: "Power BI",
    icon: power,
  },
  {
    name: "FastAPI",
    icon: fast,
  },
  {
    name: "Apache Airflow",
    icon: airflow,
  },
  {
    name: "Databricks",
    icon: data,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "SAS",
    icon: sas,
  },
  {
    name: "JIRA",
    icon: jira,
  },
];

const experiences: TExperience[] = [
  {
    title: "Data Analyst Trainee",
    companyName: "FunctionUP",
    icon: newton_school, // Replace with the actual icon
    iconBg: "#E6DEDD",
    date: "June 2022 - November 2022",
    points: [
      "Developed advanced Excel dashboards to provide detailed data visualizations and business insights, aiding in strategic decision-making.",
      "Performed comprehensive exploratory data analysis using Python libraries such as pandas and NumPy, identifying key trends and patterns in large datasets.",
      "Conducted complex SQL queries to extract, manipulate, and analyze data, ensuring data accuracy and reliability.",
      "Created an interactive crypto dashboard in Power BI, allowing real-time tracking of cryptocurrency market trends and performance metrics."
    ],
  },
  {
    title: "Project Engineer",
    companyName: "Oges Solutions Pvt. Ltd.",
    icon: oges, // Replace with the actual icon
    iconBg: "#383E56",
    date: "Nov 2022 - June 2023",
    points: [
      "Extracted actionable insights using advanced machine learning techniques, driving data-driven decision-making processes.",
      "Conducted rigorous statistical analysis and optimized predictive models to enhance the accuracy and efficiency of business operations.",
      "Implemented a variety of machine learning and deep learning algorithms (including ANN, CNN, RNN, XGBoost, RF, DT, Prophet) using Python to solve complex business problems.",
      "Designed and managed data pipelines in SAS Viya for supervised learning, streamlining data processing and model training workflows.",
      "Developed real-time, interactive dashboards using SAS and Python, providing stakeholders with up-to-date information and insights.",
      "Proposed innovative data-driven solutions and collaborated effectively with cross-functional teams to implement these solutions."
    ],
  },
  {
    title: "Project Engineer 3 (PE-3)",
    companyName: "Oges Solutions Pvt. Ltd.",
    icon: oges, // Replace with the actual icon
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Led the development and deployment of machine learning models for predicting cement quality, significantly improving product consistency and quality control processes.",
      "Designed and implemented backend systems using FastAPI for the HVMS (Heavy Vehicle Management System), enhancing system efficiency and scalability.",
      "Developed comprehensive KPIs for departmental insights via the CVC Dashboard, enabling better performance tracking and decision-making.",
      "Spearheaded AI-based reservoir modeling projects using M2 forecasting and kriging techniques, improving the accuracy of reservoir simulations.",
      "Provided guidance and leadership to cross-functional teams in both machine learning model development and backend development, fostering collaboration and knowledge sharing.",
      "Enhanced application accessibility by integrating advanced Speech-to-Text and Text-to-Audio algorithms, improving user experience for diverse user groups.",
      "Implemented robust risk management models for onshore operations, mitigating potential risks and ensuring operational safety.",
      "Developed a domain-specific language model using Distil GPT2 and neural networks, tailored to the unique needs of the organization."
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Customer Segmentation and Recommendation System",
    description:
      "Developed a comprehensive system for customer segmentation and recommendation using K-Means clustering for grouping customers based on their behavior and characteristics. Anomaly detection was implemented using Isolation Forest, with extensive feature engineering to enhance model accuracy.",
    tags: [
      {
        name: "k-means",
        color: "blue-text-gradient",
      },
      {
        name: "isolation-forest",
        color: "green-text-gradient",
      },
      {
        name: "feature-engineering",
        color: "pink-text-gradient",
      },
    ],
    image: jobit, // Replace with actual image path
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Health and Safety Prediction",
    description:
      "A time series forecasting project aimed at predicting the number of incidents at different levels using Facebook's Prophet. This project involved extensive data preprocessing, feature engineering, and model tuning to achieve high predictive accuracy.",
    tags: [
      {
        name: "time-series",
        color: "blue-text-gradient",
      },
      {
        name: "prophet",
        color: "green-text-gradient",
      },
      {
        name: "data-preprocessing",
        color: "pink-text-gradient",
      },
    ],
    image: carrent, // Replace with actual image path
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
