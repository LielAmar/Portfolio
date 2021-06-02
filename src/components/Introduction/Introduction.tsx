import Typed from "react-typed";

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
  return (
    <section id="me" className={ styles.intro }>
      <div className={ styles.introWrapper }>
        <div className={ styles.logoWrapper }>
          <img id="logo" alt="Grayish-LA-Logo" src="/images/logo.webp"/>
        </div>

        <div className={ styles.textWrapper }>
          <h2>Hey, I am <strong>Liel Amar</strong>.</h2>

          {/* <p>I am a <strong>Fullstack Developer</strong>, <strong>Video Editor</strong> & <strong>Grahpic Designer</strong></p> */}
          <p>I am a <Typed strings={ words } typeSpeed={ 60 } backSpeed={ 60 } loop={ true }></Typed></p>
          <p>with over <strong>7 years</strong> of experience.</p>
        </div>

      </div>
    </section>
  );
}

export default Introduction
