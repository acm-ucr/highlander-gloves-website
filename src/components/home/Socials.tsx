import Image from "next/image";
import {
  FaDiscord,
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import socialMedia from "@/public/home/socialMedia.svg";
const Socials = () => {
  return (
    <div className="relative mb-10 flex w-full flex-col items-center justify-center text-3xl">
      <Image src={socialMedia} alt="Social Media Asset" className="w-full" />
      <FaDiscord className="absolute duration-200 hover:scale-[110%] hover:cursor-pointer xl:left-[13.5%] xl:top-[45%] xl:text-8xl 2xl:left-[14%] 2xl:top-[46%] 2xl:text-9xl" />
      <FaTiktok className="absolute duration-200 hover:scale-[110%] hover:cursor-pointer xl:bottom-[7%] xl:left-[31.5%] xl:text-8xl 2xl:bottom-[7%] 2xl:left-[32%] 2xl:text-9xl" />
      <FaInstagram className="absolute duration-200 hover:scale-[110%] hover:cursor-pointer xl:left-[48.5%] xl:top-[45%] xl:text-8xl 2xl:left-[49%] 2xl:top-[46%] 2xl:text-9xl" />
      <FaYoutube className="absolute duration-200 hover:scale-[110%] hover:cursor-pointer xl:bottom-[7%] xl:right-[27%] xl:text-8xl 2xl:bottom-[7%] 2xl:right-[27.5%] 2xl:text-9xl" />
      <FaFacebookF className="absolute duration-200 hover:scale-[110%] hover:cursor-pointer xl:right-[12.5%] xl:top-[45%] xl:text-8xl 2xl:right-[13%] 2xl:top-[46%] 2xl:text-9xl" />
    </div>
  );
};

export default Socials;
