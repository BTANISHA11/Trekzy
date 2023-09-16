'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        METAVERSUS
      </h2>
      <h3 className="font-extrabold text-[18px] leading-[30.24px] text-white">
        HOME
      </h3>
      <h3 className="font-extrabold text-[18px] leading-[30.24px] text-white">
        BLOGS
      </h3>
      <h3 className="font-extrabold text-[18px] leading-[30.24px] text-white">
        INVENTORY
      </h3>
      <button className="bg-gradient-to-r from-purple-500 to-purple-800 shadow-md text-white font-bold py-2 px-8 rounded-full">
  Coming Soon
  <img src="/comingsoon.png" className="inline ml-2" alt="" />
</button>

      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
