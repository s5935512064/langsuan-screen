import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import React, { useEffect, useState, MouseEvent } from "react";
import useSWR from "swr";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const URL_READ_FILE = process.env.NEXT_PUBLIC_API_URL + `api/readfiles`;

export default function Home() {
  const { data, error } = useSWR(URL_READ_FILE, fetcher);

  useEffect(() => {
    console.log(data);
  });

  useEffect(() => {
    const listener = (e: { preventDefault: () => void }) => {
      e.preventDefault();
    };

    document.body.addEventListener("touchmove", listener, { passive: false });

    return () => {
      document.body.removeEventListener("touchmove", listener);
    };
  });

  if (!data) {
    return <div>Loading..</div>;
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0 user-scalable=no"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <title>Velaa Sindhorn Village Langsuan</title>
        <meta
          name="Description"
          content="Velaa หลังสวน Community Mall แห่งใหม่ใจกลางเมือง บนถนนหลังสวน มาพร้อม Villa Market และหลากร้านอาหารและบริการชั้นนำกว่า 26 ร้านค้า"
        />
        <meta
          name="Keywords"
          content="VelaaSindhornVillageLangsuan ,VelaaLangsuan,Velaa,Langsuan,SindhornVillage,SindhornKempinski,KimptonMaaLaiBangkok,SindhornMidtown,Lumpini,Lumpinipark,Wirelessroad,เวลาแอทสินธรวิลเลจ ,เวลาหลังสวน ,หลังสวน,ซอยหลังสวน,สินธรวิลเลจ ,สินธรเคมปินสกี้,คิมป์ตันมาลัย, คิมป์ตัน, สินธรมิดทาวน์ , สวนลุมพินี, ลุมพินี, ถนนวิทยุ , Communitymall ,restaurant ,cafe , Bistro, Supermarket,salon,spa     "
        />
        <meta name="Copyright" content="Velaa Sindhorn Village Langsuan" />

        <meta property="og:title" content="Velaa Sindhorn Village Langsuan" />
        <meta
          property="og:site_name"
          content="Velaa Sindhorn Village Langsuan"
        />
        <meta
          property="og:description"
          content="Velaa หลังสวน Community Mall แห่งใหม่ใจกลางเมือง บนถนนหลังสวน มาพร้อม Villa Market และหลากร้านอาหารและบริการชั้นนำกว่า 26 ร้านค้า"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://velaalangsuan.com/" />
        <meta property="og:locale" content="th_TH" />
        <meta name="author" content="Siam Sindhorn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="w-full h-screen overflow-hidden flex items-center relative justify-center">
        <Swiper
          slidesPerView={1}
          effect={"fade"}
          loop={true}
          loopFillGroupWithBlank={true}
          speed={4500}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          onSlideChangeTransitionStart={(swiper) => {
            swiper.autoplay.stop();

            var index = swiper.activeIndex;
            var currentSlide = swiper.slides[index];
            var currentSlideType = currentSlide.getElementsByTagName("video");

            var audio = document.getElementsByTagName("audio");

            if (audio[0].muted == true) {
              console.log(audio[0]);
              audio[0].play();
              audio[0].volume = 0.5;
              audio[0].muted = false;
            }

            if (currentSlideType.length != 0) {
              audio[0].muted = true;
              var timePause = currentSlideType[0].duration * 1000;

              currentSlideType[0].play();
              currentSlideType[0].muted = false;

              setTimeout(() => {
                swiper.autoplay.start();
              }, timePause);
            } else {
              swiper.autoplay.start();
            }
          }}
          className="!h-full w-full relative"
        >
          {data.map((item: string, index: number | string) => {
            if (item.replace(/\\/g, "/").includes(".mp4")) {
              index = "video";
              return (
                <SwiperSlide
                  key={index}
                  tag="vdo"
                  className="w-full h-full relative overflow-hidden bg-black flex items-center"
                >
                  <video
                    id="my-player"
                    muted={true}
                    playsInline={true}
                    autoPlay={true}
                    preload="auto"
                    controls={true}
                  >
                    <source src={`/ads/hero.mp4`} type="video/mp4"></source>
                  </video>

                  <div className="w-36 h-36  absolute bottom-2 left-10 p-5 opacity-60">
                    <Image
                      src={"/assets/veela-logo.png"}
                      alt="logo"
                      fill
                      style={{ objectFit: "contain", objectPosition: "center" }}
                    />
                  </div>
                </SwiperSlide>
              );
            } else {
              return (
                <SwiperSlide
                  key={index}
                  className="w-full h-full relative overflow-hidden bg-black"
                >
                  <Image
                    priority
                    src={item.replace(/\\/g, "/")}
                    alt="ads"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                  />

                  <div className="w-36 h-36  absolute bottom-2 left-10 p-5 opacity-60">
                    <Image
                      src={"/assets/veela-logo.png"}
                      alt="logo"
                      fill
                      style={{ objectFit: "contain", objectPosition: "center" }}
                    />
                  </div>
                </SwiperSlide>
              );
            }
          })}
          <audio
            id="audio-player"
            muted={true}
            playsInline={true}
            autoPlay={true}
            preload="auto"
            controls={true}
            loop={true}
            className="absolute"
          >
            <source src="TunePocket.mp3" type="audio/mpeg"></source>
          </audio>
        </Swiper>

        <Link href={"/sindhorn-village"}>
          <button
            type="button"
            id="closeAds"
            title="closeAds"
            // onClick={closeAds}
            className=" w-[200px] px-4 py-3 bg-white text-black absolute top-10 right-10 z-50 rounded-full text-xl shadow shockwave border-2 tracking-wide inline-flex gap-3 items-center justify-center font-sans font-semibold duration-500 "
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                fill="currentColor"
              />
            </svg>
            DIRECTORY
          </button>
        </Link>
      </div>

      {/* <div className="min-h-screen w-full flex flex-col gap-7 items-center px-16 pt-36">
        <div className="w-full h-fit relative bg-white">
          <Image
            src={"/assets/velaa-plan.png"}
            alt="plan"
            width={1920}
            height={700}
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>

        <div className="w-full flex justify-between">
          <div>
            <p className="font-bold text-xl">SHOP LIST</p>
          </div>
        </div>
      </div> */}
    </>
  );
}
