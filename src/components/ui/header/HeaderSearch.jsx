import { HiSearch } from "react-icons/hi";

export default function HeaderSearch({ mobile = false }) {
  return (
    <div className="relative flex items-center grow px-10">
      <button className="absolute left-14 text-gray-400">
        <HiSearch size={20} />
      </button>
      <input
        placeholder="Type Search Keyword.."
        type="text"
        className="bg-gray-100 outline-none px-4 py-2 pl-12 rounded-full w-full"
      />
    </div>
  );
}
