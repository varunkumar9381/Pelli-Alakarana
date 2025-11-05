import React, { useEffect, useRef, useState } from 'react'
import Navbar from './navbar/Navbar'
import bondom from '../images/bondam.png'
import addu from '../images/adhuteera.png'
import neck from '../images/neck.png'
import decor from '../images/decors.png'
import Footer from './footer/Footer'
import Preloader from './Preloader/Preloader'
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "pellialankarna",      // 🔹 Your EmailJS Service ID
        "template_b1pdq9v",     // 🔹 Your EmailJS Template ID
        form.current,
        "cCN4RkPR4GIr55AvL"           // 🔹 Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("✅ Message sent successfully!", {
            position: "top-center",
            autoClose: 2500,
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("❌ Failed to send message. Please try again.", {
            position: "top-center",
            autoClose: 2500,
          });
        }
      );
  };

  return (
    <div className='home'>
      {loading ? (
        <Preloader />) : null}
      <Navbar />
      <div className="page-1">
        <div className="container">
          <div className="welcome-text">
            <h1 className="fw-bold text-white animate__animated animate__fadeInDown">Welcome To <span className="text-warning">Pelli
              Alankarana</span></h1>
            <h2 className="fw-bold text-white animate__animated animate__fadeInUp animate__delay-1s">Telugu Wedding Touch</h2>
            <div className="pb1 d-grid gap-4 mt-3 d-md-flex justify-content">
              <a href="/services" className="btn btn-outline-warning btn-lg  animate__animated animate__zoomIn animate__delay-2s">Explore Services</a>
              <a href="/contact" className="btn btn-warning btn-lg  Contact-btn animate__animated animate__zoomIn animate__delay-2s">Contact Us</a>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------- About Section ----------------------------------------- */}

      <section className='bg-color'>
        <div className="about-section">
          <div className="container">
            <h2 className="text-center fw-bold fs-1 py-5">About <span className='text-warning'> Us</span></h2>
            <p className="fs-5">At Pelli Alankarana, we believe that every Telugu wedding
              deserves the perfect traditional touch...</p>
            <p className="fs-5">About Pelli Alakarna
              Pelli Alakarna is your one-stop destination for all things wedding. We specialize in transforming your special day into a beautiful memory that lasts forever. With an expert team passionate about design, culture, and perfection, we craft every element—from décor to styling—with care and creativity.
              Whether it’s a grand traditional celebration or a modern intimate affair, we make sure your wedding shines with elegance, joy, and unforgettable charm.</p>
          </div>
        </div>


        {/* -------------------------------------------------Services Section --------------------------------- */}

        <div className="container pb-5" id="services">
          <h2 className="text-center fw-bold py-5">Our <span className='text-warning'>Services</span></h2>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 col-sm-12 animate__animated animate__zoomIn service-card">
              <div className="card h-100"><img src={bondom} className="card-img-top" alt="Decorated Coconuts" />
                <div className="card-body text-center">
                  <h5>Decorated Wedding Coconuts</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 animate__animated animate__zoomIn animate__delay-1s service-card">
              <div className="card h-100"><img src={neck} className="card-img-top" alt="Wedding Jewellery" />
                <div className="card-body text-center">
                  <h5>Wedding Jewellery & Accessories</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 animate__animated animate__zoomIn animate__delay-2s service-card">
              <div className="card h-100"><img src={decor} className="card-img-top" alt="Wedding Decor" />
                <div className="card-body text-center">
                  <h5>Traditional Wedding Decor</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 animate__animated animate__zoomIn animate__delay-3s service-card">
              <div className="card h-100"><img src={addu} alt="Addutera Cloth" />
                <div className="card-body text-center">
                  <h5>Handmade Addutera Cloth</h5>
                </div>
              </div>
            </div>
            <div className='service-card btn'>
              <a href="/services" className="btn btn-outline-warning btn-lg  animate__animated animate__zoomIn animate__delay-2s">Explore More</a>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------Testimonial Section --------------------------------- */}
        <div className="container my-5">
          <h3 className="text-center mb-4"><i className="bi bi-chat-heart text-warning"></i> What Our Clients Say</h3>

          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card shadow-sm border-0 p-3 h-100">
                <p className="text-muted">
                  “The Haldi plates and Sanapeta sets were so beautifully decorated!
                  Everything looked perfect and traditional — thank you for making our day special.”
                </p>
                <h6 className="fw-bold mb-0 text-warning">— Sravya & Rakesh</h6>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card shadow-sm border-0 p-3 h-100">
                <p className="text-muted">
                  “Loved the Talambralu basin and engagement platters! The detailing and colors
                  were amazing. Everyone appreciated the elegant designs.”
                </p>
                <h6 className="fw-bold mb-0 text-warning">— Meghana</h6>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card shadow-sm border-0 p-3 h-100">
                <p className="text-muted">
                  “Great service and timely delivery! The decoration was elegant and
                  beautifully matched our wedding theme. Highly recommended!”
                </p>
                <h6 className="fw-bold mb-0 text-warning">— Harini & Kiran</h6>
              </div>
            </div>
          </div>
        </div>


        <div id="testimonialCarousel" className="carousel slide text-center my-5" data-bs-ride="carousel">
          <h3 className="mb-4"><i className="bi bi-chat-dots text-warning"></i> Our Happy Clients</h3>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <p className="fst-italic text-muted">
                “Beautifully crafted Haldi plates and Sanapeta — added a traditional charm to our wedding decor!”
              </p>
              <h6 className="fw-bold text-warning">— Priya & Arjun</h6>
            </div>
            <div className="carousel-item">
              <p className="fst-italic text-muted">
                “The Talambralu basin was stunning! Loved how every detail was handled with care and elegance.”
              </p>
              <h6 className="fw-bold text-warning">— Sneha</h6>
            </div>
            <div className="carousel-item">
              <p className="fst-italic text-muted">
                “Excellent work! The engagement platter looked so royal and unique. Everyone loved it.”
              </p>
              <h6 className="fw-bold text-warning">— Vamsi & Niharika</h6>
            </div>
          </div>
        </div>


        {/* ------------------------------------------- Contact Section ---------------------------------- */}

        <div className="container">
          <div className="row py-5">
            <div className="col-lg-8 col-md-12 haveany animate__animated animate__fadeInLeft">
              <h1 className='fs-md-3 fs-sm-5 ms-5'>Have you any question ?</h1>
              <p className='fs-md-3 fs-sm-5 ms-5'>Feel free to reach out to us. We're here to help!</p>
              <form ref={form} onSubmit={sendEmail} className="row g-2 p-4 rounded text-white">
                <div className="col-12 col-md-6 mb-3">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <input type="email" name="email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <input type="tel" name="phone" className="form-control" placeholder="Your Phone" required />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <input type="text" name="subject" className="form-control" placeholder="Your Subject" required />
                </div>
                <div className="mb-3">
                  <textarea name="message" className="form-control" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-warning fw-bold">Send Message</button>
              </form>
              <ToastContainer />
            </div>

            <div className="col-4 col-md-3 rounded address" style={{ background: "#6B705C" }}>
              <h4 className='m-3 mt-5 text-white'><i className="bi bi-geo-alt-fill text-warning pe-2"></i> Address</h4>
              <p className='m-3 text-white'>Dubey Colony, Serilingampally, Telangana</p>
              <h4 className='m-3 text-white'><i className="bi bi-telephone-fill text-warning pe-2"></i> Phone</h4>
              <p className='m-3 text-white'><a href="tel:+91 9014274113" className='Phone text-white text-decoration-none'>+91 9014274113</a></p>
              <p className='m-3 text-white'><a href="tel:+91 9515406228" className='Phone text-white text-decoration-none'>+91 9515406228</a></p>              <h4 className='m-3 text-white'><i className="bi bi-envelope-fill text-warning pe-2"></i> Email</h4>
              <p className='m-3 text-white'><a href="mailto:info@wedding.com " className='Email text-white text-decoration-none' >info@wedding.com</a></p>
              <h4 className='m-3 text-white'><i className="bi bi-chat-left-text-fill text-warning pe-2"></i>Follow Us</h4>
              <div className=" follow-link d-flex gap-3 m-3">
                <p className='m-1 text-white'><a href="#"><i className="bi bi-facebook fs-1 text-white"></i></a></p>
                <p className=' m-1 text-white'><a href="https://www.instagram.com/pellialakarana/"><i className="bi bi-instagram fs-1 text-white"></i></a></p>
                <p className=' m-1 text-white'><a href="#"><i className="bi bi-whatsapp fs-1 text-white"></i></a></p>
              </div>
            </div>
          </div>
          <div className="banner2 mt-5 rounded">
            <h1><i className="bi bi-geo-alt-fill text-warning pe-3"></i>Find Our Location</h1>
          </div>
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d475.692878974235!2d78.31592780084654!3d17.48157258928816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb937f83c38687%3A0x4324461f6b27cea0!2sPelli%20alakaranna!5e0!3m2!1sen!2sin!4v1762266211170!5m2!1sen!2sin" width="100%" height="300" style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" className='my-5'></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </div>

  )
}

export default Home
