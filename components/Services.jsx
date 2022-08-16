import React from 'react'
import Link from "next/link"

function Services() {
  return (
    <>
      <section className="bg-white py-3">
        <div className="container my-5">
          <div className="row gy-4 gy-md-0">
            <div className="col-md-6">
              <div className="px-xl-3 mx-xl-3">
                <h5 className="text-primary fw-normal">Core Services</h5>
                <h1 className="fw-normal">
                  We deliver dedicated HR solutions and services
                </h1>
                <Link href="/services">
                  <a className="btn btn-primary btn-lg me-2 my-3" role="button">
                    Our services
                  </a>
                </Link>
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
          </div>
        </div>
      </section>
      <div className="container py-4 py-xl-5">
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <div className="col p-4">
            <div className="card bg-light p-5 border-0">
              <div className="card-body p-3 text-center">
                <div className="d-flex justify-content-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="bi bi-people fs-1 text-primary">
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                  </svg>
                </div>
                <h5 className="card-title">HR Consultancy</h5>
              </div>
            </div>
          </div>
          <div className="col p-4">
            <div className="card bg-light p-5 border-0">
              <div className="card-body p-3 text-center">
                <div className="d-flex justify-content-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="bi bi-credit-card fs-1 text-primary">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"></path>
                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"></path>
                  </svg>
                </div>
                <h5 className="card-title">Payroll consultancy</h5>
              </div>
            </div>
          </div>
          <div className="col p-4">
            <div className="card bg-light p-5 border-0">
              <div className="card-body p-3 text-center">
                <div className="d-flex justify-content-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="bi bi-bandaid fs-1 text-primary">
                    <path
                      fill-rule="evenodd"
                      d="M14.121 1.879a3 3 0 0 0-4.242 0L8.733 3.026l4.261 4.26 1.127-1.165a3 3 0 0 0 0-4.242ZM12.293 8 8.027 3.734 3.738 8.031 8 12.293 12.293 8Zm-5.006 4.994L3.03 8.737 1.879 9.88a3 3 0 0 0 4.241 4.24l.006-.006 1.16-1.121ZM2.679 7.676l6.492-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.529-5.006 5.006-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002 1.505-1.492.001-.002Z"></path>
                    <path d="M5.56 7.646a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708Zm1.415-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707ZM8.39 4.818a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707Zm0 5.657a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707ZM9.803 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707Zm1.414-1.414a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708ZM6.975 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707ZM8.39 7.646a.5.5 0 1 1-.708.708.5.5 0 0 1 .707-.708Zm1.413-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707Z"></path>
                  </svg>
                </div>
                <h5 className="card-title">Health and safety</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services