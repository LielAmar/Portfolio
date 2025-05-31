export type ProjectItem = {
  name: string;
  role: string;
  description: string;
  href: string;
  image: string;
  backgroundColor: string;
};

export const projectsItems: ProjectItem[] = [
  {
    name: "Double You",
    role: "Lead Developer",
    description: "A self-hosted context-aware personalized AI assistance mobile application using Retrieval Augmented Generation. This project won HUJI's 2025 Hackathon.",
    href: "https://github.com/doubleyou-w",
    image: "/images/webp/doubleyou.webp",
    backgroundColor: "doubleyou",
  },
  {
    name: "Defeating Frogger with AI",
    role: "Lead Developer",
    description: "Using Reinforcement Learning and Genetic Algorithms to create AI agents that beat the Frogger game.",
    href: "https://github.com/lielamar/defeating-frogger-with-ai",
    image: "/images/webp/frogger.webp",
    backgroundColor: "frogger",
  },
  {
    name: "Two Factor Authentication",
    role: "Lead Developer",
    description: "A two-factor authentication system for Bungeecord and Spigot servers. It has over 8,500 downloads on SpigotMC.",
    href: "https://www.spigotmc.org/resources/%E2%AD%90-two-factor-authentication-1-8-1-21-%E2%9D%A4%EF%B8%8F.85594/",
    image: "/images/webp/2fa.webp",
    backgroundColor: "2fa",
  },
  {
    name: "VolunTime",
    role: "Lead Developer",
    description: "An android application used for finding volunteer opportunities using LLMs. It was developed as part of HUJI's 2023 Hackathon.",
    href: "https://github.com/VolunTimeApp",
    image: "/images/webp/voluntime.webp",
    backgroundColor: "voluntime",
  },
  {
    name: "LanguageFix",
    role: "Lead Developer",
    description: "A Spigot plugin that fixes RTL issues in Minecraft. It has over 1,500 downloads on SpigotMC.",
    href: "https://www.spigotmc.org/resources/%E2%9C%A8-language-fix-1-8-1-18.85682/",
    image: "/images/webp/languagefix.webp",
    backgroundColor: "languagefix",
  },
  {
    name: "Party Games",
    role: "Lead Developer",
    description: "A clone of Hypixel's Party Games. It contains 26 different Mini-games and supports full customization.",
    href: "https://github.com/LielAmar/Party-Games",
    image: "/images/webp/partygames.webp",
    backgroundColor: "partygames",
  }
];
