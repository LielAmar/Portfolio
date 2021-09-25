import Image from "next/image";

import styles from "./Work.module.css";

/**
 * The Work component
 * 
 * This component contains a single work displayed under the #Works component on the index (main) page of the website.
 * This component receives 7 properties:
 * - src (string): The source of the work icon
 * - alt (string): An alternative description for the icon
 * - iconHref (string): A redirect link for the icon
 * - title (string): A title for the work
 * - titleHref (string): A redirect link for the title
 * - role (string): A role for the work
 * - children (any)
 * 
 * This component renders an icon, title, subtitle and information/children.
 */

interface props {
  src: string
  alt: string
  iconHref: string
  title: string
  titleHref: string
  role: string
  children: any
}

const Work: React.FC<props> = ({ src, alt, iconHref, title, titleHref, role, children }) => {
  return (
    <div className={ styles.work }>
      <a href={ iconHref } target="_blank" rel="noopener noreferrer" >
        <Image src={ src } alt={ alt } width={ 250 } height={ 250 } loading="lazy" />
      </a>

      <a href={ titleHref } target="_blank" rel="noopener noreferrer" ><h2>{ title }</h2></a>
      <h3>{ role }</h3>

      { children }
    </div>
  );
}

export default Work
