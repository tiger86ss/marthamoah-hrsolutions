import React from 'react'

function Banner({title}) {
  return (
    <div className="breadcrumb-bg-img py-5 mb-5">
      <div className="container">
        <div className="d-flex justify-content-between container">
          <h3 className="text-nowrap text-white">{title}</h3>
          <ol className="breadcrumb d-flex justify-content-end container mt-1">
            <li className="breadcrumb-item text-decoration-none">
              <a className="text-decoration-none text-white" href="#">
                <span>Home</span>
              </a>
            </li>
            <li className="breadcrumb-item">
              <a className="text-decoration-none text-white-50" href="#">
                <span>{title}</span>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Banner