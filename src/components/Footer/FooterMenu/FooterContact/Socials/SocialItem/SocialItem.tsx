import { ReactSVG } from "react-svg";

import styles from "./SocialItem.module.css";

interface props {
  src: string
  title: string
  href: string
  primaryColor: string
}

const SocialItem: React.FC<props> = ({ src, title, href, primaryColor }) => {
  return (
    <a href={ href } className={ styles.socialItem } target="_blank" rel="noopener noreferrer" title={ title } >
      <ReactSVG src={ src } wrapper="span" style={ { fill: primaryColor } } />
    </a>
  )
}

export default SocialItem;
