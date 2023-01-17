import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CardForm from "./CardForm";
import Master from "../../images/payment/credito-mastercard-icon.png";
import Hiper from "../../images/payment/credito-hipercard-icon.png";
import Visa from "../../images/payment/visa-icon.png";
import { Link } from "react-router-dom";
import "../../App.css";
import Api from "../../Api";

function CreditCard({ data, costumer, valortotal, cart }) {
  const [status, setStatus] = useState(false);
  const [card, setCard] = useState({
    number: "",
    expMonth: "",
    expYear: "",
    cvc: "",
    name: "",
    cpf: "",
  });
  const promise = loadStripe(
    "pk_live_51LzOmQEkjDX4g4TkJU6CEnKN1AGYeieNmmypnnYkQh3rd2eLMvfYsGTwuwJMtIhrPDdWibGlIIXBMdpUnKcKOrKP00TH0anRih"
  );
  return (
    <>
      <div className="card-component-card">
        {!status ? (
          <>
            <div className="header-commponent-image">
              <br />
              <br />
              <img src={Visa} />
              <img src={Master} />
              <img src={Hiper} />
            </div>
            <div className="body-component">
              <h4>Cartão de Crédito/Débito</h4>
              <br />
              <Elements stripe={promise}>
                <CardForm
                  cata={data}
                  costumer={costumer}
                  card={card}
                  setCard={setCard}
                  valortotal={valortotal}
                  cart={cart}
                  status={status}
                  setStatus={setStatus}
                />
              </Elements>
            </div>
          </>
        ) : (
          <div className="pix-payed">
            <img
              src={data.logo}
              className="pix-payed-image"
              style={{ maxWidth: "50%", borderRadius: 20, marginLeft: "20%" }}
            />
            <p>
              O pagamento foi realizado com sucesso! {data.name} agradece pela
              confiança e preferência!
            </p>
            <p className="pix-payed-text-2">
              Clique no botão para mais informações sobre suas compras
            </p>

            <button className="btn btn-success">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/${data.site}/profile`}
              >
                Meu Perfil
              </Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CreditCard;
