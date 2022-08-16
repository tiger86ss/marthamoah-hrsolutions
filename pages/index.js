import React from "react";
import Benefits from "../components/Benefits";
import Layout from "../components/Layout";
import Quote from "../components/Quote";
import Link from "next/link";
import Services from "../components/Services";

function Home() {
  return (
    <Layout>
      <section>
        <div data-bss-parallax-bg="true">
          <div className="container-fluid h-100 intro">
            <div className="container h-100">
              <div className="col-md-7 col-lg-5 d-flex align-items-center h-100">
                <div className="p-4 p-md-5 bg-primary">
                  <h1 className="text-white mb-3">
                    Transforming the work place by given you the best HR
                    solutions
                  </h1>
                  <Link href="/services">
                    <a
                      className="btn btn-white bg-white text-primary btn-lg text-uppercase me-2 my-3"
                      role="button">
                      More Info
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white" id="about">
        <div className="container my-5">
          <div className="row gy-4 gy-md-0">
            <div className="col-md-6">
              <div className="px-xl-3 mx-xl-3">
                <h5 className="text-primary fw-normal">Who we are</h5>
                <h1 className="fw-normal">
                  Helping to create engaging, productive and profitable
                  organisations
                </h1>
              </div>
            </div>
            <div className="col-md-6 d-md-flex align-items-md-center">
              <div>
                <p className="fs-5 my-3">
                  <span>
                    Human resource management is an essential function in every
                    organization. Companies would be unable to recruit and
                    retain employees effectively. We cant improve and enhance
                    the organization without human resources management. They
                    wouldn’t be able to keep their workplace culture and
                    environment healthy and accepting.
                  </span>
                  <span>
                    Human resources management is essential to businesses that
                    many people refer to it as the “heart and soul.”&nbsp;
                  </span>
                </p>
              </div>
            </div>
            <div className="col-md-6 mx-auto my-5">
              <div className="">
                <div className="position-relative">
                  <img
                    src="/assets/img/about.jpg"
                    className="img-fluid about-img"
                    alt="about"
                    width="900"
                  />
                  <div className="about-overlay p-4 p-md-5 bg-primary text-white">
                    <h4 className="fw-normal">
                      With our specialist and experts at your disposal, you will
                      face HR complex issues with confidence
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Benefits />
      <Quote />
      <Services />
    </Layout>
  );
}

export default Home;
