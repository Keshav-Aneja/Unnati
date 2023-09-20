import Image from "next/image";
import ButtonPrimary from "./ButtonPrimary";
interface ProductListProps {
  title: string;
  description: string;
  priceStart: number;
  productId: number;
  img: string;
}
const ProductList: React.FC<ProductListProps> = ({
  title,
  description,
  priceStart,
  productId,
  img,
}) => {
  return (
    <div className="w-[49.5%] h-[20rem] bg-[#bd7313] flex rounded-2xl overflow-hidden p-1  mb-4">
      <div className="w-[50%] overflow-hidden rounded-l-2xl">
        <Image
          src={`/images/${img}`}
          alt="post-1"
          width={500}
          height={1000}
          className="h-full w-full"
        ></Image>
      </div>
      <div className="product w-[50%]  h-[20rem] bg-[#181818] rounded-r-2xl p-2 flex flex-col justify-between items-center">
        <h1 className="text-white text-2xl font-anderson uppercase tracking-wider">
          {title}
        </h1>
        <p className="text-[#c4c4c4] text-sm text-justify">{description}</p>
        <PriceCard priceStart={priceStart}></PriceCard>
        <ButtonPrimary>I&apos;m Interested</ButtonPrimary>
      </div>
    </div>
  );
};
export default ProductList;
interface PriceCardProps {
  priceStart: number; // Specify the type here as well
}

function PriceCard({ priceStart }: PriceCardProps) {
  return (
    <div className="w-[80%] border-2 border-[#c4c4c4] text-white rounded-full">
      Starts At: &#8377; {priceStart}
    </div>
  );
}
