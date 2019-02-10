import React, { Component } from "react";
import { Icon } from "antd";
import "./index.scss";
import NavWeb from "../../component/web/NavWeb";
export class leftContent extends Component {
  render() {
    return (
      <div className="leftContent">
        <div className="leftContent-content">
          <NavWeb />
        </div>
        <div className='leftContent-content more-information'>
        <div className='leftContent-content-item'>
          <Icon type="github" />
          <a href='https://github.com/Gstring-w/blog_web' target="_blank" title='https://github.com/Gstring-w' >
            https://github.com/Gstring-w
          </a>
          </div>
          <div className='leftContent-content-item'>
          <Icon type="mail" />
          <a href='mailto:gstring_w@163.com' title='https://github.com/Gstring-w' >gstring_w@163.com</a>
          </div>
        </div>
      </div>
    );
  }
}

export default leftContent;
