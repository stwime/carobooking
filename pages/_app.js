import React, { useEffect } from 'react';
import Head from 'next/head'
import CookieConsent, { Cookies } from "react-cookie-consent";


import '../global.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Language Teacher Caro Kowanz</title>
        <meta
          name="description"
          content="Your professional, personal language teacher for Spanish and English. The quickest way to start or improve your language learning! Book an online lesson or join a free group lesson today"
        />
        <meta name="robots" content="index, follow"></meta>

      </Head>
      <Component {...pageProps} />
      <CookieConsent
        location="bottom"
        disableStyles={true}
        buttonText="Agree!"
        containerClasses="flex h-auto md:h-12 bg-gray-300 sticky bottom-0 z-50"
        sameSite="strict"
        contentClasses="flex items-center m-4"
        buttonClasses="m-2 bg-white rounded p-2 py-1 max-h-12 shadow hover:text-white hover:bg-gray-800 transition duration-150"
        buttonWrapperClasses="flex align-middle"
        expires={150}
        onAccept={() => {
         window.location.reload();
        }}
      >
        We use cookies for analytics and for an enhanced user experience, such as embedding content from Youtube.
      </CookieConsent>
    </>
  );
}
