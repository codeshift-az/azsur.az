import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const reviews = [
  {
    img: 'https://placehold.co/100x100/webp',
    description:
      'Redug Lagre dolor sit amet, consectetur adipisicing elit. Animi vero excepturi magnam ducimus adipisci voluptas, praesentium maxime necessitatibus  Lagre dolor sit amet, consectetur adipisicing elit. Animi vero excepturi magnam ducimus adipisci voluptas, praesentium maxime necessitatibus.',
    name: 'Jhon Forder',
    title: 'Ceo - France Home',
  },
  {
    img: 'https://placehold.co/100x100/webp',
    description:
      'Redug Lagre dolor sit amet, consectetur adipisicing elit. Animi vero excepturi magnam ducimus adipisci voluptas, praesentium maxime necessitatibus.',
    name: 'Jhon Forder',
    title: 'Executive Officer - Smart Home',
  },
  {
    img: 'https://placehold.co/100x100/webp',
    description:
      'Redug Lagre dolor sit amet, consectetur adipisicing elit. Animi vero excepturi magnam ducimus adipisci voluptas, praesentium maxime necessitatibus.',
    name: 'Jhon Forder',
    title: 'Director - Builder',
  },
];

const Review = () => {
  return (
    <div className="reviews-area">
      <div className="head-overly"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
            <div className="Reviews-content">
              <Swiper
                rewind={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper testimonial-carousel item-indicator text-left">
                {reviews.map((testi, index) => (
                  <SwiperSlide key={index}>
                    <div className="single-testi">
                      <div className="testi-img">
                        <img src={testi.img} alt={testi.name} />
                      </div>
                      <div className="testi-text">
                        <p>{testi.description}</p>
                        <h4>{testi.name}</h4>
                        <span className="guest-rev">{testi.title}</span>
                      </div>
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

export default Review;
