import { ReactSVG } from "react-svg";

import styles from "./Skill.module.css";

/**
 * The Skill component
 * 
 * This component contains a single skill displayed under the #Skills component on the index (main) page of the website.
 * This component receives 4 properties:
 * - src (string): The source of the skill icon
 * - title (string): The title of the skill
 * - primaryColor (string): The primary color of the skill & color of the icon
 * - children (any)
 * 
 * This component renders an SVG icon, title and information/children.
 */

interface props {
  src: string
  title: string
  primaryColor: string
  children: any
}

const Skill: React.FC<props> = ({ src, title, primaryColor, children }) => {
  
  return (
    <div className={ styles.skill }>
      <ReactSVG src={ src } wrapper="span" style={ { fill: primaryColor } } />

      <h3>{ title }</h3>

      { children }
    </div>
  )
}

export default Skill
