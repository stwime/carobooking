import React, { useEffect, useState } from 'react';

const navContentTopClasses = ' bg-white shadow text-gray-800 gradient';
const navContentScrollClasses = 'text-white bg-transparent';

export default function Navbar({alwaysDark=false}) {

  const [scrolling, setScrolling] = useState(false);

  if (!alwaysDark){
    useEffect(() => {
      const onScroll = (e) => {
        setScrolling(window.pageYOffset > 10);
      };
      window.addEventListener('scroll', onScroll);
      
      return () => window.removeEventListener('scroll', onScroll);
    }, [scrolling]); 
  }
  const targetClassName = 'fixed w-full z-30 top-0 ' + (scrolling || alwaysDark ? navContentTopClasses : navContentScrollClasses);

  return (
    <nav
      id="header"
      className={targetClassName}>
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 ">
        <div className="pl-4 flex items-center">
          <a
            className={"handwritten toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl  " + (scrolling || alwaysDark ? "text-gray-800" : "text-white")}
            href="#">
            carokowanzspanish.com
          </a>
        </div>
        <div
          className={
            'w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent p-4 lg:p-0 z-20'
          }
          id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a
                className={"inline-block py-2 px-4 font-bold no-underline"+ (scrolling || alwaysDark ? "text-black" : "text-white")}
                href="/">
                Home
              </a>
            </li>
            <li className="mr-3">
              <a
                className={"inline-block no-underline hover:text-gray-800 hover:text-underline py-2 px-4 "+ (scrolling || alwaysDark ? "text-gray-800" : "text-white")}
                href="/blog">
                Blog
              </a>
            </li>
            <li className="mr-3">
              <a
                className={"inline-block no-underline hover:text-gray-800 hover:text-underline py-2 px-4 "+ (scrolling || alwaysDark ? "text-gray-800" : "text-white")}
                href="/about">
                About
              </a>
            </li>
            <li className="mr-3">
              <a
                className={"inline-block no-underline hover:text-gray-800 hover:text-underline py-2 px-4 "+ (scrolling || alwaysDark ? "text-gray-800" : "text-white")}
                href="/book">
                Book now
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}
