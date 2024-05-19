import React from "react";
import Img from "../assets/download.jpeg";
import Navbar from "./Navbar";

const Kitchen = () => {
  return (
    <>
      <Navbar />

      <div>
        <h2>Kitchen</h2>
        <p>
          This is the Kitchen. Watch out! Chef Cat is on the loose making a
          mess!
        </p>
        <img src={Img} alt="Chef Cat cooking" />
      </div>
    </>
  );
};

export default Kitchen;
