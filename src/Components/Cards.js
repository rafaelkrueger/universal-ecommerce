import React from "react";
import "../App.css";

function Cards({ data }) {
  return (
    <>
      <div id="section-style">
        <h1 id="title-section">Os Mais Vendidos!</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            {data == null ? (
              <>
                <h3 style={{ textAlign: "center" }}>
                  Sem Produtos Disponíveis no momento
                </h3>
                <hr />
              </>
            ) : (
              data.produto.map((list) => {
                <div class="card" id="product-section-card">
                  <div class="product-list-style">
                    <a style={{ textDecoration: "none" }}>
                      <img src={list.image} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <div class="card-body-description-style">
                          <h4 id="section-title-product" class="card-title">
                            {list.product}
                          </h4>
                          <hr />
                          <div
                            class="row"
                            style={{ display: " flex", flexDirection: "row" }}
                          >
                            <div class="col" id="specific-product-button">
                              <div class="col">
                                <div class="row">
                                  <p
                                    class="card-title"
                                    style={{ color: "red", fontSize: "20px" }}
                                  >
                                    <s>229.00R$</s>
                                  </p>
                                </div>
                                <div class="row">
                                  <p class="card-title">
                                    R${list.value.toFixed(2)}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="col" id="specific-product-button">
                              <button type="button" class="btn btn-dark">
                                Adicionar ao Carrinho
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>;
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
