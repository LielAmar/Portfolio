import { link } from 'fs';
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                rubik: ['Rubik', 'sans-serif'],
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'ease-in-out' },
                    '50%': { transform: 'translateY(-1rem)', animationTimingFunction: 'ease-in-out' },
                }
            },
            animation: {
                float: 'float 4s ease-in-out infinite',
            },
            colors: {
                background: '#16161a',

                darkText: '#1A1A1A',
                lightText: '#f2f2f2',

                navbarBackground: '#f2f2f2',
                navbarTextActive: '#1A1A1A',
                navbarTextInactive: '#747474',

                separatorBackground: 'rgba(229, 229, 229, 0.5)',
                timelineBackground: 'rgba(229, 229, 229, 0.5)',
                timelineBoxBackground: 'rgba(229, 229, 229, 0.8)',

                githubBackground: '#FFFFFF',
                githubText: '#000000',
                linkedinBackground: '#0077B5',
                linkedinText: '#FFFFFF',
                spigotBackground: '#FFDB3D',
                spigotText: '#000000',
            },
        },
    },
    plugins: [],
};
export default config;
