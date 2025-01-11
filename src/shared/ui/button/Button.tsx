interface ButtonProps {
  title: string;
  onClick?: () => void;
}
export default function Button({ title, onClick }: ButtonProps) {
  return (
    <button className="bg-[#2B2C30] text-[--color-s] w-fit px-[30px] py-[20px] ml-auto" onClick={onClick}>
      {title}
    </button>
  );
}
