"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/Nav/Logo.svg";
import downArrow from "../../public/Nav/downArrow.svg";
import { FiMenu } from "react-icons/fi";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMenuClick = () => setMobileMenuOpen((prev) => !prev);
  const handleMenuItemClick = () => setMobileMenuOpen(false);
  return (
    <div className="flex flex-col justify-center items-center py-5 border-b-[0.5px] border-[#FFFFFF]/[15%] px-10 xl:px-0">
      <div className="max-w-[1000px] w-full flex flex-row justify-between items-center relative">
        <Image src={logo} height={38} width={38} alt="Logo" />
        {/* Desktop nav wrapper */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex">
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
        </div>
        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-16 right-4 bg-[#111] rounded-xl p-4 flex flex-col gap-4 border border-[#FFFFFF]/[15%] z-50 lg:hidden min-w-[180px]">
            <div
              className="flex flex-row gap-3 items-center cursor-pointer"
              onClick={handleMenuItemClick}
            >
              <h1>Features</h1>
              <Image
                src={downArrow}
                height={9.5}
                width={5.2}
                alt={"down arrow"}
              />
            </div>
            <div
              className="flex flex-row gap-3 items-center cursor-pointer"
              onClick={handleMenuItemClick}
            >
              <h1>Developers</h1>
              <Image
                src={downArrow}
                height={9.5}
                width={5.2}
                alt={"down arrow"}
              />
            </div>
            <div
              className="flex flex-row gap-3 items-center cursor-pointer"
              onClick={handleMenuItemClick}
            >
              <h1>Company</h1>
              <Image
                src={downArrow}
                height={9.5}
                width={5.2}
                alt={"down arrow"}
              />
            </div>
            <div
              className="flex flex-row gap-3 items-center cursor-pointer"
              onClick={handleMenuItemClick}
            >
              <h1>Blog</h1>
              <Image
                src={downArrow}
                height={9.5}
                width={5.2}
                alt={"down arrow"}
              />
            </div>
            <div
              className="flex flex-row gap-3 items-center cursor-pointer"
              onClick={handleMenuItemClick}
            >
              <h1>Changelog</h1>
              <Image
                src={downArrow}
                height={9.5}
                width={5.2}
                alt={"down arrow"}
              />
            </div>
          </div>
        )}
        <div className="flex items-center gap-3 ml-auto">
          <div className="w-[121px] cursor-pointer flex justify-center items-center h-[42px] rounded-[12px] border-[1px] border-[#FFFFFF]/[15%]">
            <div className="w-[109px] h-[30px] rounded-[8px] border-[1px] border-[#FFFFFF]/[15%] bg-[#8C45FF]/[40%] inset-shadow-[#8C45FF] inset-shadow-xs shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)] flex justify-center items-center text-md font-semibold">
              Join waitlist
            </div>
          </div>
          {/* Burger icon for mobile */}
          <button
            className="lg:hidden flex items-center justify-center p-2 text-2xl text-[#878687]"
            onClick={handleMenuClick}
            aria-label="Open menu"
          >
            <FiMenu />
          </button>
        </div>
      </div>
    </div>
  );
}
