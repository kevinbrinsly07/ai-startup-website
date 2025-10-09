import React from "react";
import PurpleGradientBlur from "./PurpleGradientBlur";
import DarkGradientSection from "./DarkGradientSection";
import Image from "next/image";
import site from "../../public/Hero/site.svg";

export default function hero() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-[1300px]">
        <div className="mt-40 flex flex-col items-center z-20">
          <div className="w-[291px] h-[42px] bg-[#000000] rounded-[50px] border-[1px] flex flex-row gap-5 justify-center px-4 py-1 items-center border-[#9855FF]">
            <div className="w-[34px] h-[18px] text-sm rounded-[40px] bg-[#9855FF] text-[#000000] font-bold flex justify-center items-center">
              NEW
            </div>
            <h1 className="text-[#9855FF] text-xl font-medium">
              Latest integration just arrived
            </h1>
          </div>
          <div>
            <h1 className="text-[100px]/[90%] text-center font-semibold mt-5">
              Boost your <br />{" "}
              <span
                className="font-bold text-transparent 
                    bg-clip-text 
                    bg-gradient-to-t from-[#B372CF] to-[#FFFFFF]"
              >
                rankings with AI.
              </span>
            </h1>
          </div>
          <div className="max-w-[544px] w-full mt-10 z-40">
            <p className="text-[20px] text-center">
              Elevate your site’s visibility effortlessly with AI, where smart
              technology meets user-friendly SEO tools.
            </p>
          </div>
          <div className="w-[121px] h-[41px] bg-[#FFFFFF] text-[#000000] rounded-[8px] font-semibold flex justify-center items-center mt-5 z-40 cursor-pointer">
            Start for free
          </div>
        </div>
        <div className="absolute top-[600px] left-1/2 -translate-x-1/2 ">
          <PurpleGradientBlur />
        </div>
        <div className="relative z-50 mt-30 w-full h-full bg-black rounded-2xl overflow-visible">
          {/* Softer glow layer */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              boxShadow:
                "0 0 25px 10px rgba(168,85,247,0.35), 0 0 60px 20px rgba(168,85,247,0.25), 0 0 100px 40px rgba(168,85,247,0.15)",
            }}
          ></div>

          {/* Inner border to define edge */}
          <div className="relative z-10 rounded-2xl border border-purple-500/50">
            <Image src={site} alt="site" className="rounded-2xl" />
          </div>
        </div>
      </div>
      <div className="-mt-[200px] w-full h-[408px] z-80">
        <DarkGradientSection />
      </div>
    </div>
  );
}
