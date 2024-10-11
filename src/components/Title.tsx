import React from "react";
import Image from "next/image";

const Title = (props: { txt: string; img: string; alt: string }) => {
  // the meet the board image is the only one thats really tall vertically so i created if statement that doesn't adjust verticle position if the img is meetTheBoard
  const imgStyle =
    props.img === "/title/meetTheBoard.webp"
      ? {}
      : { objectPosition: "center 20%" };

  return (
    // not too sure what to set height to
    <div className="relative h-[600px] w-screen">
      <Image
        src={props.img}
        alt={props.alt}
        fill={true}
        style={{ ...imgStyle, filter: "brightness(35%)" }}
        className="object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center font-archivo-black">
        <div className="relative max-w-[800px] text-center">
          <span className="absolute left-0 top-0 translate-x-3 translate-y-3 text-9xl font-bold text-black opacity-100">
            {props.txt}
          </span>
          <span className="relative text-9xl font-bold text-white">
            {props.txt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Title;
