"use client";
import Image from "next/image";
import Map from "@/components/Map";
export default function Maps() {
  return (
    <div className="map-container w-full flex flex-col justify-center items-center relative">
      <div className="text-white font-vogue text-6xl tracking-widest font-medium leading-tight">
        Vendors in Your Locality
      </div>
      <h1
        className="sub-heading text-[#c4c4c4] font-couture font-thin"
        style={{ letterSpacing: "10px" }}
      >
        Support your local female vendors
      </h1>
      <Image
        src="/images/bg-5.png"
        alt="bg-5"
        width={3500}
        height={3500}
        className="w-full"
      ></Image>
      <Map></Map>
    </div>
  );
}
