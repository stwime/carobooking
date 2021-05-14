import React from 'react';

export default function SellingPoint({
  title,
  innerContent,
  sideComponent,
  reverse = false,
}) {
  const additionalClasses = reverse ? 'flex-col-reverse sm:flex-row' : '';

  return (
    <div
      className={
        'flex flex-wrap ' + additionalClasses
      }>
      {reverse && (
        <div className="w-full sm:w-1/2 p-3 sm:p-6 mt-3 md:mt-6">{sideComponent}</div>
      )}
      <div className="w-full sm:w-1/2  p-3 sm:p-6 mt-3 md:mt-6">
        <div className="align-middle">
          <h2 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            {title}
          </h2>
          <div className="text-gray-600 mb-2 md:mb-6 p-margins" dangerouslySetInnerHTML={{ __html: innerContent}}>
          </div>
        </div>
      </div>
      {!reverse && (
        <div className="w-full sm:w-1/2 p-6 mt-6 flex items-center">{sideComponent}</div>
      )}
    </div>
  );
}
