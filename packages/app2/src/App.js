import React, { Component } from "react";
import CommonHeader from "@peanut/common/header/header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommonHeader />
        <p>This is app 2</p>
      </div>
    );
  }
}

export default App;
