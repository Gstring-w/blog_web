import React, { Component } from "react";
import { Route } from "react-router-dom";

import BlogContent from "./blogContent";

import "./index.scss";

export class RightContent extends Component {
  render() {
    return (
      <div className="rightContent">
        <div className="rightContent-content">
          <Route path="/" component={BlogContent} />
        </div>
      </div>
    );
  }
}

export default RightContent;
