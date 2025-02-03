import React from "react";

export type TechStackItem = {
  name: string;
  icon?: React.FC<{ className?: string; size?: number; strokeWidth?: number }>;
  url?: string;
};

export type ExperienceItem = {
  title: string;
  organization: string;
  start:
    | {
        month: string;
        year: string;
      }
    | string;
  end:
    | {
        month: string;
        year: string;
      }
    | string;
  logo?: string;
  redirectUrl?: string;
  description?: string;
  additional?: string[];
  techStack?: TechStackItem[];
};

export const experienceItems: ExperienceItem[] = [
  {
    title: "Software Developer",
    organization: "Urbanico, Jerusalem",
    start: {
      month: "January",
      year: "2024",
    },
    end: {
      month: "September",
      year: "2024",
    },
    logo: "/images/webp/urbanico.webp",
    redirectUrl: "https://urbanico.io/",
    description:
      "I designed and implemented solutions for data storage, machine learning training & tuning, and client interaction. I introduced the company's first CI/CD pipelines, automating unit testing and linting. I also conducted code reviews to fellow developers.",
    additional: ["• The company ceased operations in September 2024 due to financial difficulties."],
    techStack: [
      {
        name: "Python",
        url: "https://www.python.org/",
        // icon: PythonIcon,
      },
      {
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        // icon: JavaScriptIcon,
      },
      {
        name: "Google Cloud",
        url: "https://cloud.google.com/",
        // icon: GoogleCloudIcon,
      },
      {
        name: "FastAPI",
        url: "https://fastapi.tiangolo.com/",
        // icon: FastAPIIcon,
      },
      {
        name: "SciKit-Learn",
        url: "https://scikit-learn.org/stable/",
      },
      {
        name: "React",
        url: "https://reactjs.org/",
        // icon: ReactIcon,
      },
      {
        name: "PostgreSQL",
        url: "https://www.postgresql.org/",
        // icon: PostgreSQLIcon,
      },
      {
        name: "CI/CD",
        url: "https://docs.gitlab.com/ee/ci/",
      },
      {
        name: "Docker",
        url: "https://www.docker.com/",
        // icon: DockerIcon,
      },
    ],
  },

  {
    title: "Software Developer Intern",
    organization: "Oversight, Petah Tikva",
    start: {
      month: "June",
      year: "2022",
    },
    end: {
      month: "October",
      year: "2022",
    },
    logo: "/images/webp/oversight.webp",
    redirectUrl: "https://oversight.co.il/",
    description:
      "I maintained and improved an existing B2B startup backend and frontend codebase. I also developed proof-of-concepts to showcase the company's capabilities to potential clients.",
    techStack: [
      {
        name: "TypeScript",
        url: "https://www.typescriptlang.org/",
        // icon: TypeScriptIcon,
      },
      {
        name: "Firebase",
        url: "https://firebase.google.com/",
        // icon: FirebaseIcon,
      },
      {
        name: "ExpressJS",
        url: "https://expressjs.com/",
        // icon: ExpressJSIcon,
      },
      {
        name: "React",
        url: "https://reactjs.org/",
        // icon: ReactIcon,
      },
      {
        name: "MongoDB",
        url: "https://www.mongodb.com/",
        // icon: MongoDBIcon,
      },
      {
        name: "Docker",
        url: "https://www.docker.com/",
        // icon: DockerIcon,
      },
    ],
  },
  {
    title: "Software Developer",
    organization: "Rewrite Media, North Carolina",
    start: {
      month: "January",
      year: "2021",
    },
    end: {
      month: "August",
      year: "2021",
    },
    logo: "/images/webp/rwm.webp",
    redirectUrl: "https://rewrite.media",
    description:
      "I developed a real-time audio streaming service which connected a public web application, staff moderation tools and video games, used to host virtual events.",
    additional: ["• I left the company to pursue my Bachelor's."],
    techStack: [
      {
        name: "Java",
        url: "https://www.java.com/",
        // icon: JavaIcon,
      },
      {
        name: "TypeScript",
        url: "https://www.typescriptlang.org/",
        // icon: TypeScriptIcon,
      },
      {
        name: "Spring",
        url: "https://spring.io/",
        // icon: SpringIcon,
      },
      {
        name: "React",
        url: "https://reactjs.org/",
        // icon: ReactIcon,
      },
      {
        name: "MongoDB",
        url: "https://www.mongodb.com/",
        // icon: MongoDBIcon,
      },
    ],
  },
  {
    title: "Volunteer Staff Member, Mentor",
    organization: "Hypixel, Quebec",
    start: {
      month: "July",
      year: "2019",
    },
    end: {
      month: "May",
      year: "2021",
    },
    logo: "/images/webp/hypixel.webp",
    redirectUrl: "https://hypixel.net/",
    description: "I trained and mentored 4 staff members from different countries and worked alongside developers to design and test new features and games.",
  },
];
