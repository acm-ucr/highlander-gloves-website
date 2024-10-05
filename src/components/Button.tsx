import React from "react";

const Button = (props: { txt: string; link: string }) => {
  return (
    <div className="box-border flex h-[82px] w-[392px] items-center justify-center rounded-[50px] border-[5px] border-hlg-red-300 bg-hlg-red-200 font-archivo-black text-[36px]">
      <div className="relative inline-block">
        <span className="absolute left-2 top-1.5 text-black opacity-100">
          {props.txt}
        </span>
        <a href={props.link} className="relative text-white">
          {props.txt}
        </a>
      </div>
    </div>
  );
};

export default Button;
