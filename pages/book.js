import React from 'react';

import Head from "next/head";

import dynamic from "next/dynamic";
import Navbar from '../components/navbar.jsx';


const CalendlyContainer = dynamic(() => import("../components/calendlycontainer.jsx"), {
  ssr: false,
});

export default function BookingPage() {
    return (
      <div>
        <Navbar alwaysDark={true}/>
        <div className="pt-12 h-screen bg-gray-100">
            <CalendlyContainer />
        </div>
      </div>
    )

}