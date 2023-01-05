import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
import ProductSlider from "./ProductSlider";
import Star1 from "../images/stars/star-1.png";
import Star2 from "../images/stars/star-2.png";
import Star3 from "../images/stars/star-3.png";
import Star4 from "../images/stars/star-4.png";
import Star5 from "../images/stars/star-5.png";
import Star6 from "../images/stars/star-6.png";
import Api from "../Api";
import { AiFillHeart } from "react-icons/ai";
import { BsCart4, BsHeartFill } from "react-icons/bs";

function Details({ data, setData, cart, setCart }) {
  let { tamarinId } = useParams();
  let { id } = useParams();

  useEffect(() => {
    if (data == null) {
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
    }
    // apiip
    //   .getLocation()
    //   .then((results) => console.log(results))
    //   .catch((error) => console.error(error));
  });

  const [selected, setSelected] = useState({
    type: "",
    price: 0,
  });
  const [quantity, setQuantity] = useState(1);
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    if (data == null) {
      console.log(null);
    } else {
      load();
    }
  });
  const load = () => {
    const produto = data.produto.filter((list) => {
      return list._id == id;
    });
    setProduto(produto);
  };

  const changePrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < quantity; i++) {
      totalPrice = totalPrice + parseFloat(data.produto[0].value);
      totalPrice = totalPrice + parseFloat(selected.price);
    }
    return totalPrice;
  };
  return (
    <>
      <div className="detailed-product">
        <div className="col" id="detailed-product-columns-1">
          <div className="row" id="detailed-responsive-images-row">
            <div className="col" id="detailed-product-image-col-1">
              <img
                className="detailed-product-image-sub"
                src={
                  produto.length > 0 &&
                  produto[0].subImages.subImage1 != undefined
                    ? produto[0].subImages.subImage1
                    : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs"
                }
              />
              <img
                className="detailed-product-image-sub"
                src={
                  produto.length > 0 &&
                  produto[0].subImages.subImage2 != undefined
                    ? produto[0].subImages.subImage2
                    : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs"
                }
              />
              <img
                className="detailed-product-image-sub"
                src={
                  produto.length > 0 &&
                  produto[0].subImages.subImage3 != undefined
                    ? produto[0].subImages.subImage3
                    : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs"
                }
              />
              <img
                className="detailed-product-image-sub"
                src={
                  produto.length > 0 &&
                  produto[0].subImages.subImage4 != undefined
                    ? produto[0].subImages.subImage4
                    : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs"
                }
              />
            </div>
            <div className="col" id="detailed-product-image-col-2">
              <img
                className="detailed-product-image"
                src={produto.length > 0 ? produto[0].image : "Loading..."}
              />
            </div>
          </div>
        </div>
        <div className="col" id="detailed-product-columns-2">
          <h3 id="detailed-product-title">
            {produto.length > 0 ? produto[0].product : "Loading..."}
          </h3>
          <hr />
          <p id="detailed-product-description">
            {produto.length > 0 ? produto[0].description : "Loading..."}
          </p>
          <div className="detailed-product-evaluation">
            <div className="detailed-product-evaluation-image">
              <img
                src={Star6}
                className="detailed-product-evaluation-image-element"
              />
            </div>
            <div className="detailed-product-evaluation-quantity">
              <p>Produtos Vendidos: 20 </p>
            </div>
          </div>
          <br />
          <h6 id="detailed-options-title">Opções:</h6>
          <div className="detailed-product-options" style={{ color: "black" }}>
            {data !== null && produto[0] !== undefined
              ? produto[0].options.map((list) => {
                  return (
                    <div
                      className="detailed-product-card"
                      id={`detailed-product-card-` + list.id}
                      style={{ color: "black" }}
                      onClick={(e) => {
                        for (let i = 0; i < produto[0].options.length; i++) {
                          window.document.getElementById(
                            `detailed-product-card-` + i
                          ).style.boxShadow = "0px 0px 0px rgba(0,0,0,0.3)";
                          produto[0].options[i].selected = false;
                        }
                        window.document.getElementById(
                          `detailed-product-card-` + list.id
                        ).style.boxShadow = "1px 1px 20px rgba(0,0,0,0.3)";
                        list.selected = true;
                        setSelected({
                          type: list.type,
                          price: list.price,
                        });
                      }}
                    >
                      <p id="detailed-product-type">
                        {list.type == undefined ? "" : list.type}
                      </p>
                    </div>
                  );
                })
              : "Loading..."}
          </div>
          <div className="detailed-product-quantity">
            <div className="detailed-product-quantity-quantities">
              <p className="detailed-product-quantity-title">Quantidade:</p>
              <input
                type="number"
                className="detailed-product-quantity-quantities-input"
                min={1}
                max={10}
                placeholder="1"
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
            </div>
            <div className="detailed-product-quantity-price">
              <div className="row">
                <div className="col">
                  <p className="detailed-product-quantity-title">
                    Valor Original:
                  </p>
                  <h5 className="detailed-original-value">
                    <s>
                      R$
                      {produto.length > 0
                        ? (1.3 * changePrice()).toFixed(2)
                        : "Loading..."}
                    </s>
                  </h5>
                </div>
                <div className="col">
                  <p className="detailed-product-quantity-title">
                    Valor Total:
                  </p>
                  <h5>
                    R$
                    {produto.length > 0
                      ? changePrice().toFixed(2)
                      : "Loading..."}
                  </h5>
                </div>
                <div className="col">
                  <p className="detailed-product-quantity-title">
                    Add wishlist:
                  </p>
                  <BsHeartFill />
                </div>
              </div>
            </div>
          </div>
          <div className="detailed-product-button">
            <div className="detailed-button-row">
              <div className="col" id="detailed-button-col-1">
                <Link
                  to={`/${data == null ? "" : data._id}/cart`}
                  onClick={async () => {
                    await setCart([...cart, produto[0]]);
                  }}
                  id="detailed-product-button-element"
                  className="btn btn-large btn-success"
                >
                  COMPRAR
                </Link>
              </div>
              <div className="col" id="detailed-button-col-2">
                <button className="btn btn-success">
                  <BsCart4
                    onClick={() => {
                      setCart([...cart, produto[0]]);
                    }}
                  />
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="similar-products">
          <div className="similar-products-item">
            <ProductSlider data={data} cart={cart} setCart={setCart} size={4} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
