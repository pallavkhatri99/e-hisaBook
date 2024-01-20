import React, { useState } from 'react';
import {  FileProtectOutlined,  HomeOutlined, UserOutlined, SettingOutlined, } from '@ant-design/icons';
import { Breadcrumb, Dropdown, Flex, Layout, Menu, Space, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import WlcmHeader from '../components/component/wlcmHeader';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {  return { key, icon, children, label }; }
const items = [
  getItem('Dashboard', '1', <HomeOutlined /> ),
  getItem('Customers', '2', <UserOutlined />),
  getItem('Reports', 'sub1', <FileProtectOutlined />, [
    getItem('Sales', '3'),
    getItem('Bill', '4'),
    getItem('Record', '5'),
  ]),
];

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [navi,setNavi] = useState(['Dashboard']);

  const navigate = useNavigate();
  const { token: { colorBgContainer }, } = theme.useToken();
  const handleMenuClick = ({keyPath}) => {
    const currentPath = [];

    keyPath.forEach((key) => {
      const index = items.findIndex(item=> item.key === key);
      if(index>=0)  currentPath.push(items[index].label); 
    })
    keyPath.forEach((key) => {
      items.forEach((item) => {
        if(item.children){   
          const innerChild = item.children.find(child => child.key === key) 
          if(innerChild)  currentPath.push(innerChild.label)
        }
      })
    })
    setNavi(currentPath);
    navigate(`./${currentPath.join('/')}`);
  };

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider theme="light" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        {/* <div className="demo-logo-vertical" /> */}
        <div className='usedetails'>
          
        </div>
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={handleMenuClick}/>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0, 
            background: colorBgContainer,
          }}
        >
         <div className='header-section'>
            <WlcmHeader/>
         </div>
        </Header>
        <Content
          className='content-container'
          style={{
            margin: '0 16px',
          }}
        >
         <Breadcrumb items={navi.map(ele => ({ title: ele }))} />
          <div
            style={{
              padding: 10,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            margin:0,
            padding:0,
          }}
        >
          Powered by @HisaBook
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;