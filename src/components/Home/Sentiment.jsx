import Carousel from "../Ui/Carousel";
import { SwiperSlide } from "swiper/react";
function Sentiment() {
  return (
    <section className="bg-white p-6">
      <div>
        <h1>Sentiment</h1>
        <h2>Key Events</h2>
        <Carousel>
          {data.map((card) => (
            <SwiperSlide key={card.id}>
              <div className={`flex flex-row gap-2 p-5`}>
                <img src={card.image} className="rounded-lg" alt="card image" />
                <div className="space-y-4 p-2">
                  <h2 className="text-2xl font-bold text-white">
                    {card.title}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
const data = [
  {
    title:
      "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    id: 1,
    thumb: "public/images/news.png",
    bg: "#E8F4FD",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    id: 1,
    thumb: "public/images/trending.png",
    bg: "#EBF9F4",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    id: 1,
    thumb: "public/images/news.png",
    bg: "#E8F4FD",
  },
];
export default Sentiment;
