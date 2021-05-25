import FooterMenu from "./FooterMenu/FooterMenu";

import styles from "./Footer.module.css";

interface props {}

const Footer: React.FC<props> = () => {
  return (
    <footer id="contact" className={ styles.footer }>
      <div className={ styles.footerWrapper }>

        <FooterMenu />

      </div>
    </footer>
  );
}

export default Footer;
