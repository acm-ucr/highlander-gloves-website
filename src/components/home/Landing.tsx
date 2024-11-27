import Image from "next/image";
import banner from "@/public/home/landing.webp";

const Landing = () => {
  return (
    <div className="relative flex flex-row items-center justify-center text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
      <div className="absolute inset-0 flex flex-col items-center font-archivo-black">
        <p className="xl:top[20%] relative right-[35%] top-[8%] animate-fade-right md:top-[15%] lg:top-[17%]">
          UCR
        </p>
        <p className="xl:top[20%] relative right-[8%] top-[8%] animate-fade-left md:right-[6%] md:top-[15%] lg:top-[17%]">
          HIGHLANDER
        </p>
        <p className="xl:top[20%] relative left-[26%] top-[8%] animate-fade-right md:top-[15%] lg:top-[17%]">
          GLOVES
        </p>
      </div>
      <Image className="w-screen" src={banner} alt="Landing" />
    </div>
  );
};

export default Landing;
