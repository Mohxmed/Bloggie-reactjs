import { useState } from "react";
import JustForMobile from "../../../../layouts/Components/JustForMobile";
import IconButton from "../../../IconButton";
import { RiMenuLine } from "react-icons/ri";
import Menu from "./Menu";

export const MobileMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="flex gap-2 pl-6">
      <JustForMobile>
        <div className="space-x-2">
          <IconButton onClick={handleMobileMenu} icon={RiMenuLine} />
        </div>
        {showMobileMenu && <Menu mobile={true} />}
      </JustForMobile>
    </div>
  );
};
