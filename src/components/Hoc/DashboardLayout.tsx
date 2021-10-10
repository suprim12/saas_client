import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
const { Header, Sider, Content } = Layout;

const DashboardLayout: React.FC = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const { children } = props;
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout className="dashboard-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="dashboard-layout__header"
          style={{ paddingLeft: "24px" }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content className="dashboard-layout__content">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
