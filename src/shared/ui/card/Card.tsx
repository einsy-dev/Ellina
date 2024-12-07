import { ReactNode } from "react";

interface CardProps {
  img: string;
  title: string;
  children?: ReactNode;
}
export default function Card({ img, title, children }: CardProps) {
  return (
    <div className="flex gap-[--gap-lg]">
      <img className="w-[40%]" src={img} alt={title} />
      <div className="w-[60%] flex flex-col items-center justify-center gap-[--gap-sm] text-[22px]">
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </div>
  );
}
