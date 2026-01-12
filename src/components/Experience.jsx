"use client";
import React, { useRef } from "react";
import Heading from "./sub/Heading";
import Image from "next/image";
import { arrowLeftIcon, experienceData } from "@/assets";
import { useScroll, motion, useSpring } from "framer-motion";

const Experience = () => {
  const date = new Date().getFullYear();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "end end"],
  });
  const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 });

  return (
    // 🔴 修正：px-96 改为响应式 padding (手机 px-4)
    <div
      id="experience"
      className="relative py-10 md:py-20 px-4 md:px-10 lg:px-40 xl:px-80"
    >
      <Heading text={"Experience & Education"} />

   

      <div
        ref={containerRef}
        className="w-full h-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10"
      >
        {experienceData.map((data, i) => (
          <div
            key={`id-${i}`}
            // 🔴 修正：手机上 w-full (全宽)，电脑上才用固定宽度和 left 偏移
            className={`w-full lg:w-[480px] xl:w-[550px] relative 
            ${
              i % 2 === 0
                ? "left-0 lg:-left-[260px] xl:-left-[320px]"
                : "left-0 lg:left-[260px] xl:left-[320px]"
            }`}
          >
            <motion.div
              // 🔴 修正：手机上不要左右飞入动画 (x:0)，只做淡入 (opacity)
              initial={{ opacity: 0, x: 0, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }} // 统一改为从下往上浮现
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-y-3 rounded-md border border-saltblue bg-azuwhite p-4 tracking-wide text-sm shadow-sm z-20 relative"
            >
              <h1 className="text-lg font-bold text-charcoal">{data.title}</h1>
              <p className="text-charcoal">
                <span className="block font-light">Education:</span>
                <span className="block pl-2 font-extralight">
                  {data.education}
                </span>
              </p>
              <div className="text-charcoal">
                <span className="font-light">Experience:</span>
                <ul className="pl-2 list-disc list-inside">
                  {data.experience.map((exp, j) => (
                    <li key={j} className="my-1 font-extralight">
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 箭头：手机隐藏 */}
              <span
                className={`absolute top-20 text-saltblue -translate-y-1/2 text-3xl hidden lg:block ${
                  i % 2 === 0
                    ? "left-full -ml-2 rotate-180"
                    : "right-full -mr-2"
                }`}
              >
                {arrowLeftIcon}
              </span>
            </motion.div>

            {/* 年份圆圈：手机隐藏 */}
            <div
              className={`w-14 absolute top-20 border border-saltblue rounded-full aspect-square
              place-items-center text-saltblue font-light -translate-y-1/2 z-10 bg-white hidden lg:grid
              ${
                i % 2 === 0
                  ? "left-[calc(100%+40px)] -translate-x-1/2"
                  : "right-[calc(100%+40px)] translate-x-1/2"
              }`}
            >
              {data.year}
            </div>
          </div>
        ))}

        {/* 中间灰线：手机隐藏 */}
        <motion.div
          initial={{ scaleY: 0 }}
          style={{ scaleY: scrollY }}
          viewport={{ once: true }}
          className="absolute w-1 h-full rounded-full bg-saltblue origin-top z-0 hidden lg:block"
        ></motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 0, y: 50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }} // 统一改为从下往上浮现
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-lg font-bold text-charcoal text-center text-3xl font-gold tracking-wider sm:text-2xl mt-80">
          To Be Continued...
        </h1>
      </motion.div>
    </div>
  );
};

export default Experience;
