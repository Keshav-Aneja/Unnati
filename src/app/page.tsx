import Landing from "@/app/landing/page";
import FormPrimary from "@/components/form-primary";
import Ask from "@/sections/Ask";
import Footer from "@/components/Footer";
import Maps from "@/sections/Maps";
import Nav from "@/components/Nav";
export default function page() {
  return (
    <main className="w-full flex flex-col bg-[#181818]">
      <Nav></Nav>
      <Landing></Landing>
      <div className="cont1 w-full h-[100vh]">
        <Ask></Ask>
      </div>
      <div className="cont2 w-full h-[100vh]">
        <Maps></Maps>
      </div>
      <Footer></Footer>
    </main>
  );
}
