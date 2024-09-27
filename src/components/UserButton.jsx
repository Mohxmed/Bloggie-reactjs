import { useState, useRef, useEffect } from "react";
import UserMenu from "./UserMenu";

const UserButton = ({ userImg, userName, userEmail }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleUserMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutsideMenu = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  return (
    <div className="relative flex items-center">
      <button
        ref={buttonRef}
        onClick={handleUserMenu}
        className="relative border-2 border-blue-200 ml-2 shadow-black/40 rounded-full"
      >
        <img className="w-10 rounded-full" src={userImg} />
      </button>
      {showMenu && (
        <UserMenu
          menuRef={menuRef}
          email={userEmail}
          name={userName}
          img={userImg}
        />
      )}
    </div>
  );
};

export default UserButton;
