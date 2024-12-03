"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";

type EventProps = {
  name: string;
  description: string;
  location: string;
  time: string;
  side: "left" | "right";
};

const Event = ({ name, description, location, time, side }: EventProps) => {
  return (
    <motion.div
      className={`mb-0 mt-0 flex flex-col text-white md:mb-8 md:mt-8 ${
        side === "left"
          ? "mr-auto items-start text-left"
          : "ml-auto items-end text-right"
      } w-11/12 md:max-w-[50%]`}
      initial={{ opacity: 0, x: side === "left" ? -100 : 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-1/2 flex-row justify-center text-xs md:w-full md:text-3xl">
        <Header position={side} title={name} />
      </div>

      <div className="mt-0 flex w-full flex-col justify-end p-4 text-base md:mt-4 md:p-6 md:text-2xl">
        <p>{description}</p>
        <p>{location}</p>
        <p>{time}</p>
      </div>
    </motion.div>
  );
};

export default Event;
