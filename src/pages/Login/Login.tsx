import React from "react";
import { Button, Form, Input } from "antd";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const handleSubmit = (): void => {
    history.push("/");
  };
  return (
    <section className="auth">
      <div className="auth-left__content">
        <h4 className="auth__title">Login Account</h4>
        <Form
          layout="vertical"
          initialValues={{
            account: "admin@example.com",
            password: "123456",
          }}
          onFinish={handleSubmit}
        >
          <Form.Item label="Username/Email" name="account" required>
            <Input placeholder="Enter you're username or Email Address" />
          </Form.Item>
          <Form.Item label="Password" name="password" required>
            <Input type="password" placeholder="" />
          </Form.Item>
          <Button htmlType="submit" type="primary">
            Login
          </Button>
        </Form>
      </div>
      <div className="auth-right__content" />
    </section>
  );
};

export default Login;
