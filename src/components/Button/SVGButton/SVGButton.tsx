import Image from "next/image";
import imageLoader from "utils/ImageLoader";

import styles from "./SVGButton.module.css";

/**
 * The SVGButton component
 * 
 * This component builds a button with an SVG icon and a colored border.
 * This component receives 5 properties:
 * - src (string): The source of the SVG icon
 * - alt (string): The alt of the icon 
 * - text (string): The text of the button
 * - borderColor (string): The color of the button's border
 * - onClick (function): Function to execute on click
 */

interface props {
  src: string
  alt: string
  text: string
  borderColor: string
  onClick: () => void
}

const SVGButton: React.FC<props> = ({ src, alt, text, borderColor, onClick }) => {
  return (
    <div className={ styles.rectengleSvgButton } style={ { borderStyle: "solid", borderWidth: "2px", borderRadius: "0.5rem", borderColor: borderColor } } onClick={ onClick }>
      <Image loader={ () => imageLoader(src, 20) } src={ src } alt={ alt } width={ 20 } height={ 20 }/>
      <h3>{ text }</h3>
    </div>
  );
}

export default SVGButton;
