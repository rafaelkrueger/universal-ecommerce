import React, { useState } from "react";
import { BsFillPersonFill, BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GrDocumentUser } from "react-icons/gr";
import { FaCity } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import Api from "../Api";

function User({ costumer, setCostumer, filled, setFilled }) {
  const cep = () => {
    Api.get(`https://viacep.com.br/ws/${costumer.cep}/json/`).then((res) => {
      setCostumer({
        ...costumer,
        state: res.data.uf,
        city: res.data.localidade,
        street: res.data.logradouro,
      });
    });
  };
  return (
    <>
      <div className="user-information">
        <h3 className="user-information-title">Complete Suas Informações</h3>
        <div className="row" id="user-information-inputs">
          <div className="col">
            <div class="input-group has-validation">
              <span class="input-group-text">
                <BsFillPersonFill />
              </span>
              <div class="form-floating ">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInputGroup2"
                  placeholder="Nome completo"
                  value={costumer.name}
                  onChange={(e) => {
                    setCostumer({ ...costumer, name: e.target.value });
                  }}
                />
                <label for="floatingInputGroup2">Nome Completo</label>
              </div>
            </div>
            <br />
            <div class="input-group has-validation">
              <span class="input-group-text">
                <AiOutlineMail />
              </span>
              <div class="form-floating ">
                <input
                  type="text"
                  class="form-control "
                  id="floatingInputGroup2"
                  placeholder="Email"
                  value={costumer.email}
                  onChange={(e) => {
                    setCostumer({ ...costumer, email: e.target.value });
                  }}
                />
                <label for="floatingInputGroup2">Email</label>
              </div>
            </div>
            <br />
            <div class="input-group has-validation">
              <span class="input-group-text">
                <MdPassword />
              </span>
              <div class="form-floating ">
                <input
                  type="password"
                  class="form-control "
                  id="floatingInputGroup2"
                  placeholder="Sua senha"
                  value={costumer.password}
                  onChange={(e) => {
                    setCostumer({ ...costumer, password: e.target.value });
                  }}
                />
                <label for="floatingInputGroup2">Senha</label>
              </div>
            </div>
            <br />

            <div class="input-group has-validation">
              <span class="input-group-text">
                <BsTelephone />
              </span>
              <div class="form-floating ">
                <input
                  type="text"
                  class="form-control "
                  id="floatingInputGroup2"
                  placeholder="Numero"
                  value={costumer.number}
                  onChange={(e) => {
                    setCostumer({ ...costumer, number: e.target.value });
                  }}
                />
                <label for="floatingInputGroup2">Numero</label>
              </div>
            </div>
            <br />
            <div class="input-group has-validation">
              <span class="input-group-text">
                <GrDocumentUser />
              </span>
              <div class="form-floating ">
                <input
                  type="text"
                  class="form-control "
                  id="floatingInputGroup2"
                  placeholder="CPF"
                  value={costumer.identification}
                  onChange={(e) => {
                    setCostumer({
                      ...costumer,
                      identification: e.target.value,
                    });
                  }}
                />
                <label for="floatingInputGroup2">CPF</label>
              </div>
            </div>
          </div>
          <br />
          <div className="col">
            <div class="input-group has-validation">
              <span class="input-group-text">
                <FaCity />
              </span>
              <div class="form-floating ">
                <input
                  type="text"
                  class="form-control "
                  id="floatingInputGroup2"
                  placeholder="CEP"
                  onChange={(e) => {
                    setCostumer({ ...costumer, cep: e.target.value });
                  }}
                  onBlur={() => {
                    cep();
                  }}
                />
                <label for="floatingInputGroup2">CEP</label>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <div class="input-group has-validation">
                  <div class="form-floating ">
                    <input
                      type="text"
                      class="form-control "
                      id="floatingInputGroup2"
                      placeholder="Estado"
                      value={costumer.state}
                      onChange={(e) => {
                        setCostumer({ ...costumer, state: e.target.value });
                      }}
                    />
                    <label for="floatingInputGroup2">Estado</label>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="input-group has-validation">
                  <div class="form-floating ">
                    <input
                      type="text"
                      class="form-control "
                      id="floatingInputGroup2"
                      placeholder="Cidade"
                      value={costumer.city}
                      onChange={(e) => {
                        setCostumer({ ...costumer, city: e.target.value });
                      }}
                    />
                    <label for="floatingInputGroup2">Cidade</label>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <div class="input-group has-validation">
                  <div class="form-floating ">
                    <input
                      type="text"
                      class="form-control "
                      id="floatingInputGroup2"
                      placeholder="Rua"
                      value={costumer.street}
                      onChange={(e) => {
                        setCostumer({ ...costumer, street: e.target.value });
                      }}
                    />
                    <label for="floatingInputGroup2">Rua</label>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="input-group has-validation">
                  <div class="form-floating ">
                    <input
                      type="text"
                      class="form-control "
                      id="floatingInputGroup2"
                      placeholder="Numero"
                      value={costumer.adressNumber}
                      onChange={(e) => {
                        setCostumer({
                          ...costumer,
                          adressNumber: e.target.value,
                        });
                      }}
                    />
                    <label for="floatingInputGroup2">Número</label>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <button
              className="btn btn-large btn-success"
              id="user-information-number"
              onClick={() => {
                if (
                  costumer.name !== "" &&
                  costumer.email !== "" &&
                  costumer.number !== "" &&
                  costumer.identification !== "" &&
                  costumer.cep !== "" &&
                  costumer.state !== "" &&
                  costumer.city !== "" &&
                  costumer.street !== "" &&
                  costumer.adressnumber !== ""
                ) {
                  setFilled(true);
                }
              }}
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
