import React, { useState, useEffect, useRef } from "react";
import Cart from "../Components/Cart";
import User from "../Components/User";
import Payment from "../Components/Payment";
import ToastMessage from "../Components/ToastMessage";
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
  let { tamarinSite } = useParams();
  const [valortotal, setValorTotal] = useState(0);
  const [realCupom, setRealCupom] = useState(0);
  const [status, setStatus] = useState(false);
  const [code, setCode] = useState(0);
  const [message, setMessage] = useState("");

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
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
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
        realCupom={realCupom}
        setRealCupom={setRealCupom}
        setStatus={setStatus}
        setCode={setCode}
        setMessage={setMessage}
      />
      <ToastMessage
        status={status}
        code={code}
        message={message}
        setStatus={setStatus}
        setCode={setCode}
        setMessage={setMessage}
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
          realCupom={realCupom}
          setRealCupom={setRealCupom}
          setStatus={setStatus}
          setCode={setCode}
          setMessage={setMessage}
        />
      ) : (
        <User
          data={data}
          costumer={costumer}
          setCostumer={setCostumer}
          filled={filled}
          setFilled={setFilled}
          setStatus={setStatus}
          setCode={setCode}
          setMessage={setMessage}
        />
      )}
    </>
  );
}

export default CartPage;
