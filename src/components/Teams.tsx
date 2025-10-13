import React from "react";
import Image from "next/image";
import logo1 from "../../public/Teams/logo1.svg";
import logo2 from "../../public/Teams/logo2.svg";
import logo3 from "../../public/Teams/logo3.svg";
import logo4 from "../../public/Teams/logo4.svg";
import logo5 from "../../public/Teams/logo5.svg";
import logo6 from "../../public/Teams/logo6.svg";
import logo7 from "../../public/Teams/logo7.svg";
import logo8 from "../../public/Teams/logo8.svg";

export default function Teams() {
  return (
    <div className="flex flex-col justify-center items-center py-20 bg-black">
      <div className="max-w-[1000px] w-full text-[#a88585] text-center flex flex-col justify-center items-center">
        <h1 className="text-[#FFFFFF]/[70%] text-lg font-xl">
          Trusted by the world’s most innovative teams
        </h1>
        {/* brands section */}
        <div className="max-w-[965px] w-full flex flex-col gap-3 mt-10">
          {/* 1st row */}
          <div className="flex flex-row justify-between">
            <div className="w-[235px] h-[98px] border-[1px] border-[#FFFFFF]/[15%] rounded-[10px] flex justify-center items-center">
              <Image src={logo1} alt="logo" />
            </div>
            <div className="w-[235px] h-[98px] border-[1px] border-[#FFFFFF]/[15%] rounded-[10px] flex justify-center items-center">
              <Image src={logo2} alt="logo" />
            </div>
            <div className="w-[235px] h-[98px] border-[1px] border-[#FFFFFF]/[15%] rounded-[10px] flex justify-center items-center">
              <Image src={logo3} alt="logo" />
            </div>
            <div className="w-[235px] h-[98px] border-[1px] border-[#FFFFFF]/[15%] rounded-[10px] flex justify-center items-center">
              <Image src={logo4} alt="logo" />
            </div>
          </div>
          {/* 2nd row  */}
          <div className="flex flex-row justify-between">
            <div className="w-[235px] h-[98px] border-[1px] border-[#FFFFFF]/[15%] rounded-[10px] flex justify-center items-center">
              <Image src={logo5} alt="logo" />
            </div>
            <div className="w-[235px] h-[98px] border-[1px] border-[#FFFFFF]/[15%] rounded-[10px] flex justify-center items-center">
              <Image src={logo6} alt="logo" />
            </div>
            <div className="w-[235px] h-[98px] border-[1px] border-[#FFFFFF]/[15%] rounded-[10px] flex justify-center items-center">
              <Image src={logo7} alt="logo" />
            </div>
            <div className="w-[235px] h-[98px] border-[1px] border-[#FFFFFF]/[15%] rounded-[10px] flex justify-center items-center">
              <Image src={logo8} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
