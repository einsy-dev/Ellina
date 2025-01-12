import Nav from "../nav/Nav";

interface SidebarProps {
  className?: string;
  [key: string]: any;
}
export default function Sidebar({ className, ...props }: SidebarProps) {
  return (
    <div className={className + " fixed top-0 right-0 h-[100vh] bg-[--color-opacity] transition-all"} {...props}>
      <ul>
        <Nav />
      </ul>
    </div>
  );
}
