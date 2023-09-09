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
              <img
                src={process.env.PUBLIC_URL + "/images/gmail.png"}
                alt="gmail logo"
              />
            </div>
            <div className="circle-2"></div>
            <div className="circle-3">
              <img
                src={process.env.PUBLIC_URL + "/images/gpt_logo.png"}
                alt="gpt logo"
              />
            </div>
            <div className="circle-4">
              <img
                src={process.env.PUBLIC_URL + "/images/gpt_logo.png"}
                alt="gpt logo"
              />
            </div>
            <div className="effect-1">
              <img
                src={process.env.PUBLIC_URL + "/images/gmail.png"}
                alt="gmail logo"
              />
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="tagline important gradient-text">
          AI Powered Mail.
          <br />
          AI Powered Future.
        </div>
        <div className="below-tagline">
          Use Bonsai's AI technology to send short summaries of your important
          emails straight to your phone.
        </div>
        <div className="main-body">
          <div className="image-cell">
            <img src="images/computer-phone.svg" className="cell-image"></img>
          </div>
          <div className="text-cell">
            <div className="title important gradient-text">
              Increase Productivity
            </div>
            Connect your email to your phone to send you quick and readable
            notifications.
          </div>
          <div className="text-cell reversed">
            <div className="title important reversed gradient-text">
              Network
            </div>
            Automatically translate emails from different languages into your
            native language to allow you to communicate with more people.
          </div>
          <div className="image-cell">
            <img src="images/network.svg" className="cell-image"></img>
          </div>
          <div className="image-cell">Div</div>
          <div className="text-cell">
            <div className="title important gradient-text">
              AI-Powered Analytics
            </div>
            Track your emails using Bonsai's analytics leveraging powerful
            language models.
          </div>
        </div>
        <div className="header-element sign-up">Sign Up</div>
      </div>
    );
  }
}
