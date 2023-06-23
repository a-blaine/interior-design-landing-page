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
            <section>
              <div className="row">
                <div className="col">
                  <h4>Project Plan</h4>
                  <p>
                    There are many variations of the passages of lorem Ipsum
                    from available, majority.
                  </p>
                  <a href="./Project">
                    Read More{" "}
                    <img src="./assets/Icons/ArrowUpRight.png" alt="Arrow" />
                  </a>
                </div>
                <div className="col">
                  <h4>Interior Work</h4>
                  <p>
                    There are many variations of the passages of lorem Ipsum
                    from available, majority.
                  </p>
                  <a href="./Services">
                    Read More{" "}
                    <img src="./assets/Icons/ArrowUpRight.png" alt="Arrow" />
                  </a>
                </div>
                <div className="col">
                  <h4>Realization</h4>
                  <p>
                    There are many variations of the passages of lorem Ipsum
                    from available, majority.
                  </p>
                  <a href="./ProjectDetails">
                    Read More{" "}
                    <img src="./assets/Icons/ArrowUpRight.png" alt="Arrow" />
                  </a>
                </div>
              </div>
            </section>
            <section>
              <div className="row">
                <div className="col">
                  <h2>We Create The Art Of Stylish Living Stylishly</h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the of readable content of a page when looking
                    at its layouts the points of using that it has a
                    more-or-less normal.
                  </p>
                  <div>
                    <img src="../assets/Icons/Call.png" alt="Phone iconS" />
                    <p>012345678</p>
                    <p>Call Us Anytime</p>
                    <a
                      href="mailto:contactus@intero.com"
                      className="button default-btn"
                    >
                      Get Free Estimate
                      <span class="default-btn-arrow">
                        <img
                          src="./assets/Icons/ArrowUpRight.png"
                          alt="Arrow"
                        />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <img
                    src="../assets/Images/Homepage2.png"
                    alt="Interior design"
                  />
                </div>
              </div>
            </section>
            <section>
              <h2>What People Think About Us</h2>
              <div className="row">
                <div className="col">
                  <div className="card-header">
                    <img src="../assets/Team/Natasha.png" alt="Team member" />
                    <h5>Natasha Mith</h5>
                    <p>Oxford, UK</p>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the typesetting
                    industry. Ipsum has been.
                  </p>
                </div>
                <div className="col">
                  <div className="card-header">
                    <img src="../assets/Team/Avery.png" alt="Team member" />
                    <h5>Raymond Galario</h5>
                    <p>Sydney, Australia</p>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the typesetting
                    industry. Ipsum has been.
                  </p>
                </div>
                <div className="col">
                  <div className="card-header">
                    <img src="../assets/Team/Levi.jpg" alt="Team member" />
                    <h5>Benny Roll</h5>
                    <p>New York, USA</p>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the typesetting
                    industry. Ipsum has been.
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
