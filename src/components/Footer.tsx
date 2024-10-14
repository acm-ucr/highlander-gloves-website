import Link from "next/link";
import Image from "next/image";
import { links } from "@/data/Footer";
import logo from "@/public/Footer.webp";

const Footer = () => {
  return (
    <div className="flex flex-row h-[375px] overflow-hidden bg-gradient-to-b from-black to-hlg-red-200 font-archivo-black text-2xl">
      {/* Information Text White */}
      <div className="flex flex-col z-50 ml-10 mt-[5%] space-y-3 text-[#b5b5b5] text-3xl">
        <p>UCR</p>
        <p className="pl-[25%]">HIGHLANDER</p>
        <p className="pl-[100%]">GLOVES</p>
      </div>
      <div className="absolute flex flex-col z-50 m-auto ml-[66%] mt-[5%] font-anton text-right text-[#B5B5B5]">
        <p className="text-5xl">Contact Information</p>
        <p className="pt-[6%]">2060 Chicago Avenue A23</p>
        <p className="pt-[3%]">Riverside, CA 92507</p>
        <p className="pt-[3%]">United States</p>
        <p className="pt-[3%]">email: highlandergloves14@gmail.com</p>
      </div>

      {/* Information Text Black */}
      <div className="absolute flex flex-col z-20 ml-10 mt-[5.5%] left-[0.5%] space-y-3 text-black text-3xl">
        <p>UCR</p>
        <p className="pl-[25%]">HIGHLANDER</p>
        <p className="pl-[100%]">GLOVES</p>
      </div>
      <div className="absolute flex flex-col z-20 m-auto ml-[66.5%] mt-[5.5%] font-anton text-right text-black">
        <p className="text-5xl">Contact Information</p>
        <p className="pt-[6%]">2060 Chicago Avenue A23</p>
        <p className="pt-[3%]">Riverside, CA 92507</p>
        <p className="pt-[3%]">United States</p>
        <p className="pt-[3%]">email: highlandergloves14@gmail.com</p>
      </div>

      {/* Logo Backdrop */}
      <div className="absolute-bottom">
        <Image
          src={logo}
          alt="footer-logo"
          className="relative object-contain left-[-40%] top-[22%] h-[115%] w-[115%]"
        />
      </div>

      {/* Links */}
      <div className="flex m-auto mb-0 mr-5 gap-4 p-4 items-end">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.link}
            target="_blank"
            className="text-4xl"
          >
            {link.icon}
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Footer;
