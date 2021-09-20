import Link from "next/link";

import styles from "./CenteredForm.module.css";

/**
 * The CenteredForm component
 * 
 * This component builds a form that is centered in the parent's width & height.
 * This component receives 4 properties:
 * - title (string): The title of the form
 * - footer? (string): The footer text of the form
 * - footerLink? (string): The footer text's link
 * - children? (any)
 */

interface props {
  title: string
  footer?: string
  footerLink?: string
  children?: any
}

const CenteredForm: React.FC<props> = ({ title, footer, footerLink, children }) => {
  return (
    <>
        <div className={ styles.centeredForm }>
          <div className={ styles.formWrapper }>

            <h2 className={ styles.test }>{ title }</h2> 

            <div className={ styles.formInputs }>
              { children }
            </div>

            { footer && <div className={ styles.bottomText }>
              { footerLink ? <Link href={ footerLink }>{ footer }</Link> : <a>{ footer }</a>}
            </div> }
          </div>
        </div>
    </>
  );
}

export default CenteredForm;
