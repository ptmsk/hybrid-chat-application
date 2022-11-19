import '../../css/main.css';
import '../../css/util.css';

import React from 'react';
import { Row, Col } from 'antd';
import UserInfo from './UserInfo';
import FriendList from './FriendList';
import styled from 'styled-components';

const SidebarStyled = styled.div`
  background: #3f0e40;
  color: white;
  height: 100vh;
`;

export default function Sidebar({handleLogout}) {
  return (
    <div className=''>
      <Row>
        <Col span={24}><UserInfo handleLogout={handleLogout}/></Col>
        <Col span={24}><FriendList /></Col>
      </Row>
    </div>
  )
}
