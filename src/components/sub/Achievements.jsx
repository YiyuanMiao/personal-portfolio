"use client";
import React from "react";
import { useMotionValue, useTransform, motion, animate } from "framer-motion";

const Achievements = ({ title, amount, children }) => {
  const number = useMotionValue(0);

  // 1. 解析传入的 amount
  // 如果 amount 是 "150+"，解析出 numericValue = 150, suffix = "+"
  // 如果 amount 是 3.97，解析出 numericValue = 3.97, suffix = ""
  const numericValue = parseFloat(amount);
  const suffix = amount.toString().replace(numericValue, "");

  // 判断是否是小数 (比如 GPA 3.97)
  const isDecimal = numericValue % 1 !== 0;

  // 2. 核心逻辑：使用 useTransform 动态格式化数字
  const displayValue = useTransform(number, (latest) => {
    if (isDecimal) {
      // 如果是小数（GPA），保留2位小数 (3.00 -> 3.10 -> ... 3.97)
      return latest.toFixed(2);
    } else {
      // 如果是整数，四舍五入 (0 -> 1 -> ... 150)
      return Math.round(latest);
    }
  });

  // 3. 动画触发函数
  const startCount = () => {
    animate(number, numericValue, {
      duration: 2.5, // 动画持续时间，2.5秒跑完
      ease: "easeOut", // 减速效果，快到慢
    });
  };

  return (
    <div className="flex items-end gap-x-4">
      {/* 左侧图标 */}
      <span className="text-4xl text-saltblue lg:text-2xl">{children}</span>

      <h1 className="flex flex-col gap-y-2">
        <span className="text-2xl lg:text-xl font-light text-saltblue flex items-center">
          {/* 数字部分 (动态变化) */}
          <motion.span
            onViewportEnter={startCount} // 进入视野时触发动画
            viewport={{ once: true }} // 只触发一次
          >
            {displayValue}
          </motion.span>

          {/* 后缀部分 (比如 "+", 静态显示) */}
          <span>{suffix}</span>
        </span>

        {/* 标题 */}
        <span className="text-sm tracking-wide text-charcoal">{title}</span>
      </h1>
    </div>
  );
};

export default Achievements;
/*
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

export default Achievements;*/
