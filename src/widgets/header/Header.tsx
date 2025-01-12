"use client";
import Menu from "@/shared/ui/menu/Menu";
import Sidebar from "../sidebar/Sidebar";
import { useRef, useState } from "react";
import { useClickOutside } from "@/shared/hooks/useClickOutside";

export default function Header() {
  const [sideBar, setSideBar] = useState(false);
  const sideBarRef = useRef(null);
  useClickOutside({
    ref: sideBarRef,
    handleClickOutside: () => setSideBar(false)
  });
  return (
    <header className="px-5 lg:px-20 w-full">
      <div className=" lg:h-[150px] mx-auto flex justify-between align-center *:flex *:items-center *:font-bold">
        <div className="text-[36px]">ЭБ</div>
        <nav className="text-[26px]">
          <ul className="gap-[50px] hidden lg:flex">
            <li>
              <a href="#about">обо мне</a>
            </li>
            <li>
              <a href="#clients">клиентам</a>
            </li>
            <li>
              <a href="#education">образование</a>
            </li>
            <li>
              <a href="#book">запись</a>
            </li>
          </ul>
        </nav>
        <div className="lg:hidden">
          <Menu className={sideBar ? "hidden" : "h-10"} onClick={() => setSideBar(!sideBar)} />
          <Sidebar ref={sideBarRef} className={sideBar ? "w-[300px]" : "w-0"} />
        </div>
      </div>
    </header>
  );
}
