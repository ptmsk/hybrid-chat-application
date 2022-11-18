import React from 'react'
import { Button, Avatar, Typography } from 'antd';
import styled from 'styled-components';
import { AppContext } from '../../Context/AppProvider';
import { useNavigate } from 'react-router-dom';


const WrappedStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid rgba(255, 255, 255);

    .username {
        color: white;
        margin-left: 5;
    }
`;

export default function UserInfo() {
  // const { setIsAddFriendVisible } = React.useContext(AppContext);
    // const handleAddFriend = () => {
        // setIsAddFriendVisible(true);
    // }

  const navigate = useNavigate();

  return (
    <WrappedStyled>
        <div>
            <Avatar src={""}>A</Avatar>
            <Typography.Text className='username'>THNH</Typography.Text>
        </div>

        {/* <Button type='text' className="add-friend" onClick={handleAddFriend} ghost>Add friend</Button> */}
        <Button className="add-friend" ghost>Add friend</Button>
        <Button ghost onClick={() => navigate('/') }>Log out</Button>
    </WrappedStyled>
  )
}