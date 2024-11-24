"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

const Board = (props: {
  photo: StaticImageData;
  name: string;
  position: string;
  delay: number;
}) => {
  const slideleft = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      variants={slideleft}
      transition={{ duration: 0.5, delay: props.delay }}
      className="relative z-10 flex"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      <Image
        className="z-10 flex-col items-center rounded-[15px] border md:rounded-[30px]"
        src={props.photo}
        alt={`${props.name} photo`}
      />
      <Image
        className="absolute inset-[8%] flex-col items-center rounded-[15px] border opacity-20 md:inset-[10%] md:rounded-[30px]"
        src={props.photo}
        alt="Shadow of photo"
      />
      <div className="absolute inset-x-0 -bottom-[8px] font-archivo-black text-[12px] md:-bottom-[15px] md:text-[20px] xl:-bottom-[25px] xl:text-[30px] 2xl:-bottom-[32px] 2xl:text-[40px]">
        <p className="relative z-30 flex flex-col items-center text-nowrap">
          {props.name}
        </p>
        <p className="absolute inset-0 left-[3px] top-[3px] z-20 flex flex-col items-center text-nowrap text-black md:left-[6px] md:top-[5px] xl:left-[24px] xl:top-[10px]">
          {props.name}
        </p>
      </div>
      <div className="absolute inset-x-0 -bottom-[28px] font-archivo-narrow text-[12px] md:-bottom-[50px] md:text-[20px] xl:-bottom-[75px] xl:text-[30px] 2xl:-bottom-[92px] 2xl:text-[40px]">
        <p className="relative z-30 flex flex-col items-center text-nowrap">
          {props.position}
        </p>
        <p className="absolute inset-0 left-[3px] top-[3px] z-20 flex flex-col items-center text-nowrap text-black md:left-[6px] md:top-[5px] xl:left-[24px] xl:top-[10px]">
          {props.position}
        </p>
      </div>
    </motion.div>
  );
};

export default Board;
