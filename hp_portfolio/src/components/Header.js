import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <header>
        {/* Main message and greetings */}

        <div className="greetings">
          <h1 className="welcoming" id="welcoming">
            Welcome, I am Ha Dong
          </h1>

          <p className="intro_sentence" id="intro_sentence">
            I like web developement, design, and the outdoors
          </p>
        </div>

        <div className="trees">
          <img class="tree_pic" src="/imgs/tree1.png" alt="portfolio_picture" />
          <img
            class="tree_pic2"
            src="/imgs/tree1.png"
            alt="portfolio_picture"
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
