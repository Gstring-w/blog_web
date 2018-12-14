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
        <Icon type="home" />
        首页
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="home" />
        首页
      </Menu.Item>
      <Menu.Item key="4">
        <Icon type="home" />
        首页
      </Menu.Item>
    </Menu>
  );
}
