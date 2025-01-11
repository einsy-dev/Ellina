interface BlockProps {
  header: string;
  text: string[];
}
export default function Block({ header, text }: BlockProps) {
  return (
    <div className="">
      <h1 className="text-[48px]">{header}</h1>
      <p className="mt-[--gap-sm] ml-[120px]">{text[0]}</p>
      <p className="mt-[--gap-sm] ml-[700px]">{text[1]}</p>
    </div>
  );
}
