import React from "react";
import { navbarData, copyRightIcon } from "@/assets";

const NavBar = ({ id }) => {
  return (
    <div className="w-[70px] sm:w-[50px] h-full fixed z-50 left-0 top-0 flex flex-col justify-between border-r border-gray-200 px-4 py-10 xl:py-6 z-10">
      <a href="/#home">
        <span className="text-3xl font-semibold text-red-400">C</span>.
        <span className="block w-min rotate-90 origin-bottom text-[12px] font-semibold">
          Miao
        </span>
      </a>
      <div className="flex flex-col gap-y-5 sm:gap-y-4">
        {navbarData.map((item, i) => (
          <a
            href={`/#${item.id}`}
            key={i}
            className="group flex flex-col items-center gap-y-2"
          >
            <span
              className={`text-2xl group-hover:scale-125 xl:group-hover:scale-115 transition-all ${
                item.id === id
                  ? "text-red-500 scale-110 xl:scale-100"
                  : "text-yellow-500 scale-100 xl:scale-90"
              }`}
            >
              {item.icon}
            </span>
            <span
              className={`text-[10px] tracking-wide opacity-0 
                    group-hover:translate-x-0 group-hover:opacity-100 
                    transition-all duration-300 text-center ${
                      i % 2 === 0 ? "translate-x-2" : "-translate-x-2"
                    }${item.id === id && "translate-x-0 opacity-100"}`}
            >
              {item.name}
            </span>
          </a>
        ))}
      </div>
      <p className="flex items-center justify-center text-[14px] text-gray-500 mt-6">
        <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider">
          {copyRightIcon} 2026 - {new Date().getFullYear()}
        </span>
      </p>
    </div>
  );
};

export default NavBar;
