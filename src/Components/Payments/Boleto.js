import React from "react";
import "../../App.css";

function Boleto() {
  return (
    <div className="boleto-component">
      <div className="header-commponent-image"></div>
      <div className="body-component">
        <h3>Boleto</h3>
        <p>Pagamento Boleto, Clique o botão para gerar o Seu Boleto</p>
        <button className="btn btn-large btn-success">Gerar QRcode</button>
      </div>
    </div>
  );
}

export default Boleto;
