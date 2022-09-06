import React from "react";
import "./About";
import portHomeBcg from "../images/about.png";
import { HashLink as Link } from "react-router-hash-link";

function About() {
  return (
    <section className="py-5 my-5" id="about">
      <div className="container h-screen mt-5">
        <div className="row h-full w-full">
          <div className="w-full col-12 col-sm-10 mx-auto col-md-6 my-3">
            <img
              src={portHomeBcg}
              className="img-fluid img-thumbnail"
              alt="about"
              style={{
                width: "55%",
                height: "100%",
                marginLeft: "200px",
                marginTop: "20px",
                background: "var(--darkGrey",
              }}
            />
            ;
          </div>
          <div className="col-12 w-full col-sm-10 col-md-6 mr-5 mt-3">
            <h1>About Me </h1>
            <p style={{ fontSize: "20px" }}>
              A Professional Web Developer with hands-on experience in Frontend
              development using modern HTML, CSS, and Javascript with React and
              Nextjs, frameworks/libraries to mention a few. For backend
              development; Node-Expressjs, python-flask, Mongodb and Posgresql,
              technologies and databases... I provide onsite and remote software
              solutions to entrepreneurs, offering a wide range of services from
              building fully responsive, user-friendly Web Applications to
              Search Engine Optimization (SEO), Entrepreneurship Services and
              more to enable business growth.{" "}
            </p>

            <button
              style={{
                marginTop: "10px",
                outline: "none",
                border: "1px solid gray",
                borderRadius: "9px",
              }}>
              My Resume
            </button>

            <button
              style={{
                marginLeft: "16px",
                outline: "none",
                border: "1px solid gray",
                borderRadius: "9px",
              }}>
              <Link smooth to="#contact">
                Contact Me
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
