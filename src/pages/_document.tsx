import Document, { Html, Head, Main, NextScript } from 'next/document'

class PortfolioDocument extends Document {
  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head/>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default PortfolioDocument