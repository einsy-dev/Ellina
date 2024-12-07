"use client";

import Button from "@/shared/ui/button/Button";

export default function Header() {
  return (
    <header className="bg-[--color-s] p-2 absolute w-full">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-row-reverse gap-5  items-center">
          <a
            href="#"
            className=""
            target="_blank"
            title="whatsapp"
            rel="noopener noreferrer"
          >
            <img
              className="size-[50px]"
              src="/assets/images/whatsapp.png"
              alt=""
              loading="lazy"
            />
          </a>
          <a
            href="https://t.me/Ellina_psiholog"
            className=""
            target="_blank"
            title="telegram"
            rel="noopener noreferrer"
          >
            <img
              className="size-[50px]"
              src="/assets/images/telegram.png"
              alt=""
              loading="lazy"
            />
          </a>

          <Button
            title="Записаться на консультацию"
            onClick={() => {
              window.open("https://t.me/Ellina_psiholog", "_blank");
            }}
          />
        </div>
      </div>
    </header>
  );
}
