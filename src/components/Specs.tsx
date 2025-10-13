import React from "react";
import Image from "next/image";
import ring from "../../public/specs/ring.svg";
import cube from "../../public/specs/cube.svg";
import site from "../../public/Hero/site.svg";
import chart from "../../public/specs/chart.svg";


export default function Specs() {
  return (
    <div className="flex flex-col justify-center items-center py-20 bg-black">
      <div className="max-w-[1300px] w-full flex flex-col justify-center items-center">
        <h1 className="text-center text-[32px]/[100%] max-w-[553px] font-2xl mt-20">
          Harness the power of AI, making search engine optimization intuitive
          and effective for all skill levels.
        </h1>
        <div className="mt-10 flex flex-row justify-between max-w-[1100px] w-full">
          <div className="w-[346px] h-[400px] bg-[#000000]/[6%] border-[1px] border-[#FFFFFF]/[15%] rounded-[10px] flex flex-col justify-between items-center px-10 pb-10">
            <Image src={ring} alt="ring" />
            <div className="text-start text-xl font-semibold">
              <h1>SEO goal setting</h1>
              <h1 className="text-[#FFFFFF]/[70%] mt-3">
                Helps you set and achieve SEO goals with guided assistance.
              </h1>
            </div>
          </div>
          <div className="w-[744px] h-[400px] border-[1px] border-[#FFFFFF]/[10%] rounded-[10px] relative overflow-hidden">
            <Image
              src={site}
              alt="site"
              className="absolute left-16 top-16 z-20"
            />
            <section className="absolute w-full h-full rounded-[10px] bg-gradient-to-b from-transparent via-transparent to-[#361764] z-30" />

            <div className="text-start absolute bottom-10 left-5 text-xl font-semibold z-40 max-w-[259px] w-full">
              <h1>User-friendly dashboard</h1>
              <h1 className="text-[#FFFFFF]/[70%] mt-3">
                Perform complex SEO audits and optimizations with a single
                click.
              </h1>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-row justify-between max-w-[1100px] w-full">
          <div className="w-[744px] h-[400px] border-[1px] border-[#FFFFFF]/[10%] rounded-[10px] relative overflow-hidden">
            <Image
              src={chart}
              alt="site"
              className="absolute left-16 top-16 z-20"
            />
            <section className="absolute w-full h-full rounded-[10px] bg-gradient-to-b from-transparent via-transparent to-[#361764] z-30" />

            <div className="text-start absolute bottom-10 left-5 text-xl font-semibold z-40 max-w-[189px] w-full">
              <h1>Visual reports</h1>
              <h1 className="text-[#FFFFFF]/[70%] mt-3">
                Visual insights into your site’s performance.
              </h1>
            </div>
          </div>
          <div className="w-[346px] h-[400px] bg-[#000000]/[6%] border-[1px] border-[#FFFFFF]/[15%] rounded-[10px] flex flex-col justify-between items-center px-10 pb-10">
            <Image src={cube} alt="ring" />
            <div className="text-start text-xl font-semibold">
              <h1>Smart Keyword Generator</h1>
              <h1 className="text-[#FFFFFF]/[70%] mt-3">
                Automatic suggestions and the best keywords to target.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
