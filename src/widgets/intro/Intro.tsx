export default function Intro() {
  return (
    <div className="w-full h-screen bg-[url('/assets/images/background.jpg')] bg-no-repeat bg-cover bg-center grid place-items-center">
      <div className="text-center flex flex-col gap-[--gap-md] px-[5%] sm:px-[5%] xl:px-[10%] 2xl:px-[20%]">
        <h1 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] mx-auto font-bold ">
          {/* Добро пожаловать */}
        </h1>
        <p className="text-[22px] sm:text-[20px] md:text-[30px] lg:text-[40px] mx-auto ">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facilis
          explicabo ratione, repellat unde necessitatibus */}
        </p>
      </div>
    </div>
  );
}
