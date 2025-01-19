import Nav from "../nav/Nav";

interface SidebarProps {
  className?: string;
  [key: string]: any;
}
export default function Sidebar({ className, ...props }: SidebarProps) {
  return (
    <div className={className + " fixed top-0 right-0 h-[100vh] bg-[--background-color] transition-all overflow-hidden"} {...props}>
      <div className="p-5 flex h-full items-center justify-center">
        <Nav className="flex flex-col gap-[--gap-md] [&>li]:text-center [&>li]:text-[24px]" />
      </div>
    </div>
  );
}
