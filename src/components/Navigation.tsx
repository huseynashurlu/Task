import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";

type Props = {};

const Navigation: React.FC<Props> = () => {
  return (
    <Layout.Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/search">Search</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/about">About</NavLink>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default Navigation;