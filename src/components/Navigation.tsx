"use client";
import Logo from "@/public/logo.webp";
import Link from "next/link";
import Image from "next/image";
import { items } from "@/data/Nav.js";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const pathName = usePathname();

  const [showMobileMenu, setShowMobileMenu] = useState(true);
  const [animation, setAnimation] = useState("hidden");

  const handleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    if (showMobileMenu) setAnimation("animate-expand");
    else setAnimation("animate-collapse");
  };

  return (
    <div className="top-0 z-50 h-[10vh] font-archivo-narrow text-2xl font-bold">
      <div className="flex h-full items-center justify-between bg-hlg-red-200 px-[1%]">
        <Link className="flex items-center p-0" href="/">
          <Image
            className="w-[15%] object-contain"
            src={Logo}
            alt="highlander boxing icon"
          />
        </Link>

        {/* mobile menu drodpown */}
        <div className="mx-2 md:hidden" onClick={handleMobileMenu}>
          <FaBars className="text-3xl" />
        </div>

        {/* desktop menu options */}
        <div className="m-auto mr-0 hidden h-full flex-row items-center space-x-8 md:flex">
          {items.map(({ name, link }, index) => (
            <Link
              key={index}
              href={link}
              className={`${
                pathName === link ? "text-white" : "text-black hover:text-white"
              }`}
            >
              {name}
            </Link>
          ))}
          <div
            onMouseEnter={() => {
              setDropDownVisible(true);
            }}
            onMouseLeave={() => {
              setDropDownVisible(false);
            }}
            className={`flex ${pathName === "/news" || pathName === "/gallery" ? "text-white" : "text-black hover:text-white"} h-full flex-row items-center`}
          >
            MEDIA
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>

      {/* desktop media dropdown */}
      {dropDownVisible === true && (
        <div
          onMouseEnter={() => {
            setDropDownVisible(true);
          }}
          onMouseLeave={() => {
            setDropDownVisible(false);
          }}
          className="absolute right-[10px] flex w-[110px] flex-col bg-hlg-red-300 text-center text-[#B5B5B5]"
        >
          <Link
            href="/news"
            className={`w-full ${pathName === "news" ? "text-white" : "text-[#B5B5B5] hover:text-white"} border-b-2 border-[#604949] py-2 hover:text-white`}
          >
            NEWS
          </Link>
          <Link
            href="/gallery"
            className={`py-2 ${pathName === "gallery" ? "text-white" : "text-[#B5B5B5] hover:text-white"} hover:text-white`}
          >
            GALLERY
          </Link>
        </div>
      )}

      {/* mobile menu options */}
      <div
        className={`m-auto flex flex-col border-2 border-black bg-hlg-red-200 font-archivo-black md:hidden ${showMobileMenu ? animation : "hidden"}`}
      >
        {items.map(({ name, link }, index) => (
          <Link
            href={link}
            key={index}
            className={`py-1 pl-8 ${
              pathName === link ? "text-white" : "text-black hover:text-white"
            }`}
          >
            {name}
          </Link>
        ))}
        <div className="mb-2 ml-8 flex flex-row space-x-2">
          <p>Media |</p>
          <Link
            href="/gallery"
            className={`py-1 ${
              pathName === "/gallery"
                ? "text-white"
                : "text-black hover:text-white"
            }`}
          >
            Gallery
          </Link>
          <Link
            href="/news"
            className={`py-1 ${
              pathName === "/news"
                ? "text-white"
                : "text-black hover:text-white"
            }`}
          >
            News
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
