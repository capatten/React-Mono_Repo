import React, { Component } from "react";
import "./header.css";

import logo from "../img/logo.svg";

class CommonHeader extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }
}

export default CommonHeader;
