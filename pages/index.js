import React from 'react';
import ConnectedWorld from '../components/svgs/connected-world';
import OnlineLearning from '../components/svgs/onlinelearning.jsx';
import SellingPoint from '../components/sellingpoint';
import Reading from '../components/svgs/reading';
import Waves from '../components/svgs/waves';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import ExternalContentWrapper from '../components/externalcontentwrapper';
import { getCookieConsentValue } from 'react-cookie-consent';
import InstagramIcon from '../components/svgs/instagram.jsx';
import HeadPhonesIcon from '../components/svgs/headphones.jsx';
import { fetchEntries } from '../helpers/fetchContent';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import CourseCard from '../components/coursecard';
import Typewriter from 'typewriter-effect';

const Navbar = dynamic(() => import('../components/navbar.jsx'), {
  ssr: false,
});

const Home = ({ frontpageSettings, sellingPoints }) => (
  <div
    className="leading-normal tracking-normal text-white gradient"
    style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
    <Navbar />
    <div className="pt-24">
      <div className="container p-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Start learning{' '}
            <Typewriter
              options={{
                strings: ['English', 'Spanish'],
                autoStart: true,
                loop: true,
                skipAddStyles: true,
              }}
            />{' '}
            today!
          </h1>
          <div className="leading-normal text-2xl mb-8">
            Learn Spanish or English online with a professional, certified
            teacher.
            <br />
            Start learning, improve and perfect your language skills in no time!
          </div>
          <div className="flex w-full items-center flex-col sm:flex-row gap-5">
            <a
              href="https://carolina-kowanz.teachable.com/p/english-prepositions"
              className="hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              <span className="absolute -top-3 -left-1 px-2 py-1 mr-3 text-sm font-bold leading-none text-gray-100 bg-green-500 rounded-lg">
                NEW
              </span>
              Prepositions Course
            </a>
            <a
              href="https://carolina-kowanz.teachable.com/p/prepositions-guide-for-visual-learners"
              className="hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              <span className="absolute -top-3 -left-1 px-2 py-1 mr-3 text-sm font-bold leading-none text-gray-100 bg-green-500 rounded-lg">
                NEW
              </span>
              Prepositions Guide PDF
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/5 py-6 text-center">
          <div className="w-full md:w-4/5 z-50">
            <div className="mx-auto sm:h-96 sm:w-96 md:m-12 w-48 h-4/5 self-center relative">
              <Image
                priority={true}
                layout="fill"
                alt="Carolina Portrait"
                src={'https:' + frontpageSettings.heroImage.fields.file.url}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="relative md:-mt-1 xl:-mt-12 mt-0 gradient">
      <Waves />
    </div>
    {/*<section className="bg-light-gray border-b py-8">
      <div className="container max-w-5xl mx-auto m-8 px-1">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          {frontpageSettings.contentHeading}
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        {sellingPoints.map((sellingPoint) => (
          <SellingPoint
            title={sellingPoint.title}
            key={sellingPoint.title}
            innerContent={documentToHtmlString(sellingPoint.text)}
            reverse={sellingPoint.imageToTheLeft}
            sideComponent={
              <div className="relative w-full h-48 sm:h-64 mx-auto">
                <Image
                  layout="fill"
                  alt={sellingPoint.image.fields.title}
                  src={'https:' + sellingPoint.image.fields.file.url}
                />
              </div>
            }
          />
        ))}
      </div>
          </section> */}
    <section id="courses" className="bg-light-gray border-b py-8">
      <div className="container max-w-7xl mx-auto m-8 px-1">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Courses
        </h2>
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
        <CourseCard
            title="Prepositions"
            url="https://carolina-kowanz.teachable.com/p/english-prepositions"
            image="/courses/prepositions_course.png"
            tags={['All Levels', 'English', 'With Subtitles']}
            large={true}
            description={
              'A 100% visual course (and a 62-page book) for visual learners. You will learn how to use: ON, IN, AT, BY, WITH, TO. With plenty of examples, images, quizzes, and explanations so you can learn how to use them correctly!'
            }
          />
          <CourseCard
            title="General Business English"
            url="https://carolina-kowanz.teachable.com/p/business-english"
            image="/courses/business_english_course.png"
            tags={['Intermediate', 'English']}
            large={true}
            description={
              'If you are learning English for your job or career, then the Business English Course is for you! It will help you communicate better in everyday professional situations.'
            }
          />
        </div>
      </div>
    </section>
     <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Podcast
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex content-center lg:w-full rounded-lg p-1 sm:p-6 z-10">
          <div className="flex w-full lg:w-4/5 h-64 px-4 mx-auto overflow-hidden">
            <ExternalContentWrapper
              name="Youtube"
              alternateLink="https://open.spotify.com/embed/episode/1V6vNOGx2n2WVjfAwWgoXs">
              <iframe
                width="100%"
                height="250px"
                src="https://open.spotify.com/embed/episode/1V6vNOGx2n2WVjfAwWgoXs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </ExternalContentWrapper>
          </div>
        </div>
      </div>
    </section> 
    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Teaching philosophy
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="text-black p-12 flex flex-wrap">
          <div
            className="w-full lg:w-7/12 p-margins"
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(
                frontpageSettings.teachingPhilosophyText
              ),
            }}></div>
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
      <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
        What are you waiting for?
      </h2>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <h2 className="my-4 text-3xl leading-tight">
        Book your first lesson and start learning today!
      </h2>
      <div className="mt-12">
        <a
          className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          href="/book">
          Book now!
        </a>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 mt-16 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-col justify-center align-middle items-center">
          <p className="mt-8 md:mt-10 text-xl">Start learning right now on </p>
          <a
            className="my-4"
            href="https://instagram.com/carokowanzenglish/reels"
            rel="noreferrer"
            target="_blank">
            <div className="text-2xl font-semibold flex-inline hover:bg-gray-100 hover:text-black hover:bg-opacity-40 transition duration-100 rounded-xl p-2 px-4">
              <InstagramIcon className="inline w-12 h-12 p-2" />
              Instagram
            </div>
          </a>
          <p className="text-xl">and listen to my podcast on</p>
          <a
            className="my-4"
            href="https://open.spotify.com/show/0b6LZFbkobg9op1gFct5db"
            rel="noreferrer"
            target="_blank">
            <div className="text-2xl font-semibold hover:bg-gray-100 hover:bg-opacity-40 transition duration-100 rounded-xl hover:text-black p-2 px-4">
              <HeadPhonesIcon className="inline w-12 h-12 p-2" />
              Spotify
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
);

export async function getStaticProps() {
  const res = await fetchEntries('siteSettings');
  const frontpageSettings = await res.map((p) => {
    return p.fields;
  })[0];

  const res2 = await fetchEntries('sellingPoint');
  const sellingPoints = await res2.map((p) => {
    return p.fields;
  });
  return {
    props: {
      frontpageSettings,
      sellingPoints: sellingPoints.sort((a, b) => a.order - b.order),
    },
  };
}

export default Home;
