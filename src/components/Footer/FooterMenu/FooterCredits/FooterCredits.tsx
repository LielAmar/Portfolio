import styles from "./FooterCredits.module.css";

/**
 * The FooterCredits component
 * 
 * This component contains the footer credits.
 * 
 * This component renders the copyright mark & credits
 */

interface props {}

const FooterCredits: React.FC<props> = () => {
  return (
    <div className={ styles.credits }>

      <p>© 2020 Liel Amar. All Rights Reserved</p>
      <p>Icons from <span><a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">Flaticon</a></span></p>

    </div>
  );
}

export default FooterCredits;
