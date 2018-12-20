import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import { Button } from "antd";

import Avatar from "../../component/public/avater";
import Nav from "../../component/moblie/nav";

import "./index.scss";
export class Header extends Component {

    state = {
      loginBlog: {
        isLogin: false,
        username: "游客",
        img: "https://www.bestvist.com/dist/cb28ee139fe715d3031eab2ca1b2d916.png"
      }
    }
                    
  componentDidMount(){
    // this.setState({
    //   loginBlog: {
    //     isLogin: true,
    //     username: "游客12344555",
    //     img: "https://www.bestvist.com/dist/cb28ee139fe715d3031eab2ca1b2d916.png"
    //   }
    // })
  }
  render() {
    const { loginBlog } = this.state;
    return (
      <div className="header">
        <div className="header-content">
          <Avatar loginBlog={loginBlog} />
          <div className="header-isShow">
            <Nav />
          </div>
          {!loginBlog.isLogin && (
            <div className="header-loginBtn">
              <NavLink to='/login'>
                <Button icon="login" size="small">
                  登录
                </Button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
