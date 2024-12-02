import React from "react";

const Header = (props: { position: string; title: string }) => {
  return (
    <div
      className={`flex flex-row border-b-4 border-t-4 border-white p-2 pl-[5%] pr-[5%] text-center font-archivo-black text-2xl text-white md:text-left ${props.position === "left" ? "border-r-4" : props.position === "middle" ? "border-l-4 border-r-4" : "border-l-4"}`}
    >
      {props.title}
    </div>
  );
};

export default Header;
