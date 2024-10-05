import Image from "next/image";
import banner from "@/public/home/landing.webp";

const Landing = () => {
  return (
    <div className="relative mt-[5.8%] flex flex-row items-center justify-center text-[115px]">
      <div className="absolute inset-0 flex flex-col items-center font-archivo-black">
        <p className="relative right-[36.2%] top-[4%]">UCR</p>
        <p className="relative bottom-[6%]">HIGHLANDER</p>
        <p className="relative bottom-[15%] left-[28%]">GLOVES</p>
      </div>
      <Image className="w-screen" src={banner} alt="Landing" />
    </div>
  );
};

export default Landing;
