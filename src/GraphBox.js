import React from "react";
import googleGraph from "./googleGraph.png";

export default function GraphBox() {
  return (
    <div className="graphBox">
      {/* <h3>This is where the Graph goes</h3> */}
      <img className="graph" src={googleGraph} alt="" />
    </div>
  );
}
