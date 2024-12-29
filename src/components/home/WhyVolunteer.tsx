"use client";
import Header from "@/components/Header";
import Button from "@/components/Button";
import { motion } from "framer-motion";

const WhyVolunteer = () => {
  const slideRight = {
    hidden: { opacity: 1, x: -600 },
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
    <div className="flex w-5/6 flex-col items-start justify-start md:w-full md:items-center">
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="flex w-full justify-center md:hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Header position="middle" title="WHY SHOULD I VOLUNTEER?" />
      </motion.div>
      <motion.div
        variants={slideRight}
        transition={{ duration: 0.8 }}
        className="hidden w-full justify-start md:flex"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Header position="left" title="WHY SHOULD I VOLUNTEER?" />
      </motion.div>

      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mx-4 mb-4 mt-12 text-center font-anek-telegu text-lg md:mx-32 md:text-2xl lg:text-3xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className="mb-2">
          In order to become a fully fledged member of Highlander Gloves, you
          will need to volunteer at least twice per academic quarter.
          Furthermore, volunteering with us at RBA is a great thing to include
          on your resume, an amazing way to give back to the community, and most
          importantly, is a whole lot of fun!
        </p>
      </motion.div>

      <div className="mx-4 my-4 text-center font-anek-telegu text-lg md:mx-32 md:text-2xl lg:text-3xl">
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <b>Don’t have a ride?</b> No worries! We can help arrange a ride for
          you whenever possible. Just ask a staff member or reach out to us via
          Instagram or Discord for help, and we'll get you situated.
          Volunteering is located at the same place as our practices, 1760
          Chicago Ave.
        </motion.div>
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center text-xs text-hlg-light-gray md:text-lg lg:text-2xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          For any issues, please reach out to a staff member.
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-8 flex w-full justify-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Button txt="SIGN UP" link="/volunteer" />
        </motion.div>
      </div>
    </div>
  );
};

export default WhyVolunteer;
