interface ButtonProps {
  title: string;
  className?: string;
  [key: string]: any;
}
export default function Button({ title, className, ...props }: ButtonProps) {
  return (
    <a
      href="https://t.me/Ellina_psiholog"
      target="_blank"
      rel="noopener noreferrer"
      className={className + " bg-[#2B2C30] text-[--color-s] md:mr-[20px] lg:mr-[90px] md:w-fit px-[30px] py-[20px] ml-auto text-center"}
      {...props}
    >
      {title}
    </a>
  );
}
