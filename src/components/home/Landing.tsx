import Image from "next/image";
import banner from "@/public/home/landing.webp";

const Landing = () => {
  return (
    <div className="relative mt-[5.8%] flex flex-row items-center justify-center text-8xl">
      <div className="absolute inset-0 flex flex-col items-center font-archivo-black">
        <p className="relative right-[33%] top-[12.5%]">UCR</p>
        <p className="relative top-[15.5%]">HIGHLANDER</p>
        <p className="relative left-[27%] top-[20%]">GLOVES</p>
      </div>
      <Image className="w-screen" src={banner} alt="Landing" />
    </div>
  );
};

export default Landing;
