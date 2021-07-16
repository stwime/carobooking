import React, {useState} from 'react'
import BlogPost from '../components/blogpost'
import Waves from '../components/svgs/waves';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';


const Navbar = dynamic(() => import("../components/navbar.jsx"), {
  ssr: false,
});


export default function profile() {

  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
    return (
        <div className="">
            <Navbar/>
            <div className="relative md:mt-4 xl:mt-2 mt-8 gradient">
            <Waves />
          </div>
          <h1 className="w-full mt-12 mb-24 text-5xl font-bold leading-tight text-center text-gray-800">
                    Welcome back, {user.name}!
          </h1>
            <div className="container max-w-8xl mx-auto mx-12 flex justify-center items-center">
            <h2 className="m-12 text-2xl flex">Your courses</h2>
            <h2 className="m-12 text-2xl flex">Your homework</h2>
            <h2 className="m-12 text-2xl flex">Your feedback</h2>
            <h2 className="m-12 text-2xl flex">Your lessons</h2>
          </div>
          <div className="flex justify-center items-center flex-col">
            
          </div>
        </div>
    )
}

export const getServerSideProps = withPageAuthRequired();