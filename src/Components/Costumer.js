import React, { useEffect, useState } from "react";
import "../App.css";
import Api from "../Api";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FacebookLoginButton } from "react-social-login-buttons";
//login components
import { LoginSocialFacebook } from "reactjs-social-login";
import ToastMessage from "./ToastMessage";

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
  const [status, setStatus] = useState(false);
  const [code, setCode] = useState(0);
  const [message, setMessage] = useState("");
  const [loginResponse, setLoginResponse] = useState({
    profileImage: "",
    name: "",
    email: "",
    password: "",
    number: "",
    identification: "",
    cep: "",
    state: "",
    city: "",
    street: "",
    adressNumber: "",
    savedCart: "",
    wishList: "",
    myPurchase: "",
  });
  useEffect(() => {
    setCostumer({
      ...costumer,
      profileImage: loginResponse.profileImage,
      name: loginResponse.name,
      email: loginResponse.email,
      password: loginResponse.password,
      number: loginResponse.number,
      identification: loginResponse.cpf,
      cep: loginResponse.cep,
      state: loginResponse.state,
      city: loginResponse.city,
      street: loginResponse.street,
      adressNumber: loginResponse.adressNumber,
      savedCart: loginResponse.savedCart,
      wishList: loginResponse.wishList,
      myPurchase: loginResponse.myPurchase,
    });
  }, [loginResponse]);

  const navigate = useNavigate();
  return (
    <div
      className="costumer-modal"
      style={{
        visibility: modal,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="costumer-modal-content"
      >
        <ToastMessage
          status={status}
          code={code}
          message={message}
          setStatus={setStatus}
          setCode={setCode}
          setMessage={setMessage}
        />
        <div classname="costumer-modal-header">
          <div className="row" id="costumer-modal-responsive">
            <div className="col"></div>
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
                  .then(async (res) => {
                    if (res.data.length > 0) {
                      setLoginResponse(res.data[0]);
                      navigate(`/${data.site}/profile`);
                      setModal("hidden");
                      setCostumer({ ...costumer, logged: true });
                      setStatus(true);
                      setCode(200);
                      setMessage("usuário logado com sucesso!");
                    } else {
                      setStatus(true);
                      setCode(412);
                      setMessage(
                        "Falha ao logar! Tente mudar a senha ou email"
                      );
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
              className="btn "
            >
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
                    setCostumer({
                      ...costumer,
                      profileImage: response.data[0].profileImage,
                      name: response.data[0].name,
                      email: response.data[0].email,
                      number: response.data.number,
                      identification: response.data[0].cpf,
                      cep: response.data[0].cep,
                      state: response.data[0].state,
                      city: response.data[0].city,
                      street: response.data.street,
                      streetNumber: response.data[0].streetNumber,
                      savedCart: response.data[0].savedCart,
                      wishList: response.data[0].wishList,
                      myPurchase: response.data[0].myPurchase,
                    });
                    navigate(`/${data.site}/profile`);
                    setCostumer({ ...costumer, logged: true });
                    setModal("hidden");
                    setStatus(true);
                    setCode(200);
                    setMessage("Usuário logado com sucesso!");
                  })
                  .catch((err) => {
                    console.log(err);
                    setStatus(true);
                    setCode(412);
                    setMessage("Falha ao logar!");
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
                        setStatus(true);
                        setCode(200);
                        setMessage("Usuário registrado com sucesso!!");
                      })
                      .catch((err) => {
                        setStatus(true);
                        setCode(412);
                        setMessage("Falha ao registrar usuário!");
                      });
                  }}
                  id="modal-button-register"
                  className="btn btn-success"
                >
                  Se Registrar!
                </button>
              </div>
              <p
                style={{
                  textAlign: "center",
                  color: "rgba(0,0,0,0.3)",
                  marginTop: "10%",
                }}
              >
                Ao se registrar você aceita os termos de uso passados ao usuário
                que são, contando que cumpriremos com segurança:{" "}
                <a
                  href="https://sirros.net/politica-de-privacidade.pdf"
                  target="_blanck"
                >
                  Política de privacidade
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Costumer;
