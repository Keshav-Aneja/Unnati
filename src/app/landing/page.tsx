"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import Ask from "@/sections/Ask";
import Buttons from "@/sections/Buttons";
export default function page() {
  return (
    <div className="landing w-full min-h-[100vh] bg-[#181818] flex justify-center">
      <div className="w-[80%]">
        <Image
          src="/images/Background-gradient.png"
          alt="bg"
          width={3500}
          height={3500}
          className="w-[65%] absolute top-10 md:top-0 left-[50%] translate-x-[-50%] z-0"
        ></Image>
        <div className="container-image w-full h-fit flex justify-center items-center relative top-20 lg:top-40">
          <Image
            src="/images/logo-modified.png"
            alt="logo"
            width={2000}
            height={2000}
            className="w-[34vw]"
          ></Image>
        </div>
        <div className="heading-container w-full relative top-[16rem] md:top-[13rem]">
          <h1 className="text-white font-vogue text-3xl md:text-6xl tracking-widest font-medium leading-tight text-left">
            There is no force equal <br /> to a
            <span className="text-[#cc781e] italic"> woman</span> <br />
            determined to rise
          </h1>
          <h1 className="sub-heading text-[#c4c4c4] font-couture font-thin tracking-widest text-xs md:text-base text-left">
            Who said being a homemaker can stop you from earning
            <span className="font-anderson text-2xl">?</span>
            <br /> sTART Your career on Unnati by signing in today
            <span className="font-anderson text-2xl">!</span>
          </h1>
          {/* <div className="flex gap-4 mt-6">
            <ButtonPrimary>LOG In</ButtonPrimary>
            <ButtonSecondary link={"signup"}>SIGN UP</ButtonSecondary>
          </div> */}
          <Buttons></Buttons>
        </div>
      </div>
    </div>
  );
}
