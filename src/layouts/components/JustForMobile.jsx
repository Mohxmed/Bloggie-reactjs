import React from "react";

export default function JustForMobile({ children }) {
  return <div className="block sm:hidden">{children}</div>;
}
