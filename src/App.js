import React, { Component } from "react";
import Header from "./page/header";
import LeftContent from "./page/leftContent";
import "./App.scss";
import RightContent from "./page/rightContent";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-Body">
          <LeftContent />
          <RightContent />
        </div>
      </div>
    );
  }
}

export default App;
