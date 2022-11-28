import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar: FC<Props> = (): JSX.Element => {
  return (
    <>
      <div className="w-full h-fit flex justify-center px-16 py-5 fixed">
        <div className="w-40 h-32 relative">
          <Image
            src={"/assets/VELAA_03-Black.GIF"}
            alt="logo"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
