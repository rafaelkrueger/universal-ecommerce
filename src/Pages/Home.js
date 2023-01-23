import React, { useEffect, useRef } from "react";
import Carousel from "../Components/Carousel";
import Cards from "../Components/Cards";
import Contact from "../Components/Contact";
import { useParams } from "react-router-dom";
import Api from "../Api";
import "../App.css";

function Home({ data, setData, cart, setCart, costumer }) {
  let { tamarinSite } = useParams();
  const top = useRef(0);

  useEffect(() => {
    Api.get(`/empresa/${tamarinSite}`)
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
    if (!top) {
      var link = document.createElement("link");
      link.rel = "icon";
      link.href = data.logo;
      var head = document.getElementsByTagName("head")[0];
      var oldLink = head.querySelector("link[rel='icon']");
      head.replaceChild(link, oldLink);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      top.current = true;
    }
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
