import React from "react";
import Master from "../../images/payment/credito-mastercard-icon.png";
import Hiper from "../../images/payment/credito-hipercard-icon.png";
import Visa from "../../images/payment/visa-icon.png";
import { CardElement } from "@stripe/react-stripe-js";
import "../../App.css";

function CreditCard() {
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
        <button className="btn btn-large btn-success">
          Continuar Pagamento
        </button>
      </div>
    </div>
  );
}

export default CreditCard;
