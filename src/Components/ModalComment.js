import React from "react";
import EmptyImage from "../images/empty-image.jpg";
import { AiOutlineCloseCircle } from "react-icons/ai";

function ModalComment({ pedidoStatus }) {
  return (
    <div
      className="modal-comment"
      style={{
        visibility: pedidoStatus === null ? "visible" : "hidden",
        display: pedidoStatus === null ? "block" : "none",
      }}
    >
      <div className="modal-comment-content">
        <h3>Envie nos sua avaliação sobre o Produto!</h3>
        <br />
        <div className="row">
          <div className="col">
            <div className="form-group">
              <br />
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Título..."
              />
              <br />
              <textarea
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Descrição..."
              />
              <input
                type="file"
                class="form-control"
                id="floatingInput"
                placeholder="Título..."
              />
              <br />
              <br />
              <div className="row">
                <button className="btn btn-large btn-success">ENVIAR!</button>
              </div>
            </div>
          </div>
          <div className="col">
            <img src={EmptyImage} style={{ maxWidth: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalComment;
