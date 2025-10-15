
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
        className="my-6 flex w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:my-12 md:p-4"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}
        onClick={handleClick}
      >
        <div className="mx-2 flex-1">
          <div className="relative mt-2 aspect-[3/4] w-full">
            <img
              loading="lazy"
              className="absolute inset-0 w-full h-full rounded-[16px] bg-[#000000] object-cover contrast-75"
              alt={title + " background"}
              src={image}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                opacity: 1,
                maxWidth: '100%',
                height: 'auto',
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
