import styles from "./FooterSeperator.module.css";

/**
 * The Seperator component
 * 
 * This component renders a single div to act as a seperator between sections in the footer
 */

interface props {}

const FooterSeperator: React.FC<props> = () => {
  return (
    <div className={ styles.seperator }>
    </div>
  );
}

export default FooterSeperator;
