import SocialItem from "./SocialItem/SocialItem";

import { socialLinks } from "@config/global";

import styles from "./FooterContact.module.css";

/**
 * The FooterContact component
 * 
 * This component contains the footer contact options.
 * 
 * This component renders a title & multiple socials
 */

interface props {}

const FooterContact: React.FC<props> = () => {
  return (
    <div className={ styles.contact }>
      <h2>Contact Me</h2>

      <div className={ styles.socials }>
        <SocialItem src={ socialLinks.twitter.src }  title={ socialLinks.twitter.title }  href={ socialLinks.twitter.link }  primaryColor={ socialLinks.twitter.color }  />
        <SocialItem src={ socialLinks.youtube.src }  title={ socialLinks.youtube.title }  href={ socialLinks.youtube.link }  primaryColor={ socialLinks.youtube.color } />
        <SocialItem src={ socialLinks.github.src }   title={ socialLinks.github.title }   href={ socialLinks.github.link }   primaryColor={ socialLinks.github.color } />
        <SocialItem src={ socialLinks.linkedin.src } title={ socialLinks.linkedin.title } href={ socialLinks.linkedin.link } primaryColor={ socialLinks.linkedin.color } />
        <SocialItem src={ socialLinks.npm.src }      title={ socialLinks.npm.title }      href={ socialLinks.npm.link }      primaryColor={ socialLinks.npm.color } />
        <SocialItem src={ socialLinks.spigot.src }   title={ socialLinks.spigot.title }   href={ socialLinks.spigot.link }   primaryColor={ socialLinks.spigot.color } />
      </div>
    </div>
  );
}

export default FooterContact;
