"use client";
import "./ButtonSecondary.css";
import Link from "next/link";
interface btnProps {
  children: string;
  link: string;
}
const ButtonSecondary: React.FC<btnProps> = ({ children, link }) => {
  return (
    <Link href={`/${link}`}>
      <div className="button-secondary text-xl px-7 py-1 cursor-pointer ease duration-500 font-couture">
        {children}
      </div>
    </Link>
  );
};
export default ButtonSecondary;
