import React from "react";
import Image from "next/image";
import tick from "../../public/pricing/tick.svg";
import PurpleGradientBlurThree from "./PurpleGradientBlurThree";

export default function Pricing() {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <div className="max-w-[1300px] w-full text-center flex flex-col justify-center items-center">
        <h1 className="text-7xl font-semibold">Pricing</h1>
        <p className="text-2xl font-medium max-w-[433px] w-full mt-5">
          Choose the right plan to meet your SEO <br /> needs and start
          optimizing today.
        </p>

        <div className="relative mt-10 flex flex-row justify-between max-w-[941px] w-full">
          {/* 1st card */}
          <div className="w-[307px] h-[500px] bg-[#000000]/[6%] flex flex-col justify-between border-[1px] border-[#FFFFFF]/[15%] rounded-[10px] p-5 text-start">
            <div>
              <h1 className="text-3xl font-medium">Pricing</h1>
              <h1 className="border-b-[1px] border-[#282729] pb-5 text-[#FFFFFF]/[70%] text-xl">
                $29/mo
              </h1>
              <div className="text-lg mt-8 flex flex-col gap-5">
                <div className="flex flex-row gap-2">
                  <Image src={tick} alt="tick" />
                  <h1>Keyword optimization</h1>
                </div>
                <div className="flex flex-row gap-2">
                  <Image src={tick} alt="tick" />
                  <h1>Automated meta tags</h1>
                </div>
                <div className="flex flex-row gap-2">
                  <Image src={tick} alt="tick" />
                  <h1>SEO monitoring</h1>
                </div>
                <div className="flex flex-row gap-2">
                  <Image src={tick} alt="tick" />
                  <h1>Monthly reports</h1>
                </div>
              </div>
            </div>
            <div className="w-full h-[38px] bg-[#3D3D3D]/[40%] border-[1px] border-[#FFFFFF]/[15%] flex justify-center items-center cursor-pointer text-md rounded-[10px] inset-shadow-sm/80 inset-shadow-[#FFFFFF]/[75%]">
              Join waitlist
            </div>
          </div>

          {/* 2nd card */}
          <div className="relative w-[307px] h-[500px] bg-[#000000]/[6%] flex flex-col justify-between border-[1px] border-[#FFFFFF]/[15%] rounded-[10px] p-5 text-start">
            <div className="z-10">
              <h1 className="text-3xl font-medium">Pro</h1>
              <h1 className="border-b-[1px] border-[#282729] pb-5 text-[#FFFFFF]/[70%] text-xl">
                $79/mo
              </h1>
              <div className="text-lg mt-8 flex flex-col gap-5">
                <div className="flex flex-row gap-2">
                  <Image src={tick} alt="tick" />
                  <h1>Keyword optimization</h1>
                </div>
                <div className="flex flex-row gap-2">
                  <Image src={tick} alt="tick" />
                  <h1>Automated meta tags</h1>
                </div>
                <div className="flex flex-row gap-2">
                  <Image src={tick} alt="tick" />
                  <h1>SEO monitoring</h1>
                </div>
                <div className="flex flex-row gap-2">
                  <Image src={tick} alt="tick" />
                  <h1>Monthly reports</h1>
                </div>
                <div className="flex flex-row gap-2">
                  <Image src={tick} alt="tick" />
                  <h1>Content suggestions</h1>
                </div>
                <div className="flex flex-row gap-2">
                  <Image src={tick} alt="tick" />
                  <h1>Link optimization</h1>
                </div>
              </div>
            </div>
            <div className="w-full relative z-10 h-[38px] bg-[#8C45FF] border-[1px] border-[#FFFFFF]/[15%] flex justify-center items-center cursor-pointer text-md rounded-[10px] inset-shadow-sm/80 inset-shadow-[#FFFFFF]/[75%]">
              Join waitlist
            </div>
            <div className="w-full h-full top-0 absolute left-0 rounded-[10px] bg-gradient-to-b from-[#000000] via-[#000000]/70 to-transparent z-0" />
            <div className="w-full h-full top-0 absolute left-0 rounded-[10px] grid grid-cols-5 grid-rows-7 -z-10">
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted rounded-tl-[10px]" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted rounded-tr-[10px]" />

              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />

              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />

              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />

              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />

              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />

              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted rounded-bl-[10px]" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted" />
              <div className="border-[1px] border-[#8C45FF]/[40%] border-dotted rounded-br-[10px]" />
            </div>
          </div>

          {/* 3rd card */}
          <div className="w-[307px] h-[500px] bg-[#000000]/[6%] flex flex-col justify-between border-[1px] border-[#FFFFFF]/[15%] rounded-[10px] p-5 text-start">
            <div>
              <h1 className="text-3xl font-medium">Business</h1>
              <h1 className="border-b-[1px] border-[#282729] pb-5 text-[#FFFFFF]/[70%] text-xl">
                $149/mo
              </h1>
              <div className="text-lg mt-8 flex flex-col gap-5">
                <div className="flex flex-row gap-2">
                  <Image src={tick} alt="tick" />
                  <h1>Keyword optimization</h1>
                </div>
                <div className="flex flex-row gap-2">
                  <Image src={tick} alt="tick" />
                  <h1>Automated meta tags</h1>
                </div>
                <div className="flex flex-row gap-2">
                  <Image src={tick} alt="tick" />
                  <h1>SEO monitoring</h1>
                </div>
                <div className="flex flex-row gap-2">
                  <Image src={tick} alt="tick" />
                  <h1>Monthly reports</h1>
                </div>
                <div className="flex flex-row gap-2">
                  <Image src={tick} alt="tick" />
                  <h1>Content suggestions</h1>
                </div>
                <div className="flex flex-row gap-2">
                  <Image src={tick} alt="tick" />
                  <h1>Link optimization</h1>
                </div>
                <div className="flex flex-row gap-2">
                  <Image src={tick} alt="tick" />
                  <h1>Multi-user access</h1>
                </div>
                <div className="flex flex-row gap-2">
                  <Image src={tick} alt="tick" />
                  <h1>API integration</h1>
                </div>
              </div>
            </div>
            <div className="w-full h-[38px] bg-[#3D3D3D]/[40%] border-[1px] border-[#FFFFFF]/[15%] flex justify-center items-center cursor-pointer text-md rounded-[10px] inset-shadow-sm/80 inset-shadow-[#FFFFFF]/[75%]">
              Join waitlist
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 -z-10">
            <PurpleGradientBlurThree />
          </div>
        </div>
      </div>
    </div>
  );
}
