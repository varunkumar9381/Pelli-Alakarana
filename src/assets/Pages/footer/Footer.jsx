import React from 'react'
import "../../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";


function Footer() {
  return (
    <div className='Footer'>
      <div className="text-white py-5">
        <div className="container text-center text-md-start">
          <div className="footer row gy-4">
            <div className="col-md-3 footer-logo">
              <img src="/src/assets/images/logo.png" width="100" height="80" alt="Logo" />
              <p className='moot'>Two Hearts,One Journey</p>
            </div>
            <div className="col-md-3 footer-social">
              <h3>Follow Us</h3>
              <div className=" follow-link d-flex gap-3">
                <a href="#"><i className="bi bi-facebook fs-2 text-white"></i></a>
                <a href="https://www.instagram.com/pellialakarana/"><i className="bi bi-instagram fs-2 text-white"></i></a>
                <a href="https://wa.me/c/919515406228"><i className="bi bi-whatsapp fs-2 text-white"></i></a>
              </div>
            </div>
            <div className="col-md-3 footer-links">
              <h3>Useful Links</h3>
              <ul>
                <li><a href="#" className="text-white">Our projects</a></li>
                <li><a href="#" className="text-white">FAQ's</a></li>
                <li><a href="#" className="text-white">News and Updates</a></li>
              </ul>
            </div>
            <div className="col-md-3 footer-contact">
              <h3>Contact</h3>
              <p>Dubey Colony, Serilingampally, Telangana</p>
              <p>Phone:+91 9014274113</p>
              <p>Phone:+91 9515406228</p>
              <p>Email: <a href="mailto:pellialankarna@gmail.com" className="text-white email">pellialankarna@gmail.com</a></p>
            </div>
          </div>
          <div className="text-center pt-3 border-top mt-3">
            <p>&copy; All Rights Reserved - Pelli Alankarana</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
