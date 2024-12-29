import Image from "next/image";
import socialMedia from "@/public/home/socialMedia.svg";
import Circle from "./Circle";
import socialMediaMobile from "@/public/home/socialMediaMobile.svg";

import {
  FaDiscord,
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

const Socials = () => {
  return (
    <div className="relative mb-32 flex w-full flex-row items-center justify-center text-3xl">
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

      <Circle
        icon={<FaDiscord />}
        link="https://discord.com/invite/NV5dX8ezYw"
        className="left-[10%] top-[50%] text-4xl xl:left-[13.5%] xl:top-[45%] xl:text-8xl 2xl:left-[14%] 2xl:top-[46%] 2xl:text-9xl"
      />

      <Circle
        icon={<FaTiktok />}
        link="https://www.tiktok.com/@HighlanderGloves"
        className="-bottom-[10%] left-[32.5%] text-4xl xl:-bottom-[15%] xl:left-[31.5%] xl:text-8xl 2xl:bottom-[7%] 2xl:left-[32%] 2xl:text-9xl"
      />

      <Circle
        icon={<FaInstagram />}
        link="https://www.instagram.com/highlandergloves/?hl=en"
        className="left-[54%] top-[49%] text-4xl xl:left-[48.5%] xl:top-[45%] xl:text-8xl 2xl:left-[49%] 2xl:top-[46%] 2xl:text-9xl"
      />

      <Circle
        icon={<FaYoutube />}
        link="https://www.youtube.com/channel/UC8v90kTZeMn7tieSbISs-SQ/feed?view_as=public"
        className="-bottom-[6%] right-[6%] text-4xl xl:-bottom-[20%] xl:right-[27%] xl:text-8xl 2xl:bottom-[7%] 2xl:right-[27.5%] 2xl:text-9xl"
      />

      <Circle
        icon={<FaFacebookF />}
        link="https://www.facebook.com/groups/HighlanderGloves/"
        className="right-[1%] top-[35%] text-4xl xl:right-[10%] xl:top-[50%] xl:text-8xl 2xl:right-[13%] 2xl:top-[46%] 2xl:text-9xl"
      />
    </div>
  );
};

export default Socials;
