export default function Intro() {
  return (
    <div className="w-full aspect-[3460/1600] bg-[url('/assets/images/background.jpg')] bg-no-repeat bg-contain bg-center">
      <div className="flex-col gap-1 hidden sm:flex xl:px-[10%] 2xl:px-[15%]">
        <h1 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[96px]">Эллина Буч</h1>
        <p className="text-[22px] sm:text-[20px] md:text-[30px] lg:text-[32px]">Психолог, контекстуально - поведенческий терапевт</p>
      </div>
    </div>
  );
}
