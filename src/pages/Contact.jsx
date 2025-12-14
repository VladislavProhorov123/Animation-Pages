import React from 'react'
import Title from '../components/Title/Title.jsx'
import Body from '../components/Body/Body.jsx'

export default function Contact() {
  return (
     <section className="page contact">
      <h1 className="page-title">Contact Us</h1>

      <form className="contact-form">
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <textarea placeholder="Your message" rows="4" />
        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}
