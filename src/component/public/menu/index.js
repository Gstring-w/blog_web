import React from "react";
import { Menu, Icon } from "antd";

export default function MyMenu() {
  return (
    <Menu mode="vertical" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">
        <Icon type="home" />
        首页
      </Menu.Item>
      <Menu.Item key="2">
      <span className='iconfont icon-map' />
        地图
      </Menu.Item>
      <Menu.Item key="3">
      <span className='iconfont icon-about' />
        关于
      </Menu.Item>
      <Menu.Item key="4">
      <Icon type="mail" />
        留言
      </Menu.Item>
    </Menu>
  );
}
