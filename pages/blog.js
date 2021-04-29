import React from 'react'
import BlogPost from '../components/blogpost'
import Waves from '../components/svgs/waves';
import dynamic from 'next/dynamic';

import {fetchEntries} from '../helpers/blogposts';

const Navbar = dynamic(() => import("../components/navbar.jsx"), {
  ssr: false,
});

export default function blog({posts}) {
    return (
        <div className="">
            <Navbar/>
            <div className="relative md:mt-4 xl:mt-2 mt-8 gradient">
            <Waves />
          </div>
            <div className="container max-w-6xl mx-auto mx-12">
            <h1 className="w-full my-32 text-5xl font-bold leading-tight text-center text-gray-800">
                    Blog & Reading Practice
          </h1>
            {
                posts.map((blogPost, index) => 
                    <BlogPost blogPost={blogPost} key={blogPost.title}  reverse={Boolean(index%2)}></BlogPost>
                )
            }
                </div>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetchEntries();
    const posts = await res.map((p) => {
      return p.fields
    })
  
    return {
      props: {
        posts,
      },
    }
  }
  