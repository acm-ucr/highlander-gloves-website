"use client";
import { Gallery } from "react-grid-gallery";

import image6 from "@/public/fight-team/2024/image6.webp";
import image7 from "@/public/fight-team/2024/image7.webp";
import image8 from "@/public/fight-team/2024/image8.webp";
import image10 from "@/public/fight-team/2024/image10.webp";
import image11 from "@/public/fight-team/2024/image11.webp";
import image12 from "@/public/fight-team/2024/image12.webp";
import image13 from "@/public/fight-team/2024/image13.webp";
import image14 from "@/public/fight-team/2024/image14.webp";
import image15 from "@/public/fight-team/2024/image15.webp";
import image16 from "@/public/fight-team/2024/image16.webp";
import image17 from "@/public/fight-team/2024/image17.webp";
import image18 from "@/public/fight-team/2024/image18.webp";
import image19 from "@/public/fight-team/2024/image19.webp";
import image20 from "@/public/fight-team/2024/image20.webp";
import image22 from "@/public/fight-team/2024/image22.webp";
import image23 from "@/public/fight-team/2024/image23.webp";
import image25 from "@/public/fight-team/2024/image25.webp";
import image26 from "@/public/fight-team/2024/image26.webp";
import image27 from "@/public/fight-team/2024/image27.webp";
import image28 from "@/public/fight-team/2024/image28.webp";
import image29 from "@/public/fight-team/2024/image29.webp";
import image30 from "@/public/fight-team/2024/image30.webp";
import image31 from "@/public/fight-team/2024/image31.webp";
import image32 from "@/public/fight-team/2024/image32.webp";
import image33 from "@/public/fight-team/2024/image33.webp";
import image34 from "@/public/fight-team/2024/image34.webp";
import image35 from "@/public/fight-team/2024/image35.webp";

import image75 from "@/public/fight-team/2023/image75.webp";
import image76 from "@/public/fight-team/2023/image76.webp";
import image77 from "@/public/fight-team/2023/image77.webp";

type ImageProps = {
  src: string;
  width: number;
  height: number;
  caption?: string;
  alt?: string;
};

const importedImages2024 = [
  image6,
  image7,
  image8,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image22,
  image23,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
  image34,
  image35,
];

const importedImages2023 = [image75, image76, image77];

const images2024: ImageProps[] = importedImages2024.map((image, index) => ({
  src: image.src,
  width: image.width,
  height: image.height,
  alt: `Image ${index + 1}`,
}));

const images2023: ImageProps[] = importedImages2023.map((image, index) => ({
  src: image.src,
  width: image.width,
  height: image.height,
  alt: `Image ${index + 1}`,
}));

const GalleryComponent = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="mb-5 flex flex-col items-center justify-center">
        <p className="py-1 font-archivo-black text-xl">2024 USIBA Texas</p>
        <div className="flex w-36 flex-col border-t-[2px] border-white pb-3" />
      </div>
      <Gallery enableImageSelection={false} images={images2024} />

      <div className="mb-5 mt-10 flex flex-col items-center justify-center">
        <p className="py-1 font-archivo-black text-xl">2023 USIBA Virginia</p>
        <div className="flex w-36 flex-col border-t-[2px] border-white pb-3" />
      </div>
      <Gallery enableImageSelection={false} images={images2023} />
    </div>
  );
};

export default GalleryComponent;
