"use client";
import useSwipe from "@/shared/hooks/useSwipe";
import Arrow from "@/shared/ui/arrow/Arrow";
import { useState } from "react";

export default function Carousel() {
  const [state, setState] = useState(1);
  const images = [
    "https://placehold.co/1400x800",
    "https://placehold.co/1400x800/orange/white",
    "https://placehold.co/1400x800/red/black"
  ];

  useSwipe((right: boolean) => {
    if (!right) {
      setState(state + 1 > 3 ? 3 : state + 1);
    } else {
      setState(state - 1 < 1 ? 1 : state - 1);
    }
  }, []);

  const controlStyle =
    "absolute top-0 z-[1] cursor-pointer h-[100%] w-[8%]  flex items-center justify-center ease-in-out duration-[--duration-sm] select-none hover:bg-[--color-opacity]";
  const controlIconStyle = `w-0 h-0 ease-in-out duration-[--duration-sm]`;

  return (
    <div className="overflow-hidden relative rounded-[--border-radius] touch-none">
      <div
        className={"group/left left-0" + " " + controlStyle}
        onClick={() => setState(state - 1 < 1 ? 1 : state - 1)}
      >
        <Arrow
          className={
            "group-hover/left:size-[80%] rotate-180" + " " + controlIconStyle
          }
        />
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
        <Arrow
          className={"group-hover/right:size-[80%]" + " " + controlIconStyle}
        />
      </div>
    </div>
  );
}
