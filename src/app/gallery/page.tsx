"use client";
import { Gallery } from "react-grid-gallery";
import React from "react";

import image1 from "@/public/gallery/image1.webp";
import image2 from "@/public/gallery/image2.webp";
import image3 from "@/public/gallery/image3.webp";
import image4 from "@/public/gallery/image4.webp";
import image5 from "@/public/gallery/image5.webp";
import image6 from "@/public/gallery/image6.webp";
import image7 from "@/public/gallery/image7.webp";
import image8 from "@/public/gallery/image8.webp";
import image9 from "@/public/gallery/image9.webp";
import image10 from "@/public/gallery/image10.webp";
import image11 from "@/public/gallery/image11.webp";
import image12 from "@/public/gallery/image12.webp";
import image13 from "@/public/gallery/image13.webp";
import image14 from "@/public/gallery/image14.webp";
import image15 from "@/public/gallery/image15.webp";
import image16 from "@/public/gallery/image16.webp";
import image17 from "@/public/gallery/image17.webp";
import image18 from "@/public/gallery/image18.webp";
import image19 from "@/public/gallery/image19.webp";
import image20 from "@/public/gallery/image20.webp";
import image21 from "@/public/gallery/image21.webp";
import image22 from "@/public/gallery/image22.webp";
import image23 from "@/public/gallery/image23.webp";
import image24 from "@/public/gallery/image24.webp";
import image25 from "@/public/gallery/image25.webp";
import image26 from "@/public/gallery/image26.webp";
import image27 from "@/public/gallery/image27.webp";
import image28 from "@/public/gallery/image28.webp";
import image29 from "@/public/gallery/image29.webp";
import image30 from "@/public/gallery/image30.webp";
import image31 from "@/public/gallery/image31.webp";
import image32 from "@/public/gallery/image32.webp";
import image33 from "@/public/gallery/image33.webp";
import image34 from "@/public/gallery/image34.webp";
import image35 from "@/public/gallery/image35.webp";
import image36 from "@/public/gallery/image36.webp";
import image37 from "@/public/gallery/image37.webp";

type ImageProps = {
  src: string;
  width: number;
  height: number;
  caption?: string;
  alt?: string;
};

const importedImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
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
  image21,
  image22,
  image23,
  image24,
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
  image36,
  image37,
];

const images: ImageProps[] = importedImages.map((image, index) => ({
  src: image.src,
  width: image.width,
  height: image.height,
  alt: `Image ${index + 1}`,
}));

const GalleryComponent = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center">
        <p className="py-1 font-archivo-black">2023 - 2024</p>
        <div className="flex w-36 flex-col border-t-[2px] border-white pb-3" />
      </div>
      <Gallery images={images} />
    </div>
  );
};

export default GalleryComponent;
