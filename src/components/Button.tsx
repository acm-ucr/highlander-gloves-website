import React from "react";
import Link from "next/link";

const Button = (props: { txt: string; link: string }) => {
  return (
    <Link
      href={props.link}
      className="box-border flex items-center justify-center rounded-full border-[5px] border-hlg-red-300 bg-hlg-red-200 px-12 py-2 font-archivo-black text-3xl transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative inline-block whitespace-nowrap">
        <span className="absolute left-2 top-1.5 text-black opacity-100">
          {props.txt}
        </span>
        <span className="relative text-white">{props.txt}</span>
      </div>
    </Link>
  );
};

export default Button;
