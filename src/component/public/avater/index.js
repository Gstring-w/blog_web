import React from "react";
import "./index.scss";
export default function Avatar(props) {
  return (
    <div className="avatar">
      {props.loginBlog.isLogin ? (
        <img src={props.loginBlog.img} alt="" />
      ) : (
        <span className="avatar-icon icon-youke iconfont" />
      )}
      <div className="avatar-wrap">
        <div className="avatar-wrapper">{props.loginBlog.username}</div>
      </div>
    </div>
  );
}
