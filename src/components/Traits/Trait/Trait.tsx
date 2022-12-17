import { ReactSVG } from "react-svg";

import styles from "./Trait.module.css";

/**
 * The Trait component
 * 
 * This component contains a single trait displayed under the #Traits component on the index (main) page of the website.
 * This component receives 4 properties:
 * - src (string): The source of the trait icon
 * - title (string): The title of the trait
 * - primaryColor (string): The primary color of the trait & color of the icon
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

const Trait: React.FC<props> = ({ src, title, primaryColor, children }) => {
  
  return (
    <div className={ styles.trait }>
      <ReactSVG src={ src } wrapper="span" style={ { fill: primaryColor } } />

      <h3>{ title }</h3>

      { children }
    </div>
  )
}

export default Trait
