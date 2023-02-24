import React, { useState, useEffect } from "react";
import Pix from "./Payments/Pix";
import CreditCard from "./Payments/CreditCard";
import Boleto from "./Payments/Boleto";

function Payment({
  data,
  costumer,
  setCostumer,
  cart,
  filled,
  setFilled,
  valortotal,
  setValorTotal,
  realCupom,
  setRealCupom,
  setStatus,
  setCode,
  setMessage,
}) {
  const [chosen, setChosen] = useState(1);

  return (
    <div className="purchase">
      <div className="row" id="purchase-join-pages">
        <div className="col" id="select-payment">
          <div
            className="back-arrow"
            onClick={() => {
              setFilled(!filled);
            }}
          >
            <p className="back-arrow-button">Voltar as Informações</p>
          </div>
          <div className="purchase-options">
            <div className="purchase-options-element">
              <div
                class="input-group-text"
                id="purchase-options-element-input"
                style={{ width: "100%" }}
              >
                <input
                  class="form-check-input mt-0"
                  type="radio"
                  aria-label="Checkbox for following text input"
                  name="purchase"
                  onChange={() => {
                    setChosen(1);
                  }}
                />
                <p style={{ marginTop: "2.5%", marginLeft: "2.6%" }}>Pix</p>
              </div>
            </div>
            <div className="purchase-options-element">
              <div
                class="input-group-text"
                id="purchase-options-element-input"
                style={{ width: "100%" }}
              >
                <input
                  class="form-check-input mt-0"
                  type="radio"
                  aria-label="Checkbox for following text input"
                  name="purchase"
                  onChange={() => {
                    setChosen(2);
                  }}
                />
                <p style={{ marginTop: "2.5%", marginLeft: "2.6%" }}>
                  Cartão de Crédito/Débito
                </p>
              </div>
            </div>

            <div className="purchase-options-element">
              <div
                class="input-group-text"
                id="purchase-options-element-input"
                style={{ width: "100%" }}
              >
                <input
                  class="form-check-input mt-0"
                  type="radio"
                  aria-label="Checkbox for following text input"
                  name="purchase"
                  onChange={() => {
                    setChosen(3);
                  }}
                />
                <p style={{ marginTop: "2.5%", marginLeft: "2.6%" }}>Boleto</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="purchase-selected">
            {chosen === 1 ? (
              <Pix
                data={data}
                costumer={costumer}
                valortotal={valortotal}
                cart={cart}
                realCupom={realCupom}
                setRealCupom={setRealCupom}
                setStatus={setStatus}
                setCode={setCode}
                setMessage={setMessage}
              />
            ) : (
              ""
            )}
            {chosen === 2 ? (
              <CreditCard
                data={data}
                costumer={costumer}
                valortotal={valortotal}
                cart={cart}
                realCupom={realCupom}
                setRealCupom={setRealCupom}
                setStatus={setStatus}
                setCode={setCode}
                setMessage={setMessage}
              />
            ) : (
              ""
            )}
            {chosen === 3 ? (
              <Boleto
                data={data}
                costumer={costumer}
                valortotal={valortotal}
                cart={cart}
                realCupom={realCupom}
                setRealCupom={setRealCupom}
                setStatus={setStatus}
                setCode={setCode}
                setMessage={setMessage}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
