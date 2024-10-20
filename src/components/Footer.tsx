import Link from "next/link";
import Image from "next/image";
import { links } from "@/data/Footer";
import logo from "@/public/Footer.webp";

const Footer = () => {
  return (
    <div className="flex h-[375px] flex-row overflow-hidden bg-gradient-to-b from-black to-hlg-red-200 font-archivo-black text-2xl">
      {/* Information Text */}
      <div className="z-50 ml-10 mt-[5%] flex flex-col space-y-3 text-3xl text-[#b5b5b5] text-shadow">
        <p>UCR</p>
        <p className="pl-[25%]">HIGHLANDER</p>
        <p className="pl-[100%]">GLOVES</p>
      </div>
      <div className="absolute z-50 m-auto ml-[66%] mt-[5%] flex flex-col text-right font-anton text-[#B5B5B5] text-shadow">
        <p className="text-5xl">CONTACT INFORMATION</p>
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
          className="relative left-[-40%] top-[22%] h-[115%] w-[115%] object-contain"
        />
      </div>

      {/* Links */}
      <div className="m-auto mb-0 mr-5 flex items-end gap-4 p-4 pr-0">
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
