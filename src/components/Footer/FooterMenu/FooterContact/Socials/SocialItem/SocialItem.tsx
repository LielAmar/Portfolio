import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

import styles from "./SocialItem.module.css";

interface props {
  icon: IconDefinition
  title: string
  href: string
  primary: string
}

const SocialItem: React.FC<props> = ({ icon, title, href, primary }) => {
  const [hover, setHover] = useState(false);

  const toggleHover = () => setHover(!hover);

  return (
    <a href={ href } className={ styles.socialItem } target="_blank" title={ title } >

      { hover ? 
        <FontAwesomeIcon icon={ icon } style={{ color: primary }} onMouseEnter={ toggleHover } onMouseLeave={ toggleHover } size="2x"></FontAwesomeIcon>
        :
        <FontAwesomeIcon icon={ icon } onMouseEnter={ toggleHover } onMouseLeave={ toggleHover } size="2x"></FontAwesomeIcon>
      }

    </a>
  )
}

export default SocialItem;
