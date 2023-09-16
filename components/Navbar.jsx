'use client';

import { motion } from 'framer-motion';
import { useEffect } from "react";
import Link from "next/link"; // Import Link from Next.js
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      async function connectWallet() {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          console.log(accounts);
        } catch (error) {
          console.error(error);
        }
      }
      connectWallet();
    }
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 items-center`}>
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          METAVERSUS
        </h2>
        <div className="menu-corner">
          <Link href="/" passHref>
            <a className="menu-item text-[20px] text-white">Home</a>
          </Link>
          <Link href="/about" passHref>
            <a className="menu-item text-[20px] text-white">About</a>
          </Link>
          <Link href="/contact" passHref>
            <a className="menu-item text-[20px] text-white">Contact</a>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
