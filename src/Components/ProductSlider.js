import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductSlider({ data, cart, setCart, size }) {
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
            ? data.produto.map((list, key) => {
                return (
                  <>
                    <SwiperSlide key={list._id}>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/produto/${list._id}/${data._id}`}
                      >
                        <div className="card-swiper" id="card-swiper">
                          <img
                            src={list.image}
                            className="card-swiper-image"
                            id="product-slider-swiper-image"
                          />
                          <div className="card-swiper-footer">
                            <h5 className="card-swiper-title">
                              {list.product}
                            </h5>
                            <hr />
                            <div className="row">
                              <div className="col">
                                <h5
                                  className="card-swiper-price"
                                  style={{ color: "red", fontSize: "20pt" }}
                                >
                                  <s>R${(list.value * off).toFixed(2)}</s>
                                </h5>
                                <h5
                                  className="card-swiper-price"
                                  style={{ color: "green", fontSize: "14pt" }}
                                >
                                  R${list.value.toFixed(2)}
                                </h5>
                              </div>
                              <div className="col">
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setCart([...cart, list]);
                                  }}
                                  className="btn btn-large btn-success"
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
            : ""}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductSlider;
