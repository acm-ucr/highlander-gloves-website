import React from "react";
import Image from "next/image";

const Title = (props: { txt: string; img: string; alt: string }) => {
  const imgStyle =
    props.img === "/title/meetTheBoard.jpeg"
      ? {}
      : { objectPosition: "center 20%" };

  return (
    <div className="relative h-[600px] w-full">
      <Image
        src={props.img}
        alt={props.alt}
        fill={true}
        style={{ ...imgStyle }}
        className="object-cover brightness-[30%]"
      />

      <div className="absolute inset-0 flex items-center justify-center font-archivo-black">
        <div className="max-w-[800px] text-center">
          <span className="text-9xl font-bold text-white drop-shadow-[20px_15px_0_#000000]">
            {props.txt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Title;
