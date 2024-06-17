import i from "../../images/i.svg";
import SentimentCard from "../Cards/SentimentCards";
import Carousel from "../Ui/Carousel";
import { SwiperSlide } from "swiper/react";
import newsIcon from "../../images/news.png";
import moneyIcon from "../../images/trending.png";
const breakpoints = {
  750: {
    slidesPerView: 2,
  },
};
const Sentiment = () => {
  return (
    <section className="rounded-lg bg-white p-6">
      <h1 className="mb-4 text-2xl font-semibold">Sentiment</h1>
      <div className="mb-3 flex items-center gap-1 ">
        <h2 className="text-lg font-semibold text-[#44475B]">Key Events</h2>
        <img className="h-5 w-5" src={i} />
      </div>
      {/* Carousel */}
      <Carousel breakpoints={breakpoints} slides={1} space={10}>
        <SwiperSlide>
          <SentimentCard icon={newsIcon} bgColor={"#E8F4FD"} />
        </SwiperSlide>
        <SwiperSlide>
          <SentimentCard icon={moneyIcon} bgColor={"#EBF9F4"} />
        </SwiperSlide>
        <SwiperSlide>
          <SentimentCard icon={newsIcon} bgColor={"#E8F4FD"} />
        </SwiperSlide>
      </Carousel>
      {/* Analyst Estimates  */}
      <div className="my-6">
        <div className="mb-3 flex items-center gap-1 ">
          <h2 className="text-lg font-semibold text-[#44475B]">
            Analyst Estimates
          </h2>
          <img className="h-5 w-5" src={i} />
        </div>

        <div className=" flex">
          <div className="flex items-center rounded-full bg-[#EBF9F4] px-8 py-6 text-4xl text-[#0FBA83] lg:px-10 lg:py-12">
            76<div className="text-lg ">%</div>
          </div>

          <div className="mt-2 px-2 lg:px-10">
            <div className="flex items-center p-2">
              <div className="mr-9 text-[15px] text-[#7C7E8C]">Buy</div>
              <div className="h-2 w-20 md:w-96">
                <div className="h-full rounded-lg bg-[#00B386] "></div>
              </div>
              <div className="ml-3 text-sm text-[#7C7E8C]">76%</div>
            </div>

            <div className="flex items-center p-2">
              <div className="mr-9 text-[15px] text-[#7C7E8C]">Hold</div>
              <div className="h-2 w-4 md:w-8">
                <div className="h-full rounded-lg bg-[#C7C8CE] "></div>
              </div>
              <div className="ml-3 text-sm text-[#7C7E8C]">8%</div>
            </div>

            <div className="flex items-center p-2">
              <div className="mr-9 text-[15px] text-[#7C7E8C]">Sell</div>
              <div className="h-2 w-8 md:w-16">
                <div className="h-full rounded-lg bg-[#F7324C] "></div>
              </div>
              <div className="ml-3 text-sm text-[#7C7E8C]">16%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sentiment;
