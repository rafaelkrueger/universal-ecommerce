import React from "react";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Cards from "../Components/Cards";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import "../App.css";

function Home({ data }) {
  return (
    <>
      <Navbar data={data} />
      <Carousel />
      <Cards data={data} />
      <Contact />
      <Footer data={data} />
    </>
  );
}

export default Home;
