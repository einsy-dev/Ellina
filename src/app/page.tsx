import { data } from "@/shared/const/data";
import Button from "@/shared/ui/button/Button";
import Block from "@/widgets/block/Block";
import Education from "@/widgets/education/Education";
import Intro from "@/widgets/intro/Intro";
import List from "@/widgets/list/List";

export default function Home() {
  return (
    <main className="h-full flex flex-col gap-[--gap-lg]">
      <Intro />
      <div className="mx-auto flex flex-col gap-[--gap-md] lg:gap-[--gap-lg] lg:px-5 2xl:px-0">
        <div className="flex flex-col text-[24px] gap-[--gap-md]" id="about">
          <Block header={data.about.text.header} text={data.about.text.text} />
          <List header={data.about.list.header} list={data.about.list.list} />
        </div>
        <div className="flex flex-col text-[24px] gap-[--gap-md]" id="clients">
          <Block header={data.clients.text.header} text={data.clients.text.text} />
          <Button title="запись на консультацию" className="w-full" id="book"/>
          <List header={data.clients.list.header} list={data.clients.list.list} />
          <div className="px-[20px] lg:px-[90px]">
            <p>{data.goal}</p>
          </div>
        </div>
        <Education id="education" />
      </div>
    </main>
  );
}

// gap-[--gap-md] lg:[&>*:nth-child(odd)]:flex-row-reverse lg:[&>*:nth-child(odd)]:text-right text-center lg:text-start
