"use client";
import { useState } from "react";

export default function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2 border border-gray-300 rounded-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold"
      >
        {title}
      </button>
      {isOpen && <div className="px-4 py-2 bg-white">{children}</div>}
    </div>
  );
}
