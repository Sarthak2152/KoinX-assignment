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
      <Swiper slidesPerView={slides} spaceBetween={space} navigation>
        {children}
      </Swiper>
    </div>
  );
}

export default Carousel;
