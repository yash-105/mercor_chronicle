import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Word = ({ word, i, len }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const color = useTransform(
    scrollYProgress,
    [(0.2 * i) / len, (0.2 * (i + 1)) / len],
    ["#202020", "#ffffff"]
  );
  return (
    <motion.span
      key={i}
      style={{
        fontSize: "40px",
        fontWeight: "600",
        color: color,
        scaleX,
        transition: "color 0.4s ease-in-out",
      }}
    >
      {word}{" "}
    </motion.span>
  );
};

export default Word;
