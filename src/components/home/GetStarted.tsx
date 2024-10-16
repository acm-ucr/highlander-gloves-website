import React from "react";
import Header from "@/components/Header";
import Photo from "@/components/Photo";
import started from "@/public/home/USIBA-getStarted.webp";
import Button from "@/components/Button";

const GetStarted = () => {
  return (
    <div>
      <div className="flex flex-col justify-center gap-10 text-3xl">
        <div className="flex">
          <Header position="left" title="How To Get Started" />
        </div>

        <div className="flex text-2xl">
          <div className="flex w-full flex-row">
            <div className="flex w-2/3 flex-col items-center justify-center">
              <div className="w-5/6">
                <div className="font-archivo flex flex-col">
                  Just show up and talk to our staff! All we ask is for you to
                  sign our waiver and come ready to work out! For more
                  information check out our “about us”.
                </div>
                <div className="my-11 flex flex-col font-archivo-black">
                  Waiver: ***Highlander Gloves Waiver Form (must sign before
                  first practice!)
                </div>
                <div className="flex justify-center">
                  <Button txt="WAIVER" link="/waiver" />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <Photo
                width={"w-1/2"}
                image={started}
                alt="USIBA boxer holding Mexican flag"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
