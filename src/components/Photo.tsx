import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type photoProps = {
  image: StaticImport;
  width: string;
  alt: string;
};

const Photo = ({ image, alt, width }: photoProps) => {
  return (
    <div className={`relative ${width} flex`}>
      <Image
        src={image}
        alt={alt}
        className="relative z-10 border-x border-y border-white opacity-100"
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
