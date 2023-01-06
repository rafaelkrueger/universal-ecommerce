import React, { useState, useEffect } from "react";
import { SlArrowDown } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";

function Footer({ data }) {
  const navigate = useNavigate();
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
          backgroundColor:
            data !== null ? data.website.websiteNavbarFooterColor : "black",
          color: data !== null ? data.website.websiteFontFooterColor : "white",
        });
      }, 500);
    }
  });
  const notStyled = {
    textDecoration: "none",
    color: footerStyle.color,
  };

  const colapsable = (id) => {
    const colapsable = window.document.getElementById(
      `footer-colapsable-${id}`
    );
    if (colapsable.style.display == "none") {
      colapsable.style.display = "block";
      colapsable.style.visibility = "visible";
    } else {
      colapsable.style.display = "none";
      colapsable.style.visibility = "hidden";
    }
  };
  const [category, setCategory] = useState("");

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
            <div className="row">
              <h2 class="footer-title">Mapa do Site</h2>
              <SlArrowDown
                onClick={(e) => colapsable(1)}
                style={{ marginLeft: "40%", marginTop: "-10%" }}
              />
            </div>
            <hr />
            <div id="footer-colapsable-1">
              <p className="footer-link">
                <Link
                  style={notStyled}
                  to={data !== null ? `/${data.site}` : ""}
                >
                  Home
                </Link>
              </p>
              <p className="footer-link">
                <Link
                  style={notStyled}
                  to={data !== null ? `/${data.site}/produtos/all` : ""}
                >
                  Produtos
                </Link>
              </p>
              <p className="footer-link">
                <select
                  className="select-category-modal"
                  id="select-category-modal-navbar"
                  style={{
                    backgroundColor: footerStyle.backgroundColor,
                    color: footerStyle.color,
                    border: "0px white solid",
                    marginLeft: "-3.5%",
                  }}
                  onChange={(e) => {
                    navigate(
                      `/${data == null ? "" : data.site}/produtos/${
                        e.target.value
                      }`
                    );
                  }}
                >
                  <option>Categorias</option>
                  {data == undefined
                    ? ""
                    : data.categorias.map((list) => {
                        return (
                          <>
                            <option
                              onClick={() => {
                                setCategory(list);
                              }}
                              className="select-option-navbar"
                              value={list}
                            >
                              {list}
                            </option>
                          </>
                        );
                      })}
                </select>
              </p>
              <p className="footer-link">
                <Link
                  style={notStyled}
                  to={data !== null ? `/${data.site}` : ""}
                >
                  Perfil
                </Link>
              </p>
            </div>
          </div>
          <div class="col">
            <h2 class="footer-title">Sobre Nós</h2>
            <SlArrowDown
              onClick={(e) => colapsable(2)}
              style={{ marginLeft: "90.2%", marginTop: "-24%" }}
            />

            <hr />
            <div id="footer-colapsable-2">
              <p className="footer-link">
                {" "}
                <a
                  style={notStyled}
                  target="_blank"
                  href="https://d26lpennugtm8s.cloudfront.net/stores/844/374/rte/POL%C3%8DTICA%20DE%20TROCA,%20DEVOLU%C3%87%C3%83O%20E%20REEMBOLSO%20-%20AZZA.pdf"
                >
                  Política de reembolso
                </a>
              </p>
              <p className="footer-link">
                {" "}
                <a
                  style={notStyled}
                  target="_blank"
                  href="https://sirros.net/politica-de-privacidade.pdf"
                >
                  Política de privacidade
                </a>
              </p>
              <p className="footer-link">
                {" "}
                <a
                  style={notStyled}
                  target="_blank"
                  href="https://www.clear.com.br/site/Content/pdf/politica-de-cookies-clear.pdf"
                >
                  Política de Cookies
                </a>
              </p>
              <p className="footer-link">
                <a
                  style={notStyled}
                  target="_blank"
                  href="https://havite.com.br/modulos/siteApp/docs/termos-de-uso-havite.pdf"
                >
                  EULA
                </a>
              </p>
            </div>
          </div>
          <div class="col">
            <h2 class="footer-title">Suporte</h2>
            <SlArrowDown
              onClick={(e) => colapsable(3)}
              style={{ marginLeft: "90%", marginTop: "-20%" }}
            />
            <hr />
            <div id="footer-colapsable-3">
              <p className="footer-link">Central de Suporte</p>
              <p className="footer-link">
                {" "}
                <a style={notStyled} target="_blank">
                  WhatsApp
                </a>
              </p>
            </div>
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
