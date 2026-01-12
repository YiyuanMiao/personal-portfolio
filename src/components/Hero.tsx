"use client";
import Image from "next/image";
import React, { useState } from "react";
import { heroIcons } from "@/assets";
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion";

const Hero = () => {
  // to track adapt the window size
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });

  const [mouseMove, setMouseMove] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  // often used in frequent motions
  const x = useMotionValue(0); //allows directly update dom elements
  const y = useMotionValue(0); //help to render specific elements instead of triggering a full rerender whener mouse moves

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);

    console.log(clientX, clientY, x, y);
  };
  const handleMouseEnter = () => {
    setWindowOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
    setMouseMove(true);
  };

  const { innerWidth, innerHeight } = windowOffset;
  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30]);
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50]);

  return (
    <div
      id="home"
      className="h-screen grid place-items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
          <motion.div
            className="flex items-center justify-center"
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: "0.1s",
            }}
          >
            <Image
              src={"/selfie.png"}
              alt="Person Image"
              width={350}
              height={350}
              priority={true} //优先load
              className="h-auto w-[200px]"
            />
            <motion.span
              className="absolute text-3xl font-semibold text-azuwhite"
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHover ? 0 : 1,
                scale: buttonHover ? 2 : 0,
                y: buttonHover ? -40 : 0,
              }}
              transition={{ opacity: { delay: 0.4 } }}
            >
              Hi
            </motion.span>
          </motion.div>
          <h1 className="text-center text-3xl font-gold tracking-wider text-charcoal sm:text-2xl">
            My name is <span className="font-bold">Cici Miao</span> &
          </h1>
          <p className="text-lg tracking-wider text-charcoal">
            I like coding & singing & songwriting ~
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-x-10 text-3xl text-saltblue sm:text-2xl">
          {heroIcons.map((item, i) => (
            <a
              href={item.url}
              key={i}
              className="rounded-lg hover:bg-saltblue hover:text-white transition-colors"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <a
          href="/#aiChat"
          className="mx-auto mt-7 block w-max rounded-lg bg-saltblue px-3 py-1 
          fon-light capitalize tracking-wider text-white hover:bg-charcoal transition-colors"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Talk to me
        </a>
      </div>
    </div>
  );
};

export default Hero;
