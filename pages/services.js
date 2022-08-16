import React from "react";
import Banner from "../components/Banner";
import Benefits from "../components/Benefits";
import Layout from "../components/Layout";
import Quote from "../components/Quote";

function Home() {
  return (
    <Layout title="Services">
      <Banner title="Services" />
      <section className="bg-white">
        <div className="container py-4 py-xl-5">
          <div className="row gy-4 gy-md-0">
            <div className="col-md-6">
              <div>
                <p className="fs-5 text-primary my-3">Core Services</p>
                <h1 className="fw-normal">
                  <span>We deliver dedicated HR solutions and services</span>
                </h1>
              </div>
            </div>
            <div className="col-md-6 d-md-flex align-items-md-center">
              <div>
                <p className="fs-5">
                  <span>
                    We offer comprehensive employment services such as payroll
                    and benefits administration, HR management, and assistance
                    with employer compliance.With Our Company as your strategic
                    HR partner, you can focus on developing your products,
                    services and employees, instead of HR.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="col">
          <div className="container py-4 py-xl-5">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="mb-4">
                  <h5 className="mb-3 text-primary">HR Consultancy</h5>
                  <p className="fs-5">
                    The HR Solutions consultancy team is dedicated to delivering
                    the flexible and practical employment support that your
                    business needs.&nbsp; We offer you a range of outsourced HR
                    consultancy packages, business support functions and ad-hoc
                    services that help take the stress out of managing your
                    workforce.
                  </p>
                  <ul>
                    <li className="fs-5">
                      <span>Outsourced HR Services</span>
                    </li>
                    <li className="fs-5">
                      <span>Hr Risk Audit</span>
                    </li>
                    <li className="fs-5">
                      <span>Recruitment</span>
                    </li>
                    <li className="fs-5">
                      <span>HR software</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="mb-4">
                  <h5 className="mb-3 text-primary">Payroll Consultancy</h5>
                  <p className="fs-5">
                    Our Payroll services will manage your monthly and annual
                    payroll with diligence and efficiency, saving you time and
                    making your financial duties that much easier. We can manage
                    your BACSs payments, pensions and P11Ds, in addition to
                    providing you with a dedicated Payroll Manager as part of
                    our Enhanced service.
                  </p>
                  <ul>
                    <li className="fs-5">
                      <span>Payroll processing</span>
                    </li>
                    <li className="fs-5">
                      <span>Payroll software</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="mb-4">
                  <h5 className="mb-3 text-primary">Health and safety consultancy</h5>
                  <p className="fs-5">
                    Our Health &amp; Safety division provides you with access to
                    a Competent Person to help improve your Health &amp; Safety
                    practices, and de-risk your working environment from
                    accidents. This service will help ensure that you comply
                    with health, safety, fire and environment legislation.
                  </p>
                  <ul>
                    <li className="fs-5">
                      <span>Health &amp; Safety Compliance</span>
                    </li>
                    <li className="fs-5">
                      <span>General Fire safety</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Quote />
      <Benefits />
    </Layout>
  );
}

export default Home;
