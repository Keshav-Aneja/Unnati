import "./Searchbar.css";
import { useState } from "react";
import Image from "next/image";
import Questionairre from "@/sections/Questionairre";
export default function Searchbar() {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };
  return (
    <>
      <div
        className={`searchbar py-6 flex justify-between items-center px-4 rounded-3xl ${
          isFocused ? "glowing" : ""
        }`}
      >
        <input
          type="text"
          name=""
          id="ipt"
          className="w-[90%] bg-[#181818] outline-none rounded-full px-2"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <Image
          className="searchicon cursor-pointer"
          src="/images/searchicon.png"
          alt="search"
          width={20}
          height={20}
        />
      </div>
      <div className="block w-full h-20"></div>
      <Questionairre></Questionairre>
    </>
  );
}
