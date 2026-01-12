import React from "react";
import { useState, useRef, useEffect } from "react";
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion";

const Load = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  }, []);
  return (
    <motion.div
      initial={{ top: 0 }}
      animate={{ top: load ? "-100%" : 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full fixed left-0 top-0 flex items-center justify-center bg-gradient-to-t from-riceyellow to-azuwhite z-50"
    >
      <img src="spinner.gif" />
    </motion.div>
  );
};

export default Load;
