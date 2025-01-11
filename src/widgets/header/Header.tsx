"use client";

import Menu from "@/shared/ui/menu/Menu";

export default function Header() {
  return (
    <header className="p-2 w-full">
      <div className="max-w-[1800px] h-[150px] mx-auto flex justify-between align-center *:flex *:items-center *:font-bold">
        <div className="text-[36px]">ЭБ</div>
        <nav className="text-[26px] mr-[110px]">
          <ul className="gap-[50px] hidden lg:flex">
            <li>
              <a href="#">обо мне</a>
            </li>
            <li>
              <a href="#">клиентам</a>
            </li>
            <li>
              <a href="#">образование</a>
            </li>
            <li>
              <a href="#">запись</a>
            </li>
          </ul>
        </nav>
        <div className="lg:hidden">
          <Menu className=" h-10" />
        </div>
      </div>
    </header>
  );
}
