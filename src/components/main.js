import React from "react";
import "./main.css";

export default class MainArea extends React.Component {
  render() {
    return (
      <div className="main-area">
        {/* Animation Background */}
      <div className="background__animation">
        <div className="bg-circles">
          <div className="circle-1">
            <img src={process.env.PUBLIC_URL + "/images/gmail.png"} alt="gmail logo" />
          </div>
          <div className="circle-2"></div>
          <div className="circle-3">
            <img src={process.env.PUBLIC_URL + "/images/gpt_logo.png"} alt="gpt logo" />
          </div>
          <div className="circle-4">
            <img src={process.env.PUBLIC_URL + "/images/gpt_logo.png"} alt="gpt logo" />
          </div>
          <div className="effect-1">
            <img src={process.env.PUBLIC_URL + "/images/gmail.png"} alt="gmail logo" />
          </div>
        </div>
      </div>
        {/* Main Content */}
        <div className="tagline">
          AI Powered Mail.
          <br />
          AI Powered Future.
        </div>
        <div className="below-tagline">
          Use Bonsai's AI technology to send short summaries of your important
          emails straight to your phone.
        </div>
        <div className="main-body"></div>
      </div>
    );
  }
}
