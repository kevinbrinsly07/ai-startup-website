import React from "react";
import Image from "next/image";
import logo from "../../public/Nav/Logo.svg";
import downArrow from "../../public/Nav/downArrow.svg";

export default function Nav() {
  return (
    <div className="flex flex-col justify-center items-center py-5 border-b-[0.5px] border-[#FFFFFF]/[15%]">
      <div className="max-w-[1000px] w-full flex flex-row justify-between">
        <Image src={logo} height={38} width={38} alt="Logo" />
        <div className="flex flex-row gap-10 text-md font-medium text-[#878687] px-[30px] py-[4px] border-[1px] border-[#878687] rounded-[60px]">
          <div className="flex flex-row gap-3 justify-center items-center cursor-pointer">
            <h1>Features</h1>
            <Image
              src={downArrow}
              height={9.5}
              width={5.2}
              alt={"down arrow"}
            />
          </div>
          <div className="flex flex-row gap-3 justify-center items-center cursor-pointer">
            <h1>Developers</h1>
            <Image
              src={downArrow}
              height={9.5}
              width={5.2}
              alt={"down arrow"}
            />
          </div>
          <div className="flex flex-row gap-3 justify-center items-center cursor-pointer">
            <h1>Company</h1>
            <Image
              src={downArrow}
              height={9.5}
              width={5.2}
              alt={"down arrow"}
            />
          </div>
          <div className="flex flex-row gap-3 justify-center items-center cursor-pointer">
            <h1>Blog</h1>
            <Image
              src={downArrow}
              height={9.5}
              width={5.2}
              alt={"down arrow"}
            />
          </div>
          <div className="flex flex-row gap-3 justify-center items-center cursor-pointer">
            <h1>Changelog</h1>
            <Image
              src={downArrow}
              height={9.5}
              width={5.2}
              alt={"down arrow"}
            />
          </div>
        </div>
        <div className="w-[121px] cursor-pointer flex justify-center items-center h-[42px] rounded-[12px] border-[1px] border-[#FFFFFF]/[15%]">
          <div className="w-[109px] h-[30px] rounded-[8px] border-[1px] border-[#FFFFFF]/[15%] bg-[#8C45FF]/[40%] inset-shadow-[#8C45FF] inset-shadow-xs shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)] flex justify-center items-center text-md font-semibold">
            Join waitlist
          </div>
        </div>
      </div>
    </div>
  );
}
