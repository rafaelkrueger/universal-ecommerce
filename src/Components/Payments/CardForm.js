import React, { useState, useEffect } from "react";
import Api from "../../Api";
import Cards from "react-credit-cards";

function CardForm({
  data,
  costumer,
  error,
  card,
  setCard,
  valortotal,
  cart,
  status,
  setStatus,
}) {
  return (
    <>
      <div className="row">
        <div className="row">
          <div className="col">
            <div class="form-floating ">
              <input
                type="text"
                class="form-control"
                onChange={(e) => {
                  setCard({ ...card, number: e.target.value });
                }}
              />
              <label for="floatingInputGroup2">Número do Cartão</label>
            </div>
            <br />
            <br />
            <div class="form-floating ">
              <input
                type="text"
                class="form-control"
                onChange={(e) => {
                  setCard({ ...card, name: e.target.value });
                }}
              />
              <label for="floatingInputGroup2">Nome Completo</label>
            </div>
          </div>
          <div className="col">
            <div className="col">
              <div class="input-group ">
                <input
                  type="text"
                  class="form-control"
                  placeholder="MM"
                  onChange={(e) => {
                    setCard({ ...card, expMonth: e.target.value });
                  }}
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="YY"
                  onChange={(e) => {
                    setCard({ ...card, expYear: e.target.value });
                  }}
                />
              </div>
            </div>
            <br />
            <input
              type="text"
              class="form-control"
              placeholder="Codigo de Segurança"
              onChange={(e) => {
                setCard({ ...card, cvc: e.target.value });
              }}
            />
            <br />
            <input
              type="text"
              class="form-control"
              placeholder="CPF"
              onChange={(e) => {
                setCard({ ...card, cpf: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: "5%" }}>
          <br />
          <button
            className="btn btn-success"
            onClick={() => {
              console.log("Fui acessado!");
              Api.post("/card-payment", {
                empresa: data._id,
                name: costumer.name,
                email: costumer.email,
                cpf: costumer.identification,
                password: costumer.password,
                number: costumer.number,
                cep: costumer.cep,
                state: costumer.state,
                city: costumer.city,
                street: costumer.street,
                streetNumber: costumer.adressnumber,
                products: cart,
                cardNumber: card.number,
                expMonth: card.expMonth,
                expYear: card.expYear,
                cvc: card.cvc,
                amount: valortotal,
              })
                .then((res) => {
                  setStatus(true);
                })
                .catch((err) => {
                  window.alert(err);
                });
            }}
          >
            Realizar Pagamento!
          </button>
        </div>
      </div>
    </>
  );
}

export default CardForm;
