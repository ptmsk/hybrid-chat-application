import React from 'react';
import { Avatar, Typography } from 'antd';
import styled from 'styled-components';

const WrappedStyled = styled.div`
    margin-bottom: 10px;

    .author {
        margin-left: 5px;
        font-weight: bold;
    }

    .date {
        margin-left: 10px;
        font-size: 11px;
        color: #a7a7a7;
    }

    .content {
        margin-left: 30px;
    }
`;

export default function Message({ text, name, time, photoURL}) {
  return (
    <WrappedStyled>
        <div>
            <Avatar size={'small'} src={photoURL}>A</Avatar>
            <Typography.Text className='author'>{name}</Typography.Text>
            <Typography.Text className='date'>{time}</Typography.Text>
        </div>
        <div>
            <Typography.Text className='content'>{text}</Typography.Text>
        </div>
    </WrappedStyled>
  )
}
