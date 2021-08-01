import Image from 'next/image';
import React from 'react';

export default function CourseCard({ title, url, image }) {
  return (
    <div className="w-4/12 min-w-min bg-gray-100 m-8 rounded-lg">
      <a href={url} target="_blank" referrerPolicy="no-referrer">
      <div>
        <h2 className="text-3xl text-center text-gray-800 font-bold m-4 min-h-12 leading-none mb-3">
          {title}
        </h2>
        <div className="text-gray-600 w-full md:h-72 h-48">
          <div className="w-full h-full relative">
          <Image
            layout="fill"
            objectFit="cover"
            className="object-scale rounded"
            src={image}
          />
           </div>
        </div>
      </div>
      </a>
    </div>
  );
}
