import "./App.css";
import { React, useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Api from "./Api";
import Products from "./Pages/Products";
const apiip = require("apiip.net")("555e720f-072c-4174-ac6c-0a58e40933c8");

function App() {
  useEffect(() => {
    Api.get("/empresa/6328516b9ad1ed58f92820b1")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // apiip
    //   .getLocation()
    //   .then((results) => console.log(results))
    //   .catch((error) => console.error(error));
  }, []);

  const [data, setData] = useState(null);

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/produtos" element={<Products data={data} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
