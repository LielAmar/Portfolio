import Image from "next/image";

import Typed from "react-typed";

import useTheme from "hooks/useTheme";

import styles from "./Introduction.module.css";

const words = [
  "Fullstack Developer",
  "Mobile Developer",
  "Video Editor",
  "Graphic Designer",
  "UI/UX Designer",
  "Youtuber",
  "Freelancer"
];

type props = {}

const Introduction: React.FC<props> = () => {
  const [theme, setWebsiteTheme] = useTheme();

  const toggleTheme = () => setWebsiteTheme(theme === "light" ? "dark" : "light");

  return (
    <section id="me" className={ styles.intro }>
      <div className={ styles.introWrapper }>
        <div className={ styles.logoWrapper }>
          <Image onClick={ toggleTheme } id="logo" alt="Grayish-LA-Logo" src="/images/logo.webp" width={ 300 } height={ 300 }/>
        </div>

        <div className={ styles.textWrapper }>
          <h2>Hey, I am <strong>Liel Amar</strong>.</h2>

          <p>I am a <Typed strings={ words } typeSpeed={ 60 } backSpeed={ 60 } loop={ true }></Typed></p>
          <p>with over <strong>7 years</strong> of experience.</p>
        </div>

      </div>
    </section>
  );
}

export default Introduction
