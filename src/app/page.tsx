import { v4 as uuid } from "uuid";
import Card from "@/shared/ui/card/Card";
import Carousel from "@/widgets/carousel/Carousel";
import { homePageData } from "@/shared/const/data";

export default function Home() {
  return (
    <main className="max-w-[1400px] mx-auto flex flex-col gap-[--gap-lg]">
      <Carousel />
      <div className="flex flex-col gap-[--gap-md] [&>*:nth-child(odd)]:flex-row-reverse">
        {homePageData.map((item) => (
          <Card key={uuid()} img={item.img} title={item.title}>
            {item.text}
          </Card>
        ))}
      </div>
    </main>
  );
}
