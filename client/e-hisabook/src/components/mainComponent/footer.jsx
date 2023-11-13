import React from 'react';
import logo from '../../image/logo.png';
import '../../style/footer.css';

function Footer() {
  return (
    <div className="section-footer">
      <div className="footer-container">
        <div className="row">
          <div className="col-footer-50">
            <div className="widget clearfix">
              <div className="widget-title">
                <img src={logo} alt="" style={{width:'75%'}}/>
                <p>Simple | Free | Secure</p>
              </div>
              <p>
                Web & Mobile-based Application developed by Hisabook Pvt. Ltd to manage
                and transform your business into a Digital business.
              </p>
            </div>
          </div>
          <div className="col-footer-20">
            <div className="widget clearfix">
              <div className="widget-title">
                <h2>Quick Links</h2>
              </div>
              <ul className="footer-links">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#downloadapp">Download App</a>
                </li>
                <li>
                  <a href="privacy.html">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-footer-30">
            <div className="widget clearfix">
              <div className="widget-title">
                <h2 id="support">Contact Us</h2>
                <p>
                  Plot No. 7, Tech Zone Area, <br/>Near D.T.C Depot,
                  Opp. Netaji Subhash Place,<br/> Delhi – 110035 (India)
                </p>
              </div>
              <div className="social-links">
                <a href="https://www.facebook.com/" className="facebook" target="_blank">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="https://twitter.com/" className="twitter" target="_blank">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="https://in.linkedin.com/company/" className="linkedin" target="_blank">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://www.youtube.com/" className="instagram" target="_blank">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer