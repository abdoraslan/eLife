import React, { useEffect, useState } from "react";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, toggleCart, toggleHeart } from "../rtk/slices/productsSlice";
import CardShape from "../components/CardShape";
import { Container } from "react-bootstrap";
import Image from "../eLife Images/4.jpg"
import { useLocation } from "react-router-dom";
const Products = () => {
  const location = useLocation()
  const name= location.state?.name 
  const products = useSelector((state) => state.products);
  const newProducts = name === null || name === undefined ? products : products.filter((product)=> product.category === name)
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const productsPerPage = 30; // 6 rows * 4 products per row
  
  // Calculate the products to display based on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = newProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(newProducts.length / productsPerPage);

  // Function to handle next page
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle prev page
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(()=>{
    window.scrollTo(0,0)
  },[currentPage])

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <img src={Image} alt=""  className="head-image"/>
      <Container className="products-container">
        <div className="products-grid">
          {/* Display products in rows */}
          {currentProducts.map((product) => (
              <CardShape key={product.id}
                product={product}
                onToggleCart={(id) => dispatch(toggleCart({id}))}
                onToggleHeart={(id) => dispatch(toggleHeart({id}))}
              />
          ))}
        </div>

        {/* Pagination controls */}
        <div className="pagination-controls">
          <button className="prev-button" onClick={handlePrev} disabled={currentPage === 1}>
            Prev
          </button>
          <button className="next-button" onClick={handleNext} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Products;
