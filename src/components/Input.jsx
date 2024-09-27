import { useEffect, useState } from "react";
// Icons
import { PiEye, PiEyeClosed } from "react-icons/pi";

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  focusEffect,
  errors,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // Set Focus effect all time
  useEffect(() => {
    if (focusEffect) {
      setIsFocused(true);
    }
  }, [focusEffect]);

  return (
    <div className="relative">
      {/* Show/hide if password */}
      {type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={`absolute right-2 rounded-md top-1/2 -translate-y-1/2 p-2`}
        >
          {showPassword ? <PiEye /> : <PiEyeClosed />}
        </button>
      )}
      <input
        className={`peer placeholder:select-none autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] h-10 w-full border text-gray-900 placeholder-transparent rounded-md px-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 ${
          isFocused || value ? "border-blue-500" : " border-gray-300"
        } ${
          errors
            ? "border-red-600 focus:border-red-600 focus:ring-red-600 "
            : ""
        }`}
        id={name}
        type={showPassword ? "text" : type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(focusEffect ? focusEffect : false);
        }}
        autoComplete="on"
      />
      {/* Label */}
      <label
        htmlFor={name}
        className={`absolute left-1 top-0 bg-white px-2 text-sm transition-all duration-300 ease-in-out transform peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-90 ${
          isFocused || value
            ? "-translate-y-3 scale-90 text-blue-500"
            : "text-gray-600"
        } ${errors ? "text-red-600" : ""}`}
      >
        {label}
      </label>
    </div>
  );
};

// Input error message
export const ValidInput = ({ validKey }) => {
  if (validKey) {
    return (
      <p className="text-sm text-red-600 rounded-sm w-full mt-2">{validKey}</p>
    );
  } else {
    return null;
  }
};

export default Input;
