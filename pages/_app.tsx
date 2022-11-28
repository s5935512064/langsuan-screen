import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { FC, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1400,
    });
  }, []);

  return <Component {...pageProps} />;
}
