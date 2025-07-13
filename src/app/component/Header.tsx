"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Search } from "lucide-react"; 

export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-black shadow-md px-6 py-4 header ">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Navigation Links */}
        <ul className="flex items-center gap-6 text-black dark:text-white">
          <li className="cursor-pointer hover:text-blue-600 text-lg font-semibold text-black">
            Home
          </li>
          <li className="cursor-pointer hover:text-blue-600 text-lg font-semibold text-black">
            Buy
          </li>
          <li className="cursor-pointer hover:text-blue-600 text-lg font-semibold text-black">
            Sell
          </li>
        </ul>

        {/* Center: Search */}
        <div className="flex-1 flex justify-center">
          <div className="flex w-full max-w-md">
            <input
              type="text"
              placeholder="Search"
              className="flex-grow px-4 py-2 border border-r-0 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Button className="rounded-l-none rounded-r-md px-3 py-5 cursor-pointer">
              <Search className="h-5 w-5" /> 
            </Button>
          </div>
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center gap-3">
          <ModeToggle />
          <Button>Login</Button>
        </div>
      </div>
    </header>
  );
}
