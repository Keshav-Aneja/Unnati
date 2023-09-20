"use client";
import Image from "next/image";
import Nav from "@/components/Nav";
import Searchbar from "@/components/Searchbar";
import ProductList from "@/components/ProductList";
const productList = [
  {
    productId: 1,
    title: "Embroidery Art",
    description:
      "I provide a exceptional embroidery service that beautifully combines craftsmanship and creativity. Clients can expect top-notch quality, attention to their specific design preferences, and the warmth of supporting a talented local artisan in the world of textile artistry.",
    priceStart: 200,
    img: "post-1.avif",
  },
  {
    productId: 2,
    title: "Wall Hangings",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore magnam, omnis corporis veniam, consequuntur, id ipsa accusamus saepe voluptatem accusantium in. Fugit laboriosam voluptas ex atque dignissimos amet magni dolore!",
    priceStart: 700,
    img: "post-2.webp",
  },
  {
    productId: 3,
    title: "Embroidery Art",
    description:
      "I provide a exceptional embroidery service that beautifully combines craftsmanship and creativity. Clients can expect top-notch quality, attention to their specific design preferences, and the warmth of supporting a talented local artisan in the world of textile artistry.",
    priceStart: 200,
    img: "post-1.avif",
  },
  {
    productId: 4,
    title: "Wall Hangings",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore magnam, omnis corporis veniam, consequuntur, id ipsa accusamus saepe voluptatem accusantium in. Fugit laboriosam voluptas ex atque dignissimos amet magni dolore!",
    priceStart: 700,
    img: "post-2.webp",
  },
];
export default function page() {
  return (
    <div className="bg-[#181818] w-full min-h-[150vh] h-fit flex justify-center">
      <Nav deVal={2}></Nav>
      <div className="container2 w-[80%]">
        <Image
          src="/images/Background-gradient.png"
          alt="bg"
          width={3500}
          height={3500}
          className="w-[65%] absolute top-10 md:top-0 left-[50%] translate-x-[-50%] z-0"
        ></Image>
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
          <div className="product-container w-full h-[70vh] bg-transparent rounded-3xl border-2 border-[#bd7313] overflow-hidden p-2 flex justify-between items-start gap-2 flex-wrap overflow-y-scroll">
            {productList.map((data, i) => (
              <ProductList
                key={i}
                productId={data.productId}
                title={data.title}
                description={data.description}
                priceStart={data.priceStart}
                img={data.img}
              ></ProductList>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
