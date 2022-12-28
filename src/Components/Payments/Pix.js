import React, { useState } from "react";
import PixImage from "../../images/payment/pix-checkout.png";
import Api from "../../Api";
import "../../App.css";

function Pix({ data, costumer, valortotal, cart }) {
  const [qrcode, setQrcode] = useState("");
  return (
    <>
      <div className="pix-component">
        <div className="row" id="pix-component-style">
          <div className="col">
            <div className="header-commponent-image">
              <img className="pay-icon" src={PixImage} />
            </div>
            <div className="body-component">
              <h3>
                Pix
                <span className="header-commponent-span">
                  Pague pelo app do banco
                </span>
              </h3>
              <p className="pix-text">
                Pagamento pix, Clique o botão para gerar o QrCode
              </p>
              <button
                onClick={() => {
                  Api.get(`/pix`, {
                    empresa: data._id,
                    name: costumer.name,
                    email: costumer.email,
                    cpf: costumer.identification,
                    password: costumer.password,
                    number: costumer.number,
                    cep: costumer.cep,
                    state: costumer.state,
                    city: costumer.city,
                    hood: costumer.hood,
                    street: costumer.street,
                    streetNumber: costumer.streetNumber,
                    value: valortotal.toFixed(2),
                    products: [cart],
                  })
                    .then((res) => {
                      setQrcode(res.data);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
                className="btn btn-large btn-success"
              >
                Gerar QRcode
              </button>
            </div>
          </div>
          <div className="col">
            <img src={qrcode} id="pix-qrcode" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Pix;
