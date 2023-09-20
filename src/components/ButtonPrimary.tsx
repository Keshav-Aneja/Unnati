import "./ButtonPrimary.css";
interface btnProps2 {
  children: string;
}
const ButtonPrimary: React.FC<btnProps2> = ({ children }) => {
  return (
    <div className="button-primary text-xl px-7 py-1 cursor-pointer ease duration-500 font-couture">
      {children}
    </div>
  );
};
export default ButtonPrimary;
