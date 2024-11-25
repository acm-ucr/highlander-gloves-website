import Header from "@/components/Header";
import Photo from "@/components/Photo";
import started from "@/public/home/USIBA-getStarted.webp";
import Button from "@/components/Button";

const GetStarted = () => {
  return (
    <div>
      <div className="flex flex-col justify-center text-lg md:gap-10 md:text-3xl">
        <div className="flex justify-center text-xl md:justify-start md:text-3xl">
          <div className="border-l-4 md:border-l-0"></div>
          <Header position="left" title="How To Get Started" />
        </div>

        <div className="my-5 flex text-center text-xs md:my-0 md:text-left md:text-2xl">
          <div className="flex w-full flex-col md:flex-row">
            <div className="flex flex-col items-center justify-center md:w-2/3">
              <div className="w-5/6">
                <div className="font-archivo flex flex-col">
                  Just show up and talk to our staff! All we ask is for you to
                  sign our waiver and come ready to work out! For more
                  information check out our “about us”.
                </div>
                <div className="my-5 flex flex-col font-archivo-black md:my-11">
                  Waiver: Highlander Gloves Waiver Form (must sign before first
                  practice!)
                </div>
                <div className="flex justify-center">
                  <Button txt="WAIVER" link="/waiver" />
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-center md:my-0 md:flex-row md:items-center">
              <Photo
                width={"w-1/2"}
                webp={started}
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
