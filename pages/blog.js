import React from 'react'
import BlogPost from '../components/blogpost'
import Navbar from '../components/navbar'
import Waves from '../components/svgs/waves';


import {fetchEntries} from '../helpers/blogposts';

export default function blog({posts}) {
    return (
        <div className="">
            <Navbar alwaysDark={true}/>
            <div className="relative  gradient">
            <Waves />
            </div>
            <div className="container max-w-6xl mx-auto mx-12">
            <h1 className="w-full my-32 text-5xl font-bold leading-tight text-center text-gray-800">
                    Blog & Reading Practice
        </h1>
            {
                posts.map((blogPost, index) => 
                    <BlogPost title={blogPost.title} text={blogPost.text} level={blogPost.level} imagePath={"https:"+blogPost.image.fields.file.url} reverse={Boolean(index%2)}></BlogPost>
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
  