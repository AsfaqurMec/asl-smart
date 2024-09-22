import Image from "next/image";
import Banner from "../../Components/Banner";
import About from "../../Components/About";
import Services from "../../Components/Services";
import Work from "../../Components/Work";

export default function Home() {
  return (
    <>
    <Banner></Banner>
    <About></About>
    <Services></Services>
    <Work></Work>
    </>
  );
}
