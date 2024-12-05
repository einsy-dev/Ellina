import { v4 as uuid } from "uuid";
import Card from "@/shared/ui/card/Card";
import Carousel from "@/widgets/carousel/Carousel";
import { homePageData } from "@/shared/const/data";

export default function Home() {
  return (
    <main className="max-w-[1400px] mx-auto">
      <Carousel />
      <div className="blog">
        {homePageData.map((item) => (
          <Card
            key={uuid()}
            className="blog_item"
            img={item.img}
            title={item.title}
          >
            {item.text}
          </Card>
        ))}
      </div>
    </main>
  );
}
