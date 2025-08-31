import React from "react";
import Link from "next/link";
import Image from "next/image"; 
import Logo from "@/public/image/default.png";

// Layout component for tutorial pages
export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return (
    <>
      <nav className="h-p-[1rem] border-b border-gray-300 mb-[2rem] fixed w-full bg-white text-blue-500 overflow-hidden z-50">
        <Link href="/" className="text-blue-500 text-3xl text-left w-full inline-block">
          {/* Website logo */}
          <Image src={Logo} alt="Ip Klazz" className="h-10 w-10 m-3 hover:scale-200 transform scale-[3]" />
          {/* Only visible on larger screens */}
          <span className="hidden md:block text-2xl">Ip Klazz</span>
          {/* Only visible on smaller screens */}
          {/* <ArrowLeftCircleIcon className="md:hidden h-10 8 w-10 hover:scale-110 text-blue-500" /> */}
        </Link>
      </nav>
      <div className="pt-[2rem]">{children}</div>
    </>
  );
}
