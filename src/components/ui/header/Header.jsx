import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderSearch from "./HeaderSearch";

import { HiSearch } from "react-icons/hi";
import { HiBars4 } from "react-icons/hi2";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(true);

  const handleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  const handleSearchBox = () => {
    setShowSearchBox(!showSearchBox);
  };
  return (
    <div className="w-full h-16 border-b">
      <div className="container py-2 flex items-center h-full justify-between relative">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Bloggie.</h1>
        </div>
        {showSearchBox && <HeaderSearch />}
        <div className="hidden sm:block">
          <HeaderMenu />
        </div>
        <div className="block sm:hidden">
          <div className="space-x-4">
            <button
              onClick={handleSearchBox}
              className="p-2 bg-slate-100 rounded-md hover:bg-slate-200 active:opacity-60"
            >
              <HiSearch size={25} className="text-blue-500" />
            </button>
            <button
              onClick={handleMobileMenu}
              className="p-2 bg-slate-100 rounded-md hover:bg-slate-200 active:opacity-60"
            >
              <HiBars4 size={25} className="text-blue-500" />
            </button>
          </div>

          {showMobileMenu && <HeaderMenu mobile={true} />}
        </div>
      </div>
    </div>
  );
}
