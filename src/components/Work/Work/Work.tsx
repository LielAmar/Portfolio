import Image from "next/image";

import styles from "./Work.module.css";

type props = {
  img: string
  alt: string
  imgHref: string
  title: string
  titleHref: string
  role: string
  children: any
}

const Work: React.FC<props> = ({ img, alt, imgHref, title, titleHref, role, children }) => {
  return (
    <div className={ styles.work }>
      <a href={ imgHref } target="_blank" rel="noopener noreferrer" >
        <Image src={ img } alt={ alt } width={ 250 } height={ 250 } />
      </a>

      <a href={ titleHref } target="_blank" rel="noopener noreferrer" ><h2>{ title }</h2></a>
      <h3>{ role }</h3>

      { children }
    </div>
  );
}

export default Work
