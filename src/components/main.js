import React from "react";
import "./main.css";

export default class MainArea extends React.Component {
  render() {
    return (
      <div class="main-area">
        <div class="tagline">
          AI Powered Mail.
          <br />
          AI Powered Future.
        </div>
        <div class="below-tagline">
          Use Bonsai's AI technology to send short summaries of your important
          emails straight to your phone.
        </div>
      </div>
    );
  }
}
