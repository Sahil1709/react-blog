import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="https://www.facebook.com/" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/?lang=en" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.google.co.in/" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="https://www.instagram.com/" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sahil-gupta-2905421a5/"
            className="me-4 text-reset"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Sahil1709" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Sahil's BlogSite</h6>
              <p>
                This project is using complete MERN stack . I've Started working
                on this project from 30th June, 2021 and finished it on 6th
                July, 2021 . This is a BlogSite where users can write blogs
                along with authentication system and update provisions provided
                to the users.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">MERN</h6>
              <p>
                <div className="text-reset">MongoDB</div>
              </p>
              <p>
                <div className="text-reset">ExpressJS</div>
              </p>
              <p>
                <div className="text-reset">React</div>
              </p>
              <p>
                <div className="text-reset">NodeJS</div>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="/account" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/Sahil1709"
                  target="_blank"
                  rel="noreferrer"
                  className="text-reset"
                >
                  Github Profile
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/Sahil1709/react-blog"
                  target="_blank"
                  rel="noreferrer"
                  className="text-reset"
                >
                  Github Repo
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Mumbai, Maharashtra, India
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                sahil@gupta.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4">
        © 2021 Copyright:
        <a
          className="text-reset fw-bold"
          href="https://www.linkedin.com/in/sahil-gupta-2905421a5/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Sahil Gupta
        </a>
      </div>
    </footer>
  );
}
