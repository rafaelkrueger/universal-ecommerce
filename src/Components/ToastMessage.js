import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { SiVerizon } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";

function ToastMessage({
  status,
  code,
  message,
  setStatus,
  setCode,
  setMessage,
}) {
  return (
    <>
      <div
        className="toastmessage"
        style={{
          visibility: status ? "visible" : "hidden",
          display: status ? "block" : "none",
        }}
      >
        <div className="row">
          <div className="col" id="toastmessage-icon">
            {code === 200 ? (
              <SiVerizon
                id="toastmessage-icon-element"
                size={25}
                color="green"
              />
            ) : (
              <AiFillCloseCircle
                id="toastmessage-icon-element"
                size={25}
                color="red"
              />
            )}
          </div>
          <div className="col" id="toastmessage-content">
            <h6 id="toastmessage-content-message">{message}</h6>
          </div>
          <div className="col" id="toastmessage-close">
            <AiOutlineCloseCircle
              id="toastmessage-close-icon"
              size={30}
              onClick={() => {
                setMessage("");
                setCode(0);
                setStatus(!status);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ToastMessage;
