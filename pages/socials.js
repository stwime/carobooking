import React from 'react';

import Head from "next/head";

import dynamic from "next/dynamic";
import Waves from '../components/svgs/waves.jsx';


const Navbar = dynamic(() => import("../components/navbar.jsx"), {
  ssr: false,
});

export default function SocialsPage() {
  return (
    <div className="bg-gray-100 h-screen">
      <Navbar/>
      <div className="relative md:-mt-4 xl:-mt-6 -mt-12 gradient">
          <Waves />
        </div>
      <div className="pt-12 h-auto bg-light-gray -mt-20 h-full">
          <h1>Social Media</h1>
      </div>
    </div>
  )

}