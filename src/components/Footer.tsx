import "./Footer.css";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="container mt-20">
      <Image
        src="/images/lgoo-black.png"
        alt="unnati-logo"
        width={300}
        height={300}
      ></Image>
      <h4 className="font-vogue font-bold">2023</h4>
    </div>
  );
}
