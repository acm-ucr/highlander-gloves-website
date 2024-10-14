"use client";
import Logo from "@/public/logo.webp";
import Link from "next/link";
import Image from "next/image";
import { items } from "@/data/Nav.js";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Navigation = () => {
  const [selected, setSelected] = useState("");
  const [dropDownVisible, setDropDownVisible] = useState(false);

  return (
    <div className="top-0 z-50 h-[8vh] font-archivo-narrow text-2xl font-bold">
      <div className="flex h-full items-center justify-between bg-hlg-red-200 px-[1%]">
        <Link
          href="/"
          onClick={() => {
            setSelected("");
          }}
        >
          <Image
            className="h-[12%] w-[12%] object-contain py-[1%]"
            src={Logo}
            alt="highlander boxing icon"
          />
        </Link>

        <div className="m-auto mr-0 flex flex-row space-x-8 py-1">
          {items.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              onClick={() => {
                setSelected(item.name);
              }}
              className={`${
                selected === item.name
                  ? "text-white"
                  : "text-black hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div
            onMouseEnter={() => {
              setDropDownVisible(true);
            }}
            onMouseLeave={() => {
              setDropDownVisible(false);
            }}
            className="flex h-[8vh] flex-row text-black hover:text-white"
          >
            MEDIA
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>

      {dropDownVisible === true && (
        <div
          onMouseEnter={() => {
            setDropDownVisible(true);
          }}
          onMouseLeave={() => {
            setDropDownVisible(false);
          }}
          className="absolute right-[10px] flex w-[110px] flex-col bg-hlg-red-300 text-center text-white"
        >
          <Link
            href="/news"
            className="w-full border-b-2 border-[#604949] py-2"
          >
            NEWS
          </Link>
          <Link href="/gallery" className="py-2">
            GALLERY
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navigation;
