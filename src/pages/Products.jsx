import React from "react";
import Product from "../components/Product/Product.jsx";

export default function Products() {
  return (
    <div className="page products">
      <div className="product-list" style={{display: 'flex'}}>
        <Product
          src="https://images.pexels.com/photos/17888840/pexels-photo-17888840.jpeg?cs=srgb&dl=pexels-nikola-kolev-2438142-17888840.jpg&fm=jpg"
          title="Product 1"
          description="This is the first product."
        />
        <Product
          src="https://images.pexels.com/photos/17888840/pexels-photo-17888840.jpeg?cs=srgb&dl=pexels-nikola-kolev-2438142-17888840.jpg&fm=jpg"
          title="Product 2"
          description="This is the second product."
        />
        <Product
          src="https://images.pexels.com/photos/17888840/pexels-photo-17888840.jpeg?cs=srgb&dl=pexels-nikola-kolev-2438142-17888840.jpg&fm=jpg"
          title="Product 3"
          description="This is the third product."
        />
      </div>
    </div>
  );
}
