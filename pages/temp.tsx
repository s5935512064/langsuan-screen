import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { FC, useEffect, useState, Fragment } from "react";
import { FlippingPages } from "flipping-pages";
import "flipping-pages/dist/style.css";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {}

const Temp: NextPage<Props> = () => {
  const [selected, setSelected] = useState(0);

  const back = () => {
    setSelected((selected) => Math.max(selected - 1, 0));
  };

  const next = () => {
    setSelected((selected) => Math.min(selected + 1, 2));
  };
  return (
    <>
      <Head>
        <title>TEST</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute w-full h-screen p-10 overflow-hidden">
        <div className="w-full h-full relative">
          <FlippingPages
            direction="right-to-left"
            onSwipeEnd={setSelected}
            selected={selected}
            swipeSpeed={1000}
          >
            <div className="page relative grid grid-cols-2 ">
              <div className="relative">
                <Image
                  src={"/assets/SDT/cover.png"}
                  fill
                  alt="cover"
                  style={{ objectFit: "contain", objectPosition: "right" }}
                />
              </div>
            </div>

            <div className="page relative grid grid-cols-2 ">
              <div className="relative ">
                <Image
                  src={"/assets/SDT/0.png"}
                  fill
                  alt="cover"
                  style={{ objectFit: "contain", objectPosition: "right" }}
                />
              </div>

              <div className="relative">
                <Image
                  src={"/assets/SDT/1.png"}
                  fill
                  alt="cover"
                  style={{ objectFit: "contain", objectPosition: "left" }}
                />
              </div>
            </div>
          </FlippingPages>
        </div>
        {/* <button onClick={back}>Back</button>
        <button onClick={next}>Next</button> */}
      </div>
    </>
  );
};

export default Temp;
