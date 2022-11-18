import React from 'react';
import styled from 'styled-components';
import { Button, Avatar, Typography, Form, Input } from 'antd';

import Message from './Message'

const HeaderStyled = styled.div`
  display: flex;
  justify-content: spae-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);

  .header {
    &_info {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    &_name {
      margin-left: 5px;
      font-weight: bold;
    }

  }
`;

const WrappedStyled = styled.div`
  height: 100vh;
`;

const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

const FontStyled = styled(Form)`
  display:flex;
  justify-content: space-between;
  align-item: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 2px;

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

export default function Chatbox() {
  return (
    <WrappedStyled>
      <HeaderStyled>
        <div className="header_info">
          <Avatar src={"https://www.meme-arsenal.com/memes/25185370af88acb91c0992e195b9e4b4.jpg"} />
          <Typography.Text className='header_name'>Nhan</Typography.Text>
        </div>
      </HeaderStyled>
      <ContentStyled>
        <MessageListStyled>
          <Message text="Test" photoURL={null} name="Nhan" time={123131131331} />
          <Message text="Test" photoURL={null} name="Nhan" time={123131131331} />
          <Message text="Test" photoURL={null} name="Nhan" time={123131131331} />
          <Message text="Test" photoURL={null} name="Nhan" time={123131131331} />
        </MessageListStyled>
        <FontStyled>
          <Button type='primary'>f</Button>
          <Form.Item>
            <Input 
              placeholder="Enter the message..."
              bordered={false} 
              autoComplete='off'
            />
          </Form.Item>
          <Button type='primary'>Send</Button>
        </FontStyled>
      </ContentStyled>
    </WrappedStyled>
  )
}
