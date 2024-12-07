"use client";
import Arrow from "@/shared/assets/icons/arrow.svg";
import { useState } from "react";

export default function Carousel() {
  const [state, setState] = useState(1);
  const images = [
    "https://placehold.co/1400x800",
    "https://placehold.co/1400x800/orange/white",
    "https://placehold.co/1400x800/red/black"
  ];

  const controlStyle =
    "absolute top-0 z-[1] cursor-pointer h-[100%] w-[150px] flex items-center justify-center ease-in-out duration-[--duration-sm] select-none hover:bg-[--color-opacity]";

  return (
    <div className="overflow-hidden relative rounded-[--border-radius]">
      <div
        className={"group/left left-0" + " " + controlStyle}
        onClick={() => setState(state - 1 < 1 ? 1 : state - 1)}
      >
        <Arrow className="w-0 h-0 ease-in-out duration-[--duration-sm] group-hover/left:size-[100px] rotate-180" />
      </div>
      <div
        className="flex transition-[--transition-cb] duration-[--duration-md]"
        style={{ transform: `translateX(-${state - 1}00%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={index.toString()} />
        ))}
      </div>
      <div
        className={"group/right right-0" + " " + controlStyle}
        onClick={() => setState(state + 1 > 3 ? 3 : state + 1)}
      >
        <Arrow className="w-0 h-0 ease-in-out duration-[--duration-sm] group-hover/right:size-[100px]" />
      </div>
    </div>
  );
}
