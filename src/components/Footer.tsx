"use client";
import Link from "next/link";
import Image from "next/image";
import { links } from "@/data/Footer";
import logo from "@/public/Footer.webp";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const paths = [
    "/",
    "/about",
    "/events",
    "/fight-team",
    "/board",
    "/board",
    "/gallery",
    "/news",
    "/waiver",
    "/volunteer",
  ];
  if (!paths.includes(pathname)) {
    return null;
  }
  return (
    <div className="relative flex h-[186px] flex-row overflow-hidden bg-gradient-to-b from-hlg-dark-gray to-hlg-red-200 font-archivo-black md:h-[375px]">
      {/* Information Text */}
      <div className="z-30 ml-6 mt-[5%] flex flex-col space-y-[13%] text-[12px] text-[#b5b5b5] text-shadow-footerMobile md:ml-10 md:mt-[5%] md:space-y-3 md:text-3xl md:text-shadow">
        <p>UCR</p>
        <p className="pl-[25%]">HIGHLANDER</p>
        <p className="pl-[100%]">GLOVES</p>
      </div>
      <div className="text-md absolute right-7 m-auto ml-[65%] mt-[3%] flex flex-col text-right font-anton text-[10px] text-[#B5B5B5] text-shadow-footerMobile md:text-xl md:text-shadow lg:text-2xl">
        <p className="text-md md:text-3xl lg:text-4xl">CONTACT INFORMATION</p>
        <p className="pt-[3%] md:pt-[7%] lg:pt-[4%]">1760 Chicago Avenue</p>
        <p className="pt-[3%] md:pt-[7%] lg:pt-[4%]">Riverside, CA 92507</p>
        <p className="pt-[3%] md:pt-[7%] lg:pt-[4%]">United States</p>
        <p className="whitespace-nowrap pt-[3%] md:pt-[7%] lg:pt-[4%]">
          email: highlandergloves14@gmail.com
        </p>
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
            className="transform text-4xl transition hover:-translate-y-1"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
