import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const slides = [
  { img: 'https://placehold.co/163x100/webp' },
  { img: 'https://placehold.co/163x100/webp' },
  { img: 'https://placehold.co/163x100/webp' },
  { img: 'https://placehold.co/163x100/webp' },
  { img: 'https://placehold.co/163x100/webp' },
  { img: 'https://placehold.co/163x100/webp' },
  { img: 'https://placehold.co/163x100/webp' },
  { img: 'https://placehold.co/163x100/webp' },
];
const BrandCarousel = () => {
  return (
    <div className="brand-area area-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="brand-items">
              <Swiper
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                  type: 'fraction',
                }}
                autoplay={{
                  delay: 800,
                  disableOnInteraction: false,
                }}
                speed={800}
                slidesPerView={slides.length}
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper">
                {slides.map((logo, index) => (
                  <SwiperSlide key={index}>
                    <div className="single-brand-item">
                      <Link to="#">
                        <img src={logo.img} alt={`logo-${index}`} />
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrandCarousel;
