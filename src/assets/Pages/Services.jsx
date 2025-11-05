import React, { useEffect, useState } from 'react'
import Navbar from './navbar/Navbar'
import bondom from '../images/bondam.png'
import addu from '../images/adhuteera.png'
import bridegroom from '../images/groom-bride.png'
import haldi from '../images/haldi.png'
import talambra from '../images/talambra.png'
import neck from '../images/neck.png'
import sanapeta from '../images/saana peta.png'
import platter from '../images/Engagmenrt platter.png'
import decor from '../images/decors.png'
import Footer from './footer/Footer'
import Preloader from './Preloader/Preloader'

function Services() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (

    <>
      {loading ? (
        <Preloader />) : null}
      <Navbar />
      <div className='banner'>
        <h2 className="text-center fw-bold text-white">Our <span className='text-warning'>Services</span></h2>
      </div>

      <section className="bg-color">

        {/* <---------------------- HEADER ----------------------> */}

        <section className="py-5 text-center" style={{ background: "#fffaf2" }}>
          <div className="container">
            <h2 className="fw-bold mb-3" style={{ color: "#b68b00", letterSpacing: "1px" }}>
              Our Wedding Services
            </h2>
            <p className="lead mx-auto" style={{ maxWidth: "800px", color: "#6c584c" }}>
              Every wedding tells a beautiful story — we make yours shine brighter.
              From decorated coconuts and divine gifts to traditional wedding arrangements,
              our handcrafted creations bring grace and charm to your celebration.
            </p>
            <hr className="mx-auto mt-4" style={{ width: "100px", border: "2px solid #b68b00", borderRadius: "5px" }} />
          </div>
        </section>

        {/* <---------------------- CAROUSEL ----------------------> */}
        <div className="container mb-5">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5"
                aria-label="Slide 6"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6"
                aria-label="Slide 7"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7"
                aria-label="Slide 8"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8"
                aria-label="Slide 9"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={bondom} className="d-block img-fluid w-100 mx-auto" style={{ height: "700px", objectFit: "cover" }} alt="Decorated Coconuts" />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="service-text">Decorated Wedding Coconuts</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src={addu} className="d-block img-fluid w-100 mx-auto" style={{ height: "700px", objectFit: "cover" }} alt="Addutera Cloth" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Handmade Addutera Cloth</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src={bridegroom} className="d-block img-fluid w-100 mx-auto" style={{ height: "700px", objectFit: "cover" }} alt="Bride & Groom Accessories" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Bride & Groom Accessories Sets</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src={haldi} className="d-block img-fluid w-100 mx-auto" style={{ height: "700px", objectFit: "cover" }} alt="Pooja Samagri" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Haldi Plates</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src={talambra} className="d-block img-fluid w-100 mx-auto" style={{ height: "700px", objectFit: "cover" }} alt="Talambralu" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Talambrani Basins</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src={neck} className="d-block img-fluid w-100 mx-auto" style={{ height: "700px", objectFit: "cover" }} alt="Wedding Jewellery" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Wedding Jewellery & Accessories</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src={sanapeta} className="d-block img-fluid w-100 mx-auto" style={{ height: "700px", objectFit: "cover" }} alt="Sanapetas" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Sanapetas</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src={decor} className="d-block img-fluid w-100 mx-auto" style={{ height: "700px", objectFit: "cover" }} alt="Wedding Decor" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Traditional Wedding Decor</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src={platter} className="d-block img-fluid w-100 mx-auto" style={{ height: "700px", objectFit: "cover" }} alt="Engagement Platter" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Engagment Platter</h5>
                </div>
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>


        {/* <!---------------------- SERVICE SECTIONS ----------------------> */}

        <div className="container">

          {/* <-- Service 1 --> */}

          <div className="row align-items-center  py-4">
            <div className="col-md-6">
              <img src={bondom} className="img-fluid rounded shadow" alt="Decorated Coconuts" />
            </div>
            <div className="col-md-6">
              <h3><i className="bi bi-flower3 text-danger"></i> Decorated Wedding Coconuts</h3>
              <p>The <b>Kobbari Bondam</b> (decorated coconut) is an essential part of Telugu weddings. We create stunning
                handcrafted coconuts wrapped with flowers, threads, and colorful fabrics, making your rituals more vibrant.</p>
            </div>
          </div>

          {/* <-- Service 2 --> */}
          <div className="row align-items-center flex-md-row-reverse py-4">
            <div className="col-md-6">
              <img src={neck} className="img-fluid rounded shadow" alt="Jewellery" />
            </div>
            <div className="col-md-6">
              <h3><i className="bi bi-gem text-primary"></i> Wedding Jewellery & Accessories</h3>
              <p>From <b>Navaratna sets</b> to elegant traditional designs, our wedding jewellery and accessories add a royal
                charm to your big day. Every piece is handcrafted to reflect Telugu culture and grace.</p>
            </div>
          </div>

          {/* <-- Service 3 --> */}
          <div className="row align-items-center py-4">
            <div className="col-md-6">
              <img src={decor} className="img-fluid rounded shadow" alt="Wedding Decor" />
            </div>
            <div className="col-md-6">
              <h3><i className="bi bi-balloon-heart text-info"></i> Traditional Wedding Décor</h3>
              <p>From flower garlands to mandapam decorations, our décor services ensure that your venue looks divine and
                welcoming. We blend modern designs with authentic Telugu wedding styles.</p>
            </div>
          </div>

          {/* <-- Service 4 --> */}
          <div className="row align-items-center flex-md-row-reverse py-4">
            <div className="col-md-6">
              <img src={addu} className="img-fluid rounded shadow" alt="Addutera Cloth" />
            </div>
            <div className="col-md-6">
              <h3><i className="bi bi-brush text-warning"></i> Handmade Addutera Cloth</h3>
              <p>The <b>Addutera</b> cloth holds symbolic meaning in Telugu weddings. Our beautifully woven handmade Addutera
                cloth enhances the spiritual value of the ceremony.</p>
            </div>
          </div>

          {/* <-- Service 5 --> */}
          <div className="row align-items-center py-4">
            <div className="col-md-6">
              <img src={haldi} className="img-fluid rounded shadow" alt="Haldi paltes" />
            </div>
            <div className="col-md-6">
              <h3><i className="bi bi-brightness-high text-warning"></i> Haldi Plates</h3>
              <p>
                Our beautifully decorated <b>Haldi plates</b> are designed to add a vibrant touch to your wedding rituals.
                Each plate is thoughtfully adorned with <b>fresh flowers, traditional decor, and vibrant colors</b> that reflect
                the joyful spirit of the Haldi ceremony. We ensure that every plate is prepared with <b>care, elegance,
                  and cultural significance</b> to make your celebration truly special.
              </p>
            </div>
          </div>

          {/* <-- Service 6 --> */}
          <div className="row align-items-center flex-md-row-reverse py-4">
            <div className="col-md-6">
              <img src={bridegroom} className="img-fluid rounded shadow" alt="Bride & Groom Accessories" />
            </div>
            <div className="col-md-6">
              <h3><i className="bi bi-heart-fill text-warning"></i> Bride & Groom Accessories</h3>
              <p>From <b>mangalsutra sets to groom accessories</b>, we have everything to make the bride and groom look
                stunning while staying rooted in tradition.</p>
            </div>
          </div>
          {/* <-- Service 7 --> */}
          <div className="row align-items-center py-4">
            <div className="col-md-6">
              <img src={sanapeta} className="img-fluid rounded shadow" alt="Sanpeta" />
            </div>
            <div className="col-md-6">
              <h3><i className="bi bi-flower1 text-success"></i> Sanapeta</h3>
              <p>We provide <b>beautifully decorated Sanapeta</b> sets for weddings and traditional rituals.
                Each Sanapeta is designed with <b>vibrant fabrics, flowers, and cultural detailing</b> to enhance
                the beauty and purity of your special ceremony.
              </p>
            </div>
          </div>
          {/* <-- Service 8 --> */}
          <div className="row align-items-center flex-md-row-reverse py-4">
            <div className="col-md-6">
              <img src={talambra} className="img-fluid rounded shadow" alt="Bride & Groom Accessories" />
            </div>
            <div className="col-md-6">
              <h3><i className="bi bi-droplet-half text-danger"></i> Talambralu Basin</h3>
              <p> We provide <b>decorated Talambralu basins</b> designed specially for wedding rituals.
                Each basin is beautifully adorned with <b>flowers, mirrors, and traditional motifs</b>
                to hold the Talambralu gracefully during the ceremony, adding a touch of elegance and culture
                to your special occasion.
              </p>
            </div>
          </div>
          {/* <-- Service 9 --> */}
          <div className="row align-items-center py-4">
            <div className="col-md-6">
              <img src={platter} className="img-fluid rounded shadow" alt="platter" />
            </div>
            <div className="col-md-6">
              <h3><i className="bi bi-gem text-primary"></i> Engagement Platter</h3>
              <p> We provide <b>elegantly decorated engagement platters</b> designed to showcase rings, gifts, and essentials
                for the ceremony. Each platter is adorned with <b>flowers, lights, and graceful detailing</b>,
                reflecting the love and excitement of this special moment in your wedding journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>

  )
}

export default Services
