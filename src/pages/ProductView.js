import React, { useEffect } from "react";
import "./ProductView.css";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import StarRating from "../components/Stars";
import ProductsSlider from "../components/ProductsSlider";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, toggleCart, toggleHeart } from "../rtk/slices/productsSlice";
import AddToCartButton from "../components/AddToCartButton";
import HeartButton from "../components/HeartButton";
const ProductView = () => {
 
  const location = useLocation().state;
  const state = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch])
  const products = state.filter((product) => product.category === location.category);
  return (
    <Container>
      <div className="product-view shadow-sm rounded border-1 ">
        <div className="image-view rounded position-relative">
          <img src={location.image} alt="" />
          <div style={{position:"absolute",top:"5px",right:"15px"}}>
              <HeartButton fontSize={"24px"} product={location}/>
          </div>
        </div>
        <div className="content-view">
          <h3 className="text-primary">{location.name}</h3>
          <p>{location.description}</p>
          <h4 className="text-danger">${location.price}</h4>
          <StarRating rating={location.rating} />
          <h5 className="mt-1 me-2">Release Date : ({location.release_date})</h5>
          <AddToCartButton product={location}/>
        </div>
      </div>
      <ProductsSlider
        apiProducts={products}
        title="Related Products"
        description="Explore Best Sellers"
        onToggleHeart={(id) => toggleHeart(id)}
        onToggleCart={(id) => toggleCart(id)}
      />
    </Container>
  );
};

export default ProductView;
