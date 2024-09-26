// import Image from "next/image";
import About from "@components/sections/about";
import Education from "@components/sections/education";
import NavBar from "@components/structure/navbar/navbar";
import Introduction from "@components/sections/introduction";
import Experience from "@components/sections/experience";

import { educationItems } from "@content/education";
import { navbarItems } from "@content/navbar";
import { experienceItems } from "@content/experience";
import Contact from "@components/sections/contact";
import Footer from "@components/structure/footer/footer";

export default function Home() {
  return (
    <div>
      <NavBar navbarItems={navbarItems} />

      <div className="content">
        <div className="py-16 space-y-16">
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

          <section id="contact">
            <Contact />
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
}
