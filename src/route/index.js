import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import App from "../App";
import Login from "../page/login";
export default class MyRoute extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={App} />
      </Switch>
    );
  }
}
