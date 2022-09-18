import React, { useState } from 'react';
import BlogPost from '../components/blogpost';
import Waves from '../components/svgs/waves';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import { fetchEntries } from '../helpers/fetchContent';
import CourseCard from '../components/coursecard';

const Navbar = dynamic(() => import('../components/navbar.jsx'), {
  ssr: false,
});

export default function blog({ posts }) {
  const filterLinkClasses =
    ' mx-4 mb-12 cursor-pointer hover:underline rounded-md text-white px-2 py-2 px-1 rounded-md text-sm bg-grey font-semibold';
  const [currentFilter, setCurrentFilter] = useState('all');

  const currentPosts = posts.filter(
    (post) =>
      currentFilter === 'all' ||
      post.level.toUpperCase() === currentFilter.toUpperCase()
  );
  return (
    <div className="">
      <Navbar />
      <div className="relative md:mt-4 xl:mt-2 mt-8 gradient">
        <Waves />
      </div>
      <div className="container max-w-8xl mx-auto mx-12">
        <h1 className="w-full mt-12 mb-2 text-5xl font-bold leading-tight text-center text-gray-800">
          My courses
        </h1>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <div />
          <CourseCard
            title="General Business English"
            url="https://carolina-kowanz.teachable.com/p/business-english"
            image="/courses/business.png"
            tags={['Intermediate', 'English']}
            description={
              'If you are learning English for your job or career, then the Business English Course is for you! It will help you communicate better in everyday professional situations.'
            }
          />
          <div />
        </div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <CourseCard
            title="The Basics of Spanish"
            url="https://www.udemy.com/course/learn-spanish-for-beginners-m/?referralCode=22C090CE297EADAE5E99"
            image="/courses/basics.png"
            tags={['FREE!', 'Beginner', 'In English', '5 Lessons']}
            description={
              'This course is designed for absolute beginners. It offers a clear and comprehensive grammatical foundation for acquiring a basic knowledge of the Spanish language. '
            }
          />
          <CourseCard
            title="Spanish for Travel"
            url="https://www.udemy.com/course/spanish-for-travel/?referralCode=5C0368E610E515ADBD5B"
            image="/courses/travel.png"
            tags={['Beginner/Intermediate', 'In English', '8 Lessons']}
            description={
              'If you are going on vacation in Spain, Latin America or any Spanish-speaking country then you should know at least some Spanish for your trip. My course is designed to assist you with communicating with the locals.'
            }
          />
          <CourseCard
            title="Por & Para"
            url="https://www.udemy.com/course/por-para-guide/?referralCode=29EC0FD8AB55DF67526A"
            image="/courses/porpara.png"
            tags={['All Levels', 'In English', '6 Lessons']}
            description={
              'In this course you will learn the uses of both por and para, many examples, how to use them in different setences and some expressions that we always use with POR and PARA.'
            }
          />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetchEntries('blogpost');
  const posts = await res.map((p) => {
    return p.fields;
  });
  return {
    props: {
      posts,
    },
  };
}
