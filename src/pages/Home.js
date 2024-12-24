import React, { Fragment, useEffect } from "react";
import CustomCard from "../components/CustomCard";
import Categories from "../components/Categories";
import ProductsSlider from "../components/ProductsSlider";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, toggleCart, toggleHeart } from "../rtk/slices/productsSlice";
import CategoryCard from "../components/CategoryCard";
import Image1 from "../eLife Images/product page/promotion products/WATCH2.png";
import Image2 from "../eLife Images/product page/promotion products/MOBILE.png";

const Home = () => {
  const state = useSelector((state) => state.products);
  const headphones = state.filter(
    (product) => product.category === "headphone"
  );
  const smartwatch = state.filter(
    (product) => product.category === "smartwatch"
  );
  const phone = state.filter((product) => product.category === "phone");
  const tablet = state.filter((product) => product.category === "tablet");
  const laptop = state.filter((product) => product.category === "laptop");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <Fragment>
      <CustomCard />
      <Categories />
      <ProductsSlider
        title="All Electronics"
        description="Explore Best Sellers"
        apiProducts={state}
        onToggleCart={(id) => dispatch(toggleCart({ id }))}
        onToggleHeart={(id) => dispatch(toggleHeart({ id }))}
      />
      <ProductsSlider
        title="Headphones"
        description="Discover Our Headphones"
        apiProducts={headphones}
        onToggleCart={(id) => dispatch(toggleCart({ id }))}
        onToggleHeart={(id) => dispatch(toggleHeart({ id }))}
      />
      <CategoryCard
        image={Image1}
        title="New Collection"
        subtitle="Explore The World Of Advanced HandWear"
        description=" A smartwatch is a wearable device that shows time and syncs with
            your phone for notifications. It tracks fitness, health, and daily
            activities. Many models also include features like GPS and heart
            rate monitoring."
      />
      <ProductsSlider
        title="Smartwatch"
        description="New Handwear Collection"
        apiProducts={smartwatch}
        onToggleCart={(id) => dispatch(toggleCart({ id }))}
        onToggleHeart={(id) => dispatch(toggleHeart({ id }))}
      />
      <ProductsSlider
        title="Mobile"
        description="Discover Our Mobiles"
        apiProducts={phone}
        onToggleCart={(id) => dispatch(toggleCart({ id }))}
        onToggleHeart={(id) => dispatch(toggleHeart({ id }))}
      />
      <CategoryCard
        image={Image2}
        title="Summer Collection"
        subtitle="Relish The Flavour Of Fresh Warmth"
        description=" Phones are essential devices for communication,
         offering calling, texting, and internet access.
          Modern smartphones feature powerful processors, 
        high-quality cameras, and apps for productivity and entertainment."
      />
      <ProductsSlider
        title="Tablet"
        description="Explore Our Tablets"
        apiProducts={tablet}
        onToggleCart={(id) => dispatch(toggleCart({ id }))}
        onToggleHeart={(id) => dispatch(toggleHeart({ id }))}
      />
      <ProductsSlider
        title="Labtop"
        description="Browse Through Our Laptops"
        apiProducts={laptop}
        onToggleCart={(id) => dispatch(toggleCart({ id }))}
        onToggleHeart={(id) => dispatch(toggleHeart({ id }))}
      />
    </Fragment>
  );
};

export default Home;
