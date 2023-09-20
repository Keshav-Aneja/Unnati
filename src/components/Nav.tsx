import Image from "next/image";
import Link from "next/link";
import SmoothScroll from "@/app/helpers/smoothScroll";
interface navProps {
  deVal: Number;
}
const Nav: React.FC<navProps> = ({ deVal }) => {
  return (
    <div className="navbar" style={{ zIndex: 100 }}>
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
          <Link
            href="/"
            className={` ${
              deVal === 1 ? "text-[#bd7313]" : "text-white"
            } duration-300 ease`}
          >
            <p className="item font-couture  hover:text-[#bd7313] duration-300 ease">
              Home
            </p>
          </Link>
          <Link
            href="/products"
            className={` ${
              deVal === 2 ? "text-[#bd7313]" : "text-white"
            } duration-300 ease`}
          >
            <p className="item font-couture   hover:text-[#bd7313] duration-300 ease">
              Products
            </p>
          </Link>
          <Link
            href="/services"
            className={` ${
              deVal === 3 ? "text-[#bd7313] " : "text-white"
            } duration-300 ease`}
          >
            <p className="item font-couture  hover:text-[#bd7313] duration-300 ease">
              Services
            </p>
          </Link>
          <SmoothScroll
            target="#ask"
            className={` ${
              deVal === 4 ? "text-[#bd7313]" : "text-white"
            } duration-300 ease`}
          >
            <p className="item font-couture   hover:text-[#bd7313] duration-300 ease">
              Ask Desk
            </p>
          </SmoothScroll>
          <Link
            href=""
            className={` ${deVal === 5 ? "text-[#bd7313]" : "text-white"} `}
          >
            <p className="item font-couture   hover:text-[#bd7313] duration-300 ease">
              Women in news
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Nav;
