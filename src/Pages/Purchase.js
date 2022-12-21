import React, { useState, useEffect } from "react";
import "../App.css";
import Cart from "../Components/Cart";
import User from "../Components/User";
import Payment from "../Components/Payment";
import Api from "../Api";
import { useParams } from "react-router-dom";

function Purchase({
  data,
  setData,
  cart,
  setCart,
  costumer,
  setCostumer,
  filled,
  setFilled,
  valortotal,
  setValorTotal,
}) {
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
      <div className="purchase">
        <Cart
          cart={cart}
          setCart={setCart}
          filled={filled}
          setFilled={setFilled}
          valortotal={valortotal}
          setValorTotal={setValorTotal}
        />
        {filled ? (
          <Payment
            data={data}
            cart={cart}
            setCart={setCart}
            costumer={costumer}
            setCostumer={setCostumer}
            filled={filled}
            setFilled={setFilled}
            valortotal={valortotal}
            setValorTotal={setValorTotal}
          />
        ) : (
          <User
            costumer={costumer}
            setCostumer={setCostumer}
            filled={filled}
            setFilled={setFilled}
          />
        )}
      </div>
    </>
  );
}

export default Purchase;
