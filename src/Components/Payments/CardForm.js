import React from "react";
import Api from "../../Api";

function CardForm({ error, card, setCard, valortotal }) {
  console.log(valortotal);
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
            <div class="form-floating ">
              <input
                type="text"
                class="form-control"
                placeholder="Nome Completo"
                onChange={(e) => {
                  setCard({ ...card, name: e.target.value });
                }}
              />
              <label for="floatingInputGroup2">Nome Completo</label>
            </div>
          </div>
          <div className="col"></div>
          <br />
          <div className="row">
            <div className="col">
              <div class="input-group ">
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => {
                    setCard({ ...card, expMonth: e.target.value });
                  }}
                />
                <label for="floatingInputGroup2">MM - Mês de Expiração</label>

                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => {
                    setCard({ ...card, expYear: e.target.value });
                  }}
                />
                <label for="floatingInputGroup2">YY - Ano de Expiração</label>
              </div>
            </div>
            <input
              type="text"
              class="form-control"
              onChange={(e) => {
                setCard({ ...card, cvc: e.target.value });
              }}
            />
            <label for="floatingInputGroup2">CVC</label>
            <input
              type="text"
              class="form-control"
              placeholder="CPF"
              onChange={(e) => {
                setCard({ ...card, cpf: e.target.value });
              }}
            />
            <label for="floatingInputGroup2">CPF</label>
          </div>
          <button
            className="btn btn-success"
            onClick={() => {
              console.log("Fui acessado!");
              Api.post("/card-payment", {
                number: card.number,
                expMonth: card.expMonth,
                expYear: card.expYear,
                cvc: card.cvc,
                amount: valortotal,
              })
                .then((res) => {
                  window.alert(res);
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
