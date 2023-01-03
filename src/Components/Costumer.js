import React from "react";
import "../App.css";

function Costumer({
  data,
  cart,
  setCart,
  modal,
  setModal,
  navbarStyle,
  costumer,
  setCostumer,
}) {
  return (
    <div
      className="costumer-modal"
      style={{
        visibility: modal,
      }}
    >
      <div className="costumer-modal-content">
        <div classname="costumer-modal-header">
          <div className="row" id="costumer-modal-responsive">
            <div className="col">
              <h1>Bem Vindo a Área do Cliente</h1>
            </div>
            <div className="col">
              <h4
                style={{
                  textAlign: "right",
                  padding: 10,
                }}
                onClick={() => {
                  setModal("hidden");
                }}
              >
                X
              </h4>
            </div>
          </div>
        </div>
        <div className="row" id="costumer-modal-responsive">
          <div
            className="col"
            id="modal-area"
            style={{
              color: navbarStyle.color,
              backgroundColor: navbarStyle.backgroundColor,
            }}
          >
            <h4>Área Login:</h4>
            <br />
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => {
                setCostumer({ ...costumer, email: e.target.value });
              }}
            />
            <br />
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => {
                setCostumer({ ...costumer, password: e.target.value });
              }}
            />
            <br />
            <button className="btn btn-success">Logar</button>
          </div>
          <div className="col" id="modal-register">
            <h4>Área de Registro</h4>
            <div className="row" id="modal-area">
              <div className="col">
                <input
                  type="name"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Nome Completo"
                  value={costumer.name}
                  onChange={(e) => {
                    setCostumer({ ...costumer, name: e.target.value });
                  }}
                />
                <br />
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@exemplo.com"
                  onChange={(e) => {
                    setCostumer({ ...costumer, email: e.target.value });
                  }}
                />
                <br />
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Senha"
                  onChange={(e) => {
                    setCostumer({ ...costumer, password: e.target.value });
                  }}
                />
              </div>
              <div className="col" id="modal-area-register-column-2">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="CPF"
                  value={costumer.identification}
                  onChange={(e) => {
                    setCostumer({
                      ...costumer,
                      identification: e.target.value,
                    });
                  }}
                />
                <br />
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="(99) 9 9999-9999"
                  value={costumer.number}
                  onChange={(e) => {
                    setCostumer({ ...costumer, number: e.target.value });
                  }}
                />
                <br />
                <button id="modal-button-register" className="btn btn-success">
                  Se Registrar!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Costumer;
