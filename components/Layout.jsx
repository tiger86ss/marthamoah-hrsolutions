import Head from "next/head";
import Script from "next/script";
import React from "react";
import Footer from "./footer";
import Header from "./header";

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
        <link
          href="/assets/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"></link>
        <link href="/assets/css/styles.css" rel="stylesheet" />
        <link href="/assets/css/Her-Carousel.css" rel="stylesheet" />
        <link href="/assets/css/Featured-Cards.css" rel="stylesheet" />
      </Head>
      <Header />
      {props.children}
      <Footer />
      <Script src="/assets/js/bootstrap.min.js" />
      <Script src="/assets/js/bs-init.js" />
    </>
  );
};

export default Layout;
