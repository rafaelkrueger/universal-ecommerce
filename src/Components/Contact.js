import React from "react";
import Instagram from "../Icons/instagram.png";
import Facebook from "../Icons/facebook.png";
import Whatsapp from "../Icons/whatsapp.png";

function Contact({ data }) {
  return (
    <>
      <div class="container-fluid" id="contact-style">
        <div class="row" id="contact-row-1">
          <div
            class="col"
            style={{ padding: "1%", textAlign: "center", marginTop: "10%" }}
          >
            <h3
              style={{
                padding: "1%",
                textAlign: "center",
                color: "#252525",
              }}
            >
              Quer entrar em contato?
            </h3>

            <br />
            <img class="contact-icons" src={Facebook} />
            <img class="contact-icons" src={Whatsapp} />
            <img class="contact-icons" src={Instagram} />
          </div>
          <div class="col-lg-5" id="contact-row-2">
            <img src={data == null ? "" : data.logo} id="contact-logo" />
            <span class="font-weight-bold">Nome</span>
            <input
              id="iptName"
              type="text"
              class="form-control mb-3"
              placeholder="Digite seu nome"
            />
            <span class="font-weight-bold">Email</span>
            <input
              id="iptEmail"
              type="text"
              class="form-control mb-3"
              placeholder="nome@email.com.br"
            />
            <span class="font-weight-bold">Mensagem</span>
            <textarea
              id="iptMessage"
              class="form-control mb-3"
              placeholder="Digite sua mensagem"
            ></textarea>
            <button
              id="btnSendMessage"
              class="btn float-right mt-2"
              style={{
                marginRight: "35%",
                marginLeft: "35%",
                marginTop: "15%",
                background: "black",
                color: "rgb(223, 203, 137)",
                border: "1px solid rgb(223, 203, 137)",
              }}
            >
              Enviar mensagem
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
