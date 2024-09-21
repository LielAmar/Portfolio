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
            opacity: {
                'primary': '1.0',
                'semi': '0.8',
            },
            colors: {
                background: '#16161a',

                primary: '#42a7f5',

                darkText: '#1A1A1A',
                lightText: '#f2f2f2',

                navbarBackground: '#f2f2f2',
                navbarTextActive: '#1A1A1A',
                navbarTextInactive: '#747474',

                separatorBackground: 'rgba(229, 229, 229, 0.8)',
                timelineBackground: 'rgba(229, 229, 229, 0.8)',
                timelineBoxBackground: 'rgba(229, 229, 229, 0.8)',

                'github-background': '#FFFFFF',
                'github-text': '#000000',
                'linkedin-background': '#0077B5',
                'linkedin-text': '#FFFFFF',
                'spigot-background': '#FFDB3D',
                'spigot-text': '#000000',

                'element-primary': '#e5e5e5',

                'text-primary-light': '#e3e3e3',
                'text-secondary-light': '#cccccc',
                'text-primary-dark': '#1f1f1f',
                'text-secondary-dark': '#4a4a4a',

            },
        },
    },
    plugins: [],
};
export default config;
