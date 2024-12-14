import React from "react";
import Link from "next/link";

const Button = ({
  txt,
  target = "_self",
  link,
}: {
  txt: string;
  target?: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      target={target}
      className="box-border flex items-center justify-center rounded-full border-[5px] border-hlg-red-300 bg-hlg-red-200 px-12 py-2 font-archivo-black text-xl transition-transform duration-300 hover:-translate-y-1 lg:text-3xl"
    >
      <div className="relative inline-block whitespace-nowrap">
        <span className="absolute left-1 top-1 text-black opacity-100 lg:left-2 lg:top-1.5">
          {txt}
        </span>
        <span className="relative text-white">{txt}</span>
      </div>
    </Link>
  );
};

export default Button;
