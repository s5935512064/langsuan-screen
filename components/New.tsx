import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const NewComponent: FC<Props> = (): JSX.Element => {
  return (
    <>
      <div></div>
    </>
  );
};

export default NewComponent;
