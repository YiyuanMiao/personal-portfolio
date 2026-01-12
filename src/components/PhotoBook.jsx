"use client";
import Heading from "./sub/Heading";
import Image from "next/image";
import { photoData } from "@/assets";
import React, { useState, useEffect } from "react";
const PhotoBook = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // 新增：控制加载状态

  // 当切图时，先把 loading 设为 true，等图片加载完了再设为 false
  useEffect(() => {
    setIsLoading(true);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? photoData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === photoData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // 计算下一张图的索引（用于预加载）
  const nextIndex =
    currentIndex === photoData.length - 1 ? 0 : currentIndex + 1;

  if (!photoData || photoData.length === 0) return null;

  return (
    <div id="photoBook" className="my-20 px-4 md:px-20 lg:px-40 select-none">
      <Heading text="My Photo Gallery" />

      <div className="flex flex-col items-center justify-center mt-10 relative group">
        {/* 卡片容器 */}
        <div className="relative w-full max-w-[800px] h-[600px] md:h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-white border-2 border-orange-400 rounded-3xl shadow-xl transition-all duration-300">
            {/* 图片区域 */}
            <div className="relative w-full h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-sm bg-gray-50 flex items-center justify-center">
              {/* Loading 动画 (如果 isLoading 为 true 就显示) */}
              {isLoading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-100/50">
                  <div className="w-8 h-8 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
                </div>
              )}

              <Image
                // ✨ 核心修复 1: Key 强制刷新，解决图文不符
                key={currentIndex}
                src={photoData[currentIndex].photo}
                alt={photoData[currentIndex].text}
                fill
                className={`object-contain transition-opacity duration-500 ${
                  isLoading ? "opacity-0" : "opacity-100"
                }`} // 加载完再渐显
                // ✨ 核心修复 2: 优先加载当前图
                priority={true}
                // 质量参数：稍微降低一点质量换取极速加载 (默认75)
                quality={65}
                // 监听加载完成
                onLoad={() => setIsLoading(false)}
              />
            </div>

            {/* 文字描述区域 */}
            <div className="mt-6 text-center px-4 h-16 flex items-center justify-center">
              <p className="text-gray-500 text-sm md:text-base font-light tracking-wide italic">
                {photoData[currentIndex].text}
              </p>
            </div>

            {/* 页码 */}
            <div className="absolute top-4 right-6 text-xs text-orange-300 font-mono">
              {currentIndex + 1} / {photoData.length}
            </div>
          </div>
        </div>

        {/* --- 🥷 隐形预加载 (Preload Next Image) --- */}
        <div className="hidden">
          {/* 永远在后台偷偷加载“下一张”，这样下次点击就是秒开 */}
          <Image
            src={photoData[nextIndex].photo}
            alt="preload"
            width={1}
            height={1}
            priority={true}
          />
        </div>

        {/* 左右按钮 */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-orange-500 hover:text-white text-orange-500 border border-orange-200 p-3 rounded-full shadow-lg cursor-pointer transition-all z-10 active:scale-95"
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
          onClick={nextSlide}
          className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-orange-500 hover:text-white text-orange-500 border border-orange-200 p-3 rounded-full shadow-lg cursor-pointer transition-all z-10 active:scale-95"
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
                  ? "w-8 h-2 bg-orange-400"
                  : "w-2 h-2 bg-orange-200 hover:bg-orange-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoBook;
