import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { BsChatLeftTextFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
const socket = io("http://localhost:8084");

function Chat() {
  const [activeChat, setActiveChat] = useState(false);
  useEffect(() => {
    console.log("conectado");
  }, []);

  return (
    <>
      <div>
        {activeChat ? (
          <div className="chat-active">
            <div clasName="row" id="chat-active-header">
              <div className="col">
                <h6>Atendimento Online</h6>
              </div>
              <div className="col">
                <AiOutlineCloseCircle
                  style={{
                    alignSelf: "flex-end",
                  }}
                  size={25}
                  onClick={() => {
                    setActiveChat(false);
                  }}
                />
              </div>
            </div>
            <hr />
          </div>
        ) : (
          <div
            onClick={() => {
              setActiveChat(true);
            }}
            className="chat-innactive"
          >
            <BsChatLeftTextFill size={50} />
          </div>
        )}
      </div>
    </>
  );
}

export default Chat;
