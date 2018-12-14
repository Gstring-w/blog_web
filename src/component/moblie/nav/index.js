import React from "react";
import { Menu, Dropdown, Icon } from "antd";
import "./index.scss";
export default function Nav() {
  const menu = (
    <Menu>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} trigger={["click"]} className="Nav">
      <Icon type="bars" style={{ fontSize: 30 }} className="Nav-icon" />
    </Dropdown>
  );
}
