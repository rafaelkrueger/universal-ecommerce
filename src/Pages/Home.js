import React, { useEffect, useRef } from "react";
import Carousel from "../Components/Carousel";
import Cards from "../Components/Cards";
import Contact from "../Components/Contact";
import { useParams } from "react-router-dom";
import Api from "../Api";
import "../App.css";

function Home({ data, setData, cart, setCart, costumer }) {
  let { tamarinSite } = useParams();

  useEffect(() => {
    Api.get(`/empresa/${tamarinSite}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // apiip
    //   .getLocation()
    //   .then((results) => console.log(results))
    //   .catch((error) => console.error(error));
  });

  return (
    <>
      <Carousel data={data} />
      <Cards data={data} cart={cart} setCart={setCart} costumer={costumer} />
      <Contact data={data} />
    </>
  );
}

export default Home;
