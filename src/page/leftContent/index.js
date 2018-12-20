import React, { Component } from "react";
import "./index.scss";
import NavWeb from "../../component/web/NavWeb";
export class leftContent extends Component {
  render() {
    return (
      <div className="leftContent">
        <div className="leftContent-content">
          <NavWeb />
        </div>
      </div>
    );
  }
}

export default leftContent;
