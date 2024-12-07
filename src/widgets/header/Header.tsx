"use client";

export default function Header() {
  return (
    <header className="bg-[--color-s] p-[--p-s] absolute w-full">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-row-reverse gap-[--gap-md]">
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
            href="#"
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
        </div>
      </div>
    </header>
  );
}
