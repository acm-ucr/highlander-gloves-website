"use client";
import Header from "@/components/Header";
import Photo from "@/components/Photo";
import started from "@/public/home/USIBA-getStarted.webp";
import Button from "@/components/Button";
import { motion } from "framer-motion";

const GetStarted = () => {
  const slideRight = {
    hidden: { opacity: 1, x: "-100%" },
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

  const slideLeft = {
    hidden: { opacity: 1, x: "100%" },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div>
      <div className="flex flex-col justify-center overflow-hidden text-lg md:gap-10 md:text-3xl">
        <motion.div
          variants={slideRight}
          transition={{ duration: 0.8 }}
          className="flex justify-center text-xl md:justify-start md:text-3xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="border-l-4 md:border-l-0"></div>
          <Header position="left" title="How To Get Started" />
        </motion.div>

        <div className="my-5 flex text-center text-xs md:my-0 md:text-left md:text-2xl">
          <div className="flex w-full flex-col md:flex-row">
            <div className="flex flex-col items-center justify-center md:w-2/3">
              <div className="w-5/6">
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="font-archivo flex flex-col text-center"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  All we ask is for you to sign our waiver before your first
                  practice and come ready to work out! For more information
                  check out our about page.
                </motion.div>
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="my-5 flex flex-col text-center font-archivo-black md:my-11"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  Highlander Gloves Waiver Form:
                </motion.div>
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="flex justify-center"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <Button
                    txt="WAIVER"
                    target="_blank"
                    link="https://docs.google.com/forms/d/17u7VsvHM_5CnkcAk2GUraK5w-sISIgW68Ymd2HAU7Xo/viewform?edit_requested=true"
                  />
                </motion.div>
              </div>
            </div>
            <motion.div
              variants={slideLeft}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-5 flex justify-center md:my-0 md:flex-row md:items-center"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0 }}
            >
              <Photo
                width={"w-1/2"}
                webp={started}
                alt="USIBA boxer holding Mexican flag"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
