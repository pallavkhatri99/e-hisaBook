import React, { useState } from 'react';
import { SettingOutlined, PoweroffOutlined, } from '@ant-design/icons';
import { Dropdown, Space, Menu, Flex } from 'antd';

const itemsDropdown = [
  {
    key: '1',
    icon: <SettingOutlined/>,
    label: 'Setting',
  },
  {
    key: '2',
    icon: <PoweroffOutlined />,
    label: 'Logout',
  },
];

function WlcmHeader() {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleDropClick = (e) => {
    console.log(e)
    if (e.key === '3') {
      setOpenDropdown(false);
    }
  };

  const handleOpenChange = (nextOpen) => {
    setOpenDropdown(nextOpen);
  };

  const menu = (
    <Menu onClick={handleDropClick}>
      {itemsDropdown.map((item) => (
        <Menu.Item key={item.key}>{item.icon}      {item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Flex justify='space-between' style={{margin:'0px 30px auto'}}>
      <div><h1>Welcome! {undefined || 'Guest'}</h1></div>
      <div>
        <Dropdown 
            overlay={menu}
            onOpenChange={handleOpenChange} 
            open={openDropdown}
        >
            <a onClick={(e) => e.preventDefault()}>
            <Space style={{color:'red',fontSize:'20px'}}>
               ... <SettingOutlined />
            </Space>
            </a>
        </Dropdown>
      </div>
    </Flex>
  );
}

export default WlcmHeader;
