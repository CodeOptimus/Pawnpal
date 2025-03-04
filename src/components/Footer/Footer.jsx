import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1>Logo</h1>
          <p>
            Placing an order is easy! Simply browse our website,<br />
            select the products you want, add them to your cart, <br />
            and proceed to checkout. Follow the on-screen i <br />
            nstructions to complete your purchase.
          </p>
          <div className="footer-social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
            </div>
        </div>

        <div className="footer-content-company">
        <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blogs</li>
            <li>Our Team</li>
          </ul>
        </div>

        <div className="footer-content-support">
        <h2>Support</h2>
          <ul>
            <li>Help</li>
            <li>Contact</li>
            <li>Chat with us</li>
          </ul>
        </div>

        <div className="footer-content-reference">
        <h2>Reference</h2>
        </div>

        <div className="footer-content-subscribe">
            <h2>Subscribe to our daily Blogs</h2>
            <ul>
                <li>For Latest News And Updates</li>
            </ul>
            <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
