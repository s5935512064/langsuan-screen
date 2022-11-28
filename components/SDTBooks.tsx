import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { FlippingPages } from "flipping-pages";
import "flipping-pages/dist/style.css";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const SDTBooks: FC<Props> = (): JSX.Element => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      {/* <div className="w-full h-full grid grid-cols-2 ">
        <div className="w-full h-full relative">
          <Image
            src={"/assets/SDT/cover.png"}
            alt="SDT"
            fill
            style={{ objectFit: "contain", objectPosition: "right" }}
            className="shadow-xl"
          />
        </div>

        <div className="col-span-2 px-7 flex flex-col gap-7 items-center justify-center relative">
          <div className="w-96 h-36 relative">
            <Image
              src={"/assets/All Logo_SSD-10.png"}
              alt="SDT"
              fill
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </div>
   

          <p className="text-white text-2xl indent-5 ">
            {" "}
            Sindhorn Tonson is an integral part of the ambitious Sindhorn
            Village development , which aims to set a new standard of excellence
            for quality living in the heart of Bangkok, along charismatic
            Langsuan Road. Combining environmentally-friendly, peaceful, and
            green vicinities with high-quality amenities for unique cosmopolitan
            living. Sindhorn Village is writing a new chapter in ideal urban
            living.
          </p>

          <button type="button" className="text-white w-fit text-lg mt-7">
            SEE MORE
          </button>

          <div className="flex gap-7">
            <div className="w-56 h-60 bg-white rounded-2xl"></div>

            <div className="w-56 h-60 bg-white rounded-2xl"></div>
          </div>
        </div>
      </div> */}

      <div className="w-full h-full !max-w-[1500px] relative">
        <FlippingPages
          animationDuration={1500}
          direction="right-to-left"
          onSwipeEnd={setSelected}
          selected={selected}
          perspectiveMultiplier={4}
          //   swipeSpeed={1000}
        >
          <div className="page relative grid grid-cols-2 ">
            <div className="relative col-span-2 bg-[#002e28]">
              <Image
                src={"/assets/SDT/cover.png"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </div>
          </div>

          <div className="page relative grid grid-cols-2 ">
            <div className="relative ">
              <Image
                src={"/assets/SDTBook/1.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "right" }}
                className="drop-shadow-xl"
              />
            </div>

            <div className="relative">
              <Image
                src={"/assets/SDTBook/2.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "left" }}
                className="drop-shadow-xl"
              />
            </div>
          </div>

          <div className="page relative grid grid-cols-2 ">
            <div className="relative ">
              <Image
                src={"/assets/SDTBook/3.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "right" }}
                className="drop-shadow-xl"
              />
            </div>

            <div className="relative">
              <Image
                src={"/assets/SDTBook/4.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "left" }}
                className="drop-shadow-xl"
              />
            </div>
          </div>

          <div className="page relative grid grid-cols-2 ">
            <div className="relative ">
              <Image
                src={"/assets/SDTBook/5.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "right" }}
                className="drop-shadow-xl"
              />
            </div>

            <div className="relative">
              <Image
                src={"/assets/SDTBook/6.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "left" }}
                className="drop-shadow-xl"
              />
            </div>
          </div>

          <div className="page relative grid grid-cols-2 ">
            <div className="relative ">
              <Image
                src={"/assets/SDTBook/7.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "right" }}
                className="drop-shadow-xl"
              />
            </div>

            <div className="relative">
              <Image
                src={"/assets/SDTBook/8.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "left" }}
                className="drop-shadow-xl"
              />
            </div>
          </div>

          <div className="page relative grid grid-cols-2 ">
            <div className="relative ">
              <Image
                src={"/assets/SDTBook/9.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "right" }}
                className="drop-shadow-xl"
              />
            </div>

            <div className="relative">
              <Image
                src={"/assets/SDTBook/10.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "left" }}
                className="drop-shadow-xl"
              />
            </div>
          </div>

          <div className="page relative grid grid-cols-2 ">
            <div className="relative ">
              <Image
                src={"/assets/SDTBook/11.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "right" }}
                className="drop-shadow-xl"
              />
            </div>

            <div className="relative">
              <Image
                src={"/assets/SDTBook/12.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "left" }}
                className="drop-shadow-xl"
              />
            </div>
          </div>

          <div className="page relative grid grid-cols-2 ">
            <div className="relative ">
              <Image
                src={"/assets/SDTBook/13.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "right" }}
                className="drop-shadow-xl"
              />
            </div>

            <div className="relative">
              <Image
                src={"/assets/SDTBook/14.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "left" }}
                className="drop-shadow-xl"
              />
            </div>
          </div>

          <div className="page relative grid grid-cols-2 ">
            <div className="relative ">
              <Image
                src={"/assets/SDTBook/15.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "right" }}
                className="drop-shadow-xl"
              />
            </div>

            <div className="relative">
              <Image
                src={"/assets/SDTBook/16.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "left" }}
                className="drop-shadow-xl"
              />
            </div>
          </div>

          <div className="page relative grid grid-cols-2 ">
            <div className="relative ">
              <Image
                src={"/assets/SDTBook/17.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "right" }}
                className="drop-shadow-xl"
              />
            </div>

            <div className="relative">
              <Image
                src={"/assets/SDTBook/18.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "left" }}
                className="drop-shadow-xl"
              />
            </div>
          </div>

          <div className="page relative grid grid-cols-2 ">
            <div className="relative ">
              <Image
                src={"/assets/SDTBook/19.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "right" }}
                className="drop-shadow-xl"
              />
            </div>

            <div className="relative">
              <Image
                src={"/assets/SDTBook/20.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "left" }}
                className="drop-shadow-xl"
              />
            </div>
          </div>

          <div className="page relative grid grid-cols-2 ">
            <div className="relative ">
              <Image
                src={"/assets/SDTBook/21.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "right" }}
                className="drop-shadow-xl"
              />
            </div>

            <div className="relative">
              <Image
                src={"/assets/SDTBook/22.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "left" }}
                className="drop-shadow-xl"
              />
            </div>
          </div>

          <div className="page relative grid grid-cols-2 ">
            <div className="relative ">
              <Image
                src={"/assets/SDTBook/23.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "right" }}
                className="drop-shadow-xl"
              />
            </div>

            <div className="relative">
              <Image
                src={"/assets/SDTBook/24.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "left" }}
                className="drop-shadow-xl"
              />
            </div>
          </div>

          <div className="page relative grid grid-cols-2 ">
            <div className="relative ">
              <Image
                src={"/assets/SDTBook/25.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "right" }}
                className="drop-shadow-xl"
              />
            </div>

            <div className="relative">
              <Image
                src={"/assets/SDTBook/26.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "left" }}
                className="drop-shadow-xl"
              />
            </div>
          </div>

          <div className="page relative grid grid-cols-2 ">
            <div className="relative ">
              <Image
                src={"/assets/SDTBook/27.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "right" }}
                className="drop-shadow-xl"
              />
            </div>

            <div className="relative">
              <Image
                src={"/assets/SDTBook/28.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "left" }}
                className="drop-shadow-xl"
              />
            </div>
          </div>

          <div className="page relative grid grid-cols-2 ">
            <div className="relative ">
              <Image
                src={"/assets/SDTBook/29.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "right" }}
                className="drop-shadow-xl"
              />
            </div>

            <div className="relative">
              <Image
                src={"/assets/SDTBook/30.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "left" }}
                className="drop-shadow-xl"
              />
            </div>
          </div>

          <div className="page relative grid grid-cols-2 ">
            <div className="relative ">
              <Image
                src={"/assets/SDTBook/31.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "right" }}
                className="drop-shadow-xl"
              />
            </div>

            <div className="relative">
              <Image
                src={"/assets/SDTBook/32.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "left" }}
                className="drop-shadow-xl"
              />
            </div>
          </div>

          <div className="page relative grid grid-cols-2 ">
            <div className="relative ">
              <Image
                src={"/assets/SDTBook/33.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "right" }}
                className="drop-shadow-xl"
              />
            </div>

            <div className="relative">
              <Image
                src={"/assets/SDTBook/34.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "left" }}
                className="drop-shadow-xl"
              />
            </div>
          </div>

          <div className="page relative grid grid-cols-2 ">
            <div className="relative ">
              <Image
                src={"/assets/SDTBook/35.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "right" }}
                className="drop-shadow-xl"
              />
            </div>

            <div className="relative">
              <Image
                src={"/assets/SDTBook/36.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "left" }}
                className="drop-shadow-xl"
              />
            </div>
          </div>

          <div className="page relative grid grid-cols-2 ">
            <div className="relative ">
              <Image
                src={"/assets/SDTBook/37.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "right" }}
                className="drop-shadow-xl"
              />
            </div>

            <div className="relative">
              <Image
                src={"/assets/SDTBook/38.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "left" }}
                className="drop-shadow-xl"
              />
            </div>
          </div>

          <div className="page relative grid grid-cols-2 ">
            <div className="relative ">
              <Image
                src={"/assets/SDTBook/39.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "right" }}
                className="drop-shadow-xl"
              />
            </div>

            <div className="relative">
              <Image
                src={"/assets/SDTBook/40.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "left" }}
                className="drop-shadow-xl"
              />
            </div>
          </div>

          <div className="page relative grid grid-cols-2 ">
            <div className="relative ">
              <Image
                src={"/assets/SDTBook/41.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "right" }}
                className="drop-shadow-xl"
              />
            </div>

            <div className="relative">
              <Image
                src={"/assets/SDTBook/42.webp"}
                fill
                alt="cover"
                style={{ objectFit: "contain", objectPosition: "left" }}
                className="drop-shadow-xl"
              />
            </div>
          </div>
        </FlippingPages>
      </div>
    </>
  );
};

export default SDTBooks;
