import React from "react";
import Title from "../components/Title/Title.jsx";
import Body from "../components/Body/Body.jsx";

export default function Home() {
  return (
      <section className="page home">
        <h1 className="page-title">Welcome to Our Store</h1>
        <p className="page-text">
          We offer high-quality products with fast delivery and excellent
          support.
        </p>

        <div className="features">
          <div className="feature-card">
            <h3>Fast Delivery</h3>
            <p>Get your order in 24–48 hours.</p>
          </div>

          <div className="feature-card">
            <h3>Best Quality</h3>
            <p>We work only with trusted suppliers.</p>
          </div>

          <div className="feature-card">
            <h3>Support</h3>
            <p>24/7 customer support.</p>
          </div>
        </div>
      </section>
  );
}
