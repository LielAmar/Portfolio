import Image from "next/image";

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
  iconWidth: number
  iconHeight: number
  text: string
  borderColor: string
  onClick: () => void
}

const SVGButton: React.FC<props> = ({ src, alt, iconWidth, iconHeight, text, borderColor, onClick }) => {
  return (
    <div className={ styles.rectengleSvgButton } style={ { borderStyle: "solid", borderWidth: "2px", borderRadius: "0.5rem", borderColor: borderColor } } onClick={ onClick }>
      <Image src={ src } alt={ alt } width={ iconWidth } height={ iconHeight }/>
      <h3>{ text }</h3>
    </div>
  );
}

export default SVGButton;
