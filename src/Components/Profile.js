import React, { useState, useEffect } from "react";
import EmptyProfile from "../images/empty-profile.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Api from "../Api";
import "../App.css";

function Profile({ data, setData, costumer, setCostumer, cart, setCart }) {
  const [active, setActive] = useState(0);
  let { tamarinSite } = useParams();
  console.log(costumer);
  useEffect(() => {
    if (data == null) {
      Api.get(`/empresa/${tamarinSite}`)
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
  return (
    <>
      <div className="profile">
        <div classname="container-fuild">
          <div className="row" id="responsive-profile">
            <div className="col" id="profile-infos">
              <h3>Suas Informações</h3>
              <div className="row">
                <div className="col">
                  <img
                    src={
                      costumer.profileImage !== "" &&
                      costumer.profileImage !== "empty"
                        ? costumer.profileImage
                        : EmptyProfile
                    }
                    id="profile-infos-image"
                  />
                </div>
                <div className="col">
                  <div className="col">
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        value={costumer.name}
                        placeholder="Seu Nome"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        value={costumer.email}
                        placeholder="Seu Email"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        value={costumer.number}
                        placeholder="Seu Número"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <h4>Suas Informações extra</h4>
                <br />
                <br />
                <br />
                <div className="col">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      value={costumer.cep}
                      placeholder="Seu CEP"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      value={costumer.state}
                      placeholder="Seu Estado"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      value={costumer.city}
                      placeholder="Sua cidade"
                    />
                  </div>
                </div>
                <div className="col">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      value={costumer.streetNumber}
                      placeholder="Número da casa"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      value={costumer.identification}
                      placeholder="Seu CPF"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <button
                      className="btn btn-success"
                      style={{ width: "100%" }}
                    >
                      Alterar Informações
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div id="profile-products" className="row">
                <div
                  className="col"
                  style={{
                    background: active === 0 ? "#141a66" : "rgba(0,0,0,0.045)",
                    color: active === 0 ? "white" : "black",
                    borderTopLeftRadius: "20px",
                  }}
                  onClick={() => {
                    setActive(0);
                  }}
                >
                  <p>Minhas Compras</p>
                </div>
                <div
                  className="col"
                  style={{
                    background: active === 1 ? "#141a66" : "rgba(0,0,0,0.045)",
                    color: active === 1 ? "white" : "black",
                    borderTopRightRadius: "20px",
                  }}
                  onClick={() => {
                    setActive(1);
                  }}
                >
                  <p>Wishlist</p>
                </div>
                <div
                  className="row"
                  style={{ background: "rgba(0,0,0,0.07)", marginLeft: "0.2%" }}
                >
                  {active == 0 && typeof costumer.myPurchase == Array
                    ? costumer.myPurchase.map((list) => {
                        return (
                          <>
                            <div className="row" style={{ marginTop: "10%" }}>
                              <img src={list.image} />
                              <p>{list.product}</p>
                              <p>{list.value}</p>
                              <p>{list.product}</p>
                            </div>
                          </>
                        );
                      })
                    : ""}
                  {active == 1
                    ? costumer.wishList?.map((list) => {
                        return (
                          <>
                            <Link
                              id="link-to-details"
                              style={{ textDecoration: "none", color: "black" }}
                              to={`/produto/${list._id}/${data.site}`}
                            >
                              <div
                                className="row"
                                style={{ marginTop: "10%", marginLeft: "4%" }}
                              >
                                <hr />
                                <div className="col">
                                  <img
                                    src={list.image}
                                    style={{
                                      maxWidth: "110%",
                                    }}
                                  />
                                </div>
                                <div className="col">
                                  <p>{list.product.slice(0, 4)}...</p>
                                </div>
                                <div className="col">
                                  <p>R${list.value}</p>
                                </div>
                                <div className="col">
                                  <button
                                    className="btn btn-large btn-danger"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      Api.put("/remove-wishlist-costumer", {
                                        empresa: data._id,
                                        email: costumer.email,
                                        product: list._id,
                                      });
                                    }}
                                  >
                                    Remover
                                  </button>
                                </div>
                              </div>
                            </Link>
                          </>
                        );
                      })
                    : ""}
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
