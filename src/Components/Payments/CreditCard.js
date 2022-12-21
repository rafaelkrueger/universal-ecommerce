import React from "react";
import Master from "../../images/payment/credito-mastercard-icon.png";
import Hiper from "../../images/payment/credito-hipercard-icon.png";
import Visa from "../../images/payment/visa-icon.png";
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
        <p>Pagamento pix, Clique o botão para gerar o QrCode</p>
        <button className="btn btn-large btn-success">Gerar QRcode</button>
      </div>
    </div>
  );
}

export default CreditCard;
