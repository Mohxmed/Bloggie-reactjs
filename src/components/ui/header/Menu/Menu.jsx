import { Link } from "react-router-dom";

const Menu = ({ mobile = false }) => {
  const MenuStyle = mobile
    ? "z-10 absolute left-0 top-16 flex flex-col w-full shadow p-5 gap-4 bg-white dark:bg-gray-900"
    : `flex items-center gap-2`;
  const LinkStyle = mobile
    ? "dark:hover:bg-gray-800 p-2 font-[500] hover:bg-gray-100 text-gray-800 border-l-2 border-blue-300 pl-4 hover:border-blue-600 dark:text-gray-200"
    : "p-2 text-sm font-[400] text-gray-600 hover:border-blue-600 hover:bg-gray-100 rounded-lg active:opacity-70 dark:text-gray-200 dark:hover:bg-gray-800";

  return (
    <ul className={MenuStyle}>
      <Link to={"/"} className={LinkStyle}>
        Home
      </Link>
      <Link to={"/foryou"} className={LinkStyle}>
        For you
      </Link>
      <Link to={"/categories"} className={LinkStyle}>
        Browse All Categories
      </Link>
      <Link to={"/register"} className={LinkStyle}>
        Join us
      </Link>
    </ul>
  );
};
export default Menu;
