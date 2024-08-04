type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Akshat Kumar Nishad — Portfolio",
    fullName: "Akshat Kumar Nishad",
    email: "Akshatrajsahani@gmail.com",
  },
  hero: {
    name: "Akshat Kumar Nishad",
    p: ["A professional with expertise in Data Science, ML, and Backend Development."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: ` Experienced Data Scientist and Machine Learning Engineer with a proven track record in statistical analysis,
                machine learning, and natural language processing. Expertise in transforming complex data into actionable
                insights using SQL, Python, and advanced ML frameworks. Demonstrated success in AI model development,
                pipeline design, and real-time dashboard creation. Committed to staying current with emerging trends to
                deliver cutting-edge solutions.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "Personal",
      h2: "Projects",
      content: `The following projects showcase my skills and experience
       through real-world examples of my work. Each project is briefly described. They highlight my ability to solve complex problems,
       work with diverse technologies, and manage projects effectively.`,
    },
  },
};
