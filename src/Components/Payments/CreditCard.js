import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CardForm from "./CardForm";
import Master from "../../images/payment/credito-mastercard-icon.png";
import Hiper from "../../images/payment/credito-hipercard-icon.png";
import Visa from "../../images/payment/visa-icon.png";
import "../../App.css";
import Api from "../../Api";

function CreditCard() {
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
    <div className="card-component">
      <div className="header-commponent-image">
        <img src={Visa} />
        <img src={Master} />
        <img src={Hiper} />
      </div>
      <div className="body-component">
        <h4>Cartão de Crédito/Débito</h4>
        <span className="header-commponent-span">Pague pelo seu cartão</span>
        <Elements stripe={promise}>
          <CardForm card={card} setCard={setCard} />
        </Elements>
      </div>
    </div>
  );
}

export default CreditCard;
