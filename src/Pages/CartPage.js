import React, { useState, useEffect } from "react";
import Cart from "../Components/Cart";
import User from "../Components/User";
import Payment from "../Components/Payment";
import "../App.css";
import Api from "../Api";
import { useParams } from "react-router-dom";

function CartPage({
  data,
  setData,
  cart,
  setCart,
  costumer,
  setCostumer,
  filled,
  setFilled,
}) {
  let { tamarinId } = useParams();
  const [valortotal, setValorTotal] = useState(0);

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
    console.log(cart);
  });
  return (
    <>
      <Cart
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
    </>
  );
}

export default CartPage;
