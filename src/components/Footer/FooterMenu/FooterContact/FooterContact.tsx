import Socials from "./Socials/Socials";

import styles from "./FooterContact.module.css";

interface props {}

const FooterContact: React.FC<props> = () => {
  return (
    <div className={ styles.contact }>
      
      <h2>Contact Me</h2>

      <Socials />

    </div>
  );
}

export default FooterContact;
