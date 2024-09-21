import { TimelineItem } from './components/common/timeline/timeline';
import { ProjectItem } from './components/projects/projects';
import { SkillItem } from './components/skills/skills';

export const iAmA = [
    'M.Sc. in CS Student',
    3000,
    'ML Developer',
    2000,
    'Python Developer',
    2000,
    'Java Developer',
    2000,
    'Fullstack Developer',
    2000,
    'C/C++ Developer',
    2000,
    'Mobile Developer',
    2000,
    'AI Enthusiast',
    2000,
    'Video Editor',
    2000,
];

export const educationTimelineItems: TimelineItem[] = [
    {
        title: 'M.Sc. in Computer Science',
        subtitle: 'The Hebrew University of Jerusalem',
        date: 'October 2024 - Present',
        type: 'education',
        image: '/images/huji.svg',
        url: 'https://www.cs.huji.ac.il/',
    },
    {
        title: 'Semester Abroad',
        subtitle: 'University of Florida',
        date: 'August 2023 - December 2023',
        type: 'abroad',
        image: '/images/uf.svg',
        url: 'https://www.ufl.edu/',
    },
    {
        title: 'B.Sc. in Computer Science',
        subtitle: 'The Hebrew University of Jerusalem',
        date: 'October 2021 - August 2024',
        content: `
        Finished with honors with a grade of 92.6. I was also included in the Dean's List for two consecutive years - 2021 and 2022.
        `,
        url: 'https://www.cs.huji.ac.il/',
        type: 'education',
        image: '/images/huji.svg',
    },
    {
        title: 'High School Diploma',
        subtitle: 'ORT College, Jerusalem',
        date: 'August 2016 - June 2019',
        content: `
        Finished with honors with a grade of 115, studying Computer Science and Physics.
        `,
        url: 'https://givatram.ort.org.il/',
        type: 'education',
        image: '/images/ort.svg',
    }
];

export const experienceTimelineItems: TimelineItem[] = [
    {
        title: 'Software Developer',
        subtitle: 'Urbanico, Jerusalem',
        date: 'January 2024 - September 2024',
        content: `
        I designed and implemented solutions for data storage, machine learning tuning & training, and client interaction. I introduced the company's first CI/CD pipelines, automating unit testing, format validation, and lint checks, and conducted code reviews.
        • The company ceased operations in September 2024 due to financial difficulties.
        `,
        type: 'work',
        image: '/images/urbanico.webp',
        url: 'https://urbanico.io/',
    },
    {
        title: 'Software Developer Intern',
        subtitle: 'Oversight, Petah Tikva',
        date: 'July 2022 - October 2022',
        content: `
        I maintained and enhanced a B2B startup backend and frontend codebase. I also developed proof-of-concepts to showcase the company's capabilities to potential clients.
        `,
        type: 'work',
        image: '/images/oversight.webp',
        url: 'https://oversight.co.il/',
    },
    {
        title: 'Software Developer',
        subtitle: 'Rewrite Media, North Carolina',
        date: 'January 2021 - August 2021',
        content: `
        I developed a real-time audio streaming service which connected a public web application, staff moderation tools and video games, used to host virtual events.
        Left the company to pursue my B.Sc. in Computer Science.
        `,
        type: 'work',
        image: '/images/rwm.webp',
        url: 'https://rewrite.media',
    },
    {
        title: 'Volunteer Staff Member, Mentor',
        subtitle: 'Hypixel, Quebec',
        date: 'July 2019 - May 2021',
        content: `
        I trained and mentored 4 staff members from different countries and worked alongside developers to design and test new features and games.
        `,
        type: 'volunteer',
        image: '/images/hypixel.webp',
        url: 'https://hypixel.net/',
    },
];

