import React from "react";

export default function Home() {
  return (
    <div className="Home">
      <div className="container">
        <div className="hero">
          <header>
            <h1>
              Let Your Home <br /> Be Unique
            </h1>
            <h3>
              There are many variations of the passages of lorem Ipsum <br />{" "}
              from available, variations of the passages.
            </h3>
            <a href="./pages/services#services" className="button default-btn">
              Get Started{" "}
              <span class="default-btn-arrow">
                <img src="./assets/Icons/ArrowUpRight.png" alt="Arrow" />
              </span>
            </a>
          </header>
          <main>
            <div className="row">
              <div className="col">
                <h4>Project Plan</h4>
                <p>
                  There are many variations of the passages of lorem Ipsum from
                  available, majority.
                </p>
                <a href="./Project">
                  Read More{" "}
                  <img src="./assets/Icons/ArrowUpRight.png" alt="Arrow" />
                </a>
              </div>
              <div className="col">
                <h4>Interior Work</h4>
                <p>
                  There are many variations of the passages of lorem Ipsum from
                  available, majority.
                </p>
                <a href="./Services">
                  Read More{" "}
                  <img src="./assets/Icons/ArrowUpRight.png" alt="Arrow" />
                </a>
              </div>
              <div className="col">
                <h4>Realization</h4>
                <p>
                  There are many variations of the passages of lorem Ipsum from
                  available, majority.
                </p>
                <a href="./ProjectDetails">
                  Read More{" "}
                  <img src="./assets/Icons/ArrowUpRight.png" alt="Arrow" />
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
