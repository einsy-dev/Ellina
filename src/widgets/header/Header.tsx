"use client";
import Menu from "@/shared/ui/menu/Menu";
import Sidebar from "../sidebar/Sidebar";
import { useRef, useState } from "react";
import { useClickOutside } from "@/shared/hooks/useClickOutside";
import Nav from "../nav/Nav";

export default function Header() {
  const [sideBar, setSideBar] = useState(false);
  const sideBarRef = useRef(null);
  useClickOutside({
    ref: sideBarRef,
    handleClickOutside: () => setSideBar(false)
  });
  return (
    <header className="px-5 lg:px-20 w-full sticky top-0 z-50 bg-[--background-color]">
      <div className=" lg:h-[100px] mx-auto flex justify-between align-center *:flex *:items-center *:font-bold">
        <div className="text-[36px]">ЭБ</div>
        <nav className="text-[26px]">
          <Nav className="gap-[50px] hidden lg:flex" />
        </nav>
        <div className="lg:hidden">
          <Menu className={sideBar ? "hidden" : "h-10"} onClick={() => setSideBar(!sideBar)} />
          <Sidebar ref={sideBarRef} className={sideBar ? "w-[250px]" : "w-0"} />
        </div>
      </div>
    </header>
  );
}
