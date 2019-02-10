import React from "react";
import { Menu, Dropdown, Icon } from "antd";
import "./index.scss";
export default function Nav() {
  const menu = (
    <Menu mode="vertical" defaultSelectedKeys={["1"]} style={{ width: 200 }}>
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
  return (
    <Dropdown overlay={menu} trigger={["click"]} className="Nav">
      <Icon type="bars" style={{ fontSize: 30 }} className="Nav-icon" />
    </Dropdown>
  );
}
