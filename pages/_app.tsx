import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { FC, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MenuBtn from "../components/MenuBtn";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1400,
    });
  }, []);

  return (
    <>
      <AnimatePresence
        exitBeforeEnter={true}
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}
