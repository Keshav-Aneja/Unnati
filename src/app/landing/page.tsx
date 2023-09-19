import Image from "next/image";
import Nav from "@/components/Nav";
import ButtonPrimary from "@/components/ButtonPrimary";
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
        <Nav></Nav>
        <div className="container-image w-full h-fit flex justify-center items-center relative top-20 lg:top-40">
          <Image
            src="/images/logo-modified.png"
            alt="logo"
            width={2000}
            height={2000}
            className="w-[34vw]"
          ></Image>
        </div>
        <div className="heading-container w-full relative md:top-[13rem]">
          <h1 className="text-white font-vogue text-6xl tracking-widest font-medium leading-tight">
            There is no force equal <br /> to a{" "}
            <span className="text-[#cc781e] italic">woman</span> <br />
            determined to rise
          </h1>
          <h1 className="sub-heading text-[#c4c4c4] font-couture font-thin tracking-widest">
            Who said being a homemaker can stop you from earning
            <span className="font-anderson text-2xl">?</span>
            <br /> sTART Your career on Unnati by signing in today
            <span className="font-anderson text-2xl">!</span>
          </h1>
          <ButtonPrimary></ButtonPrimary>
        </div>
      </div>
    </div>
  );
}
