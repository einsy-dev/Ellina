import { useEffect } from "react";

export default function useScroll(fn: () => void): void {
  useEffect(() => {
    window.addEventListener("scroll", fn);
    return () => {
      window.removeEventListener("scroll", fn);
    };
  }, []);
}
