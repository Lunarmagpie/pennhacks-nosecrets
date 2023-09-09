import React from "react";
import "./menubar.css";

export default class Menubar extends React.Component {
  render() {
    return (
      <div class="main">
        <img src="bonsai.svg" class="logo"></img>
        <div class="header-element">About</div>
        <div class="header-element">For Buisness</div>
        <div class="header-element">Plans and Pricing</div>
        <div class="header-element">Support</div>
        <div class="divider"></div>
        <div class="header-element login">Log in</div>
        <div class="header-element sign-up">Sign Up</div>
      </div>
    );
  }
}
