import React, { useRef } from 'react';
import Image from 'next/image';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import ReactAudioPlayer from 'react-audio-player';
import dynamic from 'next/dynamic';

const AudioPlayer = dynamic(() => import("./audioplayer"), {
  ssr: false,
});


export default function BlogPost({
  blogPost,
  reverse = false,
  priority = false,
}) {
  const additionalClasses = reverse ? 'flex-col-reverse sm:flex-row' : '';
  const imageComponent = (
    <div className="px-20 w-5/12 max-h-screen p-6">
      <div className="w-full h-full sm:invisible md:visible relative">
        <Image
          alt={blogPost.image.fields.title}
          layout="fill"
          objectFit="cover"
          className="object-scale rounded"
          src={'https:' + blogPost.image.fields.file.url}
          priority={priority}
        />
      </div>
    </div>
  );


  return (
    <div className={'flex flex-wrap mt-2' + additionalClasses}>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-1/4 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      {reverse && imageComponent}
      <div className="sm:w-full p-2 md:p-8 md:w-7/12 pt-6 mt-2">
        <div className="align-middle">
          <small className="text-sm text-gray-400 mb-4">
            {blogPost.level.toUpperCase()}
          </small>
          <h3 className="text-5xl text-gray-800 font-bold leading-none mb-8 mt-3">
            {blogPost.title}
          </h3>
          <div>
            {blogPost.audio && (
                <AudioPlayer  src={blogPost.audio.fields.file.url}/>
            )}
          </div>
          <div
            className="article text-gray-800 mb-8"
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(blogPost.text),
            }}></div>
        </div>
      </div>
      {!reverse && imageComponent}
    </div>
  );
}
