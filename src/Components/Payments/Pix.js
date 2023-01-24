import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PixImage from "../../images/payment/pix-checkout.png";
import Api from "../../Api";
import "../../App.css";

function Pix({ data, costumer, valortotal, cart }) {
  const [disabled, setDisabled] = useState(false);
  const [qrcode, setQrcode] = useState("");
  const [txid, setTxId] = useState("");
  const [status, setStatus] = useState(false);
  useEffect(() => {
    if (txid !== "") {
      setInterval(() => {
        Api.get(`https://tamarintec.herokuapp.com/pix-status/${txid}`).then(
          (res) => {
            if (res.data == "CONCLUIDA") {
              setStatus(true);
            }
          }
        );
      }, 5000);
    }
  }, [txid]);

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
                  setDisabled(true);
                  Api.post(`/pix`, {
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
                    streetNumber: costumer.adressNumber,
                    valor: valortotal,
                    products: [cart],
                  })
                    .then((res) => {
                      console.log(res.data);
                      setQrcode(res.data.qrcode);
                      setTxId(res.data.txid);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
                className="btn btn-large btn-success"
                disabled={disabled}
              >
                Gerar QRcode
              </button>
            </div>
          </div>
          <div className="col">
            {!status ? (
              <img src={qrcode} id="pix-qrcode" />
            ) : (
              <div className="pix-payed">
                <img src={data.logo} className="pix-payed-image" />
                <p>
                  O pagamento foi realizado com sucesso! {data.name} agradece
                  pela confiança e preferência!
                </p>
                <p className="pix-payed-text-2">
                  Clique no botão para mais informações sobre suas compras
                </p>

                <button className="btn btn-success">
                  <Link to={`/${data.site}/profile`}>Meu Perfil</Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Pix;
