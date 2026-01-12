"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import Heading from "./sub/Heading";

// === 1. 歌词数据 ===
const lyricsData = [
  { time: 0, cn: "旅 The Journey", en: "Music & Lyrics by Cici Miao" },
  {
    time: 13,
    cn: "想与你共赴一场旅行",
    en: "I wish to embark on a journey with you,",
  },
  {
    time: 19,
    cn: "耗费十几年的光阴",
    en: "To spend a dozen years of fleeting time.",
  },
  {
    time: 27,
    cn: "抛却微不足道的姓名",
    en: "Casting aside our insignificant names,",
  },
  {
    time: 33,
    cn: "只需背上灿烂的生命",
    en: "Carrying only the weight of our radiant lives.",
  },
  { time: 41, cn: "去看巨人的陨落", en: "To witness the fall of giants," },
  { time: 48, cn: "去看枯萎的花朵", en: "To see the flowers wither and fade," },
  {
    time: 54,
    cn: "去看华丽的泡沫",
    en: "To watch the magnificent bubbles burst,",
  },
  { time: 60, cn: "去看英雄的懦弱", en: "To behold the cowardice of heroes." },
  // ... (中间间奏)
  {
    time: 67,
    cn: "去看岁月的蹉跎",
    en: "To watch the years drift aimlessly by,",
  },
  { time: 74, cn: "去看荒芜的王国", en: "To gaze upon desolate kingdoms," },
  { time: 82, cn: "去看方舟的沉没", en: "To witness the sinking of the Ark," },
  {
    time: 89,
    cn: "去看山海的消磨",
    en: "To see the mountains and seas wear away.",
  },
  {
    time: 99,
    cn: "想与你共赴一场旅行",
    en: "I wish to embark on a journey with you,",
  },
  { time: 104, cn: "不出几十年的光阴", en: "Within a span of mere decades." },
  { time: 113, cn: "两个微不足道的身影", en: "Two insignificant silhouettes," },
  {
    time: 119,
    cn: "就是你我存在的证明",
    en: "Shall be the proof of our existence.",
  },
  // ... (副歌)
  { time: 126, cn: "去看神明的复活", en: "To see the resurrection of gods," },
  { time: 133, cn: "去看尘埃的闪烁", en: "To see the glimmering of dust," },
  {
    time: 140,
    cn: "去看顽强的脆弱",
    en: "To witness the tenacity within fragility,",
  },
  {
    time: 147,
    cn: "去看温柔的大漠",
    en: "To feel the tenderness of the vast desert.",
  },
  // ... (念白/尾声)
  {
    time: 154,
    cn: "啊 迷途的旅人啊 你不必忧伤",
    en: "Ah, lost traveler, there is no need for sorrow.",
  },
  {
    time: 161,
    cn: "做个吟游诗人 漂泊四方",
    en: "Be a bard, wandering far and wide.",
  },
  {
    time: 168,
    cn: "只有阅尽千帆啊 看遍世间万象",
    en: "Only after witnessing a thousand sails...",
  },
  {
    time: 175,
    cn: "才能看清自己的模样",
    en: "Can you clearly see who you truly are.",
  },
  {
    time: 184,
    cn: "触摸不破的泡沫",
    en: "To touch the bubbles that never burst,",
  },
  {
    time: 192,
    cn: "点亮不灭的烛火",
    en: "To light the candle that never dies,",
  },
  {
    time: 198,
    cn: "去看不落的花朵",
    en: "To see the flowers that never fall,",
  },
  {
    time: 205,
    cn: "去听不老的传说",
    en: "To hear the legends that never grow old.",
  },
];

const SongPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 格式化时间 00:00
  const formatTime = (time: number) => {
    if (isNaN(time) || time === 0) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // 播放/暂停控制
  const togglePlay = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  };

  // 实时更新进度
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      setCurrentTime(current);

      // Duration 兜底：如果时长是0但音频已就绪，强制更新时长
      if (duration === 0 && audioRef.current.duration > 0) {
        setDuration(audioRef.current.duration);
      }
    }
  };

  // 计算当前高亮的歌词 Index
  const activeIndex = useMemo(() => {
    return lyricsData.findIndex((line, index) => {
      const nextLine = lyricsData[index + 1];
      return (
        currentTime >= line.time && (!nextLine || currentTime < nextLine.time)
      );
    });
  }, [currentTime]);

  // 只在 activeIndex 变化时滚动
  useEffect(() => {
    if (scrollRef.current && activeIndex !== -1) {
      const activeItem = scrollRef.current.children[activeIndex] as HTMLElement;
      if (activeItem) {
        scrollRef.current.scrollTo({
          top:
            activeItem.offsetTop -
            scrollRef.current.clientHeight / 2 +
            activeItem.clientHeight / 2,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  // 拖动进度条
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // 加载音频元数据
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  return (
    // 🔴 响应式修改 1: padding 适配手机 (px-5)
    <div
      id="songPlayer"
      className="min-h-screen py-20 px-5 md:px-20 lg:px-40 bg-white flex flex-col items-center"
    >
      <Heading text={"Original Song (AI Remixed)"} />

      {/* 🔴 响应式修改 2: flex-col (手机竖排) -> md:flex-row (电脑横排) */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100 mt-10">
        {/* 左侧：封面 & 旋转动画 */}
        <div className="w-full md:w-5/12 p-8 md:p-10 bg-gradient-to-br from-red-50 to-yellow-50 flex flex-col items-center justify-center relative">
          {/* 🔴 响应式修改 3: CD 大小适配手机 (w-48) -> 电脑 (w-64) */}
          <div
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full shadow-2xl border-4 border-white overflow-hidden animate-spin"
            style={{
              animationDuration: "10s",
              animationTimingFunction: "linear",
              animationPlayState: isPlaying ? "running" : "paused",
            }}
          >
            {/* 封面图 */}
            <Image
              src="/music/journey-cover.png"
              alt="Album Cover"
              fill
              className="object-cover"
            />
            {/* 黑胶唱片中间的小圆点效果 */}
            <div className="absolute inset-0 m-auto w-8 h-8 bg-zinc-800 rounded-full border-2 border-white z-10" />
          </div>

          <div className="mt-6 md:mt-8 text-center z-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              旅 The Journey
            </h2>
            <p className="text-red-400 font-light mt-1 text-sm md:text-base">
              Cici Miao
            </p>
          </div>
        </div>

        {/* 右侧：歌词 & 播放控制 */}
        <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-between h-[450px] md:h-[500px]">
          {/* 歌词滚动区域 */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto no-scrollbar mask-image-gradient space-y-6 text-center relative py-4"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            }}
          >
            {lyricsData.map((line, i) => {
              const isActive = i === activeIndex;

              return (
                <motion.div
                  key={i}
                  animate={{
                    opacity: isActive ? 1 : 0.3,
                    scale: isActive ? 1.05 : 0.95,
                    color: isActive ? "#F87171" : "#4B5563",
                  }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer transition-colors"
                  onClick={() => {
                    if (audioRef.current)
                      audioRef.current.currentTime = line.time;
                  }}
                >
                  <p
                    className={`text-base md:text-xl font-medium ${
                      isActive ? "font-bold" : ""
                    }`}
                  >
                    {line.cn}
                  </p>
                  <p className="text-xs md:text-sm font-light mt-1">
                    {line.en}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* 控制条区域 */}
          <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-100">
            {/* 隐藏的 Audio 标签 */}
            <audio
              ref={audioRef}
              src="/music/journey.mp3"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
            />

            {/* 进度条 */}
            <div className="flex items-center gap-x-3 text-xs text-gray-400 font-mono mb-3">
              <span>{formatTime(currentTime)}</span>
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={handleProgressChange}
                className="flex-1 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-400"
              />
              <span>{formatTime(duration)}</span>
            </div>

            {/* 按钮 */}
            <div className="flex items-center justify-center gap-x-8">
              <button className="text-gray-400 hover:text-red-400 transition">
                <SkipBack size={24} />
              </button>
              <button
                onClick={togglePlay}
                className="w-12 h-12 md:w-14 md:h-14 bg-red-400 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-red-500 hover:scale-110 transition active:scale-95"
              >
                {isPlaying ? (
                  <Pause size={24} fill="white" />
                ) : (
                  <Play size={24} fill="white" className="ml-1" />
                )}
              </button>
              <button className="text-gray-400 hover:text-red-400 transition">
                <SkipForward size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* === 底部：歌曲介绍 (响应式优化) === */}
      <div className="max-w-4xl w-full mt-10 md:mt-16 space-y-8 md:space-y-12">
        {/* 引用语 */}
        <div className="relative text-center px-4 md:px-8">
          <span className="text-4xl md:text-6xl text-gray-200 absolute -top-4 left-0 md:-left-4 font-serif">
            “
          </span>
          <p className="text-lg md:text-xl text-gray-600 font-light italic leading-relaxed z-10 relative">
            哀吾生之须臾，羡长江之无穷。挟飞仙以遨游，抱明月而长终。
          </p>
          <p className="text-xs md:text-sm text-gray-400 mt-3">— 《赤壁赋》</p>
        </div>

        {/* 中文介绍 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-yellow-500 rounded-full"></span>
            创作灵感 / Inspiration
          </h3>
          <p className="text-sm md:text-base text-gray-600 leading-7 text-justify font-light">
            相信世界上有许多和我一样的白日梦想家，明明身处教室或工位，却会不由自主地神游天外，想象自己飞过高山、跨过原野，将世间的潮起潮落、沧海桑田尽收眼底。想到此处，又不由得黯然神伤，毕竟，生命总有竟时。
            <br />
            <br />
            既然世界终将消磨，不如做一个清醒的旁观者，在有限的生命里，贪婪地阅尽这世间所有的壮丽与悲凉。向外的旅行，最终是为了向内的探索。
            <span className="font-medium text-gray-800">
              {" "}
              见天地，见众生，见自己。
            </span>
          </p>
        </div>

        {/* 英文介绍 & 备注 (Grid 布局响应式：单列 -> 双列) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-gray-500 text-sm leading-6 font-light">
            <p>
              I believe there are many daydreamers like me in this world who,
              despite being physically confined to classrooms or workplaces,
              find their minds involuntarily drifting away. We imagine ourselves
              soaring over high mountains and crossing vast plains, taking in
              the ebb and flow of tides and the vicissitudes of time in a single
              glance. Yet, this train of thought inevitably brings a touch of
              melancholy; after all, life is finite.
            </p>
            <br />
            <p>
              The journey outward is, ultimately, an exploration inward: to see
              the world, to see all living beings, and finally, to see oneself.
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-xl border border-red-100 text-sm text-gray-600">
            <h4 className="font-semibold text-red-400 mb-3">About This Song</h4>
            <p className="mb-3">
              写于2021年，彼时我才刚刚进入大学，对一切都充满了好奇和憧憬；也没学过乐理，旋律和歌词纯粹凭心而动。
            </p>
            <p className="italic text-xs text-gray-400">
              * Since my own arrangement was a bit rough, I used Suno AI to
              re-arrange this piece, and the vocals are AI-generated as well. I
              have over 10 other original songs in my collection, and I look
              forward to arranging, singing, and releasing them myself in the
              future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongPlayer;
