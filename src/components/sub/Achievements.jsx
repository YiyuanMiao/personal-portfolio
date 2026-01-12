"use client";
import React from "react";
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion";

const Achievements = (props) => {
  const number = useMotionValue(0); //每次都不会重新渲染
  const count = (amount) => {
    let i = 0;
    const updateCount = () => {
      let timeout;
      if (i <= amount) {
        number.set(i++);
        timeout = setTimeout(updateCount, 0);
      } else {
        clearTimeout(timeout);
      }
    };
    updateCount();
  };
  return (
    <div className="flex items-end gap-x-4">
      <span className="text-4xl text-gray-300 lg:text-2xl">
        {props.children}
      </span>
      <h1 className="flex flex-col gap-y-2">
        <motion.span
          className="text-2xl lg:text-xl font-light text-yellow-500"
          whileInView={() => count(props.amount)}
          viewport={{ once: true }}
        >
          {number}
        </motion.span>
        <span className="text-sm tracking-wide text-gray-500">
          {props.title}
        </span>
      </h1>
    </div>
  );
};

export default Achievements;
