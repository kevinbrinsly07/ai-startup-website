import React from "react";
import Image from "next/image";
import img from "../../public/clients/img.svg";
import PurpleGradientBlurTwo from "./PurpleGradientBlurTwo";

export default function Clients() {
  return (
    <div className="flex flex-col justify-center items-center py-20 xl:px-0 px-10 bg-black">
      <div className="max-w-[1300px] w-full text-center flex flex-col justify-center items-center">
        <h1 className="xl:text-7xl text-5xl font-semibold">Our Clients</h1>
        <p className="xl:text-2xl text-lg font-medium max-w-[433px] w-full mt-5">
          Hear firsthand how our solutions have <br/> boosted online success for users
          like you.
        </p>

        <div className="mt-10 relative">
          <Image src={img} alt="img" className="z-10 relative" />
          <div className="absolute xl:block hidden top-[50px] left-[130px] z-0">
            <PurpleGradientBlurTwo />
          </div>
          <div className="xl:absolute xl:top-[120px] xl:right-[180px] text-start xl:max-w-[339px] max-w-[300px] w-full">
            <h1 className="xl:text-3xl text-lg font-semibold">
              " This product has completely transformed how I manage my projects
              and deadlines "
            </h1>
            <h2 className="xl:text-2xl text-md font-medium mt-5">Talia Taylor</h2>
            <h2 className="xl:text-md text-sm text-[#FFFFFF]/[70%] mt-1">
              Digital Marketing Director @ Quantum
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
