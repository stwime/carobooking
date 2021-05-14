import React from 'react';

import Head from 'next/head';

import dynamic from 'next/dynamic';
import Waves from '../components/svgs/waves.jsx';

const Navbar = dynamic(() => import('../components/navbar.jsx'), {
  ssr: false,
});

export default function SocialsPage() {
  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <div className="relative md:-mt-4 xl:-mt-6 -mt-12 gradient">
        <Waves />
      </div>
      <div className="pt-12 h-auto bg-light-gray -mt-20 h-full">
      <div className="container max-w-6xl mx-auto mx-12">
      <h1 className="w-full my-32 text-5xl font-bold leading-tight text-center text-gray-800">My podcast on Spotify</h1>
        <div className="p-2 sm:p-12 lg:p-24">
        <iframe  data-cookiescript="accepted" alt="Please accept cookie policy first" data-src="https://open.spotify.com/embed-podcast/episode/1Fif1COxC9QX8VqGfh9y4y" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <h1 className="w-full my-32 text-5xl font-bold leading-tight text-center text-gray-800">Instagram</h1>
        </div>
      </div>
    </div>
  );
}
