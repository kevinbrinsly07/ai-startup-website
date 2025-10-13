import React from "react";
import Image from "next/image";
import logoTwo from "../../public/footer/logoTwo.svg";
import icon1 from "../../public/footer/icon1.svg";
import icon2 from "../../public/footer/icon2.svg";
import icon3 from "../../public/footer/icon3.svg";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center border-t-[1px] border-[#FFFFFF]/[15%]">
      <div className="max-w-[1200px] w-full">
        <div className="flex flex-row justify-between py-10">
          <div className="flex flex-col justify-between">
            <Image src={logoTwo} alt="logo" />
            <div className="flex flex-row gap-5 cursor-pointer">
              <Image src={icon1} alt="icon" />
              <Image src={icon2} alt="icon" />
              <Image src={icon3} alt="icon" />
            </div>
          </div>

          <div className="flex flex-row gap-20">
            <div className="flex flex-row">
              <div className="text-[#FFFFFF]/[50%] font-medium text-md flex flex-col gap-10">
                <h1 className="text-[#FFFFFF] text-xl font-semibold">
                  Product
                </h1>
                <h1 className="cursor-pointer">Features</h1>
                <h1 className="cursor-pointer">Integration</h1>
                <h1 className="cursor-pointer">Updates</h1>
                <h1 className="cursor-pointer">FAQ</h1>
                <h1 className="cursor-pointer">Pricing</h1>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="text-[#FFFFFF]/[50%] font-medium text-md flex flex-col gap-10">
                <h1 className="text-[#FFFFFF] text-xl font-semibold">
                Company
                </h1>
                <h1 className="cursor-pointer">About</h1>
                <h1 className="cursor-pointer">Blog</h1>
                <h1 className="cursor-pointer">Careers</h1>
                <h1 className="cursor-pointer">Manifesto</h1>
                <h1 className="cursor-pointer">Press</h1>
                <h1 className="cursor-pointer">Contract</h1>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="text-[#FFFFFF]/[50%] font-medium text-md flex flex-col gap-10">
                <h1 className="text-[#FFFFFF] text-xl font-semibold">
                Resources
                </h1>
                <h1 className="cursor-pointer">Examples</h1>
                <h1 className="cursor-pointer">Community</h1>
                <h1 className="cursor-pointer">Guides</h1>
                <h1 className="cursor-pointer">Docs</h1>
                <h1 className="cursor-pointer">Press</h1>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="text-[#FFFFFF]/[50%] font-medium text-md flex flex-col gap-10">
                <h1 className="text-[#FFFFFF] text-xl font-semibold">
                Legal
                </h1>
                <h1 className="cursor-pointer">Privacy</h1>
                <h1 className="cursor-pointer">Terms</h1>
                <h1 className="cursor-pointer">Security</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
