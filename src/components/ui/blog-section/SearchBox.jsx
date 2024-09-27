import { RiSearch2Line } from "react-icons/ri";

export default function SearchBox() {
  return (
    <div className="w-full relative flex items-center">
      <button className="p-2 absolute left-2 text-blue-500">
        <RiSearch2Line size={25} />
      </button>
      <input
        type="text"
        placeholder="Search.."
        className=" p-4 shadow-lg hover:shadow-xl rounded-xl w-full pl-16 outline-none text-gray-800 focus:placeholder-transparent placeholder:text-sm"
      />
    </div>
  );
}

export const SearchAbsolute = ({ children }) => {
  return (
    <div className="w-1/2 absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center">
      {children}
    </div>
  );
};
