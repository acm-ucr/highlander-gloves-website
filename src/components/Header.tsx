import React from "react";

const Header = (props: { position: string; title: string }) => {
  return (
    <div
      className={`text-white} flex flex-row border-2 border-white p-3 pl-[6%] pr-[6%] font-archivo-black text-xl`}
    >
      {props.title}
    </div>
  );
};

export default Header;
