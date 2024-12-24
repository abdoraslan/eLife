import React from "react";
import { Container } from "react-bootstrap";
import Category from "./Category";
import Image1 from "../eLife Images/product page/product category/all.png";
import Image2 from "../eLife Images/product page/product category/headphone.png";
import Image3 from "../eLife Images/product page/product category/watch.png";
import Image4 from "../eLife Images/product page/product category/phone.png";
import Image5 from "../eLife Images/product page/product category/ipad.png";
import Image6 from "../eLife Images/product page/product category/laptop.png";
import Title from "./Title";
import { useSelector } from "react-redux";

const Categories = () => {
  const state = useSelector((state)=>state.products)
  const headphones = state.filter(
    (product) => product.category === "headphone"
  );
  const smartwatch = state.filter(
    (product) => product.category === "smartwatch"
  );
  const phone = state.filter((product) => product.category === "phone");
  const tablet = state.filter((product) => product.category === "tablet");
  const laptop = state.filter((product) => product.category === "laptop");
  return (
    <Container>
     <Title title="Categories"/>
      <div className="row mt-4">
        <Category category={"All"} image={Image1} itemCount={state.length} setName= {null}/>
        <Category category={"Headphones"} image={Image2} itemCount={headphones.length} setName="headphone"/>
        <Category category={"Smartwatch"} image={Image3} itemCount={smartwatch.length} setName="smartwatch"/>
        <Category category={"Phone"} image={Image4} itemCount={phone.length} setName="phone"/>
        <Category category={"Tablet"} image={Image5} itemCount={tablet.length} setName="tablet"/>
        <Category category={"Laptop"} image={Image6} itemCount={laptop.length} setName="laptop"/>
      </div>
    </Container>
  );
};

export default Categories;
