import React, { useState } from 'react';
import { getCookieConsentValue } from 'react-cookie-consent';
import Cookies from 'js-cookie';
import Image from 'next/image';

const setAcceptCookie = () => {
  Cookies.set('CookieConsent', true);
};
export default function ExternalContentWrapper({
  children,
  name,
  alternateLink,
}) {
  const hasCookieAccepted = getCookieConsentValue();
  const [hasAccepted, setHasManuallyAccepted] = useState(hasCookieAccepted);

  return (
    <div className="w-full h-full">
      {hasAccepted ? (
        <>{children}</>
      ) : (
        <>
          <div className="w-full h-96 bg-gray-200 rounded flex items items-center justify-center relative">
            <div className="z-10 bg-white bg-opacity-90 rounded m-2 p-4 md:p-6 lg:p-10">
              <p className="text-2xl text-gray-700 text-center mb-8">External Content</p>
              <p className=" text-gray-700 text-center">
                Please
                <a
                  className="text-black cursor-pointer bg-white shadow border rounded-lg p-2 m-2"
                  onClick={() => {setHasManuallyAccepted(true); setAcceptCookie()}}>
                  Accept cookies
                </a>
                to watch this video here,
                <p className="my-4">
                  or view it directly on
                  <a
                    className="text-black mx-2 underline rounded"
                    href={alternateLink}
                    target="_blank">
                    {name}
                  </a>
                </p>
              </p>
            </div>
            <Image
              alt="Video Teching Online Introduction Thumbnail"
              layout="fill"
              objectFit="cover"
              className="object-scale rounded z-5 opacity-30"
              src="/thumbnail.png"
              priority={true}
            />
          </div>
        </>
      )}
    </div>
  );
}
