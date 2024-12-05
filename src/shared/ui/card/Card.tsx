import { ReactNode } from "react";

interface CardProps {
  className?: string;
  img: string;
  title: string;
  children?: ReactNode;
}
export default function Card({ className, img, title, children }: CardProps) {
  return (
    <div className={className}>
      <img className="blog_item_img" src={img} alt={title} />
      <div className="blog_item_content">
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </div>
  );
}
