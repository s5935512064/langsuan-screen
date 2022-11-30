import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { FC, useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SDTBooks from "../../components/SDTBooks";
import BSDBook from "../../components/BSDBook";
import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";
import useSWR, { mutate } from "swr";
import axios from "axios";
import DotLoader from "react-spinners/DotLoader";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {}

const list_name = [
  { id: 1, name: "Sindhorn Residence", value: "SDR" },
  { id: 2, name: "Baan Sindhorn", value: "BSD" },
  {
    id: 3,
    name: "The Residences at Sindhorn Kempinski Hotel Bangkok",
    value: "SDK",
  },
  { id: 4, name: "Sindhorn Tonson", value: "SDT" },
  { id: 5, name: "Sindhorn Lumpini", value: "SDL" },
  { id: 6, name: "Kimpton Maa-Lai Bangkok Hotel", value: "KIMTON" },
  { id: 7, name: "Sindhorn Kempinski Hotel Bangkok", value: "KIMPIN" },
  {
    id: 8,
    name: "Sindhorn Midtown Hotel Bangkok,Vignette Collection",
    value: "MIDTOWN",
  },
  { id: 9, name: "Velaa Langsuan", value: "VELAA" },
  { id: 10, name: "Sindhorn Building Office", value: "SDB" },
];

const URL = process.env.NEXT_PUBLIC_API_URL + `api/blog-data`;
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const SindhornVillage: NextPage<Props> = () => {
  let [isOpen, setIsOpen] = useState(false);
  const { data, error } = useSWR(URL, fetcher);

  const [selectItem, setSelectItemm] = useState("");

  const filterData = data && data.filter((p: any) => p.ssd_id === selectItem);

  function openModal() {
    if (filterData != null) {
      setIsOpen(true);
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  const selectSource = async (value: string) => {
    console.log(value);
    setSelectItemm(value);
    openModal();
  };

  useEffect(() => {
    console.log({ filterData });
  });

  if (!data) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <DotLoader color="#000" />
      </div>
    );
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

      <div className="h-screen w-full  flex flex-col gap-4 items-center relative overflow-hidden bg-[#F7F6F4]">
        <div className="w-full h-full absolute z-20">
          <svg
            width="1920"
            height="1080"
            viewBox="0 0 1920 1032"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="SDT"
              d="M1378 227.375L1412.87 98H1446.06L1513.56 203.75L1465.75 323H1474.19L1483.75 354.5L1446.06 367.438L1378 227.375Z"
              fill="transparent"
              onClick={() => selectSource("SDT")}
              className="cursor-pointer"
            />
            <path
              id="SBD"
              onClick={() => selectSource("SDB")}
              className="cursor-pointer"
              d="M935.5 0H990.062V52.875L1017.62 69.1875L1037.87 95.625H1102V196.875H1017.62L1006.37 277.875V352.125H953.5L945.062 267.75L922 28.125H935.5V0Z"
              fill="transparent"
            />
            <path
              id="BSD"
              onClick={() => selectSource("BSD")}
              className="cursor-pointer"
              d="M482.375 597.938L442.437 522H341.75L317 597.938L333.312 649.125H465.5L482.375 597.938Z"
              fill="transparent"
            />
            <path
              id="residenckimpin"
              onClick={() => selectSource("SDK")}
              className="cursor-pointer"
              d="M1016.62 233H1167.37V355.625L1190.44 383.75L1180.31 413.562L1140.94 636.875H1002L1016.62 233Z"
              fill="transparent"
            />
            <path
              id="velaa"
              onClick={() => selectSource("VELAA")}
              className="cursor-pointer"
              d="M1167.81 651L317.875 660.562L301 761.812H1210.56L1167.81 651Z"
              fill="transparent"
            />
            <path
              id="lunpini"
              onClick={() => selectSource("SDL")}
              className="cursor-pointer"
              d="M1809.69 775H1858.06L1881.12 806.5H1904.19L1991.94 935.312L1858.06 1031.5H1819.81L1727 862.75L1809.69 775Z"
              fill="transparent"
            />
            <path
              id="kimpinhotel"
              onClick={() => selectSource("KIMPIN")}
              className="cursor-pointer"
              d="M655 374.938L675.25 281L752.875 288.875L782.687 317H835.562L848.5 281L926.125 288.875L932.875 374.938V558.875L691.562 548.75L655 374.938Z"
              fill="transparent"
            />
            <path
              id="residence"
              onClick={() => selectSource("SDR")}
              className="cursor-pointer"
              d="M-93.0001 263.625L-48.0001 213H121.312L317.062 535.312L291.187 588.188H154.5L-93.0001 263.625Z"
              fill="transparent"
            />
            <path
              id="maalai"
              onClick={() => selectSource("KIMTON")}
              className="cursor-pointer"
              d="M346 234.063L383.687 148H474.812L594.062 497.313L580.562 527.125L594.062 546.813L565.937 644.125H514.187L403.375 381.438V361.75L346 234.063Z"
              fill="transparent"
            />

            <circle
              cx="121"
              cy="718"
              r="18"
              fill="#E37D45"
              onClick={() => selectSource("MIDTOWN")}
              className="cursor-pointer drop-shadow"
            />
            <path
              id="midtown"
              onClick={() => selectSource("MIDTOWN")}
              className="cursor-pointer"
              d="M120.79 727.21C119.883 727.21 119.077 727.033 118.37 726.68C117.67 726.327 117.12 725.843 116.72 725.23C116.32 724.61 116.12 723.913 116.12 723.14C116.12 721.533 117.137 720.213 119.17 719.18C118.29 718.607 117.643 718.013 117.23 717.4C116.817 716.78 116.61 716.103 116.61 715.37C116.61 714.63 116.797 713.973 117.17 713.4C117.543 712.827 118.06 712.377 118.72 712.05C119.38 711.723 120.133 711.56 120.98 711.56C121.78 711.56 122.487 711.703 123.1 711.99C123.72 712.277 124.207 712.673 124.56 713.18C124.913 713.68 125.09 714.253 125.09 714.9C125.09 716.333 124.233 717.463 122.52 718.29C123.653 718.963 124.48 719.653 125 720.36C125.52 721.067 125.78 721.857 125.78 722.73C125.78 723.57 125.56 724.33 125.12 725.01C124.68 725.683 124.083 726.22 123.33 726.62C122.583 727.013 121.737 727.21 120.79 727.21ZM121.09 726.26C121.93 726.26 122.6 726.023 123.1 725.55C123.607 725.077 123.86 724.437 123.86 723.63C123.86 722.81 123.56 722.09 122.96 721.47C122.36 720.843 121.383 720.23 120.03 719.63C118.81 720.397 118.2 721.553 118.2 723.1C118.2 724.087 118.457 724.86 118.97 725.42C119.49 725.98 120.197 726.26 121.09 726.26ZM121.55 717.87C122.677 717.03 123.24 716.04 123.24 714.9C123.24 714.173 123.023 713.59 122.59 713.15C122.157 712.71 121.577 712.49 120.85 712.49C120.163 712.49 119.61 712.687 119.19 713.08C118.777 713.473 118.57 714.007 118.57 714.68C118.57 715.327 118.807 715.903 119.28 716.41C119.753 716.91 120.51 717.397 121.55 717.87Z"
              fill="white"
            />
            <circle
              cx="94"
              cy="370"
              r="18"
              fill="#E37D45"
              onClick={() => selectSource("KIMTON")}
              className="cursor-pointer drop-shadow"
            />
            <path
              id="maalai"
              onClick={() => selectSource("KIMTON")}
              className="cursor-pointer"
              d="M90.78 378V377.53L93.36 377.11V365.59H90.85V365.11C91.5633 364.897 92.2733 364.587 92.98 364.18C93.6867 363.767 94.3933 363.227 95.1 362.56L95.57 362.72V377.11L98.12 377.53V378H90.78Z"
              fill="white"
            />
            <circle
              cx="382"
              cy="586"
              r="18"
              fill="#E37D45"
              onClick={() => selectSource("BSD")}
              className="cursor-pointer drop-shadow"
            />
            <path
              id="bsd"
              onClick={() => selectSource("BSD")}
              className="cursor-pointer"
              d="M384.69 595.43L384.42 595H376.66L376.47 594.46C378.197 592.793 379.577 591.35 380.61 590.13C381.65 588.903 382.4 587.82 382.86 586.88C383.32 585.933 383.55 585.047 383.55 584.22C383.55 583.3 383.317 582.553 382.85 581.98C382.39 581.407 381.787 581.12 381.04 581.12C380.393 581.12 379.763 581.333 379.15 581.76C378.543 582.187 378.057 582.74 377.69 583.42L377.22 583.17C377.493 582.45 377.867 581.82 378.34 581.28C378.82 580.733 379.367 580.31 379.98 580.01C380.6 579.71 381.25 579.56 381.93 579.56C382.697 579.56 383.383 579.747 383.99 580.12C384.603 580.493 385.087 581 385.44 581.64C385.793 582.28 385.97 583.003 385.97 583.81C385.97 584.67 385.74 585.553 385.28 586.46C384.82 587.367 384.083 588.36 383.07 589.44C382.063 590.52 380.73 591.743 379.07 593.11H384.62C384.827 592.89 385.08 592.56 385.38 592.12C385.687 591.68 385.953 591.253 386.18 590.84L386.67 590.99L385.15 595.43H384.69Z"
              fill="white"
            />
            <circle
              cx="428"
              cy="231"
              r="18"
              fill="#E37D45"
              onClick={() => selectSource("SDR")}
              className="cursor-pointer drop-shadow"
            />
            <path
              id="sdr"
              onClick={() => selectSource("SDR")}
              className="cursor-pointer"
              d="M427.95 240.21C426.423 240.21 425.227 239.713 424.36 238.72C423.5 237.727 423.07 236.363 423.07 234.63C423.07 233.163 423.38 231.773 424 230.46C424.62 229.147 425.49 227.983 426.61 226.97C427.737 225.957 429.06 225.173 430.58 224.62L430.77 225.16C430.19 225.467 429.62 225.877 429.06 226.39C428.507 226.897 427.997 227.463 427.53 228.09C427.063 228.71 426.677 229.343 426.37 229.99C426.063 230.63 425.87 231.24 425.79 231.82C426.07 231.507 426.473 231.257 427 231.07C427.533 230.883 428.097 230.79 428.69 230.79C429.543 230.79 430.293 230.983 430.94 231.37C431.587 231.75 432.09 232.283 432.45 232.97C432.817 233.65 433 234.44 433 235.34C433 236.293 432.783 237.137 432.35 237.87C431.923 238.603 431.33 239.177 430.57 239.59C429.817 240.003 428.943 240.21 427.95 240.21ZM428.09 239.26C428.837 239.26 429.43 238.937 429.87 238.29C430.31 237.643 430.53 236.77 430.53 235.67C430.53 234.53 430.293 233.63 429.82 232.97C429.353 232.303 428.717 231.97 427.91 231.97C427.47 231.97 427.057 232.067 426.67 232.26C426.29 232.453 425.983 232.713 425.75 233.04C425.683 233.34 425.627 233.69 425.58 234.09C425.54 234.49 425.52 234.873 425.52 235.24C425.52 236.48 425.75 237.46 426.21 238.18C426.677 238.9 427.303 239.26 428.09 239.26Z"
              fill="white"
            />
            <circle
              cx="807"
              cy="366"
              r="18"
              fill="#E37D45"
              onClick={() => selectSource("KIMPIN")}
              className="cursor-pointer drop-shadow"
            />
            <path
              id="kimpin"
              onClick={() => selectSource("KIMPIN")}
              className="cursor-pointer"
              d="M804.26 375.21C803.933 375.21 803.683 375.117 803.51 374.93C803.337 374.737 803.25 374.48 803.25 374.16C803.25 373.893 803.32 373.58 803.46 373.22C803.607 372.853 803.797 372.423 804.03 371.93L808.91 361.92H803.13C802.903 362.12 802.697 362.33 802.51 362.55C802.33 362.77 802.123 363.067 801.89 363.44L801.43 363.21L802.95 359.29L803.43 359.43C803.43 359.543 803.437 359.65 803.45 359.75C803.463 359.85 803.483 359.94 803.51 360.02H810.49L810.67 360.3C810.263 361.24 809.907 362.07 809.6 362.79C809.293 363.51 809.017 364.177 808.77 364.79C808.523 365.397 808.29 366.003 808.07 366.61C807.85 367.21 807.62 367.857 807.38 368.55C807.14 369.243 806.873 370.033 806.58 370.92C806.287 371.8 805.947 372.837 805.56 374.03C805.313 374.817 804.88 375.21 804.26 375.21Z"
              fill="white"
            />
            <circle
              cx="794"
              cy="719"
              r="18"
              fill="#E37D45"
              onClick={() => selectSource("VELAA")}
              className="cursor-pointer drop-shadow"
            />
            <path
              id="velaa"
              onClick={() => selectSource("VELAA")}
              className="cursor-pointer"
              d="M791.13 728.21L790.94 727.67C791.52 727.357 792.09 726.943 792.65 726.43C793.21 725.917 793.72 725.347 794.18 724.72C794.647 724.093 795.033 723.457 795.34 722.81C795.647 722.157 795.837 721.54 795.91 720.96C795.637 721.273 795.233 721.527 794.7 721.72C794.173 721.907 793.613 722 793.02 722C792.18 722 791.433 721.81 790.78 721.43C790.133 721.043 789.627 720.513 789.26 719.84C788.893 719.16 788.71 718.377 788.71 717.49C788.71 716.53 788.923 715.687 789.35 714.96C789.777 714.227 790.37 713.653 791.13 713.24C791.89 712.827 792.763 712.62 793.75 712.62C795.283 712.62 796.483 713.117 797.35 714.11C798.217 715.097 798.65 716.457 798.65 718.19C798.65 719.65 798.34 721.04 797.72 722.36C797.1 723.673 796.227 724.837 795.1 725.85C793.973 726.863 792.65 727.65 791.13 728.21ZM793.8 720.81C794.24 720.81 794.653 720.717 795.04 720.53C795.427 720.337 795.733 720.08 795.96 719.76C796.033 719.467 796.09 719.12 796.13 718.72C796.177 718.32 796.2 717.94 796.2 717.58C796.2 716.34 795.967 715.36 795.5 714.64C795.04 713.92 794.417 713.56 793.63 713.56C792.89 713.56 792.297 713.883 791.85 714.53C791.41 715.177 791.19 716.053 791.19 717.16C791.19 718.287 791.423 719.177 791.89 719.83C792.363 720.483 793 720.81 793.8 720.81Z"
              fill="white"
            />
            <circle
              cx="984"
              cy="116"
              r="18"
              fill="#E37D45"
              onClick={() => selectSource("SDB")}
              className="cursor-pointer drop-shadow"
            />
            <path
              id="sdb"
              onClick={() => selectSource("SDB")}
              className="cursor-pointer"
              d="M976.624 122V121.624L978.688 121.288V112.072H976.68V111.688C977.251 111.517 977.819 111.269 978.384 110.944C978.949 110.613 979.515 110.181 980.08 109.648L980.456 109.776V121.288L982.496 121.624V122H976.624ZM987.767 122.168C987.185 122.168 986.644 122.013 986.143 121.704C985.641 121.389 985.201 120.952 984.823 120.392C984.449 119.827 984.156 119.168 983.943 118.416C983.735 117.664 983.631 116.848 983.631 115.968C983.631 115.077 983.735 114.251 983.943 113.488C984.156 112.72 984.449 112.051 984.823 111.48C985.201 110.904 985.641 110.456 986.143 110.136C986.644 109.811 987.185 109.648 987.767 109.648C988.348 109.648 988.892 109.811 989.399 110.136C989.905 110.461 990.348 110.912 990.727 111.488C991.111 112.064 991.409 112.736 991.623 113.504C991.841 114.267 991.951 115.088 991.951 115.968C991.951 116.843 991.844 117.656 991.631 118.408C991.423 119.16 991.127 119.819 990.743 120.384C990.364 120.944 989.921 121.381 989.415 121.696C988.908 122.011 988.359 122.168 987.767 122.168ZM987.767 121.464C988.151 121.464 988.479 121.368 988.751 121.176C989.023 120.979 989.241 120.667 989.407 120.24C989.572 119.808 989.692 119.243 989.767 118.544C989.847 117.84 989.887 116.979 989.887 115.96C989.887 114.941 989.847 114.075 989.767 113.36C989.692 112.645 989.569 112.067 989.399 111.624C989.233 111.176 989.015 110.851 988.743 110.648C988.476 110.44 988.151 110.336 987.767 110.336C987.393 110.336 987.073 110.437 986.807 110.64C986.545 110.843 986.332 111.165 986.167 111.608C986.001 112.051 985.881 112.629 985.807 113.344C985.732 114.059 985.695 114.931 985.695 115.96C985.695 116.984 985.732 117.848 985.807 118.552C985.881 119.256 985.999 119.821 986.159 120.248C986.324 120.675 986.537 120.984 986.799 121.176C987.065 121.368 987.388 121.464 987.767 121.464Z"
              fill="white"
            />
            <circle
              cx="1096"
              cy="337"
              r="18"
              fill="#E37D45"
              onClick={() => selectSource("SDK")}
              className="cursor-pointer drop-shadow"
            />
            <path
              id="kimpinresidence"
              onClick={() => selectSource("SDK")}
              className="cursor-pointer"
              d="M1094.65 346.21C1093.95 346.21 1093.31 346.09 1092.73 345.85C1092.16 345.603 1091.7 345.273 1091.35 344.86C1091.01 344.447 1090.84 343.993 1090.84 343.5C1090.84 343.113 1090.94 342.81 1091.15 342.59C1091.36 342.37 1091.64 342.26 1091.99 342.26C1092.34 342.26 1092.6 342.36 1092.77 342.56C1092.95 342.76 1093.09 343.01 1093.2 343.31C1093.31 343.603 1093.42 343.9 1093.54 344.2C1093.67 344.5 1093.85 344.75 1094.08 344.95C1094.31 345.15 1094.65 345.25 1095.09 345.25C1095.6 345.25 1096.07 345.103 1096.49 344.81C1096.92 344.51 1097.26 344.113 1097.51 343.62C1097.76 343.127 1097.89 342.58 1097.89 341.98C1097.89 341.34 1097.74 340.763 1097.45 340.25C1097.16 339.73 1096.76 339.32 1096.25 339.02C1095.75 338.72 1095.18 338.57 1094.55 338.57C1094.41 338.57 1094.24 338.58 1094.05 338.6C1093.86 338.62 1093.66 338.647 1093.43 338.68L1093.28 338.1C1094.35 337.627 1095.18 337.043 1095.77 336.35C1096.36 335.65 1096.66 334.893 1096.66 334.08C1096.66 333.46 1096.49 332.96 1096.15 332.58C1095.82 332.2 1095.39 332.01 1094.88 332.01C1094.24 332.01 1093.65 332.22 1093.1 332.64C1092.56 333.053 1092.14 333.607 1091.85 334.3L1091.35 334.16C1091.49 333.447 1091.77 332.82 1092.18 332.28C1092.6 331.74 1093.11 331.32 1093.72 331.02C1094.33 330.713 1094.99 330.56 1095.7 330.56C1096.33 330.56 1096.89 330.683 1097.38 330.93C1097.87 331.177 1098.26 331.517 1098.54 331.95C1098.82 332.377 1098.96 332.87 1098.96 333.43C1098.96 333.89 1098.86 334.333 1098.65 334.76C1098.45 335.18 1098.16 335.57 1097.78 335.93C1097.41 336.29 1096.96 336.607 1096.43 336.88V336.96C1097.48 337.047 1098.33 337.453 1098.96 338.18C1099.59 338.9 1099.91 339.827 1099.91 340.96C1099.91 341.687 1099.77 342.367 1099.5 343C1099.23 343.633 1098.86 344.19 1098.38 344.67C1097.9 345.15 1097.34 345.527 1096.7 345.8C1096.07 346.073 1095.38 346.21 1094.65 346.21Z"
              fill="white"
            />
            <circle
              cx="1436"
              cy="194"
              r="18"
              fill="#E37D45"
              onClick={() => selectSource("SDT")}
              className="cursor-pointer drop-shadow"
            />
            <path
              id="sdt"
              d="M1434.24 203V202.52L1436.61 202.12V198.84H1430.38L1430.2 198.39L1438.1 187.56L1438.75 187.77V197.28H1440.58V198.84H1438.75V202.12L1440.51 202.52V203H1434.24ZM1432.16 197.28H1436.61V191.13H1436.53L1432.14 197.2L1432.16 197.28Z"
              fill="white"
              onClick={() => selectSource("SDT")}
            />
            <circle
              cx="1825"
              cy="830"
              r="18"
              fill="#E37D45"
              onClick={() => selectSource("SDL")}
              className="cursor-pointer drop-shadow"
            />
            <path
              id="lumpini"
              onClick={() => selectSource("SDL")}
              className="cursor-pointer"
              d="M1823.32 839.21C1822.63 839.21 1822 839.1 1821.45 838.88C1820.9 838.66 1820.47 838.363 1820.15 837.99C1819.84 837.61 1819.68 837.18 1819.68 836.7C1819.68 836.327 1819.78 836.037 1819.97 835.83C1820.16 835.617 1820.43 835.51 1820.77 835.51C1821.11 835.51 1821.37 835.603 1821.54 835.79C1821.71 835.97 1821.85 836.197 1821.95 836.47C1822.06 836.743 1822.17 837.017 1822.29 837.29C1822.42 837.563 1822.6 837.793 1822.83 837.98C1823.06 838.16 1823.4 838.25 1823.84 838.25C1824.41 838.25 1824.93 838.09 1825.38 837.77C1825.83 837.443 1826.19 837.003 1826.46 836.45C1826.73 835.89 1826.86 835.267 1826.86 834.58C1826.86 833.86 1826.71 833.223 1826.42 832.67C1826.13 832.117 1825.72 831.683 1825.19 831.37C1824.66 831.057 1824.05 830.9 1823.36 830.9C1822.95 830.9 1822.58 830.963 1822.23 831.09C1821.89 831.21 1821.56 831.397 1821.25 831.65L1820.89 831.62L1821.92 824.02H1827.46C1827.55 823.92 1827.64 823.803 1827.73 823.67C1827.82 823.537 1827.91 823.38 1828 823.2L1828.45 823.37L1827.71 825.92H1822.64L1822.17 829.24C1822.46 829.127 1822.73 829.047 1823 829C1823.27 828.947 1823.55 828.92 1823.86 828.92C1824.85 828.92 1825.71 829.123 1826.46 829.53C1827.21 829.937 1827.79 830.5 1828.2 831.22C1828.62 831.933 1828.83 832.763 1828.83 833.71C1828.83 834.743 1828.59 835.677 1828.1 836.51C1827.61 837.337 1826.95 837.993 1826.12 838.48C1825.29 838.967 1824.35 839.21 1823.32 839.21Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="w-full h-full absolute">
          <Image
            quality={100}
            src={"/assets/SDV_Masterplan_01.webp"}
            alt="plan"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </div>

        <div className="w-full h-full absolute bg-gradient-to-t from-black/30" />

        <div className="w-60 h-56  absolute bottom-10 left-10 pb-10 flex justify-center">
          <div className="w-full h-full relative">
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
          <p className="uppercase text-white absolute bottom-2 text-sm">
            scan for more information
          </p>
        </div>

        <div className="absolute bottom-10">
          <p className="text-center uppercase text-sm text-white">
            ** Click number or building to see more information **
          </p>
        </div>

        <div className="grid grid-rows-4 grid-flow-col z-20 text-white gap-x-10 gap-y-1 bottom-24  fixed">
          {list_name.map((item, index) => (
            <p
              key={index}
              className={classNames(
                selectItem == item.value ? "font-bold text-xl" : "text-lg",
                "cursor-pointer "
              )}
              onClick={() => selectSource(item.value)}
            >
              {item.id}. {item.name}
            </p>
          ))}
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[200]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={`fixed inset-0 bg-black  bg-opacity-80`} />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-screen items-center justify-center  text-center relative p-16">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {filterData[0] && (
                  <Dialog.Panel className="w-full h-full transform  transition-all flex justify-center  ">
                    <div className="w-full h-full relative  flex flex-col">
                      <div className="h-[80%] w-full  relative shrink-0 ">
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
                          navigation={true}
                          pagination={{
                            clickable: true,
                          }}
                          modules={[
                            Autoplay,
                            EffectFade,
                            Pagination,
                            Navigation,
                          ]}
                          className="!h-full w-full relative  "
                        >
                          <div className="absolute w-full h-[50%] -bottom-1 bg-gradient-to-t from-black z-10" />

                          {filterData[0].gallery != null ? (
                            filterData[0].gallery.map(
                              (item: any, index: number) => (
                                <SwiperSlide
                                  key={index}
                                  className="w-full h-full relative overflow-hidden "
                                >
                                  <Image
                                    priority
                                    quality={100}
                                    src={item.src}
                                    alt="gallery"
                                    fill
                                    style={{
                                      objectFit: "cover",
                                      objectPosition: "center",
                                    }}
                                  />
                                </SwiperSlide>
                              )
                            )
                          ) : (
                            <SwiperSlide className="w-full h-full relative overflow-hidden ">
                              <Image
                                priority
                                quality={100}
                                src={
                                  "/assets/shop-gallery/Acai Story/1_result.webp"
                                }
                                alt="ads"
                                fill
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                }}
                              />
                            </SwiperSlide>
                          )}
                        </Swiper>
                      </div>
                      <div className="h-[20%] w-full bg-black flex justify-between items-end px-16 py-10 pb-16 z-10  ">
                        <div className="flex flex-col text-left gap-2 ">
                          {filterData[0].highlight != null ? (
                            <div className="flex  gap-7 pb-4">
                              <p className="italic text-xl text-white  flex gap-2 items-center">
                                <span className="w-16 h-[2px] bg-white"></span>
                                Highlight
                              </p>

                              <div className="flex gap-3">
                                <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center relative overflow-hidden">
                                  <p className="font-bold text-xl">PH</p>
                                </div>

                                <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center relative overflow-hidden">
                                  <p className="font-bold text-xl">2B</p>
                                </div>
                                <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center relative overflow-hidden">
                                  <p className="font-bold text-xl">3B</p>
                                </div>
                              </div>
                            </div>
                          ) : null}

                          <div className="flex items-center gap-4 align-middle">
                            <p className="text-8xl font-kings_caslon text-white -ml-2  ">
                              {filterData[0].name}
                            </p>
                          </div>

                          <p className="text-xl text-white max-w-7xl">
                            {filterData[0].detail}
                          </p>
                        </div>

                        <div className="w-60 h-52  flex justify-center  relative shrink-0">
                          <p className="uppercase text-white absolute -top-8 ">
                            scan for more information
                          </p>

                          <div className="w-full h-full relative">
                            <Image
                              src={
                                "/assets/SDTBook/qrcode_sindhorntonson.com.png"
                              }
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
                    </div>
                    <button
                      type="button"
                      title="close"
                      onClick={closeModal}
                      className="absolute -bottom-10 text-white font-bold outline-none flex flex-col items-center justify-center -translate-x-2 z-20"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-14 h-14 shrink-0"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      CLOSE
                    </button>
                  </Dialog.Panel>
                )}
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Layout>
  );
};

export default SindhornVillage;
