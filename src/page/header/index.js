import React, { Component } from "react";

import Avatar from "../../component/public/avater";
import "./index.scss";
import Nav from "../../component/moblie/nav";
export class Header extends Component {
  state = {
    loginBlog: {
      isLogin: true,
      username: "游客12344555",
      img: "https://www.bestvist.com/dist/cb28ee139fe715d3031eab2ca1b2d916.png"
    }
  };
  render() {
    const { loginBlog } = this.state;
    return (
      <div className="header">
        <div className="header-content">
          <Avatar loginBlog={loginBlog} />
          <div className="header-isShow">
            <Nav />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
