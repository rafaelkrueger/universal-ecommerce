import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import "./App.css";

function Loading() {
  const override = {
    display: "block",
    marginTop: "40%",
    borderColor: "red",
  };
  return (
    <>
      <div className="loading-all">
        <PropagateLoader cssOverride={override} className="loading-all-icon" />
      </div>
    </>
  );
}

export default Loading;
