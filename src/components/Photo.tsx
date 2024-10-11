import React from "react";
import Image from "next/image";

type photoProps = {
  // typescript-react
  image: string;
  width: number;
  alt: string;
};

const Photo = ({ image, width, alt }: photoProps) => {
  return (
    <div className="relative px-11 pt-10">
      <Image src={image} alt={alt} width={width} className="opacity-20" />
      <Image
        src={image}
        alt={alt}
        width={width}
        className="absolute bottom-[6%] left-[6%]"
      />
    </div>
  );
};

export default Photo;
