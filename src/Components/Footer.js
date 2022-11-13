import React from "react";

function Footer({ data }) {
  return (
    <>
      <div class="container-fluid" id="footer-style">
        <div class="row" id="footer-content">
          <div class="col">
            <h2 class="footer-title">Mapa do Site</h2>
            <hr />
            <p className="footer-link">Home</p>
            <p className="footer-link">Eventos</p>
            <p className="footer-link">Criar Eventos</p>
            <p className="footer-link">Login</p>
            <p className="footer-link">Cadastro</p>
          </div>
          <div class="col">
            <h2 class="footer-title">Sobre Nós</h2>
            <hr />
            <p className="footer-link">Política de reembolso</p>
            <p className="footer-link">Política de privacidade</p>
            <p className="footer-link">Regras de conduta</p>
            <p className="footer-link">EULA</p>
          </div>
          <div class="col">
            <h2 class="footer-title">Suporte</h2>
            <hr />
            <p className="footer-link">Central de Suporte</p>
            <p className="footer-link">WhatsApp</p>
          </div>
          <div class="col">
            <img
              className="footer-logo"
              src={data == null ? "..." : data.logo}
            />
          </div>
        </div>

        <br />
        <br />
      </div>
    </>
  );
}

export default Footer;
