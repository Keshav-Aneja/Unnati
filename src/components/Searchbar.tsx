import "./Searchbar.css";
import Image from "next/image";
export default function Searchbar() {
  return (
    <div className="searchbar py-6 flex justify-between items-center px-4 rounded-3xl">
      <input
        type="text"
        name=""
        id=""
        className="w-[90%] bg-[#181818] outline-none rounded-full px-2"
      />
      <Image
        className="searchicon cursor-pointer"
        src="/images/searchicon.png"
        alt="search"
        width={20}
        height={20}
      />
    </div>
  );
}
