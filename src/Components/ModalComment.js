import React, { useState, useEffect } from "react";
import EmptyImage from "../images/empty-image.jpg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Star1 from "../images/stars/star-1.png";
import Star2 from "../images/stars/star-2.png";
import Star3 from "../images/stars/star-3.png";
import Star4 from "../images/stars/star-4.png";
import Star5 from "../images/stars/star-5.png";
import Star6 from "../images/stars/star-6.png";
import Api from "../Api";

function ModalComment({
  data,
  pedidoStatus,
  setPedidoStatus,
  costumer,
  pedido,
}) {
  const [comment, setComment] = useState({
    empresa: data?._id,
    name: costumer?.name,
    image: costumer?.profileImage,
    productId: pedido?.products[0]?._id,
    title: "",
    comment: "",
    imageComment: "empty",
    rating: 1,
  });

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div
      className="modal-comment"
      style={{
        visibility: pedidoStatus ? "visible" : "hidden",
      }}
    >
      <div className="modal-comment-content">
        <div
          className="modal-comment-icon"
          style={{ position: "absolute", right: "50px", top: 52.5 }}
        >
          <AiOutlineCloseCircle size={30} />
        </div>
        <h3>Envie nos sua avaliação!</h3>
        <br />
        <div className="row" id="modal-content-responsive">
          <div className="col">
            <div className="form-group">
              <br />
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Título..."
                maxLength={15}
                onChange={(e) => {
                  setComment({ ...comment, title: e.target.value });
                }}
              />
              <br />
              <textarea
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Descrição..."
                maxLength={75}
                onChange={(e) => {
                  setComment({ ...comment, comment: e.target.value });
                }}
              />
              <br />

              <input
                type="file"
                class="form-control"
                id="floatingInput"
                placeholder="Título..."
                onChange={async (e) => {
                  const file = e.target.files[0];
                  const base64 = await convertBase64(file);
                  setComment({ ...comment, imageComment: base64 });
                }}
              />
              <br />

              <select
                onChange={(e) => {
                  setComment({ ...comment, rating: e.target.value });
                }}
                style={{ width: "100%" }}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              <br />
              <div className="row" style={{ marginTop: "20%" }}>
                <img
                  alt="star-rating"
                  src={Star6}
                  style={{ width: "70%", margin: "auto" }}
                />
              </div>
              <br />
              <div className="row">
                <button
                  onClick={() => {
                    Api.post("/set-produto-comment", {
                      empresa: comment.empresa,
                      name: comment.name,
                      productId: comment.productId,
                      imageComment: comment.imageComment,
                      image: comment.profileImage,
                      title: comment.title,
                      comment: comment.comment,
                      rating: 1,
                    });
                    setPedidoStatus(false);
                  }}
                  className="btn btn-large btn-success"
                >
                  ENVIAR!
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <img
              src={
                comment.imageComment !== "empty"
                  ? comment.imageComment
                  : EmptyImage
              }
              style={{ maxWidth: "100%", minHeight: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalComment;
