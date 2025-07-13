import React from "react";

import HoverCard from "../HoverCard";

const Footer = () => {
  return (
    <>
      <div className="w-full h-full bg-transparent text-gray-200  p-[15px] pt-44 md:py-20 z-[30] relative ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
          <HoverCard />

          <div className="mb-[20px] text-[15px] text-center">
            &copy; Gaurav Satissh Singh 2024 Inc. All rights reserved
          </div>
        </div>
      </div>
      <div className="w-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
