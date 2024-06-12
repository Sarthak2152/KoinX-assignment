import { Navigation, A11y } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, A11y]);

function Carousel({ children, slides, space }) {
  return (
    <div>
      <Swiper
        slidesPerView={slides}
        breakpoints={{
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
        }}
        spaceBetween={space}
        navigation
      >
        {children}
      </Swiper>
    </div>
  );
}

export default Carousel;
