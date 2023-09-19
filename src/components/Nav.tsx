import Image from "next/image";
export default function Nav() {
  return (
    <div className="navbar">
      <div className="upper-nav w-full bg-[#181818] fixed top-0 left-0 h-fit flex justify-center items-center py-2 text-white">
        <Image
          src="/images/unnati-logo.png"
          alt="logo"
          width={200}
          height={200}
          className="w-20  bg-black"
        ></Image>
      </div>
      <div className="nav-main w-full h-fit bg-[#181818] text-white">
        <div className="logo hidden"></div>
        <div className="menu-items">Hello</div>
      </div>
    </div>
  );
}
