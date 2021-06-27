import styles from "./Footer.module.css";

/**
 * The Footer component
 * 
 * This component contains the footer displayed on the index (main) page of the website.
 * This component receives 1 property:
 * - children (any)
 */

interface props {
  children: any
}

const Footer: React.FC<props> = ({ children }) => {
  return (
    <footer id="contact" className={ styles.footer }>
      <div className={ styles.footerWrapper }>

        { children }

      </div>
    </footer>
  );
}

export default Footer;
