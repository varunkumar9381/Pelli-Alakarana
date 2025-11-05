import React, { useEffect, useRef, useState } from 'react'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Preloader from './Preloader/Preloader';
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
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
    <div>
      {loading ? (
        <Preloader />) : null}
      <Navbar />
      <div className="banner">
        <h4 className='text-center fs-5' style={{ color: 'goldenrod' }}>Get 24/7 Support</h4>
        <h2 className="text-center fw-bold py-3 text-white">Contact <span className='text-warning'>Us</span></h2>
      </div>
      <section className='bg-color'>
        <div className="container py-5">
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
              <p className='m-3 text-white'><a href="tel:+91 9515406228" className='Phone text-white text-decoration-none'>+91 9515406228</a></p>

              <h4 className='m-3 text-white'><i className="bi bi-envelope-fill text-warning pe-2"></i> Email</h4>
              <p className='m-3 text-white'><a href="mailto:pellialankarna@gmail.com " className='Email text-white text-decoration-none' >pellialankarna@gmail.com</a></p>
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

export default Contact
