import Link from "next/link";
import Image from "next/image";
import { links } from "@/data/Footer";
import logo from "@/public/Footer.webp";

const Footer = () => {
  return (
    <div className="relative flex h-[186px] flex-row overflow-hidden bg-gradient-to-b from-black to-hlg-red-200 font-archivo-black md:h-[375px]">
      {/* Information Text */}
      <div className="z-50 ml-6 mt-[8%] flex flex-col space-y-[13%] text-[12px] text-[#b5b5b5] text-shadow-footerMobile md:ml-10 md:mt-[5%] md:space-y-3 md:text-3xl md:text-shadow">
        <p>UCR</p>
        <p className="pl-[25%]">HIGHLANDER</p>
        <p className="pl-[100%]">GLOVES</p>
      </div>
      <div className="absolute z-50 m-auto ml-[46%] mt-[5.65%] flex flex-col text-right font-anton text-[12px] text-[#B5B5B5] text-shadow-footerMobile md:ml-[66%] md:mt-[5%] md:text-2xl md:text-shadow">
        <p className="md:text-5xl">CONTACT INFORMATION</p>
        <p className="pt-2 md:pt-[6%]">2060 Chicago Avenue A23</p>
        <p className="pt-1 md:pt-[3%]">Riverside, CA 92507</p>
        <p className="pt-1 md:pt-[3%]">United States</p>
        <p className="pt-1 md:pt-[3%]">email: highlandergloves14@gmail.com</p>
      </div>

      {/* Logo Backdrop */}
      <div className="absolute md:static">
        <Image
          src={logo}
          alt="footer-logo"
          className="relative mt-[15%] h-[45%] w-[45%] object-contain md:left-[-40%] md:top-[22%] md:mt-0 md:h-[115%] md:w-[115%]"
        />
      </div>

      {/* Links */}
      <div className="m-auto mb-0 mr-3 flex items-end gap-2 p-4 pr-0 md:mr-5 md:gap-4 transition-transform duration-300 hover:-translate-y-1">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.link}
            target="_blank"
            className="text-3xl md:text-4xl"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
