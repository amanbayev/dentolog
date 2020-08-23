import React from 'react';
import { Card, Space, Button, Form, Input } from 'antd';
import { FacebookOutlined } from '@ant-design/icons';
import { navigate } from '@reach/router';

const Auth = () => {
  const onFormFinish = (values) => {
    console.log('success: ', values);
    navigate('/teeth');
  };

  return (
    <div style={{ width: '1000px', margin: '0 auto' }}>
      <Space
        style={{ height: '100vh', width: '1000px' }}
        size="0"
        align="center"
      >
        <Card
          style={{
            borderRadius: '30px 0 0 30px',
            borderStyle: 'none',
            height: '600px',
            width: '440px',
            backgroundColor: '#053868',
            padding: '0',
            margin: '0',
          }}
        >
          <center>
            <p
              className="my-font"
              style={{
                color: '#FFF',
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: '58px',
                fontSize: '48px',
              }}
            >
              Hello, Friend!
            </p>
            <p
              className="my-font"
              style={{
                color: '#FFF',
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: '38px',
                fontSize: '32px',
              }}
            >
              This is a project for nFactorial course - react track.
            </p>
          </center>
        </Card>
        <Card
          style={{
            borderRadius: '0 30px 30px 0',
            height: '600px',
            borderStyle: 'none',

            width: '560px',
            margin: '0',
          }}
        >
          <center>
            <p
              className="my-font"
              style={{
                color: '#053868',
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: '58px',
                fontSize: '48px',
              }}
            >
              Sign in to Dentolog
            </p>

            <Form onFinish={onFormFinish}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input valid email address',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your password',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <Button
                  htmlType="submit"
                  style={{
                    backgroundColor: '#053868',
                    color: '#FFF',
                    height: '57px',
                    padding: '0 32px',
                    borderRadius: '29px',
                  }}
                >
                  <span
                    className="my-font"
                    style={{
                      fontSize: '32px',
                      color: '#fff',
                    }}
                  >
                    Sign in
                  </span>
                </Button>
              </Form.Item>
            </Form>

            <Button
              style={{
                backgroundColor: '#053868',
                color: '#FFF',
                height: '57px',
                padding: '0 32px',
                borderRadius: '29px',
              }}
            >
              <span
                className="my-font"
                style={{
                  fontSize: '32px',
                  lineHeight: '38px',
                  color: '#fff',
                }}
              >
                <FacebookOutlined />
                &nbsp;&nbsp;Sign in via Facebook
              </span>
            </Button>
          </center>
        </Card>
      </Space>
    </div>
  );
};

export default Auth;
