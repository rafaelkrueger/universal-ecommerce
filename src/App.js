import "./App.css";
import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Api from "./Api";
import Products from "./Components/Products";
import Details from "./Components/Details";
import CartPage from "./Pages/CartPage";
import Purchase from "./Pages/Purchase";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
const apiip = require("apiip.net")("555e720f-072c-4174-ac6c-0a58e40933c8");

function App() {
  const [filled, setFilled] = useState(false);
  const [data, setData] = useState(null);
  const [cart, setCart] = useState([]);
  const [valortotal, setValorTotal] = useState(0);

  const [costumer, setCostumer] = useState({
    name: "",
    email: "",
    number: "",
    identification: "",
    cep: "",
    state: "",
    city: "",
    street: "",
    adressnumber: "",
  });

  return (
    <>
      <Router>
        <div>
          <Navbar
            data={data}
            cart={cart}
            setCart={setCart}
            costumer={costumer}
            setCostumer={setCostumer}
          />
          <Routes>
            <Route
              path="/:tamarinId"
              element={
                <Home
                  data={data}
                  setData={setData}
                  cart={cart}
                  setCart={setCart}
                  costumer={costumer}
                  setCostumer={setCostumer}
                />
              }
            />
            <Route
              path="/:tamarinId/produtos/:categoria"
              element={
                <Products
                  data={data}
                  setData={setData}
                  cart={cart}
                  setCart={setCart}
                  costumer={costumer}
                  setCostumer={setCostumer}
                />
              }
            />
            <Route
              path="/produto/:id/:tamarinId"
              element={
                <Details
                  data={data}
                  setData={setData}
                  cart={cart}
                  setCart={setCart}
                  costumer={costumer}
                  setCostumer={setCostumer}
                />
              }
            />
            <Route
              path="/:tamarinId/purchase"
              element={
                <Purchase
                  data={data}
                  setData={setData}
                  cart={cart}
                  setCart={setCart}
                  costumer={costumer}
                  setCostumer={setCostumer}
                  filled={filled}
                  setFilled={setFilled}
                  valortotal={valortotal}
                  setValorTotal={setValorTotal}
                />
              }
            />
            <Route
              path="/:tamarinId/cart"
              element={
                <CartPage
                  data={data}
                  setData={setData}
                  cart={cart}
                  setCart={setCart}
                  costumer={costumer}
                  setCostumer={setCostumer}
                  filled={filled}
                  setFilled={setFilled}
                  valortotal={valortotal}
                  setValorTotal={setValorTotal}
                />
              }
            />
          </Routes>
          <Footer data={data} />
        </div>
      </Router>
    </>
  );
}

export default App;
