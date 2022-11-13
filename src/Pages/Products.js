import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Products({ data }) {
  return (
    <>
      <Navbar data={data} />
      <div className="poducts-style">
        <div className="col" id="filter-product-style">
          <div className="col" id="filter-product-search">
            <div className="filter-product-search-input">
              <h3 className="filter-product-title">Pesquisa</h3>
              <hr />
              <input
                className="filter-product-input"
                type="text"
                placeholder="Time, país, liga"
              />
            </div>
            <div className="filter-product-search-input">
              <h3 className="filter-product-title">Categorias</h3>
              <hr />
              <input
                className="filter-product-input"
                type="text"
                placeholder="Time, país, liga"
              />
            </div>
          </div>
        </div>
        <div class="card-deck">
          {data == null
            ? ""
            : data.produto.map((list) => {
                return (
                  <>
                    <div class="card" id="card-element-product">
                      <img
                        className="product-image"
                        src={list.image}
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 id="card-title-style">{list.produto}</h5>
                        <p class="card-text"> {list.description} </p>
                        <hr />
                        <div class="card-text" id="card-text-product">
                          <p className="value-product-card">
                            R${list.value.toFixed(2)}
                          </p>
                          <button className="btn btn-success">Adicionar</button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
        </div>
      </div>
      <Footer data={data} />
    </>
  );
}

export default Products;
