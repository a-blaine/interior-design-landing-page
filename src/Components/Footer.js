import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="../assets/Logo.png" alt="Interno logo" />
            <p>
              It is a long established fact that a reader will be distracted
              easily.
            </p>
            <div className="social-icons"></div>
          </div>
          <div className="col">
            <h5>Pages</h5>
            <ul>
              <li>About Us</li>
              <li>Our Projects</li>
              <li>Our Team</li>
              <li>Contact Us</li>
              <li>Services</li>
            </ul>
          </div>
          <div className="col">
            <h5>Services</h5>
            <ul>
              <li>Kitchen</li>
              <li>Living Area</li>
              <li>Bathroom</li>
              <li>Dining Hall</li>
              <li>Bedroom</li>
            </ul>
          </div>
          <div className="col">
            <h5>Contact</h5>
            <p>
              55 East Birchwood Ave. <br /> Brooklyn, New York 11201
            </p>
            <p>contact@interno.com</p>
            <p>(123)456- 7890</p>
          </div>
        </div>
      </div>
      <div>
        Copyright © Interno | Designed by Victorflow Templates - Built by Ashley
        Blaine
      </div>
    </footer>
  );
}
