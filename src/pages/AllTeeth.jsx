import React from 'react';
import { Space, Card, Button } from 'antd';
import { navigate } from '@reach/router';

const AllTeeth = () => {
  const clickTooth = (number) => {
    // TODO: implement route to tooth page...
    console.log('tooth number ' + number + ' is clicked!');
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
    <div style={{ width: '1000px', margin: '0 auto' }}>
      <Space
        style={{ height: '100vh', width: '1000px' }}
        size="0"
        align="center"
      >
        <Card
          style={{
            width: '400px',
            height: '855px',
            backgroundColor: '#053868',
            boxShadow: '0px 4px 12px 5px rgba(0,0,0,0.25)',
            borderRadius: '24px',
            borderWidth: '0px',
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
              Talgat Amanbayev
            </p>
            <img src="/img/image 1.png" alt="avatar" />
            <p style={{ marginTop: '48px', color: '#FFF', fontSize: '24px' }}>
              ID: 870312 300561
            </p>
            <p style={{ color: '#FFF', fontSize: '24px' }}>
              <u>amanbayev@gmail.com</u>
            </p>
            <Button
              className="my-font"
              style={{
                color: '#FFF',
                height: '48px',
                backgroundColor: '#336699',
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: '36px',
                fontSize: '32px',
              }}
              onClick={() => navigate('/')}
            >
              Log out
            </Button>
          </center>
        </Card>
        <Card
          style={{
            width: '600px',
            height: '800px',
            backgroundColor: '#F8F8F8',
            borderRadius: '0 24px 24px 0',
            boxShadow: '0px 4px 12px 5px rgba(0,0,0,0.25)',
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
              Select tooth
            </p>
            <div style={{ width: '390px', height: '600px' }}>
              <img src="/img/image 2.png" alt="" useMap="#image_map" />
              <map name="image_map">
                {coordsArray.map((coord, index) => renderCoords(index, coord))}
              </map>
            </div>
          </center>
        </Card>
      </Space>
    </div>
  );
};

export default AllTeeth;
