import React from "react";
import Head from "next/head";

/**
 * The Layout component
 * 
 * This component assembles the default layout of pages, adds basic meta tags, icons and information for each page.
 * This component receives 3 properties:
 * - children (any)
 * - ?title (string): A title for the page
 * - ?description (string): A description for the page
 * 
 * This component renders an icon, title, subtitle and information/children.
 */

interface props {
  children?: any
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
