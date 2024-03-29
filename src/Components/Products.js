import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { BsFilterCircleFill, BsFilterCircle } from "react-icons/bs";
import Api from "../Api";
import SkeletonProducts from "./SkeletonProducts";

function Products({ data, setData, cart, setCart, costumer }) {
  let { tamarinSite } = useParams();
  let { categoria } = useParams();
  const [activeWishlist, setActiveWishlist] = useState(0);
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
  const [filtering, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [screen, setScreen] = useState(window.outerWidth);
  const [filterActive, setFilterActive] = useState(false);

  return (
    <>
      <div className="poducts-style">
        {screen < 600 && !filterActive ? (
          <BsFilterCircle
            color="black"
            onClick={() => {
              setFilterActive(!filterActive);
            }}
            style={{
              position: "absolute",
              top: "130px",
              display: screen > 600 ? "none" : "block",
            }}
          />
        ) : (
          <BsFilterCircleFill
            color="black"
            onClick={() => {
              setFilterActive(!filterActive);
            }}
            style={{
              position: "absolute",
              top: "130px",
              display: screen > 600 ? "none" : "block",
            }}
          />
        )}

        <div
          className="col"
          id="filter-product-style"
          style={{
            display: screen > 600 || filterActive ? "block" : "none",
          }}
        >
          <div className="col" id="filter-product-search">
            <div className="filter-product-search-input">
              <h3 className="filter-product-title" style={{ color: "black" }}>
                <AiOutlineSearch
                  className="filter-product-icons"
                  color="black"
                />
                Pesquisa
              </h3>
              <hr />
              <input
                className="filter-product-input"
                type="text"
                placeholder="Time, país, liga"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
            <div className="filter-product-search-input">
              <h3 className="filter-product-title" style={{ color: "black" }}>
                <BiCategoryAlt className="filter-product-icons" color="black" />
                Categorias
              </h3>
              <hr />
              <div className="filter-list-categories">
                {data === null
                  ? ""
                  : data.categorias.map((list) => {
                      return (
                        <>
                          <div class="input-group mb-3">
                            <div
                              class="input-group-text"
                              style={{ width: "100%" }}
                            >
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value={list}
                                onChange={(e) => {
                                  let permission = true;
                                  let index;
                                  for (let i = 0; i < filtering.length; i++) {
                                    if (filtering[i] === e.target.value) {
                                      permission = false;
                                      index = i;
                                    }
                                  }
                                  if (permission) {
                                    setFilter([...filtering, e.target.value]);
                                  } else {
                                    filtering.splice(index, 1);
                                  }
                                }}
                                aria-label="Checkbox for following text input"
                              />
                              <p className="filter-list-categories-element">
                                {list}
                              </p>
                            </div>
                          </div>
                        </>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>

        <div
          class="card-deck"
          style={{
            flexWrap: "wrap",
            display: screen > 600 || !filterActive ? "flex" : "none",
          }}
        >
          {data === null ? (
            <>
              <SkeletonProducts />
            </>
          ) : (
            data.produto

              .filter((list) => {
                if (
                  filtering.length !== 0 ||
                  (categoria &&
                    categoria !== "all" &&
                    categoria !== "Categorias")
                ) {
                  return (
                    filtering === list.category || categoria === list.category
                  );
                } else {
                  return list;
                }
              })
              .filter((list) => {
                if (search !== "") {
                  if (list.product.includes(search)) return list.product;
                } else {
                  return list;
                }
              })
              .map((list) => {
                return (
                  <>
                    <div
                      className={`card-element-${
                        window.outerWidth > 600 ? "product" : "responsive"
                      }`}
                      style={{
                        background: data.website.websiteCardBackgroundColor,
                      }}
                    >
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                        to={`/produto/${list._id}/${data.site}`}
                      >
                        <div className="wishlist-products-part">
                          <AiFillHeart
                            color={data.website.websiteHeartTagColor}
                            size={20}
                            onClick={() => {
                              if (costumer.logged) {
                                Api.post(
                                  "https://tamarintec.herokuapp.com/set-wishlist-costumer",
                                  {
                                    empresa: data._id,
                                    email: costumer.email,
                                    product: list,
                                  }
                                );
                              } else {
                                window.alert(
                                  "Entre em seu perfil para criar wishlist"
                                );
                              }
                            }}
                          />
                        </div>
                        <div
                          className="discount-products-part"
                          style={{
                            background: data.website.websiteHeartTagColor,
                            color: data.website.websiteHeartColor,
                          }}
                        >
                          <p>{list.discount}%</p>
                        </div>

                        <img
                          id="product-image"
                          src={list.image}
                          onMouseOver={(e) => {
                            e.target.src = list.subImages.subImage1;
                          }}
                          onMouseLeave={(e) => {
                            e.target.src = list.image;
                          }}
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <br />
                          <h6
                            id="card-title-style"
                            style={{
                              color: data.website.websiteCardFontColor,
                            }}
                          >
                            {list.produto}
                          </h6>
                          <p
                            class="card-text"
                            style={{
                              color: data.website.websiteCardFontColor,
                            }}
                          >
                            {list.product.slice(0, 30)}...
                          </p>
                          <hr />
                          <div class="card-text" id="card-text-product">
                            <div className="col">
                              <p
                                className="value-product-card"
                                style={{
                                  color: data.website.websiteDiscountColor,
                                  fontSize: "18pt",
                                }}
                              >
                                <s>
                                  R$
                                  {(
                                    (list.value * list.discount) / 100 +
                                    list.value
                                  ).toFixed(2)}
                                </s>
                              </p>

                              <p
                                className="value-product-card"
                                style={{
                                  color: data.website.websiteCardFontColor,
                                  fontSize: "12pt",
                                }}
                              >
                                R${list.value.toFixed(2)}
                              </p>
                            </div>
                            <button
                              style={{
                                color: data.website.websiteButtonFont,
                                background: data.website.websiteButton,
                              }}
                              className="btn btn-large"
                              onClick={(e) => {
                                e.preventDefault();
                                setCart([...cart, list]);
                              }}
                            >
                              Adicionar
                            </button>
                          </div>
                          <br />
                          <div className="card-category-text">
                            <p className="card-category-text-p">
                              <BiCategoryAlt
                                color="black"
                                style={{ marginRight: "5%" }}
                              />
                              {list.category}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </>
                );
              })
              .reverse()
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
