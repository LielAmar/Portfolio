import Image from "next/image";
import { useCookies } from "react-cookie";

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
  const [_cookies, setCookie, _removeCookie] = useCookies(["portfolio"]);

  const toggleTheme = () => {
    let newTheme = document.querySelector("html")?.getAttribute("data-theme") === "light" ? "dark" : "light";

    document.querySelector("html")?.setAttribute("data-theme", newTheme);
  
    setCookie("theme", newTheme);

    // Fixing problems with embeds
    document.getElementById("discordEmbed")?.setAttribute("src", `https://discordapp.com/widget?id=416652224505184276&theme=${ newTheme }`);

    let twitterDark = document.getElementById("twitterEmbedDark");
    let twitterLight = document.getElementById("twitterEmbedLight");

    if(twitterDark && twitterLight) {
      if(newTheme === "dark") {
        twitterDark.style.display = "block";
        twitterLight.style.display = "none";
      } else {
        twitterDark.style.display = "none";
        twitterLight.style.display = "block";
      }
    }
  }

  return (
    <section id="me" className={ styles.intro }>
      <div className={ styles.introWrapper }>
        <div className={ styles.logoWrapper }>
          <Image onClick={ toggleTheme } id="logo" alt="Grayish-LA-Logo" src="/images/logo.webp" width={ 300 } height={ 300 }/>
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
