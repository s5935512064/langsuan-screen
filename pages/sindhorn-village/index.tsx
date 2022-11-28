import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { FC, useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SDTBooks from "../../components/SDTBooks";
import BSDBook from "../../components/BSDBook";
import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {}

const Temp: NextPage<Props> = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [bookOpen, setBookOpen] = useState(false);

  const [selectItem, setSelectItemm] = useState("");
  const [color, setColor] = useState("");

  const SelectedBook = selectItem == "SDT" ? SDTBooks : BSDBook;
  const colorIdentity = selectItem == "SDT" ? "bg-[#12322C]" : "bg-[#7a7c81]";

  const selectedBook = function closeModal() {
    setIsOpen(false);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeBookModal() {
    setBookOpen(false);
  }

  function openBookModal(condition: string) {
    setSelectItemm(condition);

    setBookOpen(true);
  }

  return (
    <Layout>
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

      <div className="min-h-screen w-full  flex flex-col items-center relative">
        {/* <div className="absolute w-full h-full bg-gradient-to-b from-black/40 z-10"></div> */}
        <div className="w-56 h-32 relative z-20">
          <Image
            src={"/assets/All Logo_SSD-04.PNG"}
            alt="logo"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>

        <div className="absolute w-full h-screen z-30  ">
          <span className="sr-only">SDT</span>

          <div className="absolute w-fit h-fit z-40 top-[20%] right-[5%]">
            <button
              type="button"
              onClick={() => openBookModal("SDT")}
              className="hover:scale-105 text-left duration-500 w-full h-full p-5 flex items-center"
            >
              <div className="w-28 h-24 relative shrink-0 ">
                <Image
                  data-aos="zoom-in-up"
                  src={"/assets/placeholder.svg"}
                  fill
                  alt="pin"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  className=" drop-shadow-lg"
                />
              </div>

              <div className="-ml-2 bg-slate-400/40 p-2 px-4">
                <p
                  data-aos="zoom-in-up"
                  className="text-xl text-white drop-shadow font-bold border-b border-white pb-2"
                >
                  SINDHORN TONSON
                </p>
                <p
                  data-aos="zoom-in-up"
                  className="text-white uppercase max-w-[300px] pt-2"
                >
                  super luxury condominum with panoramicview over lumpini park
                </p>
              </div>
            </button>
          </div>

          <span className="sr-only">SDL</span>
          <div className="absolute w-fit h-fit z-40 bottom-[20%] right-[5%] text-right">
            <div className="w-full h-full p-5 flex items-center">
              <div className="-mr-2 bg-slate-400/40 p-2 px-4">
                <p
                  data-aos="zoom-in-up"
                  className="text-xl text-white drop-shadow font-bold border-b border-white pb-2"
                >
                  SINDHORN LUMPINI
                </p>
                <p
                  data-aos="zoom-in-up"
                  className="text-white uppercase max-w-[300px] pt-2"
                >
                  super luxury condominum with panoramicview over lumpini park
                </p>
              </div>

              <div className="w-28 h-24 relative shrink-0 !translate-y-2">
                <Image
                  data-aos="zoom-in-up"
                  src={"/assets/placeholder.svg"}
                  fill
                  alt="pin"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  className=" duration-500 drop-shadow-lg"
                />
              </div>
            </div>
          </div>

          <span className="sr-only">VELAA</span>
          <div className="absolute w-fit h-fit z-40 bottom-[15%] right-[35%]">
            <div className="w-full h-full p-5 flex items-center">
              <div className="w-28 h-24 relative shrink-0 !translate-y-2">
                <Image
                  data-aos="zoom-in-up"
                  src={"/assets/placeholder.svg"}
                  fill
                  alt="pin"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  className=" duration-500 drop-shadow-lg"
                />
              </div>

              <div className="-ml-2 bg-slate-400/40 p-2 px-4">
                <p
                  data-aos="zoom-in-up"
                  className="text-xl text-white drop-shadow font-bold border-b border-white pb-2"
                >
                  VELAA @LANGSUAN
                </p>
                <p
                  data-aos="zoom-in-up"
                  className="text-white uppercase max-w-[300px] pt-2"
                >
                  super luxury condominum with panoramicview over lumpini park
                </p>
              </div>
            </div>
          </div>

          <span className="sr-only">KEMPIN HOTEL</span>
          <div className="absolute w-fit h-fit z-40 bottom-[45%] right-[49%]">
            <div className="w-full h-full p-5 flex flex-col justify-center items-center">
              <div className="w-28 h-24 relative shrink-0 !translate-y-2">
                <Image
                  data-aos="zoom-in-up"
                  src={"/assets/placeholder.svg"}
                  fill
                  alt="pin"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  className=" duration-500 drop-shadow-lg"
                />
              </div>

              <div className="-ml-2 bg-slate-400/40 p-2 px-4">
                <p
                  data-aos="zoom-in-up"
                  className="text-xl text-white drop-shadow font-bold text-center  border-b border-white pb-2"
                >
                  SINDHORN KEMPINSKI
                  <br /> HOTEL BANGKOK
                </p>
                <p
                  data-aos="zoom-in-up"
                  className="text-white uppercase max-w-[300px] text-center pt-2"
                >
                  super luxury condominum with panoramicview over lumpini park
                </p>
              </div>
            </div>
          </div>

          <span className="sr-only">KEMPIN RESIDENCE</span>
          <div className="absolute w-fit h-fit z-40 bottom-[40%] right-[23%]">
            <div className="w-full h-full p-5 flex items-center">
              <div className="w-28 h-24 relative shrink-0 !translate-y-2">
                <Image
                  data-aos="zoom-in-up"
                  src={"/assets/placeholder.svg"}
                  fill
                  alt="pin"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  className=" duration-500 drop-shadow-lg"
                />
              </div>

              <div className="bg-slate-400/40 p-2 px-4">
                <p
                  data-aos="zoom-in-up"
                  className="text-xl text-white drop-shadow font-bold border-b border-white pb-2"
                >
                  THE RESIDENCE AT <br /> SINDHORN KEMPINSKI <br /> HOTEL
                  BANGKOK
                </p>
                <p
                  data-aos="zoom-in-up"
                  className="text-white uppercase max-w-[300px] pt-2"
                >
                  super luxury condominum serviced bt kempinski
                </p>
              </div>
            </div>
          </div>

          <span className="sr-only">SDB</span>
          <div className="absolute w-fit h-fit  z-40 top-[10%] right-[30%]">
            <div className="w-full h-full p-5 flex items-center">
              <div className="w-28 h-24 relative shrink-0 !translate-y-2">
                <Image
                  data-aos="zoom-in-up"
                  src={"/assets/placeholder.svg"}
                  fill
                  alt="pin"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  className=" duration-500 drop-shadow-lg"
                />
              </div>

              <div className="bg-slate-400/40 p-2 px-4">
                <p
                  data-aos="zoom-in-up"
                  className="text-xl text-white drop-shadow font-bold border-b border-white pb-2"
                >
                  SINDHORN OFFICE BUILDING
                </p>
                {/* <p className="text-white uppercase max-w-[300px] pt-2">
                  super luxury condominum serviced bt kempinski
                </p> */}
              </div>
            </div>
          </div>

          <span className="sr-only">KIMTON</span>
          <div className="absolute w-fit h-fit  z-40 top-[15%] left-[21%]">
            <div className="w-full h-full p-5 flex items-center">
              <div className="w-28 h-24 relative shrink-0 !translate-y-2">
                <Image
                  data-aos="zoom-in-up"
                  src={"/assets/placeholder.svg"}
                  fill
                  alt="pin"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  className=" duration-500 drop-shadow-lg"
                />
              </div>

              <div className="bg-slate-400/40 p-2 px-4">
                <p
                  data-aos="zoom-in-up"
                  className="text-xl text-white drop-shadow font-bold border-b border-white pb-2"
                >
                  KIMTON MAA-LAI <br />
                  BANGKOK HOTEL
                </p>
                <p
                  data-aos="zoom-in-up"
                  className="text-white uppercase max-w-[300px] pt-2"
                >
                  super luxury condominum serviced bt kempinski
                </p>
              </div>
            </div>
          </div>

          <span className="sr-only">BSD</span>

          <div className="absolute w-fit h-fit z-40 bottom-[30%] left-[5%] text-right">
            <button
              type="button"
              onClick={() => openBookModal("BSD")}
              className="w-full h-full p-5 flex items-center hover:scale-105 duration-500 "
            >
              <div className="-mr-2 bg-slate-400/40 p-2 px-4">
                <p
                  data-aos="zoom-in-up"
                  className="text-xl text-white drop-shadow font-bold border-b border-white pb-2"
                >
                  BAAN SINDHORN
                </p>
                <p
                  data-aos="fade-up"
                  className="text-white uppercase max-w-[300px] pt-2"
                >
                  32 EXCLUSIVE UNITS ONLY STARTING 122.392 SQ.M.
                </p>
              </div>

              <div className="w-28 h-24 relative shrink-0 !translate-y-2">
                <Image
                  data-aos="zoom-in-up"
                  src={"/assets/placeholder.svg"}
                  fill
                  alt="pin"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  className=" duration-500 drop-shadow-lg"
                />
              </div>
            </button>
          </div>

          <span className="sr-only">SDR</span>
          <div className="absolute w-fit h-fit z-40 top-[25%] left-[2%]">
            <div className="w-full h-full p-5 flex flex-col items-center">
              <div
                data-aos="zoom-in-up"
                className="w-28 h-24 relative shrink-0 !translate-y-2"
              >
                <Image
                  src={"/assets/placeholder.svg"}
                  fill
                  alt="pin"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  className=" duration-500 drop-shadow-lg"
                />
              </div>

              <div className="bg-slate-400/40 p-2 px-4">
                <p
                  data-aos="zoom-in-up"
                  className="text-xl text-white drop-shadow font-bold border-b border-white pb-2 text-center"
                >
                  SINDHORN RESIDENCE
                </p>
                <p
                  data-aos="fade-up"
                  className="text-white uppercase max-w-[300px] pt-2 text-center"
                >
                  super luxury condominum
                </p>
              </div>
            </div>
          </div>

          <span className="sr-only">NIDTOWN</span>
          <div className="absolute w-fit h-fit z-40  bottom-[5%] left-[5%]">
            <div className="w-full h-full p-5 flex  items-center">
              {/* <div className="w-28 h-24 relative shrink-0 !translate-y-2">
                <Image
                  src={"/assets/placeholder.svg"}
                  fill
                  alt="pin"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  className=" duration-500 drop-shadow-lg"
                />
              </div> */}

              <div className="bg-slate-400/40 p-2 px-4">
                <p
                  data-aos="zoom-in-up"
                  className="text-xl text-white drop-shadow font-bold border-b border-white pb-2 "
                >
                  SINDHORN MIDTOWN
                </p>
                <p
                  data-aos="fade-up"
                  className="text-white uppercase max-w-[350px] pt-2 "
                >
                  super luxury condominum serviced by kimpinski hotel bangkok
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-full absolute text-transparent  ">
            <svg
              className="w-full h-screen absolute text-transparent z-20 bg-black/25 bg-blend-multiply"
              viewBox="0 0 1920 1080"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                backgroundImage: "url(/assets/SDV_Masterplan_01.webp)",
                // backgroundPosition: "100% 100%",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <g clipPath="url(#clip0_15_18)">
                <path
                  d="M374 838L394.5 746L1142 730.5L1174 853.5L374 838Z"
                  fill="currentColor"
                  stroke="currentColor"
                  className="cursor-pointer"
                />
                <path
                  id="SDT"
                  data-id="SDT"
                  onClick={() => openBookModal("SDT")}
                  d="M1371 124H1401L1461 226.5L1428.5 371.5H1401L1336 249L1371 124Z"
                  fill="currentColor"
                  className="cursor-pointer"
                />
                <path
                  id="SDL"
                  data-id="SDL"
                  onClick={openModal}
                  className="cursor-pointer"
                  d="M1719.5 877L1764.5 866L1790 910.5H1814L1884.5 1038.5C1872.67 1053.5 1847.4 1083.5 1841 1083.5H1695.5L1643 970L1719.5 877Z"
                  fill="currentColor"
                />
                <path
                  id="SDB"
                  d="M1019 114L1075 124V249H993.5V411.5H945.5V320.5L913.5 311L936 26H980.5L1019 114Z"
                  fill="currentColor"
                  className="cursor-pointer"
                />
                <path
                  id="LIMPINRESIDENCE"
                  d="M1147 259.5H1019H1009.5L993.5 706L1126.5 714L1160 347.5L1147 259.5Z"
                  fill="currentColor"
                  className="cursor-pointer"
                />
                <path
                  id="KEMPIN"
                  d="M774.5 320.5H705.5L721.5 621H936L923 320.5H870.5C858.167 333.333 831 359 821 359C808.5 359 806.5 360.5 798.5 359C792.1 357.8 779.833 332.833 774.5 320.5Z"
                  fill="currentColor"
                  className="cursor-pointer"
                />
                <path
                  d="M1075 124L1019 114L980.5 26H936L913.5 311L945.5 320.5V411.5H993.5V249H1075V114M1401 124H1371L1336 249L1401 371.5H1428.5L1461 226.5L1401 124ZM1764.5 866L1719.5 877L1643 970L1695.5 1083.5C1741.33 1083.5 1834.6 1083.5 1841 1083.5C1847.4 1083.5 1872.67 1053.5 1884.5 1038.5L1814 910.5H1790L1764.5 866ZM1019 259.5H1147L1160 347.5L1126.5 714L993.5 706L1009.5 259.5H1019ZM705.5 320.5C713.1 320.5 754.667 320.5 774.5 320.5C779.833 332.833 792.1 357.8 798.5 359C806.5 360.5 808.5 359 821 359C831 359 858.167 333.333 870.5 320.5H923L936 621H721.5L705.5 320.5Z"
                  stroke="currentColor"
                  //   className="hover:text-red-600"
                />
                <path
                  id="KIMTON"
                  d="M531.5 187.5L449.5 179.5L414.5 258L470.5 400.5L457.5 426L555.5 728.5H617.5L640 562L531.5 187.5Z"
                  fill="currentColor"
                  className="cursor-pointer"
                />
                <path
                  id="BSD"
                  onClick={() => openBookModal("BSD")}
                  d="M435.5 599H405L386 666L414.5 728.5H521.5L531.5 685L494.5 587.5H435.5V599Z"
                  fill="currentColor"
                  className="cursor-pointer"
                />
                <path
                  d="M531.5 187.5L449.5 179.5L414.5 258L470.5 400.5L457.5 426L555.5 728.5H617.5L640 562L531.5 187.5Z"
                  stroke="currentColor"
                />
                <path
                  d="M435.5 599H405L386 666L414.5 728.5H521.5L531.5 685L494.5 587.5H435.5V599Z"
                  stroke="currentColor"
                />
                <path
                  id="SINDHORNRESIDENCE"
                  d="M14.5 291.5L46.5 231L203.5 245.5L291.5 403.5V384.5L342.5 392.5L406.5 472.5L382.5 597L363.5 653H342.5L258 520.5H155.5L14.5 291.5Z"
                  fill="currentColor"
                  className="cursor-pointer"
                />
                <path
                  id="MIDTOWN"
                  d="M382.5 886.5L27.5 877V1062.5H382.5V886.5Z"
                  fill="currentColor"
                  className="cursor-pointer"
                />
                <path
                  d="M14.5 291.5L46.5 231L203.5 245.5L291.5 403.5V384.5L342.5 392.5L406.5 472.5L382.5 597L363.5 653H342.5L258 520.5H155.5L14.5 291.5Z"
                  stroke="currentColor"
                />
                <path
                  d="M382.5 886.5L27.5 877V1062.5H382.5V886.5Z"
                  stroke="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_15_18">
                  <rect width="1920" height="1080" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <Transition appear show={bookOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[200]" onClose={closeBookModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={`fixed inset-0 ${colorIdentity} bg-opacity-80`} />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-screen items-center justify-center p-16 text-center relative">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-full  transform overflow-hidden   text-left align-middle transition-all flex justify-center ">
                  <button
                    type="button"
                    title="close"
                    onClick={closeBookModal}
                    className="absolute top-0 right-0 text-white font-bold"
                  >
                    CLOSE
                  </button>

                  <div className=" w-full h-full relative ">
                    <SelectedBook />
                  </div>

                  <div className="flex flex-col gap-4 justify-end   ">
                    <div className="w-56 h-72  rounded-xl flex flex-col gap-4 items-center ">
                      <p className="text-white">SCAN FOR WEBSITE</p>

                      <div className="flex-1 relative w-full h-full ">
                        <Image
                          src={"/assets/SDTBook/qrcode_sindhorntonson.com.png"}
                          alt="qrcode"
                          fill
                          style={{
                            objectFit: "contain",
                            objectPosition: "center",
                          }}
                        />
                      </div>
                    </div>

                    <div className="w-56 h-72  rounded-xl flex flex-col gap-4 items-center ">
                      <p className="text-white">SCAN FOR WEBSITE</p>

                      <div className="flex-1 relative w-full h-full ">
                        <Image
                          src={"/assets/SDTBook/qrcode_sindhorntonson.com.png"}
                          alt="qrcode"
                          fill
                          style={{
                            objectFit: "contain",
                            objectPosition: "center",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Layout>
  );
};

export default Temp;
