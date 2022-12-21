import React, { useEffect } from "react";
import Carousel from "../Components/Carousel";
import Cards from "../Components/Cards";
import Contact from "../Components/Contact";
import { useParams } from "react-router-dom";
import Api from "../Api";
import "../App.css";

function Home({ data, setData, cart, setCart }) {
  let { tamarinId } = useParams();

  useEffect(() => {
    Api.get(`/empresa/${tamarinId}`)
      .then((res) => {
        setData(res.data);
        document.querySelector("title").textContent = res.data.name;
        document.getElementsByTagName("body")[0].style.backgroundColor =
          res.data.website.websiteColor;
        document.getElementsByTagName("body")[0].style.color =
          res.data.website.websiteFontColor;
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
      <Cards data={data} cart={cart} setCart={setCart} />
      <Contact data={data} />
    </>
  );
}

export default Home;
