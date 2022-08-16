import React from "react";

function Benefits() {
  return (
    <section className="bg-white pt-4 pt-xl-5">
      <div className="container-fluid">
        <div className="row gy-4 gy-md-0">
          <div className="col-md-7 bg-light p-4 p-lg-5 d-lg-flex justify-content-lg-center mb-5">
            <div className="col-lg-7 py-5">
              <h1 className="mb-4">Company benefits</h1>
              <p className="fs-5">
                We offer comprehensive employment services such as payroll and
                benefits administration, HR management, and assistance with
                employer compliance.
              </p>
              <p className="fs-5">
                With Our Company as your strategic HR partner, you can focus on
                developing your products, services and employees, instead of HR.
              </p>
            </div>
          </div>
          <div className="col-md-5 col-lg-4 d-md-flex align-items-md-center">
            <div className="row">
              <div className="col-6 text-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-bookshelf fs-1 text-primary">
                  <path d="M2.5 0a.5.5 0 0 1 .5.5V2h10V.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-1 0V15H3v.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zM3 14h10v-3H3v3zm0-4h10V7H3v3zm0-4h10V3H3v3z"></path>
                </svg>
                <p className="fs-4 fw-bold mt-3 mb-0">50</p>
                <p className="text-uppercase fs-6">Companies we have helped</p>
              </div>
              <div className="col-6 text-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-briefcase fs-1 text-primary">
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"></path>
                </svg>
                <p className="fs-4 fw-bold mt-3 mb-0">5</p>
                <p className="text-uppercase fs-6">COrporate programs</p>
              </div>
              <div className="col-6 text-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-person-video3 fs-1 text-primary">
                  <path d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2Z"></path>
                  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783.059-.187.09-.386.09-.593V4a2 2 0 0 0-2-2H2Z"></path>
                </svg>
                <p className="fs-4 fw-bold mt-3 mb-0">12</p>
                <p className="text-uppercase fs-6">training course</p>
              </div>
              <div className="col-6 text-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-file-person fs-1 text-primary">
                  <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"></path>
                  <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                </svg>
                <p className="fs-4 fw-bold mt-3 mb-0">20</p>
                <p className="text-uppercase fs-6">partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
