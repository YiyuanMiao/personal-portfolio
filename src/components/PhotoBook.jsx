"use client";
import Heading from "./sub/Heading";
import Image from "next/image";
import { photoData } from "@/assets";
import React, { useState, useEffect } from "react";
// 1. 引入 Framer Motion
import { motion, AnimatePresence } from "framer-motion";

const PhotoBook = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  // 2. 新增 direction 状态：1 代表向右滑（下一张），-1 代表向左滑（上一张）
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setIsLoading(true);
  }, [currentIndex]);

  // 3. 定义动画变量 (Variants)
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%", // 如果点Next，新图从右边(100%)进来
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%", // 如果点Next，旧图往左边(-100%)走
      opacity: 0,
    }),
  };

  // 整合翻页逻辑
  const paginate = (newDirection) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      // Next
      const isLastSlide = currentIndex === photoData.length - 1;
      setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
    } else {
      // Prev
      const isFirstSlide = currentIndex === 0;
      setCurrentIndex(isFirstSlide ? photoData.length - 1 : currentIndex - 1);
    }
  };

  const goToSlide = (slideIndex) => {
    // 判断是往左还是往右跳
    setDirection(slideIndex > currentIndex ? 1 : -1);
    setCurrentIndex(slideIndex);
  };

  const nextIndex =
    currentIndex === photoData.length - 1 ? 0 : currentIndex + 1;

  if (!photoData || photoData.length === 0) return null;

  return (
    <div id="photoBook" className="my-20 px-4 md:px-20 lg:px-40 select-none">
      <Heading text="My Photo Gallery" />

      <div className="flex flex-col items-center justify-center mt-10 relative group">
        <div className="relative w-full max-w-[800px] h-[600px] md:h-[700px] flex items-center justify-center">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-azuwhite border-2 border-saltblue rounded-3xl shadow-xl transition-all duration-300">
            {/* ✨ 核心修改区域：
                1. 给父级 overflow-hidden，防止图片划出格子 
                2. 设置 relative 供内部 absolute 定位 
            */}
            <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-sm bg-azuwhite flex items-center justify-center">
              {/* Loading 依然保留，但在 z-index 最上层 */}
              {isLoading && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-azuwhite">
                  <div className="w-8 h-8 border-4 border-saltblue border-t-charcoal rounded-full animate-spin"></div>
                </div>
              )}

              {/* ✨ AnimatePresence 负责监听 key 的变化并执行 exit 动画 */}
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex} // 必须有唯一的 key
                  custom={direction} // 传入方向参数
                  variants={slideVariants} // 绑定动画变量
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 }, // 丝滑的弹簧效果
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0 w-full h-full" // 必须 absolute 铺满，否则两张图会上下排列
                >
                  <Image
                    src={photoData[currentIndex].photo}
                    alt={photoData[currentIndex].text}
                    fill
                    className="object-contain" // 移除之前的 transition-opacity，交给 motion 处理
                    priority={true}
                    quality={65}
                    onLoad={() => setIsLoading(false)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 文字描述区域 - 添加简单的淡入淡出 */}
            <div className="mt-6 text-center px-4 h-16 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="text-charcoal text-sm md:text-base font-light tracking-wide italic"
                >
                  {photoData[currentIndex].text}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="absolute top-4 right-6 text-xs text-saltblue font-mono">
              {currentIndex + 1} / {photoData.length}
            </div>
          </div>
        </div>

        {/* 预加载逻辑保持不变 */}
        <div className="hidden">
          <Image
            src={photoData[nextIndex].photo}
            alt="preload"
            width={1}
            height={1}
            priority={true}
          />
        </div>

        {/* 按钮改为调用 paginate */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-saltblue hover:text-white text-saltblue border border-saltblue p-3 rounded-full shadow-lg cursor-pointer transition-all z-10 active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          onClick={() => paginate(1)}
          className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-saltblue hover:text-white text-saltblue border border-saltblue p-3 rounded-full shadow-lg cursor-pointer transition-all z-10 active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        {/* 底部圆点 */}
        <div className="flex justify-center mt-8 space-x-2">
          {photoData.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`transition-all duration-300 cursor-pointer rounded-full ${
                currentIndex === slideIndex
                  ? "w-8 h-2 bg-saltblue"
                  : "w-2 h-2 bg-azuwhite hover:bg-saltblue"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoBook;
