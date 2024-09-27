import { PiCarProfileBold, PiQuestion } from "react-icons/pi";
import {
  RiDashboard2Line,
  RiEditBoxLine,
  RiSettings4Line,
} from "react-icons/ri";

import { Link } from "react-router-dom";
import useSignOut from "@utils/auth/useSignOut";

export default function UserMenu({ menuRef, email, name, img }) {
  return (
    <div
      ref={menuRef}
      className="z-10 absolute bg-white rounded-md shadow-black/20 shadow-sm w-max right-0 top-12"
    >
      <div className="p-4 h-full">
        <div className="flex items-center justify-between gap-4 border-b pb-2">
          <img src={img} className="rounded-full w-16" />
          <div className="flex flex-col">
            <span className="font-semibold">{name}</span>
            <span className="text-sm text-gray-500">{email}</span>
            <Link to={"/profile"} className="text-blue-700 text-sm underline">
              Edit
            </Link>
          </div>
        </div>
        <div className="w-full mt-4 flex flex-col gap-2">
          <UserMenuLink
            label={"Write a Post"}
            Icon={<RiEditBoxLine size={20} />}
            linkto="/write-post"
          />
          <UserMenuLink
            label={"Your Profile"}
            Icon={<PiCarProfileBold size={20} />}
            linkto="/profile"
          />
          <UserMenuLink
            label={"Account Settings"}
            Icon={<RiSettings4Line size={20} />}
            linkto="/edit-profile"
          />
          <UserMenuLink
            label={"Help"}
            Icon={<PiQuestion size={20} />}
            linkto="/write-post"
          />
          <SignOutButton label={"Log out"} />
        </div>
      </div>
    </div>
  );
}

export const UserMenuLink = ({ label, Icon, linkto }) => {
  return (
    <Link
      to={linkto}
      className="w-full p-2 rounded-lg text-gray-900 flex items-center gap-2 bg-gray-50 hover:bg-gray-200 "
    >
      <span className="text-blue-600 pr-2">{Icon && Icon}</span>
      <span>{label}</span>
    </Link>
  );
};

export const SignOutButton = ({ label, Icon, onClick }) => {
  const handleSignOut = useSignOut();

  return (
    <button
      onClick={handleSignOut}
      className="w-full  p-2 flex items-center gap-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg"
    >
      <span className="text-blue-600 pr-2">{Icon && Icon}</span>
      <span>{label}</span>
    </button>
  );
};
