import React, { useState, useEffect } from "react";

function Footer({ data }) {
  const [footerStyle, setFooterStyle] = useState({
    color: "",
    backgroundColor: "",
  });
  useEffect(() => {
    if (footerStyle.color == "") {
      setFooterStyle({
        color: "white",
        backgroundColor: "black",
      });
    } else {
      setTimeout(() => {
        setFooterStyle({
          backgroundColor: data.website.websiteNavbarFooterColor,
          color: data.website.websiteFontFooterColor,
        });
      }, 500);
    }
  });

  return (
    <>
      <div
        class="container-fluid"
        id="footer-style"
        style={{
          backgroundColor: footerStyle.backgroundColor,
          color: footerStyle.color,
        }}
      >
        <div class="row" id="footer-content">
          <div class="col">
            <h2 class="footer-title">Mapa do Site</h2>
            <hr />
            <p className="footer-link">Home</p>
            <p className="footer-link">Eventos</p>
            <p className="footer-link">Criar Eventos</p>
          </div>
          <div class="col">
            <h2 class="footer-title">Sobre Nós</h2>
            <hr />
            <p className="footer-link">Política de reembolso</p>
            <p className="footer-link">Política de privacidade</p>
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
