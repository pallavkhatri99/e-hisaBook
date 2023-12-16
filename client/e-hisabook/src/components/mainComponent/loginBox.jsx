import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
const LoginBox = () => {
  const [isLoginSuccess, isLoginSet] = useState(false);
  const navigate = useNavigate();
  const onFinish = (values) => {
   if(values.userID!="" && values.password!=""){
    isLoginSet(true)
    setTimeout(() => {
        navigate("/App");
    }, 3000);
    }
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      style={{maxWidth:300, margin:'50px auto'}}
    >
      <Form.Item
        name="userID"
        rules={[
          {
            required: true,
            message: 'Please input your UserID!',
          },
        ]}
      >
        <Input 
            size='large'
            prefix={<UserOutlined className="site-form-item-icon" />} 
            placeholder="Number or Email" 
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          size='large'
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      {isLoginSuccess ? <Alert style={{marginBottom:10}} message="Login SuccessFull" type="success" showIcon />:""}

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginBox;