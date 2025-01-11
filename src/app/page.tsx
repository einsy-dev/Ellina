import { data } from "@/shared/const/data";
import Button from "@/shared/ui/button/Button";
import Block from "@/widgets/block/Block";
import Education from "@/widgets/education/Education";
import Intro from "@/widgets/intro/Intro";
import List from "@/widgets/list/List";

export default function Home() {
  return (
    <main className=" lg:px-[90px] h-full flex flex-col gap-[--gap-lg]">
      <Intro />
      <div className="mx-auto flex flex-col gap-[--gap-lg] lg:px-5 2xl:px-0">
        <div className="flex flex-col text-[24px] gap-[110px]">
          <Block header={data.about.text.header} text={data.about.text.text} />
          <List header={data.about.list.header} list={data.about.list.list} />
        </div>
        <div className="flex flex-col text-[24px] gap-[110px]">
          <Block header={data.clients.text.header} text={data.clients.text.text} />
          <Button title="Записаться на консультацию" />
          <List header={data.clients.list.header} list={data.clients.list.list} />
          <div className="">
            <p>{data.goal}</p>
          </div>
        </div>
        <Education />
      </div>
    </main>
  );
}

// gap-[--gap-md] lg:[&>*:nth-child(odd)]:flex-row-reverse lg:[&>*:nth-child(odd)]:text-right text-center lg:text-start
