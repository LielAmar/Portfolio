import Head from "next/head";
import firebase from "firebase";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import CenteredForm from "@components/CenteredForm/CenteredForm";
import SVGButton from "@components/Button/SVGButton/SVGButton";
import { AuthContext  } from "@context/AuthContext";

import { __name__ } from "@config/global";


const authPage = () => {
  const router = useRouter();
  const { user, login, loading } = useContext(AuthContext);

  
  // If at some point the user was loaded and we are not loading anymore,
  // we want to redirect the user to /dashboard instead of staying in the login page
  useEffect(() => {
    if(user && !loading)
      router.push("/dashboard");
  }, [user, loading]);

  return (
    <>
      <Head>          
        {/* Facebook Open Graph Tags */}
        <meta property="og:url"                content="https://www.lielamar.com/login" />
        <meta property="og:type"               content="website" />
        <meta property="og:title"              content="Liel Amar - Login" />
        <meta property="og:description"        content="Liel Amar - Log In with your account" />
        <meta property="og:image"              content="/favicon.png" />
        
        {/* Twitter Cards Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@iamlielamar" />
        <meta name="twitter:creator" content="@iamlielamar" />
      </Head>

      <Layout title={ `${__name__} | Login` } description={ `Liel Amar's Portfolio Website - Login page` }>
        <CenteredForm title="Login" footer="Back to Home Page" footerLink="/">
          <SVGButton src="/svgs/google_g.svg" alt="Google Logo" text="Sign in with Google" borderColor="#4285F4" onClick={ () => login(new firebase.auth.GoogleAuthProvider()) }/>
          <SVGButton src="/svgs/github_colored.svg" alt="GitHub Logo" text="Sign in with GitHub" borderColor="#333333" onClick={ () => login(new firebase.auth.GithubAuthProvider()) }/>
        </CenteredForm>
      </Layout>
    </>
  );
}

export default authPage;