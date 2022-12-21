import React from "react";
import "../App.css";
import ProductSlider from "./ProductSlider";

function Cards({ data, cart, setCart }) {
  return (
    <>
      <div id="section-style">
        <h1 id="title-section">Os Mais Vendidos!</h1>
        <div class="row">
          {data == null ? (
            <>
              <h3 style={{ textAlign: "center" }}>
                Sem Produtos Disponíveis no momento
              </h3>
              <hr />
            </>
          ) : (
            <ProductSlider data={data} cart={cart} setCart={setCart} size={3} />
          )}
        </div>
      </div>
    </>
  );
}

export default Cards;
