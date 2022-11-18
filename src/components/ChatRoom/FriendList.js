import React from 'react';
import { Button, Collapse, Typography } from 'antd';
import styled from 'styled-components';
import { AppContext } from '../../Context/AppProvider';

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
    &&& {
        .ant-collapse-header, p {
            color: white;
        }

        .ant-collapse-content-box {
            padding: 0 40px;
        }
    }
`;

const LinkStyled = styled(Typography.Link)`
    display: block;
    margin-bottom: 5px;
    color: white;
`;

export default function FriendList() {
    

  return (
    <Collapse ghost defaultActiveKey={['1']}>
        <PanelStyled header="Friends list" key='1'>
            <LinkStyled>Nhan</LinkStyled>
            <LinkStyled>Khoe</LinkStyled>
            <LinkStyled>Duc</LinkStyled>
        </PanelStyled>
    </Collapse>
  )
}
