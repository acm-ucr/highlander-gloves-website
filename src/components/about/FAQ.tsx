import { motion } from "framer-motion";

const FAQFadeIn = (delay: number = 0) => ({
  initial: { opacity: 0, y: 60, x: 10 },
  whileInView: { opacity: 1, y: 0, x: 0 },
  transition: { duration: 0.2, delay },
  viewport: { once: true, amount: 0.3 },
});

const FAQ = (props: { text: string; onClick: () => void; delay?: number }) => {
  const animation = FAQFadeIn(props.delay);

  return (
    <motion.div
      {...animation}
      className={`md:align-center m-4 my-6 flex flex-row justify-center bg-hlg-red-200 p-8 text-center font-archivo-black text-base font-semibold leading-tight text-white shadow-[22px_22px_0px_0px_#441212] md:m-8 md:aspect-[4/3] md:flex-col md:text-3xl lg:text-4xl xl:text-5xl`}
      onClick={props.onClick}
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      {props.text}
    </motion.div>
  );
};

export default FAQ;
