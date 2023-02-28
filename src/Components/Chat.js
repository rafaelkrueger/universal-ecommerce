import React, { useEffect, useState } from "react";
import { BsChatLeftTextFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import socketIO from "socket.io-client";

function Chat({ data, costumer }) {
  const [screen, setScreen] = useState(window.outerWidth);
  const [socket, setSocket] = useState(null);
  const [activeChat, setActiveChat] = useState(false);
  const [message, setMessage] = useState("");

  const sendMessage = (message, user, empresa) => {
    const completeMessage = {
      id: socket.id,
      sender: user,
      empresa: empresa,
      message: message,
    };
    messageUpload(completeMessage);
    socket?.emit("sendMessage", completeMessage);
  };

  socket?.on("messageUpload", (message) => {
    messageUpload(message);
  });

  const messageUpload = (message) => {
    const bodyMessage =
      window.document.getElementsByClassName("chat-active-body");
    bodyMessage[0].innerHTML += `
    <div className='chat-active-you-chat>
      <p>${message?.message}</p>
    <div>`;
  };

  useEffect(() => {
    const newSocket = socketIO.connect("http://localhost:8083");
    setSocket(newSocket);
    return socket?.disconnect();
  }, []);

  return (
    <>
      <div>
        {activeChat ? (
          <div className="chat-active">
            <div clasName="row" id="chat-active-header">
              <div className="col">
                <h5 id="chat-title" style={{ marginLeft: "5%" }}>
                  Atendimento Online
                </h5>
              </div>
              <div className="col">
                <AiOutlineCloseCircle
                  style={{
                    marginLeft: "80%",
                  }}
                  size={30}
                  onClick={() => {
                    setActiveChat(false);
                  }}
                />
              </div>
            </div>
            <hr />
            <div class="chat-active-body">
              <div
                className="chat-active-it-chat"
                style={{
                  background:
                    data !== null
                      ? data.website.websiteNavbarFooterColor
                      : "white",
                  color:
                    data !== null
                      ? data.website.websiteFontFooterColor
                      : "black",
                }}
              >
                <p>
                  Olá! Essa conversa é ao vivo com um admin da loja, como posso
                  ajudar?
                </p>
              </div>
            </div>
            <div className="chat-active-bottom">
              <div className="chat-active-input">
                <input
                  placeholder="Qual a sua dúvida?"
                  type="text"
                  className="input-chat"
                  maxLength={130}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>
              <div className="chat-active-button">
                <button
                  onClick={() => {
                    sendMessage(message, costumer?.id, data?._id);
                    setMessage("");
                  }}
                  className="btn btn-success"
                  id="button-chat"
                >
                  Enviar!
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div
            onClick={() => {
              setActiveChat(true);
            }}
            className="chat-innactive"
          >
            <BsChatLeftTextFill size={screen > 600 ? 50 : 35} />
          </div>
        )}
      </div>
    </>
  );
}

export default Chat;
