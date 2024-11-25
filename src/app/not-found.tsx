import Image from "next/webp";
import Button from "@/components/Button";
import Logo from "@/public/Footer.webp";
import Link from "next/link";
import { links } from "@/data/Footer";

const NotFound = () => {
  return (
    <div className="flex h-[820px] w-full flex-col items-center justify-center bg-gradient-to-b from-hlg-dark-gray via-hlg-dark-gray to-hlg-red-200">
      <Image
        src={Logo}
        alt="Highlander Gloves Logo"
        className="absolute left-8 size-[620px] translate-y-20 transform items-end"
      />
      <div className="flex flex-col items-center justify-center pt-20">
        <div className="relative flex items-center justify-center rounded-3xl bg-hlg-red-200 px-28 py-8 text-3xl">
          <p className="absolute translate-x-2 translate-y-2 self-center font-archivo-black text-9xl text-black">
            404
          </p>
          <p className="relative font-archivo-black text-9xl">404</p>
        </div>
        <p className="relative pb-10 pt-4 font-archivo-narrow text-[8.125rem]">
          Page Not Found
        </p>
        <div className="relative">
          <Button txt="Back To Home" link="/" />
        </div>
      </div>
      <div className="m-auto mb-0 mr-5 flex items-end gap-4 p-4 pr-0 text-black">
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

export default NotFound;
