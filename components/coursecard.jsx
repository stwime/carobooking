import Image from 'next/image';
import React from 'react';

export default function CourseCard({
  title,
  url,
  image,
  description,
  tags = [],
  large=false,
}) {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white pt-4">
      <a href={url} target="_blank" referrerPolicy="no-referrer">
        <div className={`w-full relative ${large ? 'h-72' : 'h-48'}`}>
          <Image layout="fill" objectFit="contain" src={image} />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-gray-700 mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags.map((tag) => (
            <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {tag}
            </span>
          ))}
        </div>
      </a>
    </div>
  );
}
