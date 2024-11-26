import Image from "next/webp";
import Button from "@/components/Button";
import Logo from "@/public/Footer.webp";
import Link from "next/link";
import { links } from "@/data/Footer";

const NotFound = () => {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-hlg-dark-gray via-hlg-dark-gray to-hlg-red-200 lg:h-[820px]">
      <Image
        src={Logo}
        alt="Highlander Gloves Logo"
        className="absolute left-8 size-[200px] -translate-x-8 translate-y-60 items-end lg:size-[620px] lg:translate-y-20"
      />
      <div className="flex flex-col items-center justify-center pt-36 lg:pt-20">
        <div className="relative flex items-center justify-center rounded-full bg-hlg-red-200 px-12 py-3 text-3xl lg:rounded-3xl lg:px-28 lg:py-8">
          <p className="absolute translate-x-1 translate-y-1 self-center font-archivo-black text-5xl text-black lg:translate-x-2 lg:translate-y-2 lg:text-9xl">
            404
          </p>
          <p className="relative font-archivo-black text-5xl lg:text-9xl">
            404
          </p>
        </div>
        <p className="relative hidden pb-10 pt-4 font-archivo-narrow text-[8.125rem] md:block">
          Page Not Found
        </p>
        <p className="relative block pb-5 pt-4 font-archivo-narrow text-3xl md:hidden">
          PAGE NOT FOUND
        </p>
        <div className="relative">
          <Button txt="Back To Home" link="/" />
        </div>
      </div>
      <div className="m-auto mb-0 mr-3 flex items-end gap-2 p-4 pr-0 text-black lg:mr-5 lg:gap-4">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.link}
            target="_blank"
            className="text-2xl lg:text-4xl"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NotFound;
