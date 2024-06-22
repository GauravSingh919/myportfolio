import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full absolute hidden md:block">
        <div className="w-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full"
            preload="false"
            playsInline
            loop
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
      <div className="w-full h-full bg-transparent text-gray-200  p-[15px] pt-20 md:py-20 z-[30] relative ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
          <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
              <div className="font-bold text-[16px]">Social Media</div>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <FaLinkedin />
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/gauravsingh138/"
                >
                  <span className="text-[15px] ml-[6px] cursor-pointer">
                    Linkedin
                  </span>
                </a>
              </p>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxGithubLogo />
                <a target="_blank" href="https://github.com/GauravSingh919">
                  <span className="text-[15px] ml-[6px]">Github</span>
                </a>
              </p>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxDiscordLogo />
                <span className="text-[15px] ml-[6px]">Discord</span>
              </p>
            </div>

            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
              <div className="font-bold text-[16px]">About</div>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">Become Sponsor</span>
              </p>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">Learning about me</span>
              </p>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">
                  gaurav878singh@gmail.com
                </span>
              </p>
            </div>
          </div>

          <div className="mb-[20px] text-[15px] text-center">
            &copy; Gaurav Satissh Singh 2024 Inc. All rights reserved
          </div>
        </div>
      </div>
      <div className="w-full absolute block md:hidden">
        <div className="w-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full"
            preload="false"
            playsInline
            loop
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
