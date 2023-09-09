import React from "react";
import "./styles/preloader.css";

export default function Preloader() {
  return (
    <div className="preloader" style={{ backgroundColor: "black" }}>
      <div className="center">
        <span>loading....</span>
        <div className="ring"></div>
      </div>
    </div>
  );
}
