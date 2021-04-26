import React from 'react';
import Head from 'next/head'
import CookieConsent, { Cookies } from "react-cookie-consent";


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
      <CookieConsent
        location="bottom"
        disableStyles={true}
        buttonText="Agree!"
        cookieName="hasConsentedToCookies"
        containerClasses="flex h-auto md:h-12 bg-gray-300 sticky bottom-0 "
        sameSite="strict"
        contentClasses="flex items-center m-4"
        buttonClasses="m-2 bg-white rounded p-2 py-1 max-h-12 shadow hover:text-white hover:bg-gray-800 transition duration-150"
        buttonWrapperClasses="flex align-middle"
        expires={150}
        onAccept={() => {
         // Load google analytics
        }}
      >
        We use cookies for analytics and for an enhanced user experience, such as embedding content from other websites.
      </CookieConsent>
    </>
  );
}
