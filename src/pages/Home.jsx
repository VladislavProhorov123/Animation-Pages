import React from "react";
import Title from "../components/Title/Title.jsx";
import Body from "../components/Body/Body.jsx";
import HomeCard from "../components/HomeCard/HomeCard.jsx";

export default function Home() {
  return (
      <section className="page home">
        <Title>Welcome to Our Store</Title>
        <Body>
        <p className="page-text">
          We offer high-quality products with fast delivery and excellent
          support.
        </p>
        </Body>

        <div className="features">
          <HomeCard>
            <h3>Fast Delivery</h3>
            <p>Get your order in 24–48 hours.</p>
          </HomeCard>

          <HomeCard delay={0.2}>
            <h3>Best Quality</h3>
            <p>We work only with trusted suppliers.</p>
          </HomeCard>

          <HomeCard delay={0.4}>
            <h3>Support</h3>
            <p>24/7 customer support.</p>
          </HomeCard>
        </div>
      </section>
  );
}
