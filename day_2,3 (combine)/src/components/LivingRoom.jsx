import React from "react";
import Navbar from "./Navbar";
import Img from "../assets/livingroom.jpeg";

const LivingRoom = () => {
  return (
    <>
      <Navbar />
      <div>
        <h2>Living Room</h2>
        <p>
          Welcome to the Living Room! I know it's super clean.....
        </p>
        <img
          src={Img}
        />
      </div>
    </>
  );
};

export default LivingRoom;
