"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Nav from "@/components/Nav";
import Searchbar from "@/components/Searchbar";
import ProductList from "@/components/ProductList";
import Cookie from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";
export default function DashboardMain() {
  const targetDate = new Date("2023-09-24T23:59:59");
  const [score, setScore] = useState(0);
  const [issuesClosed, setIssuesClosed] = useState(0);

  useEffect(() => {
    const getScore = async () => {
      try {
        const token = Cookie.get("token");
        const response = await axios.get(
          `https://forkthis-backend.csivit.com/user`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        setScore(response.data.score);
        setIssuesClosed(response.data.noOfIssuesSolved);
      } catch (err: any) {
        toast.error(err, { theme: "dark" });
      }
    };
    getScore();
  }, []);

  return (
    <div className="container2 w-[80%]">
      <div className="heading-container relative top-48 text-center flex flex-col items-center">
        <h1 className="main-heading text-white font-vogue text-3xl md:text-8xl tracking-widest font-medium leading-tight">
          Products
        </h1>
        <h1 className="sub-heading text-white font-couture font-thin tracking-widest text-xs md:text-2xl">
          <br />
          <br />
          <br />
          <br />
          BUY PRODUCTS
        </h1>
        <h1 className="sub-heading text-[#c4c4c4] font-couture font-thin tracking-widest text-xs md:text-base">
          Shop classy handmade products made by our talented artists
        </h1>
        <Searchbar hideIt={true} place={"Search for Products..."}></Searchbar>
        <div className="block w-full h-12"></div>
      </div>
    </div>
  );
}
