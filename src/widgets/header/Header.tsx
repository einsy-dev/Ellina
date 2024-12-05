import Button from "@/shared/ui/button/Button";

export default function Header() {
  return (
    <header className="bg-[--color-s] p-[--p-s]">
      <div className="max-w-[1400px] mx-auto max-h-[100px] grid grid-cols-2 content-center">
        <div className="flex w-fit h-[50px] bg-red-600">
          <a href="./">
            {/* <img className="" src="assets/imgs/logo.png" alt="logo" /> */}
          </a>
        </div>
        <nav className="flex justify-end">
          <ul className="grid grid-cols-2 items-center gap-[--gap-lg]">
            <Button title="Contact" />
            <Button title="About" />
          </ul>
        </nav>
      </div>
    </header>
  );
}
