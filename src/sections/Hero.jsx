import React from "react";
import portrait from "../assets/images/portrait.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col w-full h-full pt-24 pb-16 px-6 sm:px-16 md:px-20 lg:px-28 xl:px-32 bg-cust-blue min-h-screen text-white justify-center items-center gap-10">
      <div className="flex flex-col justify-center items-center h-full gap-5">
        <motion.img
          className="w-48 rounded-full"
          src={portrait}
          alt="portrait"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="text-lg md:text-xl lg:text-2xl text-center font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: true }}
        >
          Hello, I am Jeremmy!
        </motion.div>
      </div>
      <motion.div
        className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-normal font-bold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        viewport={{ once: true }}
      >
        A frontend developer <br /> specialized in React
      </motion.div>
    </div>
  );
};

export default Hero;
