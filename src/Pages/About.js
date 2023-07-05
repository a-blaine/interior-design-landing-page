import React from "react";
import "./About.css";
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
        <p>
          I like an interior that defies labeling. I don't really want someone
          to walk into a room and know that I did it
        </p>
        <p>-BUNNY WILLIAMS</p>
      </section>
      <section>
        <div className="row">
          <div className="col-5">
            <h3>What We Do</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the amount of readable content of a page when looking at its
              layouts the points of utility that it has must be more-or-less
              normal.
            </p>
            <a href="/" className="button large-btn default-btn-arrow">
              Our Concept
            </a>
          </div>
          <div className="col">
            <img src="../Assets/Images/Hompage2.png" alt="Interior design" />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <img src="../Assets/Images/Hompage2.png" alt="Interior design" />
          </div>
          <div className="col">
            {" "}
            <h3>The End Result</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the amount of readable content of a page when looking at its
              layouts the points of utility that it has must be more-or-less
              normal.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2>What People Think About Us</h2>
        <div className="card-container">
          <div className="card">
            <div className="card-front">
              <img src="../assets/Team/Avery.png" alt="People photo" />
            </div>
            <div className="card-back">
              <div className="card-header">
                <h5>Natashe Julie</h5>
                <p>Design, Australia</p>
              </div>
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
