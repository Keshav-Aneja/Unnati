"use client";
import ButtonSecondary from "@/components/ButtonSecondary";
import { useState } from "react";
import Image from "next/image";
import Nav from "@/components/Nav";
import "./signup.css";
export default function SignUp() {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className="w-full h-full relative">
      <Nav deVal={0}></Nav>
      <Image
        src="/images/bg-vertical.png"
        alt="side-bg"
        width={2000}
        height={2000}
        className="absolute h-[80vh] w-[auto] right-0"
      ></Image>
      <Image
        src="/images/bg-vertical.png"
        alt="side-bg"
        width={2000}
        height={2000}
        className="absolute h-[80vh] w-[auto] left-0 rotate-180"
      ></Image>
      <div className="form mt-24 ">
        <div className="input-field">
          <h1 className="text-[#bd7313] text-2xl font-couture tracking-widest">
            Sign Up
          </h1>

          <input
            type="text"
            placeholder="Name"
            required
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className={` inputs ${isFocused ? "glowing2" : ""}`}
          />
          <input
            type="email"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className={` inputs ${isFocused ? "glowing2" : ""}`}
            placeholder="Email Address"
          />
          <input
            type="number"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className={` inputs ${isFocused ? "glowing2" : ""}`}
            placeholder="Contact Number"
          />
          <div className="location flex gap-4">
            <input
              type="text"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className={` inputs ${isFocused ? "glowing2" : ""}`}
              placeholder="Select State"
            />
            <input
              type="text"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className={` inputs ${isFocused ? "glowing2" : ""}`}
              placeholder="Select City"
            />
          </div>
          <input
            type="text"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className={` inputs ${isFocused ? "glowing2" : ""}`}
            placeholder="Your Profession"
          />
          <input
            type="password"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className={` inputs ${isFocused ? "glowing2" : ""}`}
            placeholder="Password"
          />
          <div className="signup w-full flex justify-center">
            <ButtonSecondary link={"dashboard"}>REGISTER</ButtonSecondary>
          </div>
        </div>
      </div>
    </div>
  );
}
