// components/Accordion.tsx
"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export default function Accordion({ title, children, isOpen, onToggle }: AccordionProps) {
  return (
    <div className="mb-4 border border-none rounded-md overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 hover:bg-gray-200 transition duration-200"
      >
        <span className="font-semibold text-left">{title}</span>
        <ChevronDownIcon
          className={`h-5 w-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        className={`px-4 py-2 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {isOpen && <div className="pt-2">{children}</div>}
      </div>
    </div>
  );
}
