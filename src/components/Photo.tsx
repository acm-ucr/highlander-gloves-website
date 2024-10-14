import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

type photoProps = {
  // typescript-react
  image: string | StaticImageData;
  // width: string;
  alt: string;
};

const Photo = ({ image, alt }: photoProps) => {
  return (
    <div className="relative">
      <Image
        src={image}
        alt={alt}
        className="relative z-10 rounded-lg border-x border-y border-white opacity-100"
      />
      <Image
        src={image}
        alt={alt}
        className="absolute -bottom-[6%] left-[6%] z-0 rounded-lg opacity-20"
      />
    </div>
  );
};

export default Photo;
