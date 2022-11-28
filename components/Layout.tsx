import Router from "next/router";
import React, { FC, useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
  exit: { opacity: 0, x: 0, y: 0 },
};

const Layout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
      >
        {children}
      </motion.main>

      {/* <Footer /> */}
    </>
  );
};

export default Layout;
