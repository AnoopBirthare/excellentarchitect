import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import Logo from "../assets/5.svg";

const Footer = (props) => {
  return (
    <div id="footer">
      <footer class="footer-section">
        <div class="container">
          <div class="footer-cta pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <img
                    src="https://img.icons8.com/color/48/000000/marker--v1.png"
                    alt="Location"
                    height="50px"
                    width="50px"
                    style={{ marginTop: -50 }}
                  />
                  <a
                    href="https://goo.gl/maps/rLv7LZE6ybq2GEer8"
                    target="_blank"
                  >
                    <div class="cta-text">
                      <h4>Find us</h4>
                      <span>
                        Excellent Designs,71 Rajswagram ,<br></br> Chhatri Baag,
                        Indore (M.P)
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <img
                    src="https://img.icons8.com/color/48/000000/phone.png"
                    alt="Location"
                    height="50px"
                    width="50px"
                    style={{ marginTop: -25 }}
                  />
                  <div class="cta-text">
                    <h4>Call us</h4>
                    <span><a href="tel:+91-6265760118">+91-6265760118</a></span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <img
                    src="https://img.icons8.com/color/48/000000/gmail--v1.png"
                    alt="Location"
                    height="50px"
                    width="50px"
                    style={{ marginTop: -25 }}
                  />
                  <div class="cta-text">
                    <h4>Mail us</h4>
                    <span><a href="mailto:info.excellentdesigns@gmail.com">info.excellentdesigns@gmail.com</a></span> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <a href="index.html">
                      <img
                        src={Logo}
                        // class="img-fluid"
                        style={{
                          width: "80%",
                          height: "100%",
                          marginBottom: -120,
                          marginTop: -100,
                        }}
                        alt="logo"
                      />
                    </a>
                  </div>
                  {/* <div class="footer-text">
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit.
                    </p>
                  </div> */}
                  <div class="footer-social-icon">
                    <span>Follow us</span>
                    <a href="#">
                      <i class="icons8-facebook"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/excellent_designs1715/"
                      target="_blank"
                    >
                      <i class="icons8-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="icons8-youtube"></i>
                    </a>
                    <a href="#">
                      <i class="icons8-linkedin-circled"></i>
                    </a>
                    <a href="https://wa.me/916265760118" target="_blank">
                      <i class="icons8-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li onClick={() => props.handleRef("carousel")}>
                      <p>Home</p>
                    </li>
                    {/* <li><a href="#">about</a></li> */}
                    {/* <li><a href="#">services</a></li> */}
                    <li onClick={() => props.handleRef("designs")}>
                      <p>portfolio</p>
                    </li>
                    {/* <li><a href="#">Contact</a></li> */}
                    <li onClick={() => props.handleRef("teams")}>
                      <p>About us</p>
                    </li>
                    <li onClick={() => props.handleRef("details")}>
                      <p>Our Services</p>
                    </li>
                    <li>
                      <p onClick={() => props.handleRef("teams")}>
                        Expert Team
                      </p>
                    </li>
                    <li>
                      <p>Contact us</p>
                    </li>
                    <li>
                      <p>Latest News</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div class="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div class="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <i class="icons8-telegram-app"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d230.02914096377393!2d75.8513921077174!3d22.71090504213655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1650732807027!5m2!1sen!2sin"
          style={{ height: 200, width: "90%" }}
        ></iframe>
        <div class="copyright-area">
          <div class="container">
            <div class="row">
              <div class="col-xl col-lg text-center text-lg-left">
                <div class="copyright-text">
                  <p>Copyright &copy; 2022, All Right Reserved</p>
                </div>
              </div>
              {/* <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div class="footer-menu">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Policy</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
