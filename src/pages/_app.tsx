import { useEffect } from 'react';

import "../styles/global.css";

const App = ({ Component, pageProps }: any) => {

  // Loading google analytics
  useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-7VB04G99YZ");
    s.setAttribute("async", "true");
    document.head.appendChild(s);

    (window as any).dataLayer = (window as any).dataLayer || [];

    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }

    gtag('js', new Date());
    gtag('config', 'G-7VB04G99YZ');
  }, []);

  return <Component {...pageProps} />
}

export default App;