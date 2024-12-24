import Title from "./Title";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ProductsSlider.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CardShape from "./CardShape";

const ProductsSlider = ({
  apiProducts,
  title,
  description,
  onToggleHeart,
  onToggleCart,
}) => {
  const products = apiProducts.map((product) => {
    return (
      <SwiperSlide key={product.id}>
        <CardShape
          product={product}
          onToggleCart={onToggleCart}
          onToggleHeart={onToggleHeart}
        />
      </SwiperSlide>
    );
  });

  return (
    <Container className="mb-5 mt-5">
      <Title title={title} />
      <h2 className="mt-2 mb-3">{description}</h2>
      <Swiper
        breakpoints={{
          // When screen width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // When screen width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          // When screen width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // When screen width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          // When screen width is >= 1440px
          1440: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="home-swiper"
      >
        {products}
      </Swiper>
    </Container>
  );
};

export default ProductsSlider;
