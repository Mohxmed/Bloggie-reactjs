import { Link } from "react-router-dom";
import IconButton from "../../IconButton";
import { RiSettings2Line, RiUserLine } from "react-icons/ri";
import useAuthStatus from "@hooks/useAuthStatus";
import UserButton from "@components/UserButton";
import userPlace from "../../../assets/userplacehold.webp";
import { PiBookmarkSimpleBold } from "react-icons/pi";

export default function RightButtons() {
  const { user } = useAuthStatus();
  console.log(user);
  return (
    <>
      <div className="space-x-2">
        <IconButton icon={RiSettings2Line} />
        {user ? <IconButton icon={PiBookmarkSimpleBold} /> : null}
      </div>
      <div className="flex items-center">
        {user ? (
          <UserButton
            userImg={user.photoURL ? user.photoURL : userPlace}
            userEmail={user.email}
            userName={user.displayName}
          />
        ) : (
          <Link to={"/login"}>
            <IconButton icon={RiUserLine} />
          </Link>
        )}
      </div>
    </>
  );
}
