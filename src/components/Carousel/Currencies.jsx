import { SwiperSlide } from "swiper/react";
import Carousel from "../Ui/Carousel";
import { useEffect, useState } from "react";

function Card({ title, imageUrl, price, btc, sparkline }) {
  return (
    <div className="rounded-lg border p-4  ">
      <div className="mb-3 flex items-center">
        <img
          className="h-[26px] w-[26px] rounded-full"
          src={imageUrl}
          alt="coin's logo"
        />
        <h2 className="ml-[7px] text-base uppercase text-[#202020]">{title}</h2>
        <span
          className={`ml-1 inline-block rounded-sm px-2 py-1 text-xs ${btc >= 0 ? "bg-[rgba(10,178,125,0.06)] text-[#32BE88]" : "bg-[rgba(238,103,85,0.1)] text-[#E96975]"}`}
        >
          {btc >= 0 && <span>+</span>}
          {btc?.toFixed(2)}%
        </span>
      </div>
      <h1 className="text-xl font-medium text-[#171717]">
        {Number(price).toFixed(4)}
      </h1>
      <div className="py-2">
        <img
          src={sparkline}
          alt={title}
          className="mx-auto w-32 object-cover"
        />
      </div>
    </div>
  );
}
const breakpoints = {
  0: {
    slidesPerView: 2,
  },
  400: {
    slidesPerView: 2,
  },
  639: {
    slidesPerView: 3,
  },
  865: {
    slidesPerView: 4,
  },
  1000: {
    slidesPerView: 5,
  },
  1500: {
    slidesPerView: 6,
  },
  1700: {
    slidesPerView: 7,
  },
};
function Currencies({ heading }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending",
        );
        const data = await response.json();
        if (response.ok) {
          setData(data.coins);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
        setError(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="space-y-5 pb-7">
      <h1 className="text-2xl font-semibold text-[#202020]">{heading}</h1>
      {loading === false && data ? (
        <Carousel breakpoints={breakpoints} slides={5} space={10}>
          {data.map((card) => (
            <SwiperSlide key={card?.item.id}>
              <Card
                title={card?.item.symbol}
                btc={card?.item.data.price_change_percentage_24h.btc}
                sparkline={card?.item.data.sparkline}
                price={card?.item.data.price}
                imageUrl={card?.item.thumb}
              />
            </SwiperSlide>
          ))}
        </Carousel>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
}

export default Currencies;
