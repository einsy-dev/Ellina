interface ListProps {
  header: string;
  list: string[];
}

export default function List({ header, list }: ListProps) {
  return (
    <div className="bg-[--color-s] p-[33px] rounded-[--border-radius]">
      <h1 className="text-[48px]">{header}</h1>
      <ul className="list-disc mt-[--gap-sm] ml-[120px] mb-[145px] pt-[--gap-sm]">
        {list.map((item, index) => (
          <li key={index} className="">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
