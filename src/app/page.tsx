import { v4 as uuid } from "uuid";
import Card from "@/shared/ui/card/Card";
import Carousel from "@/widgets/carousel/Carousel";
import { homePageData } from "@/shared/const/data";

export default function Home() {
  return (
    <main className="h-full flex flex-col gap-[--gap-lg]">
      <div className="w-full h-screen bg-[url('/assets/images/background.jpg')] bg-no-repeat bg-cover bg-center grid place-items-center">
        <div className="text-center flex flex-col gap-[--gap-md] ">
          <h1 className="text-[50px] w-fit mx-auto">Добро пожаловать</h1>
          <p className="text-[22px] w-[50%] mx-auto ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            facilis explicabo ratione, repellat unde necessitatibus doloremque
            nulla qui voluptas cum magnam similique pariatur! Maiores
            praesentium nesciunt architecto suscipit quis dolor.
          </p>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto flex flex-col gap-[--gap-lg]">
        <div className="  flex flex-col gap-[--gap-md] [&>*:nth-child(odd)]:flex-row-reverse ">
          {homePageData.map((item) => (
            <Card key={uuid()} img={item.img} title={item.title}>
              {item.text}
            </Card>
          ))}
        </div>
        <Carousel />
      </div>
    </main>
  );
}
