import ReactGA from "react-ga";

import { useEffect } from 'react';

import "../styles/global.css";

const App = ({ Component, pageProps }: any) => {
  // Loading google analytics
  useEffect(() => {
    ReactGA.initialize("UA-197860180-2", {
      debug: true,
      titleCase: false,
      gaOptions: {
        name: "Portfolio Tracker"
      }
    });
  }, []);

  return <Component {...pageProps} />
}

export default App;