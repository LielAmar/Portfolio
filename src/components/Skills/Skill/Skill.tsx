import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Skill.module.css";

type props = {
  icon: IconDefinition
  iconColor: string
  title: String
  children: any
}

const Skill: React.FC<props> = ({ icon, iconColor, title, children }) => (
  <div className={ styles.skill }>
    <FontAwesomeIcon icon={ icon } style={ { color: iconColor } } size="4x"/>

    <h3>{ title }</h3>

    { children }
  </div>
)

export default Skill
