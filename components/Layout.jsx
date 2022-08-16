import Head from "next/head";
import Script from "next/script";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>{props.title || "Martha Amoah Hr Solutions"}</title>
        <meta name="description" content="An HR solutions website" />
        <link rel="icon" href="/logo.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Header />
      {props.children}
      <Footer />
      <Script src="/assets/bootstrap/js/bootstrap.min.js" />
      <Script src="/assets/js/bs-init.js" />
    </>
  );
};

export default Layout;
