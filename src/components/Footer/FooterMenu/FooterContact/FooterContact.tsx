import Socials from "./Socials/Socials";

import styles from "./FooterContact.module.css";

/**
 * The FooterContact component
 * 
 * This component contains the footer contact options.
 * 
 * This component renders a title & multiple socials
 */

interface props {}

const FooterContact: React.FC<props> = () => {
  return (
    <div className={ styles.contact }>
      <h2>Contact Me</h2>

      <Socials></Socials>
    </div>
  );
}

export default FooterContact;
