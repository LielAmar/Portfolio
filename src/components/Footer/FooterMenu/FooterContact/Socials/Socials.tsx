import SocialItem from "./SocialItem/SocialItem";

import { faGithub, faLinkedinIn, faNpm, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFaucet } from "@fortawesome/free-solid-svg-icons";

import { socialLinks } from "@config/global";

import styles from "./Socials.module.css";

interface props {}

const Socials: React.FC<props> = () => {
  return (
    <div className={ styles.socials }>
      
      <SocialItem icon={ faTwitter } title={ socialLinks.twitter.title } href={ socialLinks.twitter.link } primary={ socialLinks.twitter.color }/>
      <SocialItem icon={ faYoutube } title={ socialLinks.youtube.title } href={ socialLinks.youtube.link } primary={ socialLinks.youtube.color }/>
      <SocialItem icon={ faGithub } title={ socialLinks.github.title } href={ socialLinks.github.link } primary={ socialLinks.github.color }/>
      <SocialItem icon={ faLinkedinIn } title={ socialLinks.linkedin.title } href={ socialLinks.linkedin.link } primary={ socialLinks.linkedin.color }/>
      <SocialItem icon={ faNpm } title={ socialLinks.npm.title } href={ socialLinks.npm.link } primary={ socialLinks.npm.color }/>
      <SocialItem icon={ faFaucet } title={ socialLinks.spigot.title } href={ socialLinks.spigot.link } primary={ socialLinks.spigot.color }/>

    </div>
  );
}

export default Socials;
