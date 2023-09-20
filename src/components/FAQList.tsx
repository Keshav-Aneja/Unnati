import React from "react";
import { useState } from "react";
import Image from "next/image";
interface FAQListProps {
  que: string;
  ans: string;
}

const FAQList: React.FC<FAQListProps> = ({ que, ans }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const rotateImage = () => {
    setRotationAngle(rotationAngle + 180);
  };
  return (
    <div
      className={`w-full p-4 lg:bg-[rgba(0,0,0)] lg:p-6 font-manrope  lg:hover:bg-[#181818] rounded-xl ${
        isOpen ? "h-44 bg-[#181818]" : "h-20 overflow-hidden bg-[rgba(0,0,0)]"
      } transition-height duration-200 text-[#bd7313] border-2 border-[#bd7313]`}
      onClick={() => {
        rotateImage();
        setIsOpen((open) => !open);
      }}
    >
      <div
        className={`top-panel font-bold tracking-wider text-xs md:text-base lg:text-xl flex justify-between cursor-pointer`}
      >
        {que}
        <Image
          width={16}
          height={16}
          alt="arrowButton"
          src="/images/arrow.svg"
          style={{
            transform: `rotate(${rotationAngle}deg)`,
            width: "auto",
            height: "auto",
            margin: "4px",
          }}
          className="duration-300 transition-all"
        />
      </div>
      <div
        className={`bottom-panel text-xs md:text-base lg:text-lg mt-2 ${
          isOpen
            ? "delayed-opacity mt-2 opacity-100 transition-opacity duration-300 delay-200"
            : "mt-20 opacity-0"
        } text-[#c4c4c4] `}
      >
        {ans}
      </div>
    </div>
  );
};
export default FAQList;
