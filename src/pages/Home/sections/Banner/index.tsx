import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWR from 'swr';

import { getSlide } from '@/api/slide';

import NotFound from '@/pages/NotFound';

const Banner = () => {
  const { data: Slides, isLoading, error } = useSWR('slides', () => getSlide());
  if (isLoading || !Slides) return <div id="preloader"></div>;

  if (error && error.status === 404) return <NotFound />;
  return (
    <div className="slider-area">
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
        {Slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.image} alt="" loading="lazy" />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            <div className="swiper-middle-content">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                    <div className="slider-content hidden-xs">
                      <motion.div
                        className="layer-1-1"
                        initial={{ rotate: -45, y: -200, opacity: 0 }}
                        animate={{ rotate: 0, y: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.7 }}>
                        <h2 className="title1">{slide.title}</h2>
                      </motion.div>

                      <motion.div
                        className="layer-1-2"
                        initial={{ x: -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.3 }}>
                        <h1 className="title2">{slide.description}</h1>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
