import React from "react";
import Product from "../components/Product/Product.jsx";
import Title from "../components/Title/Title.jsx";

export default function Products() {
  return (
    <div className="page products">
      <Title>Our Products</Title>
      <div className="product-list" style={{ display: "flex" }}>
        <Product
          src="https://images.pexels.com/photos/17888840/pexels-photo-17888840.jpeg?cs=srgb&dl=pexels-nikola-kolev-2438142-17888840.jpg&fm=jpg"
          title="Product 1"
          description="This is the first product."
        />
        <Product
          src="https://images.pexels.com/photos/17888840/pexels-photo-17888840.jpeg?cs=srgb&dl=pexels-nikola-kolev-2438142-17888840.jpg&fm=jpg"
          title="Product 2"
          description="This is the second product."
          delay={0.2}
        />
        <Product
          src="https://images.pexels.com/photos/17888840/pexels-photo-17888840.jpeg?cs=srgb&dl=pexels-nikola-kolev-2438142-17888840.jpg&fm=jpg"
          title="Product 3"
          description="This is the third product."
          delay={0.4}
        />
      </div>
    </div>
  );
}
