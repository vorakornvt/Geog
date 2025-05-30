import { motion } from "framer-motion";
import DotBg from "../../public/assets/logoO.png";

const Bg = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0   -top-80 z--1 transform-gpu overflow-hidden opacity-60 sm:-top-0"
    >
      <motion.div
        animate={{
          filter: ["hue-rotate(0deg)", "hue-rotate(30deg)", "hue-rotate(0deg)"],
          scale: [1, 1.02, 1],
        }}
        transition={{
          filter: { duration: 8, repeat: Infinity, ease: "easeInOut" },

          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{
          backgroundImage: `url(${DotBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
        className="relative left-[calc(0%] aspect-6/4 w-[0%] -translate-x-1/2  sm:left-[calc(50%)]  sm:w-[100rem] h-[46rem]"
      ></motion.div>
    </div>
  );
};

export default Bg;
