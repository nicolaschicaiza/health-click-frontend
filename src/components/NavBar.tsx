import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Button, Col, Menu, Row } from 'antd';
import PerfilButton from './PerfilButton';
import SearchInput from './SearchInput';
import { useNavigate } from 'react-router';

const menuStyles: React.CSSProperties = {
  backgroundColor: "gray",
  borderRadius: '6px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)',
  padding: '5px 5px'
}


function NavBar() {
  const navigate = useNavigate();

  const limitNameLength = (name: string, maxLength: number) => {
    if (name.length > maxLength) {
      return name.slice(0, maxLength) + '...';
    }
    return name;
  }

  const limitedName = limitNameLength('Super Admin', 20);

  return (
    <Row justify={'center'} style={{
      position: 'fixed',
      bottom: 15,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '40%', /* Ajusta el porcentaje de ancho que desees */
    }} >
      <Col span={24}>
        <Menu style={menuStyles} theme={'dark'} mode={'horizontal'} >
          <Col span={24}>
            <Row justify={'space-between'} align={'middle'}>
              <Col span={16}>
                <Row justify={'start'}>
                  <Col span={4}>
                    <Button type={'link'} size={'large'} ghost style={{ color: 'white' }} onClick={() => {
                      navigate('/home');
                    }}>
                      <HomeOutlined />
                    </Button>
                  </Col>
                  <Col span={20}>
                    <Row align={'middle'}>
                      <SearchInput />
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col span={8}>
                <PerfilButton name={limitedName} />
              </Col>
            </Row>
          </Col>
        </Menu>
      </Col>
    </Row>
  );
}

export default NavBar;
