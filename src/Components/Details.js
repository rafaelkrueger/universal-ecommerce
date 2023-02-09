import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Star1 from "../images/stars/star-1.png";
import Star2 from "../images/stars/star-2.png";
import Star3 from "../images/stars/star-3.png";
import Star4 from "../images/stars/star-4.png";
import Star5 from "../images/stars/star-5.png";
import Star6 from "../images/stars/star-6.png";
import EmptyProfile from "../images/empty-profile.png";
import Api from "../Api";
import ProductSlider from "./ProductSlider";
import { BsCart4, BsHeartFill } from "react-icons/bs";

function Details({ data, setData, cart, setCart, costumer }) {
  let { tamarinSite } = useParams();
  let { id } = useParams();
  const [screen, setScreen] = useState(window.outerWidth);
  const [shortDescription, setShortDescription] = useState(false);
  const [activeWishlist, setActiveWishlist] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [produto, setProduto] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);
  const [selected, setSelected] = useState({
    type: "",
    price: 0,
  });

  useEffect(() => {
    if (data === null) {
      console.log(null);
    } else {
      load();
    }
  });

  useEffect(() => {
    if (data === null) {
      Api.get(`/empresa/${tamarinSite}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // apiip
    //   .getLocation()
    //   .then((results) => console.log(results))
    //   .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const load = () => {
    const produto = data.produto.filter((list) => {
      return list._id === id;
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

  const firstLoadImage = () => {
    setTimeout(() => {
      if (firstLoad) {
        setSelectedImage(produto[0].image);
        setFirstLoad(false);
      }
    }, 0);
  };

  const descriptionResponsive = () => {
    if (screen > 600) {
      return produto[0].description;
    } else {
      return (
        <>
          <p
            onClick={() => {
              setShortDescription(!shortDescription);
            }}
          >
            {produto[0].description.slice(
              0,
              shortDescription ? produto[0].description.length : 200
            )}
            {shortDescription ? " - Ver menos" : "... Ver mais"}
          </p>
        </>
      );
    }
  };

  const [selectedImage, setSelectedImage] = useState("");

  return (
    <>
      <div
        className="detailed-product"
        style={{
          background:
            data !== null ? data.website.websiteDetailedBackground : "",
          color: data !== null ? data.website.websiteDetailedFont : "",
        }}
      >
        <div className="col" id="detailed-product-columns-1">
          <div className="row" id="detailed-responsive-images-row">
            <div className="col" id="detailed-product-image-col-2">
              <img
                alt="main image"
                className="detailed-product-image"
                src={selectedImage !== "" ? selectedImage : firstLoadImage()}
              />
            </div>
            <br />

            <div className="col" id="detailed-product-image-col-1">
              <img
                className="detailed-product-image-sub"
                alt={produto.length > 0 ? produto[0]?.product : "Loading..."}
                src={
                  produto.length > 0 &&
                  produto[0]?.subImages.subImage1 !== undefined
                    ? produto[0]?.subImages.subImage1
                    : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs"
                }
                onClick={() => {
                  setSelectedImage(produto[0]?.subImages.subImage1);
                }}
              />
              <img
                className="detailed-product-image-sub"
                alt={produto.length > 0 ? produto[0]?.product : "Loading..."}
                src={
                  produto.length > 0 &&
                  produto[0]?.subImages.subImage2 !== undefined
                    ? produto[0]?.subImages.subImage2
                    : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs"
                }
                onClick={() => {
                  setSelectedImage(produto[0]?.subImages.subImage2);
                }}
              />
              <img
                className="detailed-product-image-sub"
                alt={produto.length > 0 ? produto[0]?.product : "Loading..."}
                src={
                  produto.length > 0 && produto[0]?.image !== undefined
                    ? produto[0]?.image
                    : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs"
                }
                onClick={() => {
                  setSelectedImage(produto[0]?.image);
                }}
              />
              <img
                className="detailed-product-image-sub"
                alt={produto.length > 0 ? produto[0]?.product : "Loading..."}
                src={
                  produto.length > 0 &&
                  produto[0]?.subImages.subImage3 !== undefined
                    ? produto[0]?.subImages.subImage3
                    : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs"
                }
                onClick={() => {
                  setSelectedImage(produto[0]?.subImages.subImage3);
                }}
              />
              <img
                className="detailed-product-image-sub"
                alt={produto.length > 0 ? produto[0].product : "Loading..."}
                src={
                  produto.length > 0 &&
                  produto[0]?.subImages.subImage4 !== undefined
                    ? produto[0]?.subImages.subImage4
                    : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs"
                }
                onClick={() => {
                  setSelectedImage(produto[0].subImages.subImage4);
                }}
              />
            </div>
          </div>
        </div>
        <div className="col" id="detailed-product-columns-2">
          <h3
            id="detailed-product-title"
            style={{
              color: data !== null ? data.website.websiteDetailedTitleFont : "",
            }}
          >
            {produto.length > 0 ? produto[0].product : "Loading..."}
          </h3>
          <hr />
          <p
            id="detailed-product-description"
            style={{
              color:
                data !== null
                  ? data.website.websiteDetailedDescriptionFont
                  : "",
            }}
          >
            {produto.length > 0 ? descriptionResponsive() : "Loading..."}
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
                      style={{
                        background: data.website.websiteDetailedOptionsColor,
                        color: data.website.websiteDetailedOptionsFont,
                      }}
                      onClick={(e) => {
                        for (let i = 0; i < produto[0].options.length; i++) {
                          window.document.getElementById(
                            `detailed-product-card-` + i
                          ).style.boxShadow = "0px 0px 0px rgba(0,0,0,0.3)";
                          produto[0].options[i].selected = false;
                        }
                        window.document.getElementById(
                          `detailed-product-card-` + list.id
                        ).style.boxShadow = `1px 1px 20px ${data.website.websiteDetailedOptionsFont}`;
                        list.selected = true;
                        setSelected({
                          type: list.type,
                          price: list.price,
                        });
                      }}
                    >
                      <p id="detailed-product-type">
                        {list.type === undefined ? "" : list.type}
                      </p>
                    </div>
                  );
                })
              : "Loading..."}
          </div>
          <div className="detailed-product-quantity">
            <div className="row" id="details-sub-footers">
              <div className="col">
                <div className="col" id="detailed-heart-responsive">
                  <p
                    className="detailed-product-quantity-title"
                    style={{
                      color:
                        data !== null ? data.websiteDetailedHeartColor : "",
                    }}
                  >
                    Wishlist:
                  </p>
                  <BsHeartFill
                    style={{ marginLeft: "10%" }}
                    onClick={() => {
                      if (costumer.logged) {
                        Api.post(
                          "https://tamarintec.herokuapp.com/set-wishlist-costumer",
                          {
                            empresa: data._id,
                            email: costumer.email,
                            product: produto[0],
                          }
                        );

                        setActiveWishlist(1);
                      } else {
                        window.alert(
                          "Logue em sua conta para adicionar na wishlist"
                        );
                      }
                    }}
                    className="heart-wishlist"
                    color={
                      activeWishlist === 0 && data !== null
                        ? data.websiteDetailedHeartColor
                        : "red"
                    }
                  />
                </div>
              </div>
              <div className="col">
                <div className="detailed-product-quantity-quantities">
                  <p
                    className="detailed-product-quantity-title"
                    style={{
                      color: data !== null ? data.websiteDetailedFont : "white",
                    }}
                  >
                    Quantidade:
                  </p>
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
              </div>
            </div>
            <div className="row" id="details-sub-footers">
              <div className="col">
                <p className="detailed-product-quantity-title">Original:</p>
                <h5
                  className="detailed-original-value"
                  style={{
                    color:
                      data !== null ? data.websiteDetailedDiscountColor : "",
                  }}
                >
                  <s>
                    R$
                    {produto.length > 0
                      ? (
                          (produto[0].discount * changePrice()) / 100 +
                          changePrice()
                        ).toFixed(2)
                      : "Loading..."}
                  </s>
                </h5>
              </div>
              <div className="col">
                <p
                  className="detailed-product-quantity-title"
                  style={{
                    color: data !== null ? data.websiteDetailedPriceColor : "",
                  }}
                >
                  Total:
                </p>
                <h5>
                  R$
                  {produto.length > 0 ? changePrice().toFixed(2) : "Loading..."}
                </h5>
              </div>
            </div>
          </div>
          <div className="detailed-product-button">
            <div
              className="detailed-button-row"
              style={{
                background: data !== null ? data.websiteDetailedBackground : "",
              }}
            >
              <div className="col" id="detailed-button-col-1">
                <Link
                  to={`/${data === null ? "" : data.site}/cart`}
                  onClick={async () => {
                    await setCart([...cart, produto[0]]);
                  }}
                  id="detailed-product-button-element"
                  className="btn btn-large "
                  style={{
                    color:
                      data !== null
                        ? data.website.websiteDetailedButtonFontBuy
                        : "",
                    background:
                      data !== null
                        ? data.website.websiteDetailedButtonCart
                        : "",
                  }}
                >
                  COMPRAR
                </Link>
              </div>
              <div className="col" id="detailed-button-col-2">
                <button
                  className="btn"
                  style={{
                    background:
                      data !== null
                        ? data.website.websiteDetailedButtonCart
                        : "",
                    color:
                      data !== null
                        ? data.website.websiteDetailedButtonFontCart
                        : "",
                  }}
                >
                  <BsCart4
                    color={
                      data !== null
                        ? data.website.websiteDetailedButtonFontCart
                        : ""
                    }
                    onClick={async () => {
                      await setCart([...cart, produto[0]]);
                    }}
                  />
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="comments-section">
        {produto.length > 0 && produto[0].comments !== undefined
          ? produto[0].comments?.map((list) => {
              return (
                <>
                  <div
                    className="comment-card"
                    style={{
                      background:
                        data !== null
                          ? data.website.websiteDetailedBackground
                          : "",
                      color:
                        data !== null ? data.website.websiteDetailedFont : "",
                    }}
                  >
                    <div
                      className="col"
                      id="comment-card-left-side"
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <img
                        alt={`Comentário: ${list.title}`}
                        src={list.image !== "" ? list.image : EmptyProfile}
                        className="comment-profile-image"
                      />
                      <h6 style={{ marginTop: "30%" }}>{list.name}</h6>
                    </div>
                    <div className="col">
                      <div className="row">
                        <h5>
                          {list.title} -{" "}
                          <img
                            style={{ maxWidth: "35%", marginBottom: "5%" }}
                            src={Star6}
                            alt="star-icon"
                          />
                        </h5>
                        <hr />
                        <p>{list.comment}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          : ""}
      </div>
      <div className="row">
        <ProductSlider
          data={data}
          cart={cart}
          setCart={setCart}
          size={4}
          costumer={costumer}
        />
      </div>
    </>
  );
}

export default Details;
