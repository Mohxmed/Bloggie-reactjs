import { useState } from "react";

// Components
import HeaderMenu from "./HeaderMenu";
import HeaderLogo from "./HeaderLogo";

// Icons
import {
  RiMenuLine,
  RiSearch2Line,
  RiSettings2Line,
  RiUserLine,
} from "react-icons/ri";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="w-full h-16 border-b">
      <div className="container py-2 flex items-center h-full justify-between relative">
        <HeaderLogo />
        {/* List  */}
        <div className="hidden sm:block">
          <HeaderMenu />
        </div>
        <div className="flex gap-2 pl-6">
          <div className="block sm:hidden">
            <div className="space-x-2">
              {/* Mobile Buttons  */}
              <button onClick={handleMobileMenu} className="header--button">
                <RiMenuLine size={20} />
              </button>
            </div>
            {/* Mobile List  */}
            {showMobileMenu && <HeaderMenu mobile={true} />}
          </div>
          <div className="space-x-2">
            {/* Buttons */}
            <button className="header--button text-blue-600">
              <RiSettings2Line size={20} />
            </button>
            <button className="header--button text-blue-600">
              <RiUserLine size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
