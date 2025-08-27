import React from "react";
import Link from "next/link";

// Layout component for tutorial pages
export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return (
    <>
      <nav className="p-[1rem] border-b border-gray-300 mb-[2rem] fixed w-full bg-white text-blue-500">
        <Link href="/" className="text-blue-500 text-3xl text-left w-full">
          {/* Only visible on larger screens */}
          <span className="hidden md:block text-2xl">Back to Home</span>
          {/* Only visible on smaller screens */}
          <span className="md:hidden text-4xl">←</span>
        </Link>
      </nav>
      <div className="pt-[2rem]">{children}</div>
    </>
  );
}
