import React from "react";
import "../App.css";
import ProductSlider from "./ProductSlider";
import SkeletonSlider from "./SkeletonSlider";

function Cards({ data, cart, setCart, costumer }) {
  return (
    <>
      <div id="section-style">
        <h1 id="title-section">Os Produtos Mais Recentes!</h1>
        <div class="row">
          {data === null ? (
            <>
              <SkeletonSlider />
            </>
          ) : (
            <>
              <ProductSlider
                data={data}
                cart={cart}
                setCart={setCart}
                size={3}
                costumer={costumer}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Cards;
