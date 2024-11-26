import React from "react";
import Image from "next/image";
import {
  FaDiscord,
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import socialMedia from "@/public/home/socialMedia.svg";
import socialMediaMobile from "@/public/home/socialMediaMobile.svg";

const Socials = () => {
  return (
    <div className="relative mb-10 flex w-full flex-col items-center justify-center text-3xl">
      <Image
        src={socialMedia}
        alt="Social Media Asset"
        className="hidden w-full md:block"
      />
      <Image
        src={socialMediaMobile}
        alt="Social Media Asset"
        className="w-full md:hidden"
      />

      <a
        href="https://discord.com/invite/NV5dX8ezYw"
        target="_blank"
        className="absolute left-[13.5%] top-[52%] duration-200 hover:scale-[110%] hover:cursor-pointer xl:left-[13.5%] xl:top-[45%] xl:text-8xl 2xl:left-[14%] 2xl:top-[46%] 2xl:text-9xl"
      >
        <FaDiscord />
      </a>
      <a
        href="https://www.tiktok.com/@HighlanderGloves"
        target="_blank"
        className="absolute bottom-[7%] left-[32.5%] duration-200 hover:scale-[110%] hover:cursor-pointer xl:bottom-[7%] xl:left-[31.5%] xl:text-8xl 2xl:bottom-[7%] 2xl:left-[32%] 2xl:text-9xl"
      >
        <FaTiktok />
      </a>
      <a
        href="https://www.instagram.com/highlandergloves/?hl=en"
        target="_blank"
        className="absolute left-[51.5%] top-[53%] duration-200 hover:scale-[110%] hover:cursor-pointer xl:left-[48.5%] xl:top-[45%] xl:text-8xl 2xl:left-[49%] 2xl:top-[46%] 2xl:text-9xl"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.youtube.com/channel/UC8v90kTZeMn7tieSbISs-SQ/feed?view_as=public"
        target="_blank"
        className="absolute bottom-[6.5%] right-[21%] duration-200 hover:scale-[110%] hover:cursor-pointer xl:bottom-[7%] xl:right-[27%] xl:text-8xl 2xl:bottom-[7%] 2xl:right-[27.5%] 2xl:text-9xl"
      >
        <FaYoutube />
      </a>
      <a
        href="https://www.facebook.com/groups/HighlanderGloves/"
        target="_blank"
        className="absolute right-[4%] top-[53%] duration-200 hover:scale-[110%] hover:cursor-pointer xl:right-[12.5%] xl:top-[45%] xl:text-8xl 2xl:right-[13%] 2xl:top-[46%] 2xl:text-9xl"
      >
        <FaFacebookF />
      </a>
    </div>
  );
};

export default Socials;
