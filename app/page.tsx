'use client';

import { useEffect } from 'react';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Education from './components/education/education';
import NavBar from './components/navbar/navbar';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Experience from './experience/experience';

export default function Home() {
    const updateBTHN = () => {
        const script = window.document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://bringthemhomenow.net/1.1.0/hostages-ticker.js';
        script.setAttribute(
            'integrity',
            'sha384-DHuakkmS4DXvIW79Ttuqjvl95NepBRwfVGx6bmqBJVVwqsosq8hROrydHItKdsne'
        );
        script.setAttribute('crossorigin', 'anonymous');
        window.document.getElementsByTagName('head')[0].appendChild(script);
    };

    useEffect(() => {
        updateBTHN();
    }, []);

    return (
        <>
            <div id="bthn" lang="en"></div>

            <NavBar />

            <div className="w-full h-full min-h-screen flex flex-col items-center">
                <div
                    id="about"
                    className="w-full h-fit flex flex-col items-center"
                >
                    <About />
                </div>

                <div
                    id="education"
                    className="w-full h-fit flex flex-col items-center"
                >
                    <Education />
                </div>

                <div
                    id="experience"
                    className="w-full h-fit flex flex-col items-center"
                >
                    <Experience />
                </div>

                <div
                    id="skills"
                    className="w-full h-fit flex flex-col items-center"
                >
                    <Skills />
                </div>

                <div
                    id="projects"
                    className="w-full h-fit flex flex-col items-center"
                >
                    <Projects />
                </div>

                <div
                    id="contact"
                    className="w-full h-fit flex flex-col items-center"
                >
                    <Contact />
                </div>
            </div>
        </>
    );
}
