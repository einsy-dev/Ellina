export default function Nav({ className }: { className?: string }) {
  return (
    <ul className={className}>
      <li>
        <a href="#about">обо мне</a>
      </li>
      <li>
        <a href="#clients">клиентам</a>
      </li>
      <li>
        <a href="#education">образование</a>
      </li>
      <li>
        <a href="#book">запись</a>
      </li>
    </ul>
  );
}
