import React from "react";
import "./menubar.css";

export default class Menubar extends React.Component {
  render() {
    return (
      <div className="main">
        <img src="bonsai.svg" className="logo"></img>
        <div className="header-element">About</div>
        <div className="header-element">For Buisness</div>
        <div className="header-element">Plans and Pricing</div>
        <div className="header-element">Support</div>
        <div className="divider"></div>
        <div className="header-element login">Log in</div>
        <div className="header-element sign-up">Sign Up</div>
      </div>
    );
  }
}
