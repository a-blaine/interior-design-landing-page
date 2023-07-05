import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedIn,
  faInstagram,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="About">
      <section>
        <h2>What People Think About Us</h2>
        <div className="card-container">
          <div className="card">
            <div className="card-front"></div>
            <img src="../assets/Team/Avery.png" alt="People photo" />

            <div className="card-back">
              <h5>Natashe Julie</h5>
              <p>Design, Australia</p>
              <div className="social-icons">
                <FontAwesomeIcon icon={faFacebook} className="sns-icon" />

                <FontAwesomeIcon icon={faTwitter} className="sns-icon" />

                <FontAwesomeIcon icon={faLinkedIn} className="sns-icon" />

                <FontAwesomeIcon icon={faInstagram} className="sns-icon" />
              </div>
              <div className="card-footer">
                <p>+1 (234) 567-8901</p>
                <p>julie@email.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Creative Project? Let's have a productive talk.</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="textarea" placeholder="Hello, I am interested in..." />
          <button
            type="submit"
            className="button default-button-arrow large-btn"
          >
            Send Now
          </button>
        </form>
      </section>
    </div>
  );
}
