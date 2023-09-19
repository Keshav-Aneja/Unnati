"use client";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import Questionairre from "./Questionairre";

export default function Ask() {
  return (
    <div className="w-[100vw] min-h-[150vh] bg-[#181818] text-white justify-center items-center relative flex flex-col">
      <div className="flex justify-center">
        <Image
          src="/images/bg-22.png"
          alt="bg-2"
          width={3000}
          height={3000}
          className="relative"
        ></Image>
        <div className="text-white font-vogue text-6xl tracking-widest font-medium leading-tight absolute top-20">
          <br />
          <br />
          ASK DESK
        </div>
      </div>
      <div className="sub-heading text-white font-couture mt-6 tracking-widest">
        We rise by lifting others
      </div>
      <Searchbar></Searchbar>
    </div>
  );
}
