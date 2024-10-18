import React from "react";

const Header = (props: { position: string; title: string }) => {
  return (
    <div
      className={`flex flex-row border-b-4 border-t-4 border-white p-2 pl-[5%] pr-[5%] font-archivo-black text-white ${props.position === "left" ? "border-r-4" : "border-l-4"}`}
    >
      {props.title}
    </div>
  );
};

export default Header;
