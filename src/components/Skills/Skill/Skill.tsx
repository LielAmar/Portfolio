import { ReactSVG } from "react-svg";

import styles from "./Skill.module.css";

type props = {
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
