import React, { Fragment, useState } from 'react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import InstagramIcon from './svgs/instagram';
import HeadPhonesIcon from './svgs/headphones';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  // { name: 'About', href: '/about' },
  // { name: 'Practice', href: '/practice' },
  { name: 'Courses', href: '/courses' },
  { name: 'Imprint', href: '/legal' },
  { name: 'Book now!', href: '/book', highlight: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const router = useRouter();

  const currentNavigationItems = navigation.map((entry) => {
    return { ...entry, current: router.pathname === entry.href };
  });

  return (
    <nav className="fixed w-full z-30 top-0 gradient">
      <>
        <div className="max-w-8xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                onClick={() => setOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
            <div className="flex-shrink-1 flex items-center justify-start">
              <a
                className={
                  'sm:visible invisible handwritten toggleColour no-underline hover:no-underline font-extrabold text-2xl lg:text-4xl text-white'
                }
                href="/">
                Spanish with Caro
              </a>
            </div>
            <div className="flex-1 flex justify-end">
              <div className="hidden sm:block sm:ml-6 md:ml-1 ">
                <div className="flex space-x-4">
                  {currentNavigationItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : item.highlight
                          ? 'bg-white rounded-md text-black hover:bg-gray-200'
                          : 'text-gray-50 hover:bg-gray-900 hover:text-white',
                        'lg:px-3 py-2 px-1 rounded-md text-sm font-bold'
                      )}
                      aria-current={item.current ? 'page' : undefined}>
                      {item.name}
                    </a>
                  ))}
                  <div className="px-1 text-gray-50 flex align-center justify-center items-center">
                    <a
                      className="px-2 hover:bg-black rounded-md hover:bg-gray-900 p-1"
                      href="https://instagram.com/carokowanzspanish/reels"
                      rel="noreferrer"
                      target="_blank">
                      <InstagramIcon />
                    </a>
                    <a
                      className="px-2 hover:bg-black rounded-md hover:bg-gray-900 p-1"
                      href="https://open.spotify.com/show/49BzfxoYpOzrJlj60vwnuu"
                      rel="noreferrer"
                      target="_blank">
                      <HeadPhonesIcon className="h-6 w-6  " />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}>
                  {item.name}
                </a>
              ))}
              <div className="px-1 flex w-full">
                <a
                  className="px-2 w-full flex items-center text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  href="https://instagram.com/carokowanzspanish/reels"
                  rel="noreferrer"
                  target="_blank">
                  <InstagramIcon className="text-black inline mr-2" />
                  <p>Instagram</p>
                </a>
              </div>
              <div className="px-1 flex w-full">
                <a
                  className="px-2 w-full flex items-center text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  href="https://open.spotify.com/show/49BzfxoYpOzrJlj60vwnuu"
                  rel="noreferrer"
                  target="_blank">
                  <HeadPhonesIcon className="text-black inline mr-2" />
                  <p>Spotify</p>
                </a>
              </div>
            </div>
          </div>
        )}
      </>
    </nav>
  );
}
