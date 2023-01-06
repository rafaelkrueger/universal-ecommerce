import React from "react";
import "../App.css";
import Api from "../Api";
import { useNavigate } from "react-router-dom";
import { FacebookLoginButton } from "react-social-login-buttons";
import { InstagramLoginButton } from "react-social-login-buttons";
//login components
import { LoginSocialFacebook } from "reactjs-social-login";
import { LoginSocialInstagram } from "reactjs-social-login";

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
  const navigate = useNavigate();
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
              maxWidth: "43.5%",
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
            <button
              style={{
                minWidth: "100%",
                textAlign: "left",
                color: "white",
                background: "green",
              }}
              onClick={() => {
                Api.post("https://tamarintec.herokuapp.com/find-costumer", {
                  empresa: data._id,
                  email: costumer.email,
                  password: costumer.password,
                })
                  .then((res) => {
                    console.log(res.data);
                    const profile = res.data[0];
                    if (res.data.length > 0) {
                      setCostumer({
                        profileImage: profile.profileImage,
                        name: profile.name,
                        email: profile.email,
                        password: profile.password,
                        number: profile.number,
                        identification: profile.cpf,
                        cep: profile.cep,
                        state: profile.state,
                        city: profile.city,
                        street: profile.street,
                        adressNumber: profile.streetNumber,
                        savedCart: profile.savedCart,
                        wishList: profile.wishList,
                        myPurchase: profile.myPurchase,
                      });
                      navigate(`/${data.site}/profile`);
                      setCostumer({ ...costumer, logged: true });
                      setModal("hidden");
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
              className="btn "
            >
              <img
                src={data != null ? data.logo : ""}
                style={{
                  marginRight: "2.5%",
                  maxWidth: "16%",
                  borderRadius: "10px",
                }}
              />
              {`Logar com ${data != null ? data.name : ""}`}
            </button>
            <br />
            <br />
            <LoginSocialFacebook
              appId="691417368848517"
              onResolve={(response) => {
                Api.post("https://tamarintec.herokuapp.com/facebook-costumer", {
                  empresa: data._id,
                  profileImage: response.data.picture.data.url,
                  name: response.data.name,
                  email: response.data.email,
                  cpf: "000.000.000-00",
                  number: costumer.number,
                })
                  .then((response) => {
                    console.log(response.data[0]);
                    setCostumer({
                      ...costumer,
                      profileImage: response.data[0].profileImage,
                      name: response.data[0].name,
                      email: response.data[0].email,
                      number: response.data.number,
                      identification: response.data[0].cpf
                        ? response.data[0].cpf
                        : "",
                      cep: response.data[0].cep ? response.data[0].cep : "",
                      state: response.data[0].state
                        ? response.data[0].state
                        : "",
                      city: response.data[0].city ? response.data[0].city : "",
                      street: response.data.street
                        ? response.data[0].street
                        : "",
                      streetNumber: response.data[0].streetNumber
                        ? response.data[0].streetNumber
                        : "",
                      savedCart: response.data[0].savedCart
                        ? response.data[0].savedCart
                        : [],
                      wishList: response.data[0].wishList
                        ? response.data[0].wishList
                        : [],
                      myPurchase: response.data[0].myPurchase
                        ? response.data[0].myPurchase
                        : [],
                    });
                    navigate(`/${data.site}/profile`);
                    setCostumer({ ...costumer, logged: true });
                    setModal("hidden");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              <FacebookLoginButton />
            </LoginSocialFacebook>
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
                <button
                  onClick={() => {
                    Api.post(
                      "https://tamarintec.herokuapp.com/create-costumer",
                      {
                        empresa: data._id,
                        name: costumer.name,
                        email: costumer.email,
                        cpf: costumer.identification,
                        password: costumer.password,
                        number: costumer.number,
                      }
                    )
                      .then((res) => {
                        navigate(`/${data.site}/profile`);
                        setCostumer({ ...costumer, logged: true });
                        setModal("hidden");
                      })
                      .catch((err) => {
                        window.alert(err);
                      });
                  }}
                  id="modal-button-register"
                  className="btn btn-success"
                >
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
