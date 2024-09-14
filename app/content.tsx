import { TimelineItem } from './components/common/timeline/timeline';

export const educationTimelineItems: TimelineItem[] = [
    {
        title: 'M.Sc. in Computer Science',
        subtitle: 'The Hebrew University of Jerusalem',
        date: 'October 2024 - Present',
        type: 'education',
        image: '/images/huji2.svg',
    },
    {
        title: 'Semester Abroad',
        subtitle: 'University of Florida',
        date: 'August 2023 - December 2023',
        type: 'abroad',
        image: '/images/uf.svg',
    },
    {
        title: 'B.Sc. in Computer Science',
        subtitle: 'The Hebrew University of Jerusalem',
        date: 'October 2021 - August 2024',
        content: `
        Finished with honors with a grade of 92.6. I was also included in the Dean's List for two consecutive years - 2021 and 2022.
        `,
        type: 'education',
        image: '/images/huji2.svg',
    },
];

export const experienceTimelineItems: TimelineItem[] = [
    {
        title: 'Software Developer',
        subtitle: 'Urbanico, Jerusalem',
        date: 'January 2024 - September 2024',
        content: `
        I designed and implemented solutions for data storage, machine learning tuning & training, and client interaction. I introduced the company's first CI/CD pipelines, automating unit testing, format validation, and lint checks, and conducted code reviews.
        The company ceased operations in September 2024 due to financial difficulties.
        `,
        type: 'work',
        image: '/images/urbanico.png',
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
        image: '/images/oversight.png',
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
        image: '/images/rwm.png',
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
        image: '/images/hypixel.png',
        url: 'https://hypixel.net/',
    },
];
