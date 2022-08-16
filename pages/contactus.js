import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Layout from "../components/Layout";
import Banner from "../components/Banner";

function Home() {
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.EMAIL_JS_SERVICE_ID,
        process.env.EMAIL_JS_TEMPLATE_ID,
        form.current,
        process.env.EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setMessage(result.text);
        },
        (error) => {
          setMessage(error.text);
        }
      );
  };

  return (
    <Layout title="Contact us">
      <Banner title="Contact us" />
      <section className="position-relative py-4 py-xl-5">
        <div className="container position-relative">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2>Contact us</h2>
              <p className="w-lg-50 fs-5">
                Your Hr problem can be solved with a competent team with a
                dedicated service. Get in touch
              </p>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-lg-4 col-xl-4 mb-5">
              <div className="d-flex flex-column justify-content-center align-items-start h-100">
                <div className="d-flex align-items-center p-3">
                  <div className="p-3 text-white me-3 bg-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-telephone">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                    </svg>
                  </div>
                  <div className="px-2">
                    <h6 className="mb-0 text-primary">Phone</h6>
                    <p className="mb-0 fs-5">
                      +233 20 1966 286
                      <br />
                    </p>
                    <p className="mb-0 fs-5">
                      +233 20 842 7839
                      <br />
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center p-3">
                  <div className="p-3 text-white me-3 bg-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-envelope">
                      <path
                        fill-rule="evenodd"
                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
                    </svg>
                  </div>
                  <div className="px-2">
                    <h6 className="mb-0 text-primary">Email</h6>
                    <p className="mb-0 fs-5">
                      info@marthaamoah-hrsolutions.com
                      <br />
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center p-3">
                  <div className="p-3 text-white me-3 bg-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-pin">
                      <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354zm1.58 1.408-.002-.001.002.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282z"></path>
                    </svg>
                  </div>
                  <div className="px-2">
                    <h6 className="mb-0 text-primary">Location</h6>
                    <p className="mb-0 fs-5">
                      3rd Floor, Adom Nipa Plaza
                      <br />
                    </p>
                    <p className="mb-0 fs-5">
                      Amakom, Near KNUST
                      <br />
                    </p>
                    <p className="mb-0 fs-5">
                      Kumasi, Ashanti Region
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4">
              <div>
                {message && (
                  <p
                    className={`${
                      message == "OK" ? "text-success" : "text-danger"
                    }`}>
                    {message == "OK"
                      ? "Email sent successfully"
                      : "Email not sent, try again"}
                  </p>
                )}
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-4">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      id="name-1"
                      name="user_name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      id="email-1"
                      name="user_email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="form-control form-control-lg rounded-0"
                      id="message-1"
                      name="message"
                      rows="6"
                      placeholder="Message"></textarea>
                  </div>
                  <div>
                    <button
                      className="btn btn-primary btn-lg d-block w-100"
                      type="submit">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
