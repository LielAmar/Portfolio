import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Layout from "@components/Layout";

import { __project__ } from "@config/global";

import styles from "../styles/error.module.css";

const FourOhFour = () => {
  const [redirectingMessage, setRedirectingMessage] = useState("Redirecting");
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push("/", undefined, { scroll: false }), 5000);

    setTimeout(() => updateRedirectingMessage(), 400);
  });

  const updateRedirectingMessage = (): Boolean => {
    if(redirectingMessage === "Redirecting") setRedirectingMessage("Redirecting.");
    else if(redirectingMessage === "Redirecting.") setRedirectingMessage("Redirecting..");
    else if(redirectingMessage === "Redirecting..") setRedirectingMessage("Redirecting...");
    else if(redirectingMessage === "Redirecting...") setRedirectingMessage("Redirecting");
    
    return true;
  }

  return (
    <Layout title={ `Page not found - ${__project__}` } description={ `` }>
      
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