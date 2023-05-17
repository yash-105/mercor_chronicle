import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Scroll.css";

const Scroll = () => {
  const { scrollYProgress } = useScroll();

  const height = useTransform(scrollYProgress, [0, 1], ["0", "100%"]);

  return (
    <div className="scroll">
      <span className="page">01</span>
      <div className="scroll-bg">
        <motion.div
          className="scroll-bar"
          style={{
            height: height,
          }}
          transition={{ type: "spring", stiffness: 300 }}
        ></motion.div>
      </div>
      <span className="page">03</span>
    </div>
  );
};

export default Scroll;
