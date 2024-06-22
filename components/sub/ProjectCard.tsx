import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
}

const ProjectCard = ({ src, title, description, url }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-2xl border  border-[#2a0e61] z-[40]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      <div className="relative p-4">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <span className="text-2xl font-semibold text-white cursor-pointer hover:underline  underline-offset-8">
            {title}
          </span>
        </a>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
