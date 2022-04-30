import React from 'react';

import Head from "next/head";

import dynamic from "next/dynamic";
import Waves from '../components/svgs/waves.jsx';


const Navbar = dynamic(() => import("../components/navbar.jsx"), {
  ssr: false,
});


const CalendlyContainer = dynamic(() => import("../components/calendlycontainer.jsx"), {
  ssr: false,
});

export default function BookingPage() {
    return (
      <div className="bg-gray-100 h-screen">
        <Navbar/>
        <div className="relative md:-mt-4 xl:-mt-6 -mt-12 gradient">
            <Waves />
          </div>
        <div className="pt-12 h-auto bg-gray-100 lg:-mt-12 mt-2 h-full">
            <CalendlyContainer />
        </div>
      </div>
    )

}