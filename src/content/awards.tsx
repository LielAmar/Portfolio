export type AwardItem = {
  name: string;
  description: string;
  institution: string;
  date: string;
  redirectUrl: string;
};

export const awardsItems: AwardItem[] = [
  {
    name: "Dean's List 2022/2023",
    description: "Recognized for outstanding academic performance in the Computer Science department.",
    institution: "The Hebrew University of Jerusalem",
    date: "June 2023",
    redirectUrl: "https://en.huji.ac.il/"
  },
  {
    name: "Dean's List 2021/2022",
    description: "Recognized for outstanding academic performance in the Computer Science department.",
    institution: "The Hebrew University of Jerusalem",
    date: "June 2022",
    redirectUrl: "https://en.huji.ac.il/"
  },
  {
    name: "HUJI's 2025 Hackathon - 1st Place",
    description: "For the project 'Double You', a context-aware personalized AI assistance.",
    institution: "The Hebrew University of Jerusalem",
    date: "May 2025",
    redirectUrl: "https://en.huji.ac.il/"
  },
  {
    name: "HUJI's 2023 Hackathon - Finalists",
    description: "For the project 'VolunTime', an android application used for finding volunteer opportunities using LLMs.",
    institution: "The Hebrew University of Jerusalem",
    date: "May 2023",
    redirectUrl: "https://en.huji.ac.il/"
  },
];
