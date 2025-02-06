import Image from "next/image";

import Banner from "./Components/Banner";
import Sidebar from "./Components/Sidebar";

// import Role from "./Components/Role.jsx";


export default function Home() {
  return (
    <>
    <div className="flex">

   <div className="w-[10%]">

  <Sidebar></Sidebar>
   
   </div>
      <div className="w-[90%]">
      <Banner></Banner>
      </div>
    </div>
    
     {/* <div className="pt-32 bg-blue-400 min-h-screen">

     <Role></Role>

     </div> */}

    </>
  );
}
