import React from "react";
import Image from "next/image";
import img from "../../public/clients/img.svg";
import PurpleGradientBlurTwo from "./PurpleGradientBlurTwo";

export default function Clients() {
  return (
    <div className="flex flex-col justify-center items-center py-20 bg-black">
      <div className="max-w-[1300px] w-full text-center flex flex-col justify-center items-center">
        <h1 className="text-7xl font-semibold">Our Clients</h1>
        <p className="text-2xl font-medium max-w-[433px] w-full mt-5">
          Hear firsthand how our solutions have <br/> boosted online success for users
          like you.
        </p>

        <div className="mt-10 relative">
          <Image src={img} alt="img" />
          <div className="absolute top-[50px] left-[130px] -z-10">
            <PurpleGradientBlurTwo />
          </div>
          <div className="absolute top-[120px] right-[180px] text-start max-w-[339px] w-full">
            <h1 className="text-3xl font-semibold">
              " This product has completely transformed how I manage my projects
              and deadlines "
            </h1>
            <h2 className="text-2xl font-medium mt-5">Talia Taylor</h2>
            <h2 className="text-md text-[#FFFFFF]/[70%] mt-1">
              Digital Marketing Director @ Quantum
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
