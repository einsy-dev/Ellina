"use client";
import { useEffect } from "react";

export default function Test() {
  useEffect(() => {
    console.log("Test");
  }, []);

  return (
    <div>
      <div>Test</div>
    </div>
  );
}
