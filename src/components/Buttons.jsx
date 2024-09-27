import { FcGoogle } from "react-icons/fc";

export const MainButton = ({ icon: Icon, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 active:opacity-80 rounded-lg text-white"
    >
      <span>{children}</span>
      <Icon size={20} className="" />
    </button>
  );
};

export const FormButton = ({ label, onClick, disable }) => {
  return (
    <button
      disabled={disable}
      onClick={onClick}
      className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-blue-500/70 transition duration-300 ease-in-out"
    >
      {label}
    </button>
  );
};

export const GoogleLoginButton = ({ label, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-300/70 transition duration-300 ease-in-out"
    >
      <FcGoogle className="mr-2 h-5 w-5" /> {/* Google icon */}
      {label}
    </button>
  );
};
