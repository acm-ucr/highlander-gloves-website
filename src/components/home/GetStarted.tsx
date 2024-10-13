import React from "react";
import Header from "@/components/Header";
import Photo from "@/components/Photo";
import started from "@/public/home/USIBA-getStarted.webp";
import Button from "@/components/Button";

const GetStarted = () => {
  return (
    <div>
      <div className="flex flex-col justify-start text-3xl">
        <div className="flex flex-auto">
          <Header position="left" title="How To Get Started" />
        </div>

        <div className="flex">
          <div className="mr-11 pr-10">
            <div className="font-archivo mx-11 flex flex-col px-10 pt-10 text-2xl">
              Just show up and talk to our staff! All we ask is for you to sign
              our waiver and come ready to work out! For more information check
              out our “about us”.
            </div>
            <div className="mx-11 mt-6 flex flex-col pl-10 pt-10 font-archivo-black text-2xl">
              Waiver: ***Highlander Gloves Waiver Form (must sign before first
              practice!)
            </div>
            <div className="ml-11 flex w-[200%] translate-x-[-30%] justify-center p-11">
              <Button
                txt="WAIVER"
                link="https://docs.google.com/forms/d/1ztQiOcfYzYNZCAQr7l6SpXlNntt2azw3NEqeHk3y8SI/edit"
              />
            </div>
          </div>
          <div className="ml-11 pr-32">
            <Photo
              image={started}
              width={600}
              alt="USIBA boxer holding Mexican flag"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
