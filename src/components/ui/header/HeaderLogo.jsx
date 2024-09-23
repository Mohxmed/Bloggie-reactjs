import { Link } from "react-router-dom";

export default function HeaderLogo() {
  return (
    <div>
      <Link to={"/"}>
        <h1 className="text-xl font-bold text-gray-800">Bloggie.</h1>
      </Link>
    </div>
  );
}
