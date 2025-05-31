// import Image from "next/image";
import About from "@components/sections/about";
import Education from "@components/sections/education";
import NavBar from "@components/structure/navbar/navbar";
import Introduction from "@components/sections/introduction";
import Experience from "@components/sections/experience";

import { educationItems } from "@content/education";
import { navbarItems } from "@content/navbar";
import { experienceItems } from "@content/experience";
import { projectsItems } from "@content/projects";
import { awardsItems } from "@content/awards";
import { publicationsItems } from "@content/publications";

import Contact from "@components/sections/contact";
import Footer from "@components/structure/footer/footer";
import Projects from "@components/sections/projects";
import Awards from "@components/sections/awards";
import Publications from "@components/sections/publications";

export default function Home() {
  return (
    <div>
      <NavBar navbarItems={navbarItems} />

      <div className="ms-auto me-auto w-full max-w-[70ch]">
        <div className="py-16 space-y-16 md:px-0 px-16">
          <section id="introduction">
            <Introduction />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="education">
            <Education educationItems={educationItems} />
          </section>

          <section id="experience">
            <Experience experienceItems={experienceItems} />
          </section>

          <section id="projects">
            <Projects projectsItems={projectsItems} />
          </section>

          <section id="awards">
            <Awards awardsItems={awardsItems} />
          </section>

          <section id="publications">
            <Publications publicationsItems={publicationsItems} />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </div>

        <div className="py-8 md:px-0 px-16">
          <Footer />
        </div>
      </div>
    </div>
  );
}
