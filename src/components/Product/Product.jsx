import React from 'react'
import './Product.css'

export default function Product({ src, title, description }) {
  return (
    <div className="product">
      <img src={src} alt={title} />
      <div className="product-container"></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Buy Now</button>
    </div>
  )
}
