export default function Button({
  title,
  link = "#"
}: {
  title: string;
  link?: string;
}) {
  return (
    <li className="px-[25px] py-[5px] border-2 hover:shadow-xl cursor-pointer">
      <a href={link}>{title}</a>
    </li>
  );
}
