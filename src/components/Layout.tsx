import React, { ReactNode } from "react";
import Head from "next/head";

type props = {
  children?: ReactNode
  title?: string
  description?: string
}

const Layout: React.FC<props> = ({ children, title = "Liel Amar", description = "Liel Amar's Portfolio website" }) => (
  <>
    <Head>
      <title>{title}</title>
      { description.length > 0 && <meta name="description" content={ description } /> }

      {/* Basic Tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link rel="icon" type="image/x-icon" href="favicon.ico" />

      {/* Apple Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      <link rel="apple-touch-icon" href="favicon.png" />
    </Head>

    {children}
  </>
)

export default Layout
