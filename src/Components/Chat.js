import React, { useEffect, useState } from "react";
import { BsChatLeftTextFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import socketIO from "socket.io-client";

function Chat({ data, costumer }) {
  const [screen, setScreen] = useState(window.outerWidth);
  const [socket, setSocket] = useState(null);
  const [activeChat, setActiveChat] = useState(false);
  const [message, setMessage] = useState("");
  const [receivedMessage, setReceivedMessage] = useState();

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
    setReceivedMessage(message);
  });

  const messageUpload = (message) => {
    const bodyMessage = window.document.getElementById("chat-body");
    const newDiv = document.createElement("div");
    newDiv.classList.add(
      `chat-active-${message?.sender === "" ? "you" : "it"}-chat`
    );
    newDiv.style.background =
      message?.sender !== ""
        ? data?.website?.websiteNavbarFooterColor
        : "white";
    newDiv.style.color =
      message?.sender !== "" ? data?.website?.websiteFontFooterColor : "black";
    newDiv.innerHTML = `<p>${message?.message}</p>`;
    bodyMessage?.appendChild(newDiv);
    var scrollChat = document.getElementById("chat-body");
    const divHeight = scrollChat?.scrollHeight;
    if (scrollChat?.scrollTop) {
      scrollChat.scrollTop = divHeight;
    }
  };

  useEffect(() => {
    const newSocket = socketIO.connect("hhttps://tamarintec.herokuapp.com");
    setSocket(newSocket);
    return socket?.disconnect();
  }, []);

  useEffect(() => {
    messageUpload(receivedMessage);
  }, [receivedMessage]);

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
            <div class="chat-active-body" id="chat-body">
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
