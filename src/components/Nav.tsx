import Image from "next/image";
import Link from "next/link";
export default function Nav() {
  return (
    <div className="navbar">
      <div className="upper-nav w-full bg-[#181818] fixed top-0 left-0 h-fit flex justify-center items-center py-2 text-white md:hidden">
        <Image
          src="/images/unnati-logo.png"
          alt="logo"
          width={200}
          height={200}
          className="w-20  bg-black"
        ></Image>
      </div>
      <div className="nav-main w-full md:w-[80%] h-16 bg-gradient-to-b from-[#202427] to-[#000000] text-white fixed bottom-0 left-0 rounded-t-3xl md:rounded-full md:top-4 md:left-[50%] md:translate-x-[-50%] flex justify-center items-center md:justify-between md:px-4">
        <div className="logo hidden md:block">
          <Image
            src="/images/unnati-logo-tp.png"
            alt="logo"
            width={200}
            height={200}
            className="w-32 aspect-[4]"
          ></Image>
        </div>
        <div className="menu-items w-full flex justify-around items-center md:hidden">
          <Image
            src="/images/home-line.png"
            alt=""
            width={30}
            height={30}
            className=""
          ></Image>
          <Image
            src="/images/grocery-store-line.png"
            alt=""
            width={30}
            height={30}
            className=""
          ></Image>
          <Image
            src="/images/customer-review-line.png"
            alt=""
            width={30}
            height={30}
            className=""
          ></Image>
          <Image
            src="/images/confused-line.png"
            alt=""
            width={30}
            height={30}
            className=""
          ></Image>
          <Image
            src="/images/news-line.png"
            alt=""
            width={30}
            height={30}
            className=""
          ></Image>
        </div>
        <div className="menu-list md:w-[80%] lg:w-[50%] md:flex justify-around tracking-wider md:text-xs lg:text-base hidden">
          <Link href="" className=" text-[#bd7313] duration-300 ease">
            <p className="item font-couture">Home</p>
          </Link>
          <Link
            href=""
            className=" text-white  hover:text-[#bd7313] duration-300 ease"
          >
            <p className="item font-couture">Products</p>
          </Link>
          <Link
            href=""
            className=" text-white  hover:text-[#bd7313] duration-300 ease"
          >
            <p className="item font-couture">Services</p>
          </Link>
          <Link
            href=""
            className=" text-white  hover:text-[#bd7313] duration-300 ease"
          >
            <p className="item font-couture">Ask Desk</p>
          </Link>
          <Link
            href=""
            className=" text-white  hover:text-[#bd7313] duration-300 ease"
          >
            <p className="item font-couture">Women in news</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
