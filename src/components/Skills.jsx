"use client";
import React from "react";
import Image from "next/image";
import Heading from "./sub/Heading";
import { skillsData } from "@/assets";
import { motion } from "framer-motion";

const Skills = () => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.05 },
    }),
    hidden: { opacity: 0, y: 30 },
  };
  return (
    <div
      id="skills"
      // 🔴 修正：px-40 -> px-4 md:px-20 lg:px-40
      className="min-h-screen flex flex-col items-center justify-center gap-y-10 md:gap-y-20 px-4 md:px-20 lg:px-40 py-20"
    >
      <Heading text={"Skills"} />
      <div className="w-full flex justify-center flex-wrap gap-4 md:gap-8">
        {skillsData.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={variants}
            whileHover={{ scale: 1.1 }}
            viewport={{ margin: "50px", once: true }}
            initial="hidden"
            whileInView="visible"
            // 🔴 修正：调整小屏幕下的内边距
            className="flex items-center justify-center gap-x-3 rounded-xl border border-saltblue bg-azuwhite px-3 py-2 md:px-5"
          >
            <Image
              src={item.icon}
              alt="Skills Image"
              width={100}
              height={100}
              className="h-auto w-[30px] md:w-[40px]"
            />
            <p className="text-xs md:text-sm text-charcoal">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
