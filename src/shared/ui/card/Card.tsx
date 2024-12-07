import { ReactNode } from "react";

interface CardProps {
  img: string;
  title: string;
  children?: ReactNode;
}
export default function Card({ img, title, children }: CardProps) {
  return (
    <div className="flex flex-col lg:flex-row md:gap-[--gap-md] xl:gap-[--gap-lg]">
      <div className="w-full lg:w-[40%] flex items-center">
        <img
          className="h-fit w-full lg:w-fit lg:rounded-[--border-radius] "
          src={img}
          alt={title}
        />  
      </div>
      <div className="w-full lg:w-[60%] flex flex-col  gap-[--gap-sm] text-[22px]">
        <h1 className="text-[2rem] sm:text-[3rem]">{title}</h1>
        <div className="px-5 lg:px-0">{children}</div>
      </div>
    </div>
  );
}
