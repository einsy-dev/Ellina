interface ListProps {
  header: string;
  list: string[];
}

export default function List({ header, list }: ListProps) {
  return (
    <div className="mx-[20px] lg:mx-[90px]  bg-[--color-s] p-[33px] rounded-[--border-radius]">
      <h1 className="text-[32px] xl:text-[48px] mb-10">{header}</h1>
      <ul className="list-disc text-[20px] lg:text-[32px] xl:ml-[10%] flex flex-col gap-[--gap-sm] ml-5">
        {list.map((item, index) => (
          <li key={index} className="">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
