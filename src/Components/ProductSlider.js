import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import Api from "../Api";

function ProductSlider({ data, cart, setCart, size, costumer }) {
  const [off, setOff] = useState(1.3);
  return (
    <div className="product-slider">
      <div
        className="container py-4 px-4 justify-content-center "
        id="product-slider-swiper"
      >
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className="mySwiper"
          slidesPerView={size}
          spaceBetween={50}
        >
          {data != null
            ? data.produto
                .map((list, key) => {
                  return (
                    <>
                      <SwiperSlide key={list._id}>
                        <Link
                          id="link-to-details"
                          style={{ textDecoration: "none", color: "black" }}
                          to={`/produto/${list._id}/${data.site}`}
                        >
                          <div
                            className="card-swiper"
                            id="card-swiper"
                            style={{
                              background:
                                data.website.websiteCardBackgroundColor,
                            }}
                          >
                            <div
                              className="wishlist-slider-part"
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
                            >
                              <AiFillHeart
                                color={data.website.websiteHeartTagColor}
                                size={20}
                              />
                            </div>
                            <div
                              className="discount-slider-part"
                              style={{
                                background: data.website.websiteHeartTagColor,
                                color: data.website.websiteHeartColor,
                              }}
                            >
                              <p>{list.discount}%</p>
                            </div>

                            <img
                              src={list.image}
                              className="card-swiper-image"
                              id="product-slider-swiper-image"
                            />
                            <div className="card-swiper-footer">
                              <h5
                                className="card-swiper-title"
                                style={{
                                  color: data.website.websiteCardFontColor,
                                }}
                              >
                                {list.product}
                              </h5>
                              <hr />
                              <div className="row">
                                <div className="col">
                                  <h5
                                    className="card-swiper-price"
                                    style={{
                                      color: data.website.websiteDiscountColor,
                                      fontSize: "20pt",
                                    }}
                                  >
                                    <s>
                                      R$
                                      {(
                                        (list.value * list.discount) / 100 +
                                        list.value
                                      ).toFixed(2)}
                                    </s>
                                  </h5>
                                  <h5
                                    className="card-swiper-price"
                                    style={{
                                      color: data.website.websiteCardFontColor,
                                      fontSize: "14pt",
                                    }}
                                  >
                                    R${list.value.toFixed(2)}
                                  </h5>
                                </div>
                                <div className="col">
                                  <button
                                    style={{
                                      color: data.website.websiteButtonFont,
                                      background: data.website.websiteButton,
                                    }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setCart([...cart, list]);
                                    }}
                                    className="btn btn-large"
                                  >
                                    Adicionar
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    </>
                  );
                })
                .reverse()
            : ""}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductSlider;
