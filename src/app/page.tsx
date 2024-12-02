"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import "./style.css";

export default function Home() {
  const [state, setState] = useState(1);

  return (
    <>
      <header className="header">
        <div className="header_wrapper">
          <div className="header_logo">
            <a href="./">
              {/* <img className="logo" src="assets/imgs/logo.png" alt="logo" /> */}
            </a>
          </div>
          <nav className="header_nav">
            <ul className="header_menu">
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="./about.html">About</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main">
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
        <div className="blog">
          <div className="blog_item">
            <img
              className="blog_item_img"
              src="https://placehold.co/600x600"
              alt="1"
            />
            <div className="blog_item_content">
              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eveniet consequuntur ducimus debitis beatae iusto nisi pariatur
                nam ipsam, laborum eum tempora minus officiis et quibusdam
                commodi similique autem illum veritatis!
              </p>
            </div>
          </div>
          <div className="blog_item">
            <img
              className="blog_item_img"
              src="https://placehold.co/600x600"
              alt="1"
            />
            <div className="blog_item_content">
              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                quasi aliquam repellat harum soluta distinctio recusandae natus
                accusantium fugit repellendus quidem numquam voluptas, hic ex
                blanditiis, sapiente, adipisci doloremque enim?
              </p>
            </div>
          </div>
          <div className="blog_item">
            <img
              className="blog_item_img"
              src="https://placehold.co/600x600"
              alt="1"
            />
            <div className="blog_item_content">
              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                perspiciatis, quibusdam nesciunt error unde iure at perferendis
                necessitatibus, aliquam omnis eveniet soluta minus nostrum.
                Eligendi autem rem praesentium corrupti explicabo?
              </p>
            </div>
          </div>
          <div className="blog_item">
            <img
              className="blog_item_img"
              src="https://placehold.co/600x600"
              alt="1"
            />
            <div className="blog_item_content">
              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                perspiciatis, quibusdam nesciunt error unde iure at perferendis
                necessitatibus, aliquam omnis eveniet soluta minus nostrum.
                Eligendi autem rem praesentium corrupti explicabo?
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">Footer</footer>
    </>
  );
}
