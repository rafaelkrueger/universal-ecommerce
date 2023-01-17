import React, { useState, useEffect } from "react";
import "../../App.css";
import Boletoimg from "../../images/payment/boleto-icon.png";
import Api from "../../Api";

function Boleto({ data, costumer, valorTotal, cart }) {
  const [status, setStatus] = useState(false);
  console.log(valorTotal);
  return (
    <div className="boleto-component">
      <div className="header-commponent-image">
        <img className="pay-icon" src={Boletoimg} />
        <h3>
          Boleto
          <span className="header-commponent-span">
            Pague pelo app do banco
          </span>
        </h3>
      </div>
      <div className="body-component">
        <p>
          O Boleto Será gerado e enviado para o email que você informou com o
          valor e informações gerais do produto
        </p>
        <p className="text-boleto-warning">
          Utilize o app do banco para pagar, ou a lotérica mais proxima. O
          pagamento será aprovado em alguns dias úteis
        </p>
        <button
          onClick={() => {
            Api.post("/boleto", {
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
              valor: valorTotal,
              products: cart,
            });
            window.alert("Boleto enviado em seu email!");
          }}
          className="btn btn-large btn-success"
        >
          Gerar Boleto
        </button>
      </div>
    </div>
  );
}

export default Boleto;
