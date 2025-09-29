// Side navigation
"use client";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={`bg-gray-100 dark:bg-gray-900 p-4 transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
    </div>
  );
}
