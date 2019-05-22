import React from 'react';
import './Footer.css';

function Footer(){
  return(
    <footer>
      <div className="page-width footer-page">
        <div className="footer-grid">
          <ul>
            <li>About</li>
            <li>Customer Support</li>
            <li>Pre-Order Shipping Schedule</li>
            <li>Collaborations</li>
            <li>Wholesalers & Retailers</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
          <div className="footer-mailing">
            <span>
              Join our mailing list
            </span>
            <div className="footer-input-group">
              <input placeholder="Email Address">
              </input>
              <span>
                  <button className="btn">SUBSCRIBE</button>
              </span>
            </div>
          </div>
        </div>
        <div className="footer-social-icons">
          <ul>
            <li>
              <a className="social-icons-link" href="https://www.twitter.com" title="Earplugs on Twitter">
                <span>
                  <img src="images/twitter.svg" alt="Twitter" />
                </span><i></i>
              </a>
            </li>
            <li>
              <a className="social-icons-link" href="https://www.instagram.com" title="Earplugs on Instagram">
                <span>
                  <img src="images/instagram.svg" alt="Instagram" />
                </span><i></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-copyright">
          © 2019, Gui-Plugs Market
        </div>
      </div>
    </footer>
  )
}

export default Footer;