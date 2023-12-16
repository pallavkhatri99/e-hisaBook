import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from "react-scroll";
import logo from'../../image/logo.png'
import '../../style/navbar.css'
import { Button, Modal } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import RegisterLogin from './registerOrLogin'
import RegisterOrLogin from './registerOrLogin'
import LoginBox from './loginBox'


function Navbar() {
  //declarations
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  
  //fucntions
  const registerCall = () => {
    setOpen(true);
  }
  const handleCancel = () => { setOpen(false); setOpenLogin(false); }
  const handleOk = () => { setOpen(false); setOpenLogin(false); }
  const login = () => { 
    setOpen(false);
    setOpenLogin(true);
  }
  const registerUser = () => {
    setOpenLogin(false);
    setOpen(true);
  }

  return (
    <div className="nav">
      <div className="navBox">
        <div className="nav-logo">
          <NavLink to='/'> <img src={logo}  alt="hisaBook logo" /></NavLink>
        </div>
        <div className="nav-items">
          <div className="nav-item">
            <Link 
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
                Home
            </Link>
          </div>
          <div className="nav-item">
          <Link 
              activeClass="active"
              to="features"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
                Features
            </Link>
          </div>
          <div className="nav-item">
          <Link 
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
                Pricing
            </Link>
          </div>
          <div className="nav-item">
          <Link 
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
                About
            </Link>
          </div>
          <div className="nav-button">
          <Button type="dashed" ghost icon={<UserOutlined />} size={'large'} onClick={registerCall}>
            Register/Login
          </Button>
          </div>
          <div className="nav-button"></div>
        </div>
      </div>
      <Modal
        title="Registeration"
        centered
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button type="primary" key="login" onClick={login}>
            Already have account
          </Button>,
        ]}
      >
        <RegisterOrLogin operation={open} setOpen={setOpen}/>
      </Modal>
      <Modal
        title="Login"
        centered
        open={openLogin}
        onOk={handleOk}
        onCancel={handleCancel}
        width={400}
        footer={[
          <Button type="primary" key="login" onClick={registerUser}>
            Create an account?
          </Button>,
        ]}
      >
        <LoginBox />
      </Modal>
    </div>
  )
}

export default Navbar