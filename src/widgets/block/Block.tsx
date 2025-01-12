interface BlockProps {
  header: string;
  text: string[];
}
export default function Block({ header, text }: BlockProps) {
  return (
    <div className="px-[20px] lg:px-[90px] flex flex-col gap-[--gap-sm] w-full">
      <h1 className="text-[32px] xl:text-[48px]">{header}</h1>
      <p className="text-[24px] xl:ml-[10%]">{text[0]}</p>
      <p className="hidden xl:block xl:text-[24px] text-right xl:ml-[30%] xl:text-left">{text[1]}</p>
    </div>
  );
}
