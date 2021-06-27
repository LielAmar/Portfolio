import Head from "next/head";

import Layout from "@components/Layout";
import Introduction from "@components/Introduction/Introduction";
import Skills from "@components/Skills/Skills";
import Works from "@components/Work/Works";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import FooterMenu from "@components/Footer/FooterMenu/FooterMenu";
import CookieConsent from "@components/CookieConsent/CookieConsent";

import { __project__ } from "../config/global";

const IndexPage = () => {
  return (
    <>
      <Head>
        {/* Facebook Open Graph Tags */}
        <meta property="og:url"                content="https://www.lielamar.com/" />
        <meta property="og:type"               content="website" />
        <meta property="og:title"              content="Liel Amar - Portfolio Website" />
        <meta property="og:description"        content="Liel Amar - A Software Developer, Graphic Designer and Video Editor" />
        <meta property="og:image"              content="/favicon.png" />

        {/* Twitter Cards Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@iamlielamar" />
        <meta name="twitter:creator" content="@iamlielamar" />
      </Head>
      
      <Layout title={ `${__project__} - Portfolio` } description={ `Liel Amar's Portfolio Website - Home page` }>
        <Navbar />

        <Introduction />

        <Skills />

        <Works />

        <Footer>
          <FooterMenu includeEmbeds={ true }/>
        </Footer>

        <CookieConsent>
          <p>This website uses cookies to improve your experience. You can toggle some cookies off and learn more by visiting our <span><a href="/cookiepolicy">Cookie Policy</a></span> page.</p>
        </CookieConsent>
      </Layout>
    </>
  );
}

export default IndexPage;