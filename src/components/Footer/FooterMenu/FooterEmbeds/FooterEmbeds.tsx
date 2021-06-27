import React, { useEffect } from "react";

import { Theme, ThemeContext } from "@context/ThemeContext";

import styles from "./FooterEmbeds.module.css";

/**
 * The FooterEmbeds component
 * 
 * This component contains the footer embeds.
 * This component uses 1 context:
 * - ThemeContext (handles the website theme)
 * 
 * This component renders the discord & twitter embeds - it renders 2 identical twitter embeds, the only difference being the theme, since it can't be changed during runtime
 */

interface props {}

const FooterEmbeds: React.FC<props> = () => {
  const themeContext = React.useContext(ThemeContext);

  // Imports twitter's widget script
  useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "https://platform.twitter.com/widgets.js");
    s.setAttribute("async", "true");
    s.setAttribute("charset", "utf-8");
    document.head.appendChild(s);
  }, []);

  // Updates the embeds theme when the theme changes
  useEffect(() => {
    document.getElementById("discordEmbed")?.setAttribute("src", `https://discordapp.com/widget?id=416652224505184276&theme=${ themeContext.theme }`);

    let twitterDark = document.getElementById("twitterEmbedDark");
    let twitterLight = document.getElementById("twitterEmbedLight");

    if(twitterDark && twitterLight) {
      if(themeContext.theme === Theme.dark) {
        twitterDark.style.display = "block";
        twitterLight.style.display = "none";
      } else if(themeContext.theme === Theme.light) {
        twitterDark.style.display = "none";
        twitterLight.style.display = "block";
      }
    }
  }, [themeContext]);

  return (
    <div className={ styles.embeds }>
    
      <iframe loading={ "lazy" } id="discordEmbed" className={ styles.discord } src={ `https://discordapp.com/widget?id=416652224505184276&theme=dark` } width="300" height="450" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

      <div className={ styles.twitter } id="twitterEmbedDark">
        <a data-theme="dark" data-tweet-limit="3" data-chrome="transparent" className="twitter-timeline" href="https://twitter.com/IamLielAmar?ref_src=twsrc%5Etfw">Tweets by IamLielAmar</a>
      </div>

      <div className={ styles.twitter } id="twitterEmbedLight">
        <a data-theme="light" data-tweet-limit="3" className="twitter-timeline" href="https://twitter.com/IamLielAmar?ref_src=twsrc%5Etfw">Tweets by IamLielAmar</a>
      </div>
      
    </div>
  );
}

export default FooterEmbeds;
