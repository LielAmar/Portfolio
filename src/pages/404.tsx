import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Layout from "@components/Layout";

import { __name__ } from "@config/global";

import styles from "../styles/error.module.css";

const FourOhFour = () => {
  const [redirectingMessage, setRedirectingMessage] = useState("Redirecting");
  const router = useRouter();

  // Redirecting to home page after 5 seconds
  useEffect(() => {
    setTimeout(() => router.push("/", undefined, { scroll: false }), 5000);
    
    setTimeout(updateRedirectingMessage, 400);
  });

  /**
   * Updates the redirect message
   */
  const updateRedirectingMessage = () => {
    if(redirectingMessage === "Redirecting") setRedirectingMessage("Redirecting.");
    else if(redirectingMessage === "Redirecting.") setRedirectingMessage("Redirecting..");
    else if(redirectingMessage === "Redirecting..") setRedirectingMessage("Redirecting...");
    else if(redirectingMessage === "Redirecting...") setRedirectingMessage("Redirecting");
  }

  return (
    <Layout title={ `${__name__} | Page Not Found` } description={ `` }>
      
      <div className={ styles.error }>
        <div className={ styles.information }>
          <h4>404</h4>
          <p>This page could not be found</p>
        </div>

        <div className={ styles.redirect }>
          <p>{ redirectingMessage }</p>
        </div>
      </div>

    </Layout>
  );
}

export default FourOhFour;