import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type photoProps = {
  image: StaticImport;
  width: string;
  alt: string;
  txt: string;
};

const Title = ({ image, alt, txt }: photoProps) => {
  return (
    <div className="relative h-[600px] w-full">
      <Image src={image} alt={alt} fill={true} className="object-cover" />

      <div className="absolute inset-0 flex items-center justify-center font-archivo-black">
        <div className="max-w-[800px] text-center">
          <span className="text-9xl font-bold text-white drop-shadow-[20px_15px_0_#000000]">
            {txt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Title;
