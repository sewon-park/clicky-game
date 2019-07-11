import React from "react";
// import "./Header.css";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.correctGuesses} Highscore: {props.bestScore}
    </div>
  </div>
);

export default Header;