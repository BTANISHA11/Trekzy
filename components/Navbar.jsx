'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
// import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
  
  >
    <div className="absolute w-full h-16 bg-black" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
   <div className="relative w-full h-16 bg-black">
  <div className="mx-auto max-w-6xl px-4 sm:px-6">
    <div className="flex items-center justify-between py-3 md:justify-start md:space-x-10">
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <a href="/">
          {/* <img
            loading="lazy"
            width="120%"
            height="148"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            src="/logo.svg"
            alt="Logo"
          /> */}
          <h2 className="font-extrabold text-2xl leading-7 text-white"  >
          METAVERSUS
        </h2>
        </a>
      </div>
      <div
        className="relative inline-block text-left -my-2 -mr-2 z-[999] md:hidden"
        data-headlessui-state=""
      >
        <div>
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none "
            id="headlessui-menu-button-:R196:"
            type="button"
            aria-haspopup="menu"
            aria-expanded="false"
            data-headlessui-state=""
          >
            <span className="sr-only">Options</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="ml-2">
      
      </div>
      <nav className="hidden space-x-10 md:flex">
        <div className="relative" data-headlessui-state="">
          <a
            className="text-base font-medium text-gray-500 hover:text-white hidden md:block"
            href="/"
          >
            Home
          </a>
        </div>
        <a
          className="text-base font-medium text-gray-500 hover:text-white sm:hidden md:flex"
          href="/dashboard"
        >
          Dashboard
        </a>
        <a
          className="text-base font-medium text-gray-500 hover:text-white sm:hidden md:flex"
          href="/host"
        >
          Host
        </a>
        <a
          className="text-base font-medium text-gray-500 hover:text-white sm:hidden md:flex"
          href="/active"
        >
          Active Events
        </a>
      </nav>
      <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
        <a
          className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-purple-600 px-4 py-2 text-base font-normal text-white shadow-md hover:bg-purple-800 gap-2"
          href="#"
        >
          <button>Login</button>
        </a>
        <a
          className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-purple-600 px-4 py-2 text-base font-normal text-white shadow-md hover:bg-purple-800 gap-2"
          href="#"
        >
          <button>Sign Up</button>
        </a>
      </div>
    </div>
  </div>
</div>




    {/* <nav class="hidden space-x-10 md:flex"><div class="relative" data-headlessui-state=""><a class="text-base font-medium text-gray-500 hover:text-white hidden md:block" href="/">Home</a></div><a class="text-base font-medium text-gray-500 hover:text-white sm:hidden md:flex" href="/dashboard">Dashboard</a><a class="text-base font-medium text-gray-500 hover:text-white sm:hidden md:flex" href="/host">Host</a><a class="text-base font-medium text-gray-500 hover:text-white sm:hidden md:flex" href="/active">Active Events</a></nav>
      <button className="bg-gradient-to-r from-purple-500 to-purple-800 shadow-md text-white font-bold py-2 px-8 rounded-full">
  Login
  <img src="/comingsoon.png" className="inline ml-2" alt="" />
</button>

      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      /> */}
    </div>
  </motion.nav>
);

export default Navbar;
