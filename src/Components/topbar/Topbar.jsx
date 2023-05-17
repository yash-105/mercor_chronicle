import React from "react";
import "./Topbar.css";
export const Topbar = () => {
  return (
    <div className="topbar">
      <button className="logo">
        <img src="./Chronicle logo.svg" alt="logo" />
        <h1>Chronicle</h1>
      </button>

      <button className="join-btn">
        <span>
          <b>Join Beta</b>
        </span>
      </button>
    </div>
  );
};
