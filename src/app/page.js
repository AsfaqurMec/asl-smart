import Image from "next/image";

import About from "./Components/About";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Review from "./Components/Review";
import Banner from "./Components/Banner";

export default function Home() {
  return (
    <>
    <Banner></Banner>
    <About></About>
    <Services></Services>
    <Work></Work>
    <Review></Review>
    </>
  );
}
