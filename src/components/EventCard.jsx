
import React from "react";
import { useNavigate } from "react-router-dom";
import { CometCard } from "./ui/comet-card";

export function EventCard({ title, subtitle, image, tag, id }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/events/${id}`);
  };
  return (
    <CometCard>
      <div
        className="my-6 flex w-full max-w-xs cursor-pointer flex-col rounded-[16px] border-0 bg-[#1F2121] p-4 saturate-0 md:my-12"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}
        onClick={handleClick}
      >
        <div className="w-full">
          <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[16px]">
            <img
              loading="lazy"
              className="w-full h-full rounded-[16px] bg-[#000000] object-cover contrast-75"
              alt={title + " background"}
              src={image}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
              }}
            />
          </div>
        </div>
        <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
          <div className="text-xs md:text-sm lg:text-base">{title}</div>
          <div className="text-xs md:text-sm lg:text-base text-gray-300 opacity-50">{tag}</div>
        </div>
        {subtitle && (
          <div className="px-4 pb-4 text-xs text-gray-400">{subtitle}</div>
        )}
      </div>
    </CometCard>
  );
}
