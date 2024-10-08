import React from "react";
import Link from "next/link";

const Button = (props: { txt: string; link: string }) => {
  return (
    <Link
      href={props.link}
      className="box-border flex w-1/6 items-center justify-center rounded-full border-[5px] border-hlg-red-300 bg-hlg-red-200 py-2 font-archivo-black text-3xl"
    >
      <div className="relative inline-block">
        <span className="absolute left-2 top-1.5 text-black opacity-100">
          {props.txt}
        </span>
        <span className="relative text-white">{props.txt}</span>
      </div>
    </Link>
  );
};

export default Button;
