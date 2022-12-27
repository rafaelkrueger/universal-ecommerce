import React from "react";
import "../../App.css";
import Boletoimg from "../../images/payment/boleto-icon.png";
import Api from "../../Api";

function Boleto({ costumer, valorTotal }) {
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
            Api.post("http://localhost:8080/boleto", {
              name: costumer.name,
              email: costumer.email,
              number: costumer.number,
              cpf: costumer.identification,
            })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
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
