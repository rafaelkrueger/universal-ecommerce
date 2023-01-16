import React from "react";
import Api from "../../Api";

function CardForm({ error, card, setCard }) {
  return (
    <>
      <div className="row">
        <div className="row">
          <div className="col">
            <div class="form-floating ">
              <input
                type="text"
                class="form-control"
                placeholder="9999 9999 9999 9999"
                onChange={(e) => {
                  setCard({ ...card, number: e.target.value });
                }}
              />
              <label for="floatingInputGroup2">9999 9999 9999 9999</label>
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
          <div className="col">
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
                  <input
                    type="text"
                    class="form-control"
                    onChange={(e) => {
                      setCard({ ...card, expYear: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="col">
                <div class="form-floating ">
                  <input
                    type="text"
                    class="form-control"
                    onChange={(e) => {
                      setCard({ ...card, cvc: e.target.value });
                    }}
                  />
                  <label for="floatingInputGroup2">CVC</label>
                </div>
              </div>
              <div class="form-floating ">
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => {
                    setCard({ ...card, cpf: e.target.value });
                  }}
                />
                <label for="floatingInputGroup2">CPF</label>
              </div>
            </div>
          </div>
          <br />
          <button
            className="btn btn-success"
            onClick={() => {
              console.log("Fui acessado!");
              Api.post("http://localhost:8080/card-payment", {
                number: card.number,
                expMonth: card.expMonth,
                expYear: card.expYear,
                cvc: card.cvc,
                amount: 20000,
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
