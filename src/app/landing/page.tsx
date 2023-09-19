import Image from "next/image";
import Nav from "@/components/Nav";
export default function page() {
  return (
    <div className="landing w-full min-h-[100vh] bg-[#181818]">
      <Image
        src="/images/Background-gradient.png"
        alt="bg"
        width={3500}
        height={3500}
        className="w-[65%] absolute top-10 left-[50%] translate-x-[-50%]"
      ></Image>
      <Nav></Nav>
    </div>
  );
}