export const skillsItems: SkillItem[] = [
    {
        alt: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
        link: 'https://www.python.org/',
    },
    {
        alt: 'Java',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
        link: 'https://www.java.com/',
    },
    {
        alt: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        link: 'https://en.wikipedia.org/wiki/JavaScript',
    },
    {
        alt: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
        link: 'https://www.typescriptlang.org/',
    },
    {
        alt: 'C',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
        link: 'https://en.wikipedia.org/wiki/C_(programming_language)',
    },
    {
        alt: 'C++',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
        link: 'https://isocpp.org/',
    },
    {
        alt: 'HTML',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
        link: 'https://html.spec.whatwg.org/',
    },
    {
        alt: 'CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
        link: 'https://www.w3.org/Style/CSS/Overview.en.html',
    },
    
    {
        alt: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
        link: 'https://git-scm.com/',
    },

    {
        alt: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
        link: 'https://nodejs.org/',
    },

    {
        alt: 'GCP',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
        link: 'https://cloud.google.com/',
    },
    {
        alt: 'Firebase',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
        link: 'https://firebase.google.com/',
    },

    {
        alt: 'Docker',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
        link: 'https://www.docker.com/',
    },

    {
        alt: 'NumPy',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg',
        link: 'https://numpy.org/',
    },
    {
        alt: 'Pandas',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
        link: 'https://pandas.pydata.org/',
    },
    {
        alt: 'Scikit-learn',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',
        link: 'https://scikit-learn.org/',
    },
    {
        alt: 'PyTorch',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg',
        link: 'https://pytorch.org/',
    },
    {
        alt: 'FastAPI',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
        link: 'https://fastapi.tiangolo.com/',
    },



    {
        alt: 'PostgreSQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
        link: 'https://www.postgresql.org/',
    },
    {
        alt: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
        link: 'https://www.mongodb.com/',
    },
    {
        alt: 'Redis',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
        link: 'https://redis.io/',
    },

    {
        alt: 'Anaconda',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg',
        link: 'https://www.anaconda.com/',
    },
    {
        alt: 'Pixi',
        icon: '/images/pixi.png',
        link: 'https://pixi.sh/',
    },

    {
        alt: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
        link: 'https://reactjs.org/',
    },
    {
        alt: 'Tailwind CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
        link: 'https://tailwindcss.com/',
    },

    // {
    //     alt: 'AWS',
    //     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    // },

    // {
    //     alt: 'After Effects',
    //     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg',
    // },
    // {
    //     alt: 'Premiere Pro',
    //     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-plain.svg',
    // },
    // {
    //     alt: 'Photoshop',
    //     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg',
    // },
];

export const projectsItems: ProjectItem[] = [
    {
        title: 'Defeating Frogger with AI',
        role: 'Lead Developer',
        description: 'Using Reinforcement Learning and Genetic Algorithms to create AI agents that beat the Frogger game.',
        image: '/images/frogger.webp',
        link: 'https://github.com/LielAmar/AI-Defeats-Frogger'
    },
    {
        title: '2FA',
        role: 'Lead Developer',
        description: 'A two-factor authentication system for Bungeecord, Spigot & Paper. It has over 8,500 downloads on SpigotMC.',
        image: '/images/2fa.webp',
        link: 'https://www.spigotmc.org/resources/%E2%AD%90-two-factor-authentication-1-8-1-21-%E2%9D%A4%EF%B8%8F.85594/'
    },
    {
        title: 'VolunTime',
        role: 'Lead Developer',
        description: 'An android application used for finding volunteer opportunities using LLMs. It was developed as part of HUJI\'s 2023 CS Hackathon.',
        image: '/images/voluntime.webp',
        link: 'https://github.com/VolunTimeApp'
    },
    {
        title: 'Language Fix',
        role: 'Lead Developer',
        description: 'A Spigot plugin that fixes RTL issues in Minecraft. It has over 1,500 downloads on SpigotMC.',
        image: '/images/languagefix.webp',
        link: 'https://www.spigotmc.org/resources/%E2%9C%A8-language-fix-1-8-1-18.85682/'
    },
    {
        title: 'Party Games',
        role: 'Lead Developer',
        description: 'A clone of Hypixel\'s Party Games. It contains 26 different Mini-games and supports full customization.',
        image: '/images/partygames.webp',
        link: 'https://github.com/LielAmar/Party-Games'
    },
    {
        title: 'Arms Race',
        role: 'Lead Developer',
        description: 'A one of its kind Minecraft Mini-game. It features Combat, Shop, Cosmetics, Skills, Perks, Pickups and much more.',
        image: '/images/armsrace.webp',
        link: 'https://github.com/LielAmar/ArmsRace'
    },
    {
        title: 'Play-IL Network',
        role: 'Manager & Lead Developer',
        description: 'A network of Minecraft servers that was active in 2017-2019. It attracted thousands of players and was one of the largest Israeli game servers at the time.',
        image: '/images/playilnetwork.webp',
        link: 'https://www.youtube.com/watch?v=upHr3M-UoPI'
    }
]