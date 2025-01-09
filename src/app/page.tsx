// import Card from "@/shared/ui/card/Card";
// import Carousel from "@/widgets/carousel/Carousel";
// import { homePageData } from "@/shared/const/data";
import Intro from "@/widgets/intro/Intro";
// import Qa from "@/widgets/qa/Qa";

export default function Home() {
  return (
    <main className="h-full flex flex-col gap-[--gap-lg]">
      <Intro />
      <div className="max-w-[1400px] mx-auto flex flex-col gap-[--gap-lg] lg:px-5 2xl:px-0">
        <div className="flex flex-col gap-[--gap-md] lg:[&>*:nth-child(odd)]:flex-row-reverse lg:[&>*:nth-child(odd)]:text-right text-center lg:text-start">
          {/* {homePageData.map((item, index) => (
            <Card key={index} img={item.img} title={item.title}>
              {item.text ||
                item.list?.map((item, index) => <p key={index}>{item}</p>)}
            </Card>
          ))} */}
        </div>
        {/* <Carousel /> */}
        {/* <Qa /> */}
      </div>
    </main>
  );
}
