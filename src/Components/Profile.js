import React, { useState, useEffect } from "react";
import EmptyProfile from "../images/empty-profile.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Api from "../Api";
import "../App.css";

function Profile({ data, setData, costumer, setCostumer, cart, setCart }) {
  const [active, setActive] = useState(0);
  const [status, setStatus] = useState(false);
  const selectedOption = (option) => {
    for (let i = 0; i < option.length; i++) {
      if (option[i].selected)
        return (
          <>
            <td>{option[i].type}</td>
          </>
        );
    }
  };
  const getTrackCode = (id) => {
    let trackcode;
    data.pedidos.filter((pedido) => {
      if (pedido._id === id) {
        trackcode = pedido.trackcode;
      }
    });
    return <p>{trackcode}</p>;
  };

  let { tamarinSite } = useParams();
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
                    alt="profile-pic"
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
                  style={{
                    background: "rgba(0,0,0,0.07)",
                    marginLeft: "0.2%",
                  }}
                >
                  {active === 0 && Array.isArray(costumer.myPurchase)
                    ? costumer.myPurchase?.map((list) => {
                        if (!status) {
                          return (
                            <>
                              <div
                                className="row"
                                style={{ marginTop: "5%", marginBottom: "5%" }}
                                key={list[0]._id}
                              >
                                <div className="row">
                                  <div className="col">
                                    <p>ID da compra:</p>
                                    <p>{list[0]._id}</p>
                                  </div>
                                  <div className="col" style={{ width: "80%" }}>
                                    <p>
                                      Destino:{list[0].state} - {list[0].state}{" "}
                                      - {list[0].street} -{list[0].streetNumber}
                                    </p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <p>
                                      Cliente: {list[0].name} - {list[0].number}
                                    </p>
                                  </div>
                                  <div className="col">
                                    <p>
                                      Valor total de compra: R$
                                      {list[0].valorTotal.toFixed(2)}
                                    </p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <button className="btn btn-danger">
                                      Cancelar
                                    </button>
                                  </div>
                                  <div className="col">
                                    <button
                                      className="btn btn-success"
                                      onClick={() => {
                                        setStatus(true);
                                      }}
                                    >
                                      Mais Informações
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <hr />
                            </>
                          );
                        } else {
                          return (
                            <>
                              <div
                                className="row"
                                style={{ marginTop: "5%", marginBottom: "7%" }}
                                key={list[0]._id}
                              >
                                <div className="col">
                                  <p>
                                    <b>ID da compra:</b> {list[0]._id}
                                  </p>
                                  <table
                                    id="pedido-table"
                                    className="table table-striped table-light"
                                  >
                                    <thead>
                                      <tr>
                                        <th
                                          scope="col"
                                          id="pedido-th"
                                          style={{ width: "20%" }}
                                        >
                                          Imagem
                                        </th>
                                        <th
                                          scope="col"
                                          id="pedido-th"
                                          style={{
                                            maxWidth: "10%",
                                            minWidth: "10%",
                                          }}
                                        >
                                          ID do Produto
                                        </th>
                                        <th scope="col" id="pedido-th">
                                          Produto
                                        </th>
                                        <th scope="col" id="pedido-th">
                                          Categoria
                                        </th>
                                        <th scope="col" id="pedido-th">
                                          Opção
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody style={{ color: "black" }}>
                                      {data !== null
                                        ? list[0]?.products.map(
                                            (val, index) => {
                                              const row = [];
                                              for (
                                                let i = 0;
                                                i < val.length;
                                                i++
                                              ) {
                                                row.push(
                                                  <>
                                                    <tr>
                                                      <td>
                                                        <img
                                                          src={val[i].image}
                                                          style={{
                                                            width: "100%",
                                                          }}
                                                        />
                                                      </td>
                                                      <td
                                                        style={{
                                                          maxWidth: "10%",
                                                          minWidth: "10%",
                                                        }}
                                                      >
                                                        {val[i]._id.slice(
                                                          0,
                                                          20
                                                        )}
                                                        ...
                                                      </td>
                                                      <td>
                                                        {val[i].product.slice(
                                                          0,
                                                          20
                                                        )}
                                                        ...
                                                      </td>
                                                      <td>{val[i].category}</td>
                                                      <td
                                                        style={{
                                                          marginLeft: "5%",
                                                        }}
                                                      >
                                                        {selectedOption(
                                                          val[i].options
                                                        )}
                                                      </td>
                                                    </tr>
                                                  </>
                                                );
                                              }
                                              return row;
                                            }
                                          )
                                        : ""}
                                    </tbody>
                                  </table>
                                  <br />
                                </div>
                                <div className="col" style={{ width: "80%" }}>
                                  <p>
                                    <b>Codigo de rastreio:</b>
                                  </p>
                                  <p>
                                    {getTrackCode(list[0]._id)
                                      ? getTrackCode(list[0]._id)
                                      : "Estamos aguardando para enviar seu produto"}
                                  </p>
                                  {/* {getTrackCode(list[0]._id) ? (
                                    <button
                                      onClick={() => {
                                        Api.get(
                                          `https://localhost:8080/rastreio/${getTrackCode(
                                            list[0]._id
                                          )}`
                                        )
                                          .then((res) => {
                                            console.log(res);
                                          })
                                          .catch((err) => {
                                            console.log(err);
                                          });
                                      }}
                                      className="btn btn-warning"
                                    >
                                      Rastrear Objeto!
                                    </button>
                                   ) : ( "" )} */}
                                  <button
                                    onClick={() => {
                                      setStatus(false);
                                    }}
                                    className="btn btn-success"
                                  >
                                    Voltar
                                  </button>
                                </div>
                              </div>
                              <hr />
                            </>
                          );
                        }
                      })
                    : ""}
                  {active === 1 && Array.isArray(costumer.wishList)
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
                                    alt={list.product}
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
