import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

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
  "B.S. in CS Student", 2000,
  "Java Expert", 2000,
  "Fullstack Developer", 2000,
  "C/C++ Developer", 2000,
  "Python Developer", 2000,
  "Mobile Developer", 2000,
  "Video Editor", 2000,
  "Graphic Designer", 2000,
  "UI/UX Designer", 2000,
  "Freelancer", 2000
];

interface props {}

const Introduction: React.FC<props> = () => {
  const themeContext = useThemeContext();

  const toggleTheme = () => themeContext.setTheme(themeContext.theme === Theme.light ? Theme.dark : Theme.light);

  return (
    <section id="me" className={ styles.intro }>
      <div className={ styles.introWrapper }>
        <div className={ styles.logoWrapper }>
          <Image priority={true} onClick={ toggleTheme }  id="logo" alt="LA-Logo" src="/images/logo.webp" width={ 300 } height={ 300 }/>
        </div>

        <div className={ styles.textWrapper }>
          <h2>Hey, I am <strong>Liel Amar</strong>.</h2>

          <div className={ styles.animationWrapper }>
            <p>I am a </p>

            <TypeAnimation 
              sequence={words}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </div>

          <p>with over <strong>6 years</strong> of experience.</p>
        </div>
      </div>
    </section>
  );
}

export default Introduction
