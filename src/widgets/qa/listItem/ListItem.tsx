import { useRef } from "react";

export default function ListItem({ open, setOpen, el, index }: any) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <li className="lg:rounded-[--border-radius] overflow-hidden">
      <h1
        className="cursor-pointer select-none p-[--p-sm] bg-[--color-s] flex justify-between items-center text-[26px] lg:text-[2rem]"
        onClick={() => setOpen(() => (open ? null : index))}
      >
        {el.title}
      </h1>
      <div
        ref={ref}
        className="transition-[--transition-cb] duration-[--duration-md] overflow-hidden h-0 bg-[--color-p] "
        style={open ? { height: `${ref.current?.scrollHeight}px` } : {}}
      >
        <p className="p-[--p-sm] text-[22px]">{el.text}</p>
      </div>
    </li>
  );
}
