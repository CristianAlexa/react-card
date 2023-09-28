import React from "react";
import twitter from "../assets/Twitter.svg";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";
import linkedin from "../assets/Linkedin.svg";
import github from "../assets/GitHub.svg";

export default function Footer() {
  return (
    <div className="footer">
      <img src={twitter} alt="" />
      <img src={facebook} alt="" />
      <img src={instagram} alt="" />
      <img src={linkedin} alt="" />
      <img src={github} alt="" />
    </div>
  );
}
