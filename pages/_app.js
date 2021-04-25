import React from 'react';
import Head from 'next/head'

import '../global.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Spanish Teacher Carolina Kowanz</title>
        <meta
          name="description"
          content="Your professional, personal spanish teacher. The quickest way to start or improve your Spanish! Book an online lesson or join a free group lesson today"
        />
        <meta name="robots" content="index, follow"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
