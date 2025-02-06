/* eslint-disable @next/next/no-img-element */
"use client"
import Image from "next/image";
import asl from '../../../public/asl.png'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-[#8386ea] w-full border-b-[1px] text-white text-xl border-b-[#ffffff41] h-auto md:h-20 lg:h-auto fixed z-50 flex justify-between py-5 px-10">
      
      <Link href={'/'}><Image src={asl} className="h-12 w-20" alt="logo"></Image></Link>

    <div className="flex gap-2">
    <Link href={'login'}><button className="btn bg-yellow-600">Login</button></Link>
      <Link href={'register'}><button className="btn bg-blue-600">Register</button></Link>
    </div>

    </div>
  );
};

export default Navbar;