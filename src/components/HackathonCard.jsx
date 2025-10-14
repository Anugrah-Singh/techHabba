import React from "react";
import { PixelatedCanvas } from "./ui/pixelated-canvas";
import { useMediaQuery } from "../hooks/useMediaQuery";

export function HackathonCard() {
  const handleClick = () => {
    window.open("http://the-big-hack.netlify.app/", "_blank");
  };

  // Responsive breakpoints
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1023px)");
  const isLaptop = useMediaQuery("(min-width: 1024px) and (max-width: 1279px)");
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  let canvasWidth = 300, canvasHeight = 180;
  if (isTablet) {
    canvasWidth = 400; canvasHeight = 240;
  } else if (isLaptop) {
    canvasWidth = 500; canvasHeight = 300;
  } else if (isDesktop) {
    canvasWidth = 700; canvasHeight = 400;
  }

  return (
    <div
      className="mx-auto mt-8 cursor-pointer w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl flex flex-col items-center"
      onClick={handleClick}
    >
      <div className="w-full flex justify-center">
        <div className="w-[90vw] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl">
          <PixelatedCanvas
            src="https://the-big-hack.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fcb78c39cf6ba47eca4a38990083c865a%2Fassets%2Fcover%2F44.png&w=1440&q=100"
            width={canvasWidth}
            height={canvasHeight}
            cellSize={3}
            dotScale={0.9}
            shape="square"
            backgroundColor="#000000"
            dropoutStrength={0.4}
            interactive
            distortionStrength={3}
            distortionRadius={80}
            distortionMode="swirl"
            followSpeed={0.2}
            jitterStrength={4}
            jitterSpeed={4}
            sampleAverage
            tintColor="#FFFFFF"
            tintStrength={0.2}
            className="rounded-xl border border-neutral-800 shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
