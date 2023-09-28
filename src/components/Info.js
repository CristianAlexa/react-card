import React from "react";
import mail from "../assets/Mail.svg";
import profileImg from "../assets/ca.jpg";

export default function Info() {
  return (
    <div className="info">
      <img src={profileImg} alt="" className="profile-pic" />
      <h1>Cristian Alexa</h1>
      <h3>Frontend Developer</h3>
      <h6>cristianalexa.co.uk</h6>
      <button className="info-btn">
        <img src={mail} alt="" />
        Email
      </button>
    </div>
  );
}
