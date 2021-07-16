import Image from 'next/image';
import React from 'react';

export default function CourseCard({ title }) {
  return (
    <div className="w-96 bg-gray-100 m-4 rounded-lg">
      <div>
        <h2 className="text-3xl text-gray-800 font-bold m-4 leading-none mb-3">
          {title}
        </h2>
        <div className="text-gray-600 w-full h-48">
          <div className="w-full h-full relative">
          <Image
            layout="fill"
            objectFit="cover"
            className="object-scale rounded"
            src="https://picsum.photos/300/200"
          />
           </div>
        </div>
      </div>
    </div>
  );
}
