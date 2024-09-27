import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      <Link to={"/"}>
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Bloggie.
        </h1>
      </Link>
    </div>
  );
}
