import React from 'react';
import { Row, Col, Card, Button, Space } from 'antd';
import { navigate } from '@reach/router';
import ToothIcon from '../customIcons/toothIcon';
import CalendarIcon from '../customIcons/calendarIcon';
import MoneyIcon from '../customIcons/moneyIcon';
import ClockIcon from '../customIcons/clockIcon';

const TabButton = (props) => {
  const icon = props.icon;
  let borderRadius = '0px';
  if (props.start) borderRadius = '0px 0px 0px 24px';
  if (props.end) borderRadius = '0px 0px 24px 0px';
  return (
    <Col span={6}>
      <Card
        style={{
          border: '1px',
          borderColor: '#2282B2',
          borderStyle: 'solid',
          backgroundColor: props.active ? '#67B2D6' : '#2282B2',
          borderRadius: borderRadius,
        }}
      >
        {icon}
      </Card>
    </Col>
  );
};

const SingleTooth = (props) => {
  let { toothId } = props;
  return (
    <Row style={{ height: '100vh' }} justify="center" align="middle">
      <Col>
        <Card
          style={{
            backgroundColor: '#053868',
            borderRadius: '24px 24px 0px 0px',
            border: '0px',
            minWidth: '400px',
          }}
        >
          <Row>
            <Col>
              <Button
                style={{
                  backgroundColor: '#A4C3E2',
                  borderRadius: '32px',
                  border: '0px',
                  color: '#FFF',
                }}
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
            </Col>
            <Col>
              <span
                className="my-font"
                style={{
                  color: '#FFF',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  marginLeft: '24px',
                  lineHeight: '58px',
                  fontSize: '48px',
                }}
              >
                Teeth # {toothId}
              </span>
            </Col>
          </Row>
          <Row justify="space-around">
            <Col span={12} style={{ color: '#FFF' }}>
              TODO
            </Col>
            <Col span={12}>
              <Space size="large" direction="vertical">
                <Button
                  style={{
                    backgroundColor: '#609CCC',
                    borderRadius: '12px',
                    border: '0px',
                    height: '60px',
                    width: '155px',
                  }}
                >
                  <span
                    className="my-font"
                    style={{
                      color: '#FFF',
                      fontSize: '32px',
                      lineHeight: '38px',
                    }}
                  >
                    Bleeding
                  </span>
                </Button>
                <Button
                  style={{
                    backgroundColor: '#609CCC',
                    borderRadius: '12px',
                    border: '0px',
                    height: '60px',
                    width: '155px',
                  }}
                >
                  <span
                    className="my-font"
                    style={{
                      color: '#FFF',
                      fontSize: '32px',
                      lineHeight: '38px',
                    }}
                  >
                    Ache
                  </span>
                </Button>
                <Button
                  style={{
                    backgroundColor: '#609CCC',
                    borderRadius: '12px',
                    border: '0px',
                    height: '60px',
                    width: '155px',
                  }}
                >
                  <span
                    className="my-font"
                    style={{
                      color: '#FFF',
                      fontSize: '32px',
                      lineHeight: '38px',
                    }}
                  >
                    Damage
                  </span>
                </Button>
                <Button
                  style={{
                    backgroundColor: '#609CCC',
                    borderRadius: '12px',
                    border: '0px',
                    height: '60px',
                    width: '155px',
                  }}
                >
                  <span
                    className="my-font"
                    style={{
                      color: '#FFF',
                      fontSize: '32px',
                      lineHeight: '38px',
                    }}
                  >
                    Caries
                  </span>
                </Button>
              </Space>
            </Col>
          </Row>
        </Card>
        <div
          style={{
            // backgroundColor: '#053868',
            borderRadius: '0px 0px 24px 24px',
            border: '0px',
            boxShadow: '0px 4px 12px 4px rgba(0,0,0,0.25)',
          }}
        >
          <Row width="100%">
            <TabButton
              start={true}
              active={true}
              icon={<ToothIcon style={{ color: '#fff', fontSize: '32px' }} />}
            />
            <TabButton
              icon={
                <CalendarIcon style={{ color: '#fff', fontSize: '32px' }} />
              }
            />
            <TabButton
              icon={<MoneyIcon style={{ color: '#fff', fontSize: '32px' }} />}
            />
            <TabButton
              end={true}
              icon={<ClockIcon style={{ color: '#fff', fontSize: '32px' }} />}
            />
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default SingleTooth;
