import { useRouter } from "next/router";
import Head from "next/head";

import { useAuthState } from "react-firebase-hooks/auth";

import Layout from "../components/Layout";

import firebase from "../../firebase/firebase";
import { __name__ } from "@config/global";

const auth = firebase.auth();


const authPage = () => {
  const router = useRouter();
  const [_user] = useAuthState(auth);

  /**
   * Function to sign in with a provider
   * 
   * @param provider 
   */
  const signIn = (provider: firebase.auth.AuthProvider) => auth.signInWithPopup(provider);  

  /**
   * When the user's state changes, we want to check if it's now logged in
   * If so, we want to redirect the user to the homepage
   * 
   * Meaning, if a user is already signed in OR if the user just signed in through #signIn, we would redirect them
   */
  auth.onAuthStateChanged(user => {
    if(user)
      router.push("/");
  });

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
        <button onClick={ () => signIn(new firebase.auth.GoogleAuthProvider()) }>Sign In With Google</button>
        <button onClick={ () => signIn(new firebase.auth.GithubAuthProvider()) }>Sign In With GitHub</button>
      </Layout>
    </>
  );
}

export default authPage;