import { useEffect, useState } from "react";

import styles from "./FooterEmbeds.module.css";

interface props {}

const FooterEmbeds: React.FC<props> = () => {
  const [theme, setTheme] = useState("light");

  // Importing twitter's widget script
  useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "https://platform.twitter.com/widgets.js");
    s.setAttribute("async", "true");
    s.setAttribute("charset", "utf-8");
    document.head.appendChild(s);
    
    // Setting the theme
    setTheme(window.matchMedia("(prefers-color-scheme: dark").matches ? "dark" : "light");
  }, []);

  return (
    <div className={ styles.embeds }>
    
      <iframe loading={ "lazy" } id="discordEmbed" className={ styles.discord } src="https://discordapp.com/widget?id=416652224505184276&theme=dark" width="300" height="450" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

      <div className={ styles.twitter } id="twitterEmbedDark" style={ theme === "dark" ? { display: "block" } : { display: "none" }}>
        <a data-theme="dark" data-tweet-limit="2" data-chrome="transparent" className="twitter-timeline" href="https://twitter.com/IamLielAmar?ref_src=twsrc%5Etfw">Tweets by IamLielAmar</a>
      </div>

      <div className={ styles.twitter } id="twitterEmbedLight" style={ theme === "light" ? { display: "block" } : { display: "none" }}>
        <a data-theme="light" data-tweet-limit="2" className="twitter-timeline" href="https://twitter.com/IamLielAmar?ref_src=twsrc%5Etfw">Tweets by IamLielAmar</a>
      </div>
      
    </div>
  );
}

export default FooterEmbeds;
