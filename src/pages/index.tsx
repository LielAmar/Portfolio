import Head from "next/head";

import Layout from "@components/Layout";
import Introduction from "@components/Introduction/Introduction";
import Skills from "@components/Skills/Skills";
import Works from "@components/Work/Works";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import FooterMenu from "@components/Footer/FooterMenu/FooterMenu";
import CookieConsent from "@components/CookieConsent/CookieConsent";

import { __name__ } from "../config/global";

const IndexPage = () => {
  return (
    <>
      <Head>
        {/* Open Graph Tags */}
        <meta property="og:type"               content="website" />
        <meta property="og:url"                content="https://www.lielamar.com/" />
        <meta property="og:site_name"          content={ `${__name__} | Portfolio` } />
        <meta property="og:title"              content={ `${__name__} | Developer, Designer & Editor` } />
        <meta property="og:description"        content={ `My name is ${__name__}, I am a Full Stack developer, a UI/UX designer and a Video Editor.` } />
        <meta property="og:image"              content="/favicon.png" />

        {/* Twitter Cards Tags */}
        <meta name="twitter:card"              content="summary" />
        <meta name="twitter:domain"            content="www.lielamar.com" />
        <meta name="twitter:site"              content="@iamlielamar" />
        <meta name="twitter:creator"           content="@iamlielamar" />      
      </Head>
      
      {/* data-nosnippet is being used to prevent google from taking snippets from anywhere else but the description meta tag, at least for the index (home) page. */}
      <Layout title={ `${__name__} | Developer, Designer & Editor` } description={ `My name is ${__name__}, I am a Full Stack developer, a UI/UX designer and a Video Editor.` } data-nosnippet>
        <Navbar />

        <Introduction />

        <Skills />

        <Works />

        <Footer>
          <FooterMenu includeEmbeds/>
        </Footer>

        <CookieConsent>
          <p>This website uses cookies to improve your experience. You can toggle some cookies off and learn more by visiting our <span><a href="/cookiepolicy">Cookie Policy</a></span> page.</p>
        </CookieConsent>
      </Layout>
    </>
  );
}

export default IndexPage;