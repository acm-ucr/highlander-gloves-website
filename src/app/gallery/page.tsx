"use client";
import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import image1 from "@/public/gallery/image1.png";
import image2 from "@/public/gallery/image2.png";
import image3 from "@/public/gallery/image3.png";
import image4 from "@/public/gallery/image4.png";
import image5 from "@/public/gallery/image5.png";
import image6 from "@/public/gallery/image6.png";
import image7 from "@/public/gallery/image7.png";
import image8 from "@/public/gallery/image8.png";
import image9 from "@/public/gallery/image9.png";
import image10 from "@/public/gallery/image10.png";
import image11 from "@/public/gallery/image11.png";
import image12 from "@/public/gallery/image12.png";
import image13 from "@/public/gallery/image13.png";
import image14 from "@/public/gallery/image14.png";
import image15 from "@/public/gallery/image15.png";
import image16 from "@/public/gallery/image16.png";
import image17 from "@/public/gallery/image17.png";
import image18 from "@/public/gallery/image18.png";
import image19 from "@/public/gallery/image19.png";
import image20 from "@/public/gallery/image20.png";
import image21 from "@/public/gallery/image21.png";
import image22 from "@/public/gallery/image22.png";
import image23 from "@/public/gallery/image23.png";
import image24 from "@/public/gallery/image24.png";
import image25 from "@/public/gallery/image25.png";
import image26 from "@/public/gallery/image26.png";
import image27 from "@/public/gallery/image27.png";
import image28 from "@/public/gallery/image28.png";
import image29 from "@/public/gallery/image29.png";
import image30 from "@/public/gallery/image30.png";
import image31 from "@/public/gallery/image31.png";
import image32 from "@/public/gallery/image32.png";
import image33 from "@/public/gallery/image33.png";
import image34 from "@/public/gallery/image34.png";
import image35 from "@/public/gallery/image35.png";
import image36 from "@/public/gallery/image36.png";
import image37 from "@/public/gallery/image37.png";

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
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center">
        <p className="py-1 font-archivo-black">2023 - 2024</p>
        <div className="flex w-36 flex-col border-t-[2px] border-white pb-3" />
      </div>
      <Gallery images={images} onClick={(index) => handleImageClick(index)} />
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].src}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default GalleryComponent;
