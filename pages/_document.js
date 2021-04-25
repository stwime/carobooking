import React from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Spanish Teacher Carolina Kowanz</title> 
          <meta name="description" content= "Your professional, personal spanish teacher - The easiest and quickest way to start or improve your Spanish! Book an online lesson or join a free group lesson today" />
          <meta name="robots" content= "index, follow"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument