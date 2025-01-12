interface SidebarProps {
  className?: string;
  [key: string]: any;
}
export default function Sidebar({ className, ...props }: SidebarProps) {
  return (
    <div className={className + " fixed top-0 right-0 w-[300px] h-[100vh] bg-[--color-opacity] transition-all"} {...props}>
      <ul>
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
    </div>
  );
}
