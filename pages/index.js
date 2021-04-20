import React from 'react';
import ConnectedWorld from '../components/svgs/connected-world';
import OnlineLearning from '../components/svgs/onlinelearning.jsx';
import SellingPoint from '../components/sellingpoint';
import Reading from '../components/svgs/reading';
import Waves from '../components/svgs/waves';
import dynamic from "next/dynamic";
import Image from 'next/image';


const Navbar = dynamic(() => import("../components/navbar.jsx"), {
  ssr: false,
});


const Home = () => (
  <div
    className="leading-normal tracking-normal text-white gradient"
    style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
    <Navbar />
    <div className="pt-24">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Start learning Spanish today!
          </h1>
          <p className="leading-normal text-2xl mb-8">
            Lean Spanish with a professional, certified teacher - and get
            speaking, improve or perfect your Spanish in no time!
          </p>
          <a
            href="/book"
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Book a Lesson
          </a>
        </div>
        <div className="w-full md:w-2/5 py-6 text-center">
          <div className="w-full md:w-4/5 z-50">
            <div className="m-12 h-96 w-96 relative">
              <Image layout="fill" src="/herotest.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="relative md:-mt-1 xl:-mt-12 mt-0 gradient">
            <Waves />
          </div>
    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Your personal spanish teacher
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <SellingPoint
          title={'Professional Teacher'}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula. Bla bla,
              having a real teacher is so great, it's true!"
          sideComponent={<OnlineLearning />}
        />
        <SellingPoint
          title={'The quickest way to learn'}
          text="Learning with a personal teacher in lessons tailored to you has proven again and again to be the quickest way to improve or pick up a new language"
          sideComponent={<ConnectedWorld />}
          reverse={true}
        />
        <SellingPoint
          title={'Individual Lessons & Material'}
          text="Learn at your own pace or join a group if you want idk"
          sideComponent={<Reading />}
        />
      </div>
    </section>
    <svg className="wave-top" viewBox="0 0 1439 147" version="1.1">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
          <g className="wave" fill="#f8fafc">
            <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
          </g>
          <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
            <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                opacity="0.200000003"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <section className="container mx-auto text-center pt-12 pb-36">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
        What are you waiting for?
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <h3 className="my-4 text-3xl leading-tight">
        Book your first lesson and start learning today!
      </h3>
      <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
        <a href="/book">Book now!</a>
      </button>
    </section>
  </div>
);

export default Home;
