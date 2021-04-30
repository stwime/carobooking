import React from 'react';
import ConnectedWorld from '../components/svgs/connected-world';
import OnlineLearning from '../components/svgs/onlinelearning.jsx';
import SellingPoint from '../components/sellingpoint';
import Reading from '../components/svgs/reading';
import Waves from '../components/svgs/waves';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Navbar = dynamic(() => import('../components/navbar.jsx'), {
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
          <h2 className="leading-normal text-2xl mb-8">
            Lean Spanish online with a professional, certified teacher. <br />
            Start speaking, improve and perfect your Spanish in no time!
            <br />
            Or join a <b>free Spanish group lesson</b> today!
          </h2>
          <a
            href="/book"
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Book a Lesson
          </a>
        </div>
        <div className="w-full md:w-2/5 py-6 text-center">
          <div className="w-full md:w-4/5 z-50">
            <div className="mx-auto sm:h-96 sm:w-96 md:m-12 w-48 h-48 self-center relative">
              <Image
                priority={true}
                layout="fill"
                alt="Carolina Portrait"
                src="/herotest.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="relative md:-mt-1 xl:-mt-12 mt-0 gradient">
      <Waves />
    </div>
    <section className="bg-light-gray border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Your personal spanish teacher
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <SellingPoint
          title={'Professional Teacher'}
          text={
            <>
              <p className="mb-6">
                I have been teaching Spanish for many years now, helping
                hundreds of students learn Spanish my beautiful language,
                following a structured curriculum and providing the best
                learning experience possible.
              </p>
              <p className="mb-6">
                I use a variety of learning activities to focus on finding your
                weak areas and improve your Spanish.
              </p>
              <p>All levels are welcome, see you in class!</p>
            </>
          }
          sideComponent={<OnlineLearning />}
        />
        <SellingPoint
          title={'Group lessons'}
          text={
            <p>
              Learn grammar and practice conversation with other students at the
              same level as you. Small group online classes are the perfect
              option if you want to quickly build conversational skills and
              confidence while socializing with other students from all around
              the world.
              <ul>
                <li>Different, useful class topics weekly.</li>

                <li>Small class size: 4-8 students on average.</li>

                <li>All materials before the lesson.</li>
              </ul>
            </p>
          }
          sideComponent={<ConnectedWorld />}
          reverse={true}
        />
        <SellingPoint
          title={'Individual Lessons'}
          text={
            <>
              <p className="mb-3">
                A complete and personalized Spanish course for all students.
              </p>
              <p className="mb-3">
                Lessons are available for all levels: Beginner, Intermediate and
                Advanced. Each lesson covers all Spanish skills: Reading,
                writing, listening and speaking, alternatively we can focus on
                any skill that you want help with, or a combination of them.
              </p>
              <p className="mb-3">
                We can also focus on any other areas you want to improve, such
                as conversation, vocabulary or pronunciation.
              </p>
            </>
          }
          sideComponent={<Reading />}
        />
      </div>
    </section>
    {/* <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Get to know me
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex content-center lg:w-full rounded-lg p-1 sm:p-6 z-10">
          <div className="flex w-full lg:w-4/5 mx-auto overflow-hidden">
            <iframe
              width="1120"
              height="630"
              src="https://www.youtube.com/embed/55OmhwF0ybQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        </div>
      </div>
        </section> */}
    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Teaching philosophy
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="text-black p-12 flex flex-wrap">
          <div className="w-full lg:w-7/12">
            <p className="m-6">
              I am a graduated Spanish Teacher for foreigners.
            </p>
            <p className="m-6">
              {' '}
              Teaching has been a passion of mine from a very early age, I love
              watching people benefit and change for the better due to the
              education they are receiving.{' '}
            </p>
            <p className="m-6">
              As a foreign language learner myself, I can relate to my students
              and understand the process it takes to become fluent. My classes
              will be adapted to your level and preferences. We can have
              conversation classes, where we will focus on pronunciation and
              fluency, we may also have classes where we will focus on grammar
              and vocabulary.{' '}
            </p>
            <p className="m-6">
              I use a variety of learning activities to focus on finding your
              weak areas and improve your Spanish. I encourage my students and
              get excited about their progress.{' '}
            </p>
            <p className="m-6">
              I invest in my students and provide solid support during their
              language learning journey with me!
            </p>
            <p className="m-6"></p>
          </div>
          <div className="w-full lg:w-5/12 h-auto my-auto p-6">
            <Image
              className="object-scale rounded"
              height={766}
              width={1149}
              alt="Carolina with Students"
              src="/students.jpg"
            />
          </div>
        </div>
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
      <h2 className="my-4 text-3xl leading-tight">
        Book your first lesson and start learning today!
      </h2>
      <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
        <a href="/book">Book now!</a>
      </button>
    </section>
  </div>
);

export default Home;
