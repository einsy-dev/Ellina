"use client";
export default function Button({
  title,
  onClick
}: {
  title: string;
  onClick: () => void;
}) {
  return (
    <div className="px-[15px] py-[5px]  xl:px-[25px] border-2 hover:shadow-xl cursor-pointer font-bold h-fit">
      <button type="button" className="text-nowrap" onClick={onClick}>
        {title}
      </button>
    </div>
  );
}
