import styles from "./Footer.module.css";

interface props {}

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
