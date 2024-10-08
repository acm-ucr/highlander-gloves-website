"use client";
import Logo from "@/public/logo.webp";
import Link from "next/link";
import Image from "next/image";
import { items } from "@/data/Nav.js";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Navigation = () => {
  const [selected, setSelected] = useState("");
  const [hover, setHover] = useState("");

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

        <div className="m-auto mr-0 flex flex-row space-x-8">
          {items.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              onClick={() => {
                setSelected(item.name);
              }}
              onMouseEnter={() => {
                setHover(item.name);
              }}
              className={` ${
                selected === item.name
                  ? "text-white"
                  : "text-black hover:text-white"
              }`}
            >
              <div className="flex h-full flex-row">
                {item.name}
                {item.name === "MEDIA" && <IoMdArrowDropdown />}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {hover === "MEDIA" && (
        <div
          className="absolute right-[15px] flex w-[115px] flex-col bg-hlg-red-300 text-center text-white"
          onMouseLeave={() => {
            setHover("");
          }}
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
