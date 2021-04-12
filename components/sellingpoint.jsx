import React from 'react';

export default function SellingPoint({
  title,
  text,
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
        <div className="w-full sm:w-1/2 p-6 mt-6">{sideComponent}</div>
      )}
      <div className="w-full sm:w-1/2 p-6 mt-6">
        <div className="align-middle">
          <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            {title}
          </h3>
          <p className="text-gray-600 mb-8">
            {text}
            <br />
            <br />
          </p>
        </div>
      </div>
      {!reverse && (
        <div className="w-full sm:w-1/2 p-6 mt-6">{sideComponent}</div>
      )}
    </div>
  );
}
