/* eslint-disable @next/next/no-img-element */
"use client";
import "./style.css";
import { useState } from "react";

export default function Carousel() {
  const [state, setState] = useState(1);

  return (
    <div className="carousel_wrapper">
      <div
        className="carousel_control_left"
        onClick={() => setState(state - 1 < 1 ? 1 : state - 1)}
      >
        <svg
          className="arrow_left"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
        >
          <path d="M579-480 285-774q-15-15-14.5-35.5T286-845q15-15 35.5-15t35.5 15l307 308q12 12 18 27t6 30q0 15-6 30t-18 27L356-115q-15 15-35 14.5T286-116q-15-15-15-35.5t15-35.5l293-293Z" />
        </svg>
      </div>
      <div
        className="carousel"
        style={{ transform: `translateX(-${state - 1}00%)` }}
      >
        <div className="carousel_item">
          <img src="https://placehold.co/1400x800" alt="1" />
        </div>
        <div className="carousel_item">
          <img src="https://placehold.co/1400x800/orange/white" alt="2" />
        </div>
        <div className="carousel_item">
          <img src="https://placehold.co/1400x800/red/black" alt="3" />
        </div>
      </div>
      <div
        className="carousel_control_right"
        onClick={() => setState(state + 1 > 3 ? 3 : state + 1)}
      >
        <svg
          className="arrow_right"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
        >
          <path d="M579-480 285-774q-15-15-14.5-35.5T286-845q15-15 35.5-15t35.5 15l307 308q12 12 18 27t6 30q0 15-6 30t-18 27L356-115q-15 15-35 14.5T286-116q-15-15-15-35.5t15-35.5l293-293Z" />
        </svg>
      </div>
    </div>
  );
}
