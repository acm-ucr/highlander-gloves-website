import React from "react";
import Header from "@/components/Header";
import Photo from "@/components/Photo";
import started from "@/public/home/USIBA-getStarted.webp";
import Button from "@/components/Button";

const GetStarted = () => {
  return (
    <div>
      <div className="flex flex-col justify-center text-3xl">
        <div className="flex flex-auto">
          <Header position="left" title="How To Get Started" />
        </div>

        <div className="flex text-2xl">
          <div className="m-20">
            <div className="font-archivo flex flex-col">
              Just show up and talk to our staff! All we ask is for you to sign
              our waiver and come ready to work out! For more information check
              out our “about us”.
            </div>
            <div className="my-11 flex flex-col font-archivo-black">
              Waiver: ***Highlander Gloves Waiver Form (must sign before first
              practice!)
            </div>
            <div className="flex justify-center">
              <Button
                txt="WAIVER"
                link="https://docs.google.com/forms/d/1ztQiOcfYzYNZCAQr7l6SpXlNntt2azw3NEqeHk3y8SI/edit"
              />
            </div>
          </div>
          <div className="mx-32 w-3/5">
            <Photo image={started} alt="USIBA boxer holding Mexican flag" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
