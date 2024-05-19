import React from "react";
import Img from "../assets/bath.jpeg";
import Navbar from "./Navbar";

const Bathroom = () => {
  return (
    <>
      <Navbar />
      <div>
        <h2>Bathroom</h2>
        <p>Welcome to the Bathroom! Jerry is naked. Dont look. Oh wait....</p>
        <img src={Img} alt="Jerry in the bath" />
      </div>
    </>
  );
};

export default Bathroom;
