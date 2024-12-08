"use client";
import { RefObject, useEffect } from "react";
/**
 * useSwipe hook to detect swipe gestures on an element.
 *
 * @param {RefObject<HTMLElement | null>} elementRef - Reference to the target element
 * @param {(right: boolean) => void} callback - Function called with swipe direction
 * @param {React.DependencyList} deps - Dependency list for the useEffect
 * @param {number} ignoreValue - Minimum swipe distance threshold
 * @returns {void}
 */
export default function useSwipe(
  elementRef: RefObject<HTMLElement | null>,
  callback: (right: boolean) => void,
  deps: React.DependencyList = [],
  ignoreValue: number = 100
) {
  let startX: number, endX: number, startY: number, endY: number;
  startX = endX = startY = endY = 0;

  function touchStart(e: any) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }

  function touchEnd(e: any) {
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;
    if (Math.abs(startX - endX) < ignoreValue || Math.abs(startY - endY) > 150)
      return;

    if (startX - endX > 0) {
      callback(false);
    } else {
      callback(true);
    }
  }

  useEffect(() => {
    if (!elementRef) return;
    const currentElement = elementRef.current;
    if (currentElement) {
      currentElement.addEventListener("touchstart", touchStart, false);
      currentElement.addEventListener("touchend", touchEnd, false);

      return () => {
        currentElement.removeEventListener("touchstart", touchStart, false);
        currentElement.removeEventListener("touchend", touchEnd, false);
      };
    }
  }, deps);
}
