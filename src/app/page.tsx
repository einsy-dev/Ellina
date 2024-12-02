/* eslint-disable @next/next/no-img-element */
import "./style.css";
import Carousel from "@/widgets/carousel/Carousel";

export default function Home() {
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
        <Carousel />
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
