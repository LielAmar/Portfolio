import { ReactSVG } from "react-svg";

import styles from "./SocialItem.module.css";

/**
 * The Social component
 * 
 * This component represents a single Social item with an icon & color.
 * This component receives 4 properties:
 * - src (string): The source of the icon
 * - title (string): The title of the social item
 * - href (string): The redirect link of the social item
 * - primaryColor (string): The primary color of the social item
 * 
 * This component renders an 'a' element with an SVG icon as a child
 */

interface props {
  src: string
  title: string
  href: string
  primaryColor: string
}

const SocialItem: React.FC<props> = ({ src, title, href, primaryColor }) => {
  console.log(src);

  return (
    <a href={ href } className={ styles.socialItem } target="_blank" rel="noopener noreferrer" title={ title } >
      <ReactSVG src={ src } wrapper="span" style={ { fill: primaryColor } } />
    </a>
  )
}

export default SocialItem;