import React from "react";
import Image from "next/image";
import Typed from "react-typed";

import { Theme, useThemeContext } from "@context/ThemeContext";

import styles from "./Introduction.module.css";

/**
 * The Introduction component
 * 
 * This component contains the introduction displayed on the index (main) page of the website.
 * This component uses 1 context:
 * - ThemeContext (handles the website theme)
 * 
 * This component renders an image, the website's logo, acting as a button to switch between the available themes.
 * It also has multiple text elements to display information, and uses the 'react-types' component to create a type-effect.
 */

const words = [
  "Fullstack Developer",
  "Mobile Developer",
  "Video Editor",
  "Graphic Designer",
  "UI/UX Designer",
  "Youtuber",
  "Freelancer"
];

interface props {}

const Introduction: React.FC<props> = () => {
  const themeContext = useThemeContext();

  const toggleTheme = () => themeContext.setTheme(themeContext.theme === Theme.light ? Theme.dark : Theme.light);

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
