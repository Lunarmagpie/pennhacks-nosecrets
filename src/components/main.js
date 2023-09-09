import React from "react";
import "./main.css";

export default class MainArea extends React.Component {
  render() {
    return (
      <div className="main-area">
        {/* Animation Background */}
      <div className="background__graphics">
      <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
        <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M0 0 L0 678 L1155 678 L1155 0 Q 1000 200, 800 100 Q 600 0, 400 100 Q 200 200, 0 0 Z"></path>
        <defs>
          <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
            <stop stop-color="#00F260"></stop>
            <stop offset="1" stop-color="#0575E6"></stop>
          </linearGradient>
        </defs>
      </svg>
      <svg class="absolute top-0 right-0 z-0 w-1/2 h-auto" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FBBF24" d="M41.9,-58.5C54.5,-51.5,63.8,-36.8,68.5,-20.2C73.2,-3.6,73.3,14.9,67.9,30.5C62.5,46.1,51.6,60.7,37.9,68.9C24.2,77.1,7.1,78.9,-10.9,75.9C-29,72.9,-47.9,65.1,-59.9,51.5C-71.9,37.9,-77.1,18.4,-76.6,0.1C-76.1,-18.2,-69.9,-36.4,-57.9,-43.4C-45.9,-50.4,-28.1,-46.2,-12.8,-43.1C2.5,-40,15.6,-38,28.1,-33.5C40.6,-29,52.5,-22,57.5,-9.8C62.5,2.4,60.6,20.8,53.3,35.1C46,49.4,33.3,59.6,19.9,64.9C6.5,70.2,-7.5,70.6,-22.1,67.3C-36.7,64,-51,57,-59.9,43.4C-68.8,29.8,-72.3,9.9,-69.9,-9.5C-67.5,-28.9,-59.2,-47.7,-45.6,-54.7C-32,-61.7,-13,-56.9,2.9,-58.1C18.8,-59.3,37.6,-66.5,41.9,-58.5Z" transform="translate(100 100)" />
      </svg>
      </div>
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
        <div className="tagline important gradient-text">
          AI Powered Mail.
          <br />
          AI Powered Future.
        </div>
        <div className="below-tagline">
          Use Bonsai's AI technology to send short summaries of your important
          emails straight to your phone.
        </div>
        {/* make a scrolling down button arrow animation here  */}
        <div className="button-container">
          <div className="button">
            <div class="scroll-down2"></div>
          </div>
        </div>
        <div className="main-body">
          <div className="image-cell">
            <img src="images/computer-phone.svg" className="cell-image"></img>
          </div>
          <div className="text-cell">
            <div className="title important gradient-text">
              Increase Productivity
            </div>
            Sync your email with your phone for snappy, easy-to-digest alerts that keep you in the loop, effortlessly!
          </div>
          <div className="text-cell reversed">
            <div className="title important reversed gradient-text">
              Network
            </div>
            Auto-translate emails into your native tongue, effortlessly breaking language barriers and expanding your global connections!
          </div>
          <div className="image-cell">
            <img src="images/network.svg" className="cell-image"></img>
          </div>
          <div className="image-cell">Div</div>
          <div className="text-cell">
            <div className="title important gradient-text">
              AI-Powered Analytics
            </div>
            Unlock email insights with Bonsai's analytics, supercharged by cutting-edge language models!
          </div>
        </div>
        <div className="header-element sign-up">Sign Up</div>
      </div>
    );
  }
}
