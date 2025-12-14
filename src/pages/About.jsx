import React from 'react'
import Title from '../components/Title/Title.jsx'
import Body from '../components/Body/Body.jsx'

export default function About() {
  return (
    <section className="page about">
      <h1 className="page-title">About Us</h1>

      <p className="page-text">
        Our company was founded in 2023 with one simple goal — to make online
        shopping easy and enjoyable.
      </p>

      <p className="page-text">
        We focus on quality, transparency, and long-term relationships with our
        customers.
      </p>

      <ul className="about-list">
        <li>✔ Trusted by hundreds of customers</li>
        <li>✔ Secure payments</li>
        <li>✔ Transparent pricing</li>
      </ul>
    </section>
  )
}
