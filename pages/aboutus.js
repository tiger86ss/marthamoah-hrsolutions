import React from "react";
import Banner from "../components/Banner";
import Benefits from "../components/Benefits";
import Layout from "../components/Layout";
import Services from "../components/Services";

const employees = [
  { name: "Martha Amoah", pos: "Managing Director", img: "martha.jpeg" },
  {
    name: "Theophilus Ayitey",
    pos: "Senior HR Consultant",
    img: "theophilus.jpeg",
  },
  {
    name: "Justice Duah",
    pos: "Manager and HR Advisor",
    img: "justice%20Duah.jpeg",
  },
  {
    name: "Amagazu Offei Kwashie",
    pos: "Senior HR Consultant",
    img: "Amagazu.jpeg",
  },
  {
    name: "John Anthony Abban Anna",
    pos: "Business Management Consultant",
    img: "Anthony.jpeg",
  },
];

function Home() {
  return (
    <Layout title="About us">
     <Banner title="About us" />
      <Services />
      <Benefits />
      <section className="bg-white">
        <div className="container py-4 py-xl-5">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2>Our Team</h2>
              <p className="w-lg-50">
                Our team is made up of dedicated Hr consultants who are up to the game.
              </p>
            </div>
          </div>
          <div className="row">
            {employees?.map((employee) => (
              <div className="col-md-6 col-lg-4 mb-5">
                <div className="card border-0 shadow-none mb-4">
                  <div className="card-body d-flex align-items-center p-0">
                    <img
                      className="rounded-circle me-3 avatar"
                      src={`assets/img/${employee?.img}`}
                      width="130"
                      height="130"
                    />
                    <div>
                      <h5 className="fs-5 text-primary">{employee?.name}</h5>
                      <p className="fs-6 text-muted mb-1">{employee?.pos}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
