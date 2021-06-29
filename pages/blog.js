import React, {useState} from 'react'
import BlogPost from '../components/blogpost'
import Waves from '../components/svgs/waves';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import {fetchEntries} from '../helpers/fetchContent';

const Navbar = dynamic(() => import("../components/navbar.jsx"), {
  ssr: false,
});

export default function blog({posts}) {
  const filterLinkClasses = " mx-4 mb-12 cursor-pointer hover:underline rounded-md text-white px-2 py-2 px-1 rounded-md text-sm bg-grey font-semibold"
  const [currentFilter, setCurrentFilter] = useState('all');

  const currentPosts = posts.filter((post) => 
      currentFilter === "all" || post.level.toUpperCase() === currentFilter.toUpperCase()
  )
    return (
        <div className="">
            <Navbar/>
            <div className="relative md:mt-4 xl:mt-2 mt-8 gradient">
            <Waves />
          </div>
            <div className="container max-w-8xl mx-auto mx-12">
            <h1 className="w-full mt-32 mb-24 text-5xl font-bold leading-tight text-center text-gray-800">
                    Blog & Reading Practice
          </h1>
          <div className="flex justify-center items-center flex-col">
          <div className="flex flex-row">
            <a onClick={() => setCurrentFilter("beginner")} className={"level-beginner "+ filterLinkClasses}>BEGINNER</a>
            <a onClick={() => setCurrentFilter("intermediate")} className={ "level-intermediate "+ filterLinkClasses} >INTERMEDIATE</a>
            <a onClick={() => setCurrentFilter("advanced")} className={"level-advanced "+ filterLinkClasses}>ADVANCED</a>
          </div>
          </div>
            {
                currentPosts.map((blogPost, index) => 
                    <BlogPost blogPost={blogPost} key={blogPost.title} reverse={Boolean(index%2)}></BlogPost>
                )
            }
                </div>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetchEntries('blogpost');
    const posts = await res.map((p) => {
      return p.fields
    })
    return {
      props: {
        posts,
      },
    }
  }