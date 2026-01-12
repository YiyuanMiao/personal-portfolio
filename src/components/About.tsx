"use client";
import Heading from "./sub/Heading";
import Achievements from "./sub/Achievements";
import Image from "next/image";
import { aboutData, aboutText, downloadIcon, arrowLeftIcon } from "@/assets";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen px-5 md:px-20 lg:px-40 flex flex-col items-center justify-center"
    >
      <Heading text={"About Me"} />

      <div className="w-full flex flex-col md:flex-row items-center justify-between md:justify-center gap-10 md:gap-20">
        {/* 图片区域 */}
        <Image
          src={"/freepik_about_me.png"}
          alt="About Image"
          width={400}
          height={400}
          // 修正点：
          // 1. 删掉了 md:hidden，否则电脑上图片就没了
          // 2. 删掉了 w-75 (无效类)，改成了 w-[300px] 或 w-72
          className="w-[300px] lg:w-[400px]"
        />

        {/* 文字框区域 */}
        <div className="relative max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify shadow-md">
          {/* 这个箭头只在电脑上显示比较合理，或者根据设计图调整 */}
          <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 hidden md:block">
            {arrowLeftIcon}
          </span>

          {/* 修正点：tetx 改为 text */}
          <p className="text-lg font-light text-gray-700 first-letter:pl-3 lg:text-[16px] sm:text-[14px]">
            {aboutText}
          </p>

          <a
            href="/nick-cv.pdf"
            download=""
            className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-gray-300
             bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition"
          >
            <span>Download CV</span>
            <span className="text-xl">{downloadIcon}</span>
          </a>
        </div>
      </div>

      <div className="mt-20 w-full flex flex-wrap items-center justify-center gap-x-10 gap-y-10">
        {aboutData.map((item, i) => (
          <Achievements key={i} title={item.title} amount={item.amount}>
            {item.icon}
          </Achievements>
        ))}
      </div>
    </div>
  );
};

export default About;
