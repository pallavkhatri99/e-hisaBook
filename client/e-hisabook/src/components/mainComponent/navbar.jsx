import React from 'react'
import { Link } from 'react-router-dom'
import logo from'../../image/logo.png'
import '../../style/navbar.css'
import { Button } from 'antd'
import { UserOutlined } from '@ant-design/icons';


function Navbar() {
  return (
    <div className='nav'>
      <div className="navBox">
        <div className="nav-logo">
          <Link to='/'> <img src={logo}  alt="hisaBook logo" /></Link>
        </div>
        <div className="nav-items">
          <div className="nav-item">Home</div>
          <div className="nav-item">Pricing</div>
          <div className="nav-item">Contact</div>
          <div className="nav-item">About</div>
          <div className="nav-button">
          <Button type="dashed" ghost icon={<UserOutlined />} size={'large'}>
            Register/Login
          </Button>
          </div>
          <div className="nav-button"></div>

        </div>
      </div>
    </div>
  )
}

export default Navbar