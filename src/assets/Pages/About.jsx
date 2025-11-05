import React, { useEffect, useState } from 'react'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import Preloader from './Preloader/Preloader';

function About() {
   const [loading, setLoading] = useState(true);
  
    useEffect(() => {
  
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer);
    }, []);
  
  return (
    <div>
       {loading ? (
        <Preloader />) : null}
      <Navbar />

      <div className="banner">
        <h2 className="text-center fw-bold  text-white">About <span className='text-warning'>Us</span></h2>
      </div>
      <section className="bg-color">
        <div className="container">
          <p className="fs-5 animate__animated animate__fadeInLeft py-5">At Pelli Alankarana, we believe that every Telugu wedding
            deserves the perfect traditional touch.
            We specialize in handcrafted wedding essentials that celebrate the beauty and rituals of Telugu culture.</p>
          <div className="row mt-4">
            <div className="col-lg-6 animate__animated animate__fadeInLeft p-4">
              <h3 className="fw-bold mb-3">Our Story</h3>
              <p className="fs-5">
                Founded by passionate artisans, Pelli Alankarana began with a vision to blend tradition and innovation for Telugu weddings. Our journey is rooted in a love for cultural artistry and a desire to make every celebration unique.
              </p>
              <p className="fs-5">
                We meticulously design each wedding essential, from Kobbari Bondam to bride and groom sets, ensuring every detail reflects the elegance and spirit of Telugu heritage.
              </p>
            </div>
            <div className="col-lg-6 animate__animated animate__fadeInRight rounded p-4" style={{ background: "#6B705C", color: "white" }}>
              <h3 className="fw-bold mb-3">What Makes Us Unique</h3>
              <ul className="fs-5">
                <li>Handcrafted pieces with modern flair</li>
                <li>Customization for your personal style</li>
                <li>Premium materials and sustainable practices</li>
                <li>Expert guidance for every step of your wedding</li>
              </ul>
              <p className="fs-5">
                Whether you envision a classic ceremony or a contemporary event, Pelli Alankarana transforms your wedding into a truly memorable experience.
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col text-center">
              <p className="my-5 fs-5">
                Discover the artistry and heart behind every creation. Let us help you celebrate love, tradition, and new beginnings.
              </p>
            </div>
          </div>
        </div>
      </section >
      <Footer/>
    </div >
  )
}

export default About
