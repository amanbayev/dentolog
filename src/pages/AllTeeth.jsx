import React from 'react';
import { Row, Card, Col, Button } from 'antd';
import { navigate } from '@reach/router';

const AllTeeth = () => {
  const clickTooth = (number) => {
    // TODO: implement route to tooth page...
    console.log('tooth number ' + number + ' is clicked!');
    navigate(`/teeth/${number}`);
  };

  const coordsArray = [
    '64,277,24', //1
    '65,236,21',
    '71,197,19',
    '84,164,19',
    '100,132,18',
    '120,104,17',
    '141,82,17',
    '173,70,18',
    '211,68,18',
    '246,81,16', // 10
    '265,107,14',
    '281,133,18',
    '299,166,19',
    '310,200,19',
    '317,239,21',
    '313,277,18',
    '315,336,20',
    '317,374,20',
    '311,417,20',
    '295,456,20', //20
    '270,490,17',
    '251,516,14',
    '232,528,12',
    '207,535,11',
    '181,536,14',
    '155,531,12',
    '136,515,11',
    '116,492,18',
    '92,459,20',
    '75,420,20', //30
    '67,380,19',
    '70,337,22',
  ];

  const renderCoords = (position, coords) => {
    return (
      <area
        alt={position + 1}
        title={position + 1}
        key={'myMapCoordinate' + position}
        href="#"
        coords={coords}
        shape="circle"
        onClick={(e) => {
          e.preventDefault();
          clickTooth(position + 1);
        }}
      />
    );
  };

  return (
    <Row style={{ height: '100vh' }} align="middle" justify="center">
      <Col>
        <Card
          style={{
            backgroundColor: '#F8F8F8',
            borderRadius: '24px',
            margin: '16px',
            boxShadow: '0px 4px 12px 4px rgba(0,0,0,0.25)',
          }}
        >
          <Button onClick={() => navigate('/')}>Back</Button>
          <span
            className="my-font"
            style={{
              color: '#053868',
              fontStyle: 'normal',
              fontWeight: 'bold',
              marginLeft: '24px',
              lineHeight: '58px',
              fontSize: '48px',
            }}
          >
            Select tooth
          </span>

          <div style={{ width: '390px', height: '600px' }}>
            <img src="/img/image 2.png" alt="" useMap="#image_map" />
            <map name="image_map">
              {coordsArray.map((coord, index) => renderCoords(index, coord))}
            </map>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default AllTeeth;
