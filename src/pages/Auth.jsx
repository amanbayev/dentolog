import React from 'react';
import { Card, Row, Col, Button, Form, Input } from 'antd';
import { FacebookOutlined } from '@ant-design/icons';
import { navigate } from '@reach/router';

const Auth = () => {
  const onFormFinish = (values) => {
    console.log('success: ', values);
    navigate('/teeth');
  };

  return (
    <Row style={{ height: '100vh' }} justify="center" align="middle">
      <Col>
        <Card
          style={{
            borderRadius: '30px',
            borderStyle: 'none',
            padding: '16px',
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
              Dentolog
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
                    borderRadius: '29px',
                  }}
                >
                  Sign in
                </Button>
              </Form.Item>
            </Form>

            <Button
              style={{
                backgroundColor: '#053868',
                color: '#FFF',
                borderRadius: '29px',
              }}
              icon={<FacebookOutlined />}
            >
              Sign in via Facebook
            </Button>
          </center>
        </Card>
      </Col>
    </Row>
  );
};

export default Auth;
