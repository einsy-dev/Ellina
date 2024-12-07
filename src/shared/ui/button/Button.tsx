"use client";
export default function Button({
  title,
  onClick
}: {
  title: string;
  onClick: () => void;
}) {
  return (
    <li className="px-[25px] py-[5px] border-2 hover:shadow-xl cursor-pointer font-bold h-fit">
      <div onClick={onClick}>{title}</div>
    </li>
  );
}
