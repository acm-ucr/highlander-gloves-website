"use client";
import Header from "@/components/Header";
import { motion } from "framer-motion";

const Times = () => {
  const slideLeft = {
    hidden: { opacity: 1, x: 300 },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 overflow-hidden sm:items-end sm:gap-12">
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="flex w-full justify-center md:hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Header position="middle" title="&emsp; TIMES &emsp;" />
      </motion.div>
      <motion.div
        variants={slideLeft}
        transition={{ duration: 0.5 }}
        className="hidden w-full justify-end md:flex"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Header position="right" title="&emsp; TIMES &emsp;" />
      </motion.div>
      <div className="flex w-11/12 flex-col justify-end font-anek-telegu sm:w-full sm:pr-11">
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pb-6 text-center text-lg sm:text-right sm:text-3xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Tuesdays: 4:00 pm - 6:00 pm <br />
          Wednesdays: 4:00 pm - 6:00 pm <br />
          Thursdays: 5:00 pm - 6:30 pm <br />
        </motion.div>
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm sm:text-right sm:text-2xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          (P.S. Thursdays will consist of only boxing, so more experienced
          members, this is your time to shine!)
        </motion.div>
      </div>
    </div>
  );
};

export default Times;
