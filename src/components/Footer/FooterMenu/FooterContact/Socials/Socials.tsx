import SocialItem from "./SocialItem/SocialItem";

import { socialLinks } from "@config/global";

import styles from "./Socials.module.css";

/**
 * The Socials component
 * 
 * This component remders multiple social items
 */

interface props {}

/**
 * @deprecated moved to #FooterContact
 */
const Socials: React.FC<props> = () => {
  // const [forceRenderValue, forceRender] = useState(0);

  // I honestly don't know why, but since I've implemented the #ThemeContext, every render basically renders twice.
  // You can see it if you uncoment the above log ^.
  // Because of that, ReactSVG, the component I'm using to render svgs in #SocialItem is breaking.
  // I have no idea why it's only breaking in the footer and not in skills, but it is.
  // This useEffect causes a rerender (3rd one) 100ms after the page was loaded, fixing the SVGs.
  //
  // Time wasted for nothing: 3hr and counting :(
  // useEffect(() => {
  //   setTimeout(() => forceRender(forceRenderValue + 1), 100);
  // }, []);
  //
  // Update 28/06/2021:
  // After 4 hours of research, I found out that the latest version of react-svg (13 at that time) is broken and causes a null parent when inserting svgs
  // After updating to version 14-beta I was able to fix this issue :)

  return (
    <div className={ styles.socials }>

      <SocialItem src={ socialLinks.twitter.src }  title={ socialLinks.twitter.title }  href={ socialLinks.twitter.link }  primaryColor={ socialLinks.twitter.color }  />
      <SocialItem src={ socialLinks.youtube.src }  title={ socialLinks.youtube.title }  href={ socialLinks.youtube.link }  primaryColor={ socialLinks.youtube.color } />
      <SocialItem src={ socialLinks.github.src }   title={ socialLinks.github.title }   href={ socialLinks.github.link }   primaryColor={ socialLinks.github.color } />
      <SocialItem src={ socialLinks.linkedin.src } title={ socialLinks.linkedin.title } href={ socialLinks.linkedin.link } primaryColor={ socialLinks.linkedin.color } />
      <SocialItem src={ socialLinks.npm.src }      title={ socialLinks.npm.title }      href={ socialLinks.npm.link }      primaryColor={ socialLinks.npm.color } />
      <SocialItem src={ socialLinks.spigot.src }   title={ socialLinks.spigot.title }   href={ socialLinks.spigot.link }   primaryColor={ socialLinks.spigot.color } />

    </div>
  );
}

export default Socials;