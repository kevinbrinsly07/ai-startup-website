import React from "react";
import Image from "next/image";
import icon1 from "../../public/seo/icon1.svg";
import icon2 from "../../public/seo/icon2.svg";
import icon3 from "../../public/seo/icon3.svg";
import icon4 from "../../public/seo/icon4.svg";
import icon5 from "../../public/seo/icon5.svg";
import icon6 from "../../public/seo/icon6.svg";
import icon7 from "../../public/seo/icon7.svg";
import icon8 from "../../public/seo/icon8.svg";
import icon9 from "../../public/seo/icon9.svg";

export default function SEO() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#190D2E] to-#020103] py-40">
      <div className="max-w-[1100px] w-full mt-10">
        <h1 className="text-[50px]/[110%] font-medium max-w-[354px]">
          Elevate your SEO efforts.
        </h1>
        <div className="mt-10 grid grid-cols-3">
          {/* 1st */}
          <div>
            <div className="flex flex-row gap-3">
              <Image src={icon1} alt="icon" />
              <h1 className="text-2xl font-semibold">
                User-friendly dashboard
              </h1>
            </div>
            <p className="text-2xl text-[#FFFFFF]/[70%] mt-3">
              Perform complex SEO audits and <br /> optimizations with a single
              click.
            </p>
          </div>
          {/* 2nd */}
          <div>
            <div className="flex flex-row gap-3">
              <Image src={icon2} alt="icon" />
              <h1 className="text-2xl font-semibold">Visual reports</h1>
            </div>
            <p className="text-2xl text-[#FFFFFF]/[70%] mt-3">
              Visual insights into your site’s <br /> performance.
            </p>
          </div>
          {/* 3rd */}
          <div>
            <div className="flex flex-row gap-3">
              <Image src={icon3} alt="icon" />
              <h1 className="text-2xl font-semibold">
                Smart Keyword Generator
              </h1>
            </div>
            <p className="text-2xl text-[#FFFFFF]/[70%] mt-3">
              Automatic suggestions and the best <br/> keywords to target.
            </p>
          </div>
          {/* 4th */}
          <div>
            <div className="flex flex-row gap-3 mt-10">
              <Image src={icon4} alt="icon" />
              <h1 className="text-2xl font-semibold">Content evaluation</h1>
            </div>
            <p className="text-2xl text-[#FFFFFF]/[70%] mt-3">
              Simple corrections for immediate <br/> improvemens.
            </p>
          </div>
          {/* 5th */}
          <div>
            <div className="flex flex-row gap-3 mt-10">
              <Image src={icon5} alt="icon" />
              <h1 className="text-2xl font-semibold">SEO goal setting</h1>
            </div>
            <p className="text-2xl text-[#FFFFFF]/[70%] mt-3">
              Helps you set and achieve SEO <br/> goals with guided assistance.
            </p>
          </div>
          {/* 6th */}
          <div>
            <div className="flex flex-row gap-3 mt-10">
              <Image src={icon6} alt="icon" />
              <h1 className="text-2xl font-semibold">Automated alerts</h1>
            </div>
            <p className="text-2xl text-[#FFFFFF]/[70%] mt-3">
              Automatic notifications about your <br/> SEO health, including quick
              fixes.
            </p>
          </div>
          {/* 7th */}
          <div>
            <div className="flex flex-row gap-3 mt-10">
              <Image src={icon7} alt="icon" />
              <h1 className="text-2xl font-semibold">
                Link Optimization Wizard
              </h1>
            </div>
            <p className="text-2xl text-[#FFFFFF]/[70%] mt-3">
              Guides you through the process <br/> of creating and managing links.
            </p>
          </div>
          {/* 8th */}
          <div>
            <div className="flex flex-row gap-3 mt-10">
              <Image src={icon8} alt="icon" />
              <h1 className="text-2xl font-semibold">One-click optimization</h1>
            </div>
            <p className="text-2xl text-[#FFFFFF]/[70%] mt-3">
              Perform complex SEO audits and <br/> optimizations with a single click.
            </p>
          </div>
          {/* 9th */}
          <div>
            <div className="flex flex-row gap-3 mt-10">
              <Image src={icon9} alt="icon" />
              <h1 className="text-2xl font-semibold">Competitor reports</h1>
            </div>
            <p className="text-2xl text-[#FFFFFF]/[70%] mt-3">
              Provides insights into competitor's <br/> keyword strategies and
              ranking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
