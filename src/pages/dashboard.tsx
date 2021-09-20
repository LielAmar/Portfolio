import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import { AuthContext  } from "@context/AuthContext";

import { __name__ } from "@config/global";

// import styles from "../styles/dashboard.module.css";


const authPage = () => {
  const router = useRouter();
  const { user, logout, loading } = useContext(AuthContext);
  
  const [inputAdminEmail, setInputAdminEmail] = useState<string>("");

  // If at some point the user doesn't exists (not logged in) and we are not loading anymore,
  // we want to redirect the user to / instead of staying in the dashboard page
  useEffect(() => {
    if(!user && !loading)
      router.push("/");
  }, [user, loading]);

  return (
    <>
      <Head>          
        {/* Facebook Open Graph Tags */}
        <meta property="og:url"                content="https://www.lielamar.com/dashboard" />
        <meta property="og:type"               content="website" />
        <meta property="og:title"              content="Liel Amar - Dashboard" />
        <meta property="og:description"        content="Liel Amar - Dashboard with your account" />
        <meta property="og:image"              content="/favicon.png" />
        
        {/* Twitter Cards Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@iamlielamar" />
        <meta name="twitter:creator" content="@iamlielamar" />
      </Head>


      <Layout title={ `${__name__} | Dashboard` } description={ `Liel Amar's Portfolio Website - Dashboard page` }>
        {/* <div className={ styles.dashboard }>
          <div className={ styles.sidebar }>

            <h2 className={ styles.test }>{ user?.displayName }</h2>
          </div>

          <div>Other content</div>

          <button onClick={ logout }>Log Out</button>
        </div> */}

        <style global>{`
          html,
          body,
          body > div:first-child,
          div#__next {
            height: 100%;
          }
        `}
        </style>
      </Layout>
    </>

        // {/* { user &&<h2 style={ { color: "#ffffff" } }>Welcome back, { user.email }.</h2> }
        // { user && user.isAdmin && <h2 style={ { color: "#ffffff" } }>You are an admin!</h2> }

        // <button onClick={ logout }>Log Out</button>

        // { user && user.isAdmin && <input type="email" value={inputAdminEmail} onChange={event => setInputAdminEmail(event.target.value) }/> }
        // { user && user.isAdmin && <button onClick={ async () => {
        //   const addAdmin = firebase.functions().httpsCallable("addAdmin");
        //   const result = await addAdmin({ executor: user?.uid, email: inputAdminEmail })
        //   console.log(result);
        // } }>Add Admin</button> }

        // { user && user.isAdmin && <button onClick={ async () => {
        //   const removeAdmin = firebase.functions().httpsCallable("removeAdmin");
        //   const result = await removeAdmin({ executor: user?.uid, email: inputAdminEmail })
        //   console.log(result);
        // } }>Remove Admin</button> } */}
      
    
  );
}

export default authPage;