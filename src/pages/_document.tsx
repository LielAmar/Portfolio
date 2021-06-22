import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class PortfolioDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await Document.getInitialProps(context);
    return { ...initialProps }
  }
  
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